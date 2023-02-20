"use strict";
(() => {
var exports = {};
exports.id = 945;
exports.ids = [945];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 278:
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
    if (req.method === "POST") {
        const { adsoyad  } = req.query;
        const { telefon  } = req.query;
        const { adres  } = req.query;
        const { konu  } = req.query;
        const { tarih  } = req.query;
        const { aciklama  } = req.query;
        const { meslek  } = req.query;
        const { isyeri  } = req.query;
        const { durum  } = req.query;
        console.log(adsoyad);
        console.log(telefon);
        console.log(adres);
        console.log(konu);
        console.log(tarih);
        console.log(aciklama);
        if (durum === "tamamla") {
            const { getir  } = req.query;
            const { kapatan  } = req.query;
            const { kapatanaciklama  } = req.query;
            const { kapatmatarihi  } = req.query;
            const result = await prisma.$queryRaw`UPDATE destekal set durum="tamamlandı",kapatan=${kapatan},kapatanaciklama=${kapatanaciklama},kapandı=1,kapatmatarihi=${kapatmatarihi} where id=${getir}`;
            res.status(200).json(result);
        } else {
            try {
                const result = await prisma.$queryRaw`INSERT INTO destekol (adsoyad,telefon,adres,konu,tarih,aciklama,meslek,isyeri) VALUES (${adsoyad},${telefon},${adres},${konu},${tarih},${aciklama},${meslek},${isyeri})`;
                console.log("yeni destek al talebi eklendi");
                res.status(200).json(result);
            } catch (err) {
                console.log(err);
                res.status(403).json({
                    err: "Error occured."
                });
            }
        }
    } else if (req.method === "GET") {
        const { getir  } = req.query;
        const { durum  } = req.query;
        if (durum === "sil") {
            const result = await prisma.$queryRaw`SELECT * FROM destekol where id=${getir}`;
            res.status(200).json(result);
            console.log(result);
        } else {
            const result = await prisma.$queryRaw`SELECT * FROM destekol=${getir}`;
            res.status(200).json(result);
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
var __webpack_exports__ = (__webpack_exec__(278));
module.exports = __webpack_exports__;

})();