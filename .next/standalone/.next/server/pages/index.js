"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_page),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "util"
const external_util_namespaceObject = require("util");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(725);
;// CONCATENATED MODULE: ./pages/index.page.tsx






const { DirectoryTree  } = external_antd_.Tree;
async function generateTree(root) {
    var filesNameArr = [];
    let cur = 0;
    // 用个hash队列保存每个目录的深度
    var mapDeep = {};
    mapDeep[root] = 0;
    // 先遍历一遍给其建立深度索引
    async function getMap(dir, curIndex) {
        var files = await (0,external_util_namespaceObject.promisify)((external_fs_default()).readdir)(dir); //同步拿到文件目录下的所有文件名
        for (const file of files){
            //var subPath = path.resolve(dir, file) //拼接为绝对路径
            var subPath = external_path_default().join(dir, file); //拼接为相对路径
            var stats = await (0,external_util_namespaceObject.promisify)((external_fs_default()).stat)(subPath); //拿到文件信息对象
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
    async function readdirs(dir, folderName, myroot) {
        var result = {
            //构造文件夹数据
            path: dir,
            key: dir.replace(root, ""),
            title: external_path_default().basename(dir),
            type: "directory",
            deep: mapDeep[folderName]
        };
        var files = await (0,external_util_namespaceObject.promisify)((external_fs_default()).readdir)(dir); //同步拿到文件目录下的所有文件名
        result.children = [];
        for(let index = 0; index < files.length; index++){
            const file = files[index];
            //var subPath = path.resolve(dir, file) //拼接为绝对路径
            var subPath = external_path_default().join(dir, file); //拼接为相对路径
            var stats = await (0,external_util_namespaceObject.promisify)((external_fs_default()).stat)(subPath); //拿到文件信息对象
            if (stats.isDirectory()) {
                //判断是否为文件夹类型
                result.children[index] = await readdirs(subPath, file, file); //递归读取文件夹
            } else {
                result.children[index] = {
                    //构造文件数据
                    path: subPath,
                    key: subPath.replace(root, ""),
                    title: file,
                    type: "file"
                };
            }
        }
        return result; //返回数据
    }
    filesNameArr.push(await readdirs(root, root));
    return filesNameArr;
}
const getServerSideProps = async function(context) {
    const dir = external_path_default().resolve("algorithm");
    const treeData = await generateTree(dir);
    return {
        props: {
            ready: true,
            treeData
        }
    };
};
const Home = ({ treeData  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex",
        children: /*#__PURE__*/ jsx_runtime_.jsx(DirectoryTree, {
            defaultExpandAll: true,
            treeData: treeData,
            onSelect: (_, { node  })=>{
                const { key , type  } = node;
                if (type === "file") {
                    router.push(key);
                }
            }
        })
    });
};
/* harmony default export */ const index_page = (Home);


/***/ }),

/***/ 725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(219));
module.exports = __webpack_exports__;

})();