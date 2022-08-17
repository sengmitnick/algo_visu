(() => {
var exports = {};
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 289:
/***/ ((module) => {

// Exports
module.exports = {
	"themeDark": "#242424",
	"themeNormal": "#393939",
	"themeLight": "#505050",
	"colorFont": "#bbb",
	"colorShadow": "rgba(0,0,0,.2)",
	"colorOverlay": "rgba(255,255,255,.1)",
	"colorAlert": "#f3bd58",
	"colorSelected": "#2962ff",
	"colorPatched": "#c51162",
	"colorHighlight": "#29d",
	"colorActive": "#00e676",
	"lineHeight": "32px",
	"fontSizeNormal": "12px",
	"fontSizeLarge": "14px",
	"progress_bar": "ProgressBar_progress_bar__g6_M_",
	"active": "ProgressBar_active__heoKy",
	"label": "ProgressBar_label__Qik85",
	"current": "ProgressBar_current__99_ZT"
};


/***/ }),

/***/ 880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _filename_page),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: external "ahooks"
const external_ahooks_namespaceObject = require("ahooks");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./apis/index.ts

const request = external_axios_default().create();
const AlgorithmApi = {
    getCategories: ()=>request.get("/api/algorithms"),
    getAlgorithm: (categoryKey, algorithmKey, fileName)=>request.get(`/api/algorithms/${categoryKey}/${algorithmKey}/${fileName}`)
};
const TracerApi = {
    js: ({ code  }, cancelToken)=>new Promise((resolve, reject)=>{
            const worker = new Worker("/tracers/js/worker.js");
            if (cancelToken) {
                cancelToken.promise.then((cancel)=>{
                    worker.terminate();
                    reject(cancel);
                });
            }
            worker.onmessage = (e)=>{
                worker.terminate();
                resolve(e.data);
            };
            worker.onerror = (error)=>{
                worker.terminate();
                reject(error);
            };
            worker.postMessage(code);
        })
};


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.2.5_ivfob5dyaiglqb5g2zdrumbbbm/node_modules/next/dynamic.js
var dynamic = __webpack_require__(500);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/Divider/index.js




class Divider_Divider extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }
    handleMouseDown(e) {
        this.target = e.target;
        document.addEventListener("mousemove", this.handleMouseMove);
        document.addEventListener("mouseup", this.handleMouseUp);
    }
    handleMouseMove(e) {
        const { onResize  } = this.props;
        if (onResize) onResize(this.target.parentElement, e.clientX, e.clientY);
    }
    handleMouseUp(e) {
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
    }
    render() {
        const { className , horizontal  } = this.props;
        return /*#__PURE__*/ _jsx("div", {
            className: classes(styles.divider, horizontal ? styles.horizontal : styles.vertical, className),
            onMouseDown: this.handleMouseDown
        });
    }
}
/* harmony default export */ const components_Divider = ((/* unused pure expression or super */ null && (Divider_Divider)));

;// CONCATENATED MODULE: ./components/Ellipsis/index.js




class Ellipsis extends (external_react_default()).Component {
    render() {
        const { className , children  } = this.props;
        return /*#__PURE__*/ _jsx("span", {
            className: classes(styles.ellipsis, className),
            children: children
        });
    }
}
/* harmony default export */ const components_Ellipsis = ((/* unused pure expression or super */ null && (Ellipsis)));

;// CONCATENATED MODULE: ./common/util.js
const util_classes = (...arr)=>arr.filter((v)=>v).join(" ");
const distance = (a, b)=>{
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
};
const extension = (fileName)=>/(?:\.([^.]+))?$/.exec(fileName)[1];
const refineGist = (gist)=>{
    const gistId = gist.id;
    const title = gist.description;
    delete gist.files["algorithm-visualizer"];
    const { login , avatar_url  } = gist.owner;
    const files = Object.values(gist.files).map((file)=>({
            name: file.filename,
            content: file.content,
            contributors: [
                {
                    login,
                    avatar_url
                }
            ]
        }));
    return {
        login,
        gistId,
        title,
        files
    };
};
const createFile = (name, content, contributors)=>({
        name,
        content,
        contributors
    });
const createProjectFile = (name, content)=>createFile(name, content, [
        {
            login: "algorithm-visualizer",
            avatar_url: "https://github.com/algorithm-visualizer.png"
        }
    ]);
const createUserFile = (name, content)=>createFile(name, content, undefined);
const isSaved = ({ titles , files , lastTitles , lastFiles  })=>{
    const serialize = (titles, files)=>JSON.stringify({
            titles,
            files: files.map(({ name , content  })=>({
                    name,
                    content
                }))
        });
    return serialize(titles, files) === serialize(lastTitles, lastFiles);
};


// EXTERNAL MODULE: ./components/ProgressBar/ProgressBar.module.scss
var ProgressBar_module = __webpack_require__(289);
var ProgressBar_module_default = /*#__PURE__*/__webpack_require__.n(ProgressBar_module);
;// CONCATENATED MODULE: ./components/ProgressBar/index.js




class ProgressBar extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }
    handleMouseDown(e) {
        this.target = e.target;
        this.handleMouseMove(e);
        document.addEventListener("mousemove", this.handleMouseMove);
        document.addEventListener("mouseup", this.handleMouseUp);
    }
    handleMouseMove(e) {
        const { left  } = this.target.getBoundingClientRect();
        const { offsetWidth  } = this.target;
        const { onChangeProgress  } = this.props;
        const progress = (e.clientX - left) / offsetWidth;
        if (onChangeProgress) onChangeProgress(progress);
    }
    handleMouseUp(e) {
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
    }
    render() {
        const { className , total , current  } = this.props;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: util_classes((ProgressBar_module_default()).progress_bar, className),
            onMouseDown: this.handleMouseDown,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ProgressBar_module_default()).active,
                    style: {
                        width: `${current / total * 100}%`
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ProgressBar_module_default()).label,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (ProgressBar_module_default()).current,
                            children: current
                        }),
                        " / ",
                        total
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const components_ProgressBar = (ProgressBar);

;// CONCATENATED MODULE: ./components/BaseComponent/index.tsx

class BaseComponent extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.handleError = this.handleError.bind(this);
    }
    handleError(error) {
        if (error.response) {
            const { data , statusText  } = error.response;
            const message = data ? typeof data === "string" ? data : JSON.stringify(data) : statusText;
            console.error(message);
        // this.props.showErrorToast(message);
        } else {
            console.error(error.message);
        // this.props.showErrorToast(error.message);
        }
    }
}
/* harmony default export */ const components_BaseComponent = ((/* unused pure expression or super */ null && (BaseComponent)));

;// CONCATENATED MODULE: ./components/ResizableContainer/index.js





class ResizableContainer extends (external_react_default()).Component {
    handleResize(prevIndex, index, targetElement, clientX, clientY) {
        const { horizontal , visibles , onChangeWeights  } = this.props;
        const weights = [
            ...this.props.weights
        ];
        const { left , top  } = targetElement.getBoundingClientRect();
        const { offsetWidth , offsetHeight  } = targetElement.parentElement;
        const position = horizontal ? clientX - left : clientY - top;
        const containerSize = horizontal ? offsetWidth : offsetHeight;
        let totalWeight = 0;
        let subtotalWeight = 0;
        weights.forEach((weight, i)=>{
            if (visibles && !visibles[i]) return;
            totalWeight += weight;
            if (i < index) subtotalWeight += weight;
        });
        const newWeight = position / containerSize * totalWeight;
        let deltaWeight = newWeight - subtotalWeight;
        deltaWeight = Math.max(deltaWeight, -weights[prevIndex]);
        deltaWeight = Math.min(deltaWeight, weights[index]);
        weights[prevIndex] += deltaWeight;
        weights[index] -= deltaWeight;
        onChangeWeights(weights);
    }
    render() {
        const { className , children , horizontal , weights , visibles  } = this.props;
        const elements = [];
        let lastIndex = -1;
        const totalWeight = weights.filter((weight, i)=>!visibles || visibles[i]).reduce((sumWeight, weight)=>sumWeight + weight, 0);
        children.forEach((child, i)=>{
            if (!visibles || visibles[i]) {
                if (~lastIndex) {
                    const prevIndex = lastIndex;
                    elements.push(/*#__PURE__*/ _jsx(Divider, {
                        horizontal: horizontal,
                        onResize: (target, dx, dy)=>this.handleResize(prevIndex, i, target, dx, dy)
                    }, `divider-${i}`));
                }
                elements.push(/*#__PURE__*/ _jsx("div", {
                    className: classes(styles.wrapper),
                    style: {
                        flexGrow: weights[i] / totalWeight
                    },
                    children: child
                }, i));
                lastIndex = i;
            }
        });
        return /*#__PURE__*/ _jsx("div", {
            className: classes(styles.resizable_container, horizontal && styles.horizontal, className),
            children: elements
        });
    }
}
/* harmony default export */ const components_ResizableContainer = ((/* unused pure expression or super */ null && (ResizableContainer)));

;// CONCATENATED MODULE: ./components/index.ts






const VisualizationViewer = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/index.ts -> " + "./VisualizationViewer"
        ]
    },
    ssr: false
});

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(725);
;// CONCATENATED MODULE: external "@ant-design/icons"
const icons_namespaceObject = require("@ant-design/icons");
;// CONCATENATED MODULE: ./pages/[category]/[algorithm]/[filename].page.tsx









const getServerSideProps = async function(context) {
    return {
        props: {
            ready: true
        }
    };
};
const Index = ()=>{
    const router = (0,router_.useRouter)();
    const { 0: speed , 1: setSpeed  } = (0,external_react_.useState)(2);
    const [cursor, setCursor, getCursor] = (0,external_ahooks_namespaceObject.useGetState)(0);
    const { 0: chunks , 1: setChunks  } = (0,external_react_.useState)([]);
    const [playing, { set  }] = (0,external_ahooks_namespaceObject.useBoolean)();
    const timerRef = (0,external_react_.useRef)();
    const tracerApiSourceRef = (0,external_react_.useRef)();
    const { category , algorithm , filename  } = router.query;
    const req = (0,external_ahooks_namespaceObject.useRequest)(async ()=>{
        reset();
        if (tracerApiSourceRef.current) tracerApiSourceRef.current.cancel();
        tracerApiSourceRef.current = external_axios_default().CancelToken.source();
        const res = await AlgorithmApi.getAlgorithm(category, algorithm, filename);
        const code = res.data.file;
        const commands = await TracerApi.js({
            code
        }, tracerApiSourceRef.current.token);
        reset(commands);
        setTimeout(next, 66);
        return commands;
    }, {
        manual: true
    });
    const reset = (commands = [])=>{
        const chunks = [
            {
                commands: [],
                lineNumber: undefined
            }, 
        ];
        while(commands.length){
            const command = commands.shift();
            const { key , method , args  } = command;
            if (key === null && method === "delay") {
                const [lineNumber] = args;
                chunks[chunks.length - 1].lineNumber = lineNumber;
                chunks.push({
                    commands: [],
                    lineNumber: undefined
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
    const isValidCursor = (cursor)=>{
        return 1 <= cursor && cursor <= chunks.length;
    };
    const prev = ()=>{
        pause();
        const cursor = getCursor() - 1;
        if (!isValidCursor(cursor)) return false;
        setCursor(cursor);
        return true;
    };
    const resume = (wrap = false)=>{
        pause();
        if (next() || wrap && setCursor(1)) {
            const interval = 4000 / Math.pow(Math.E, speed);
            timerRef.current = setTimeout(()=>resume(), interval);
            set(true);
        }
    };
    const pause = ()=>{
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = undefined;
            set(false);
        }
    };
    const next = ()=>{
        pause();
        const cursor = getCursor() + 1;
        if (!isValidCursor(cursor)) return false;
        setCursor(cursor);
        return true;
    };
    const onChangeProgress = (progress)=>{
        const cursor = Math.max(1, Math.min(chunks.length, Math.round(progress * chunks.length)));
        pause();
        setCursor(cursor);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col h-screen",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        onClick: ()=>router.replace("/"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.HomeOutlined, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.ToolOutlined, {}),
                        loading: req.loading,
                        disabled: req.loading,
                        onClick: req.run,
                        children: req.loading ? "Building" : "Build"
                    }),
                    playing ? /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.PauseCircleOutlined, {}),
                        onClick: pause,
                        children: "Pause"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.PlayCircleOutlined, {}),
                        onClick: ()=>resume(true),
                        children: "Play"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        disabled: !isValidCursor(cursor - 1),
                        onClick: prev,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.LeftOutlined, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_ProgressBar, {
                        className: "w-40",
                        current: cursor,
                        total: chunks.length,
                        onChangeProgress: onChangeProgress
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        disabled: !isValidCursor(cursor + 1),
                        onClick: next,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.RightOutlined, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center w-40 px-3",
                        children: [
                            "Speed",
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Slider, {
                                className: "flex-1",
                                min: 0,
                                max: 4,
                                step: 0.5,
                                value: speed,
                                onChange: setSpeed
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(VisualizationViewer, {
                player: {
                    cursor,
                    chunks
                }
            })
        ]
    });
};
/* harmony default export */ const _filename_page = (Index);


/***/ }),

/***/ 725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [500], () => (__webpack_exec__(880)));
module.exports = __webpack_exports__;

})();