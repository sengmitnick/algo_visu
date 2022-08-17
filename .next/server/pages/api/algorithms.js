"use strict";
(() => {
var exports = {};
exports.id = 847;
exports.ids = [847];
exports.modules = {

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(837);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(657);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




async function generateTree(root) {
    var filesNameArr = [];
    let cur = 0;
    // 用个hash队列保存每个目录的深度
    var mapDeep = {};
    mapDeep[root] = 0;
    // 先遍历一遍给其建立深度索引
    async function getMap(dir, curIndex) {
        var files = await (0,util__WEBPACK_IMPORTED_MODULE_2__.promisify)((fs__WEBPACK_IMPORTED_MODULE_0___default().readdir))(dir); //同步拿到文件目录下的所有文件名
        for (const file of files){
            //var subPath = path.resolve(dir, file) //拼接为绝对路径
            var subPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(dir, file); //拼接为相对路径
            var stats = await (0,util__WEBPACK_IMPORTED_MODULE_2__.promisify)((fs__WEBPACK_IMPORTED_MODULE_0___default().stat))(subPath); //拿到文件信息对象
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
            title: path__WEBPACK_IMPORTED_MODULE_1___default().basename(dir),
            type: "directory",
            deep: mapDeep[folderName]
        };
        var files = await (0,util__WEBPACK_IMPORTED_MODULE_2__.promisify)((fs__WEBPACK_IMPORTED_MODULE_0___default().readdir))(dir); //同步拿到文件目录下的所有文件名
        result.children = [];
        for(let index = 0; index < files.length; index++){
            const file = files[index];
            //var subPath = path.resolve(dir, file) //拼接为绝对路径
            var subPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(dir, file); //拼接为相对路径
            var stats = await (0,util__WEBPACK_IMPORTED_MODULE_2__.promisify)((fs__WEBPACK_IMPORTED_MODULE_0___default().stat))(subPath); //拿到文件信息对象
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
async function handler(_, res) {
    try {
        const dir = path__WEBPACK_IMPORTED_MODULE_1___default().resolve("algorithm");
        const tree = await generateTree(dir);
        res.status(200).json({
            tree
        });
    } catch (error) {
        res.status(404).json({
            error: (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .errorToJSON */ .L)(error)
        });
        return;
    }
};


/***/ }),

/***/ 657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ errorToJSON)
/* harmony export */ });
function errorToJSON(error) {
    return {
        ...JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)))
    };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(661));
module.exports = __webpack_exports__;

})();