import fs from "fs";
import path from "path";
import { promisify } from "util";
import { useRouter } from "next/router";
import { Tree } from "antd";
import { GetServerSideProps } from "next";

const { DirectoryTree } = Tree;

async function generateTree(root: string) {
  var filesNameArr = [];
  let cur = 0;
  // 用个hash队列保存每个目录的深度
  var mapDeep: any = {};
  mapDeep[root] = 0;
  // 先遍历一遍给其建立深度索引
  async function getMap(dir: any, curIndex: any) {
    var files: any[] = await promisify(fs.readdir)(dir); //同步拿到文件目录下的所有文件名
    for (const file of files) {
      //var subPath = path.resolve(dir, file) //拼接为绝对路径
      var subPath = path.join(dir, file); //拼接为相对路径
      var stats = await promisify(fs.stat)(subPath); //拿到文件信息对象
      // 必须过滤掉node_modules文件夹
      if (file != "node_modules") {
        mapDeep[file] = curIndex + 1;
        if (stats.isDirectory()) {
          //判断是否为文件夹类型
          await getMap(subPath, mapDeep[file]); //递归读取文件夹
        }
      }
    }
  }
  await getMap(root, mapDeep[root]);
  async function readdirs(dir: string, folderName: any, myroot?: any) {
    var result: any = {
      //构造文件夹数据
      path: dir,
      key: dir.replace(root, ""),
      title: path.basename(dir),
      type: "directory",
      deep: mapDeep[folderName],
    };
    var files = await promisify(fs.readdir)(dir); //同步拿到文件目录下的所有文件名
    result.children = [];
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      //var subPath = path.resolve(dir, file) //拼接为绝对路径
      var subPath = path.join(dir, file); //拼接为相对路径
      var stats = await promisify(fs.stat)(subPath); //拿到文件信息对象
      if (stats.isDirectory()) {
        //判断是否为文件夹类型
        result.children[index] = await readdirs(subPath, file, file); //递归读取文件夹
      } else {
        result.children[index] = {
          //构造文件数据
          path: subPath,
          key: subPath.replace(root, ""),
          title: file,
          type: "file",
        };
      }
    }
    return result; //返回数据
  }
  filesNameArr.push(await readdirs(root, root));
  return filesNameArr;
}

export const getServerSideProps: GetServerSideProps = async function (context) {
  const dir = path.resolve("algorithm");
  const treeData = await generateTree(dir);
  return {
    props: { ready: true, treeData }, // will be passed to the page component as props
  };
};

const Home = ({ treeData }: any) => {
  const router = useRouter();

  return (
    <div className="flex">
      <DirectoryTree
        defaultExpandAll
        treeData={treeData}
        onSelect={(_, { node }) => {
          const { key, type } = node as any;
          if (type === "file") {
            router.push(key);
          }
        }}
      ></DirectoryTree>
    </div>
  );
};

export default Home;
