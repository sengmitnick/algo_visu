import { useRouter } from "next/router";
import { useBoolean, useGetState, useRequest } from "ahooks";
import { AlgorithmApi, TracerApi } from "apis";
import { GetServerSideProps } from "next";
import { useRef, useState } from "react";
import axios, { CancelTokenSource } from "axios";
import { ProgressBar, VisualizationViewer } from "components";
import { Button, Slider } from "antd";
import {
  HomeOutlined,
  LeftOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  RightOutlined,
  ToolOutlined,
} from "@ant-design/icons";

export const getServerSideProps: GetServerSideProps = async function (context) {
  return {
    props: { ready: true }, // will be passed to the page component as props
  };
};

const Index = () => {
  const router = useRouter();
  const [speed, setSpeed] = useState(2);
  const [cursor, setCursor, getCursor] = useGetState(0);
  const [chunks, setChunks] = useState<any[]>([]);
  const [playing, { set }] = useBoolean();
  const timerRef = useRef<NodeJS.Timeout>();
  const tracerApiSourceRef = useRef<CancelTokenSource>();
  const { category, algorithm, filename } = router.query as Record<
    string,
    string
  >;

  const req = useRequest(
    async () => {
      reset();
      if (tracerApiSourceRef.current) tracerApiSourceRef.current.cancel();
      tracerApiSourceRef.current = axios.CancelToken.source();
      const res = await AlgorithmApi.getAlgorithm(
        category,
        algorithm,
        filename
      );
      const code = res.data.file as string;
      const commands = await TracerApi.js(
        { code },
        tracerApiSourceRef.current.token
      );
      reset(commands);
      setTimeout(next, 66);
      return commands;
    },
    { manual: true }
  );

  const reset = (commands: any[] = []) => {
    const chunks: any[] = [
      {
        commands: [],
        lineNumber: undefined,
      },
    ];
    while (commands.length) {
      const command = commands.shift();
      const { key, method, args } = command;
      if (key === null && method === "delay") {
        const [lineNumber] = args;
        chunks[chunks.length - 1].lineNumber = lineNumber;
        chunks.push({
          commands: [],
          lineNumber: undefined,
        });
      } else {
        chunks[chunks.length - 1].commands.push(command);
      }
    }
    setChunks(chunks);
    setCursor(0);
    // setLineIndicator(undefined);
    pause();
  };

  const isValidCursor = (cursor: number) => {
    return 1 <= cursor && cursor <= chunks.length;
  };

  const prev = () => {
    pause();
    const cursor = getCursor() - 1;
    if (!isValidCursor(cursor)) return false;
    setCursor(cursor);
    return true;
  };

  const resume = (wrap = false) => {
    pause();
    if (next() || (wrap && setCursor(1))) {
      const interval = 4000 / Math.pow(Math.E, speed);
      timerRef.current = setTimeout(() => resume(), interval);
      set(true);
    }
  };

  const pause = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
      set(false);
    }
  };

  const next = () => {
    pause();
    const cursor = getCursor() + 1;
    if (!isValidCursor(cursor)) return false;
    setCursor(cursor);
    return true;
  };

  const onChangeProgress = (progress: number) => {
    const cursor = Math.max(
      1,
      Math.min(chunks.length, Math.round(progress * chunks.length))
    );
    pause();
    setCursor(cursor);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        <Button onClick={() => router.replace("/")}>
          <HomeOutlined />
        </Button>
        <Button
          icon={<ToolOutlined />}
          loading={req.loading}
          disabled={req.loading}
          onClick={req.run}
        >
          {req.loading ? "Building" : "Build"}
        </Button>
        {playing ? (
          <Button icon={<PauseCircleOutlined />} onClick={pause}>
            Pause
          </Button>
        ) : (
          <Button icon={<PlayCircleOutlined />} onClick={() => resume(true)}>
            Play
          </Button>
        )}
        <Button disabled={!isValidCursor(cursor - 1)} onClick={prev}>
          <LeftOutlined />
        </Button>
        <ProgressBar
          className="w-40"
          current={cursor}
          total={chunks.length}
          onChangeProgress={onChangeProgress}
        />
        <Button disabled={!isValidCursor(cursor + 1)} onClick={next}>
          <RightOutlined />
        </Button>
        <div className="flex items-center w-40 px-3">
          Speed
          <Slider
            className="flex-1"
            min={0}
            max={4}
            step={0.5}
            value={speed}
            onChange={setSpeed}
          />
        </div>
      </div>
      <VisualizationViewer player={{ cursor, chunks }} />
    </div>
  );
};

export default Index;
