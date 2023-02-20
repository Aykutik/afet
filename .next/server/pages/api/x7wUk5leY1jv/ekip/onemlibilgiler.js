"use strict";
(() => {
var exports = {};
exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 3957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable import/no-anonymous-default-export */ 
const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    if (req.method === "GET") {
        const { getir  } = req.query;
        if (getir === "telefon") {
            const result = await prisma.$queryRaw`SELECT * FROM bilgi_telefon where onay=1`;
            res.status(200).json(result);
        } else if (getir === "web") {
            const result = await prisma.$queryRaw`SELECT * FROM bilgi_web where onay=1`;
            res.status(200).json(result);
        }
    } else if (req.method === "POST") {
        const { getir  } = req.query;
        if (getir === "telefon") {
            const { birim  } = req.query;
            const { telefon  } = req.query;
            const { aciklama  } = req.query;
            const { ekleyen  } = req.query;
            const { eklenmetarihi  } = req.query;
            try {
                const result = await prisma.$queryRaw`INSERT INTO bilgi_telefon (birim,telefon,aciklama,ekleyen,eklenmetarihi) VALUES (${birim},${telefon},${aciklama},${ekleyen},${eklenmetarihi})`;
                res.status(200).json(result);
            } catch (err) {
                console.log(err);
                res.status(403).json({
                    err: "Error occured."
                });
            }
        } else if (getir === "web") {
            const { birim  } = req.query;
            const { web  } = req.query;
            const { aciklama  } = req.query;
            const { ekleyen  } = req.query;
            const { eklenmetarihi  } = req.query;
            try {
                const result = await prisma.$queryRaw`INSERT INTO bilgi_web (birim,web,aciklama,ekleyen,eklenmetarihi) VALUES (${birim},${web},${aciklama},${ekleyen},${eklenmetarihi})`;
                res.status(200).json(result);
            } catch (err) {
                console.log(err);
                res.status(403).json({
                    err: "Error occured."
                });
            }
        }
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3957));
module.exports = __webpack_exports__;

})();