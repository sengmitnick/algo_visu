"use strict";
(() => {
var exports = {};
exports.id = 889;
exports.ids = [889];
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

/***/ 846:
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




async function handler(req, res) {
    const { category , algorithm , filename  } = req.query;
    let content = "";
    try {
        const dir = path__WEBPACK_IMPORTED_MODULE_1___default().resolve("algorithm");
        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(dir, category, algorithm, filename);
        content = await (0,util__WEBPACK_IMPORTED_MODULE_2__.promisify)((fs__WEBPACK_IMPORTED_MODULE_0___default().readFile))(filePath, {
            encoding: "utf-8"
        });
    } catch (error) {
        res.status(404).json({
            error: (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .errorToJSON */ .L)(error)
        });
        return;
    }
    res.status(200).json({
        file: content
    });
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
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(846));
module.exports = __webpack_exports__;

})();