"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/x7wUk5leY1jv/ekip/destekal";
exports.ids = ["pages/api/x7wUk5leY1jv/ekip/destekal"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/x7wUk5leY1jv/ekip/destekal.js":
/*!*************************************************!*\
  !*** ./pages/api/x7wUk5leY1jv/ekip/destekal.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable import/no-anonymous-default-export */ \nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { adsoyad  } = req.query;\n        const { telefon  } = req.query;\n        const { adres  } = req.query;\n        const { konu  } = req.query;\n        const { tarih  } = req.query;\n        const { aciklama  } = req.query;\n        const { meslek  } = req.query;\n        const { isyeri  } = req.query;\n        console.log(adsoyad);\n        console.log(telefon);\n        console.log(adres);\n        console.log(konu);\n        console.log(tarih);\n        console.log(aciklama);\n        try {\n            const result = await prisma.$queryRaw`INSERT INTO destekol (adsoyad,telefon,adres,konu,tarih,aciklama,meslek,isyeri) VALUES (${adsoyad},${telefon},${adres},${konu},${tarih},${aciklama},${meslek},${isyeri})`;\n            console.log(\"yeni destek al talebi eklendi\");\n            res.status(200).json(result);\n        } catch (err) {\n            console.log(err);\n            res.status(403).json({\n                err: \"Error occured.\"\n            });\n        }\n    } else if (req.method === \"GET\") {\n        const { getir  } = req.query;\n        const { durum  } = req.query;\n        console.log(\"getir\");\n        console.log(getir);\n        console.log(\"durum\");\n        console.log(durum);\n        if (durum === \"genel\") {\n            const result = await prisma.$queryRaw`SELECT * FROM destekal`;\n            res.status(200).json(result);\n        } else if (durum === \"id\") {\n            const result = await prisma.$queryRaw`SELECT * FROM destekal where id=${getir}`;\n            res.status(200).json(result);\n            console.log(result);\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkveDd3VWs1bGVZMWp2L2VraXAvZGVzdGVrYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscURBQXFELEdBQ1A7QUFFOUMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUE7QUFFL0IsaUVBQWUsT0FBT0UsS0FBS0MsTUFBUTtJQUNqQyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHSCxJQUFJSSxLQUFLO1FBQzdCLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdMLElBQUlJLEtBQUs7UUFDN0IsTUFBTSxFQUFFRSxNQUFLLEVBQUUsR0FBR04sSUFBSUksS0FBSztRQUMzQixNQUFNLEVBQUVHLEtBQUksRUFBRSxHQUFHUCxJQUFJSSxLQUFLO1FBQzFCLE1BQU0sRUFBRUksTUFBSyxFQUFFLEdBQUdSLElBQUlJLEtBQUs7UUFDM0IsTUFBTSxFQUFFSyxTQUFRLEVBQUUsR0FBR1QsSUFBSUksS0FBSztRQUM5QixNQUFNLEVBQUVNLE9BQU0sRUFBRSxHQUFHVixJQUFJSSxLQUFLO1FBQzVCLE1BQU0sRUFBRU8sT0FBTSxFQUFFLEdBQUdYLElBQUlJLEtBQUs7UUFFNUJRLFFBQVFDLEdBQUcsQ0FBQ1Y7UUFDWlMsUUFBUUMsR0FBRyxDQUFDUjtRQUNaTyxRQUFRQyxHQUFHLENBQUNQO1FBQ1pNLFFBQVFDLEdBQUcsQ0FBQ047UUFDWkssUUFBUUMsR0FBRyxDQUFDTDtRQUNaSSxRQUFRQyxHQUFHLENBQUNKO1FBRVosSUFBSTtZQUNGLE1BQU1LLFNBQ0osTUFBTWYsT0FBT2dCLFNBQVMsQ0FBQyx1RkFBdUYsRUFBRVosUUFBUSxDQUFDLEVBQUVFLFFBQVEsQ0FBQyxFQUFFQyxNQUFNLENBQUMsRUFBRUMsS0FBSyxDQUFDLEVBQUVDLE1BQU0sQ0FBQyxFQUFFQyxTQUFTLENBQUMsRUFBRUMsT0FBTyxDQUFDLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO1lBRWpNQyxRQUFRQyxHQUFHLENBQUM7WUFDWlosSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7UUFDdkIsRUFBRSxPQUFPSSxLQUFLO1lBQ1pOLFFBQVFDLEdBQUcsQ0FBQ0s7WUFDWmpCLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLEtBQUs7WUFBaUI7UUFDL0M7SUFDRixPQUFPLElBQUlsQixJQUFJRSxNQUFNLEtBQUssT0FBTztRQUMvQixNQUFNLEVBQUVpQixNQUFLLEVBQUUsR0FBR25CLElBQUlJLEtBQUs7UUFDM0IsTUFBTSxFQUFFZ0IsTUFBSyxFQUFFLEdBQUdwQixJQUFJSSxLQUFLO1FBQzNCUSxRQUFRQyxHQUFHLENBQUM7UUFDWkQsUUFBUUMsR0FBRyxDQUFDTTtRQUNaUCxRQUFRQyxHQUFHLENBQUM7UUFDWkQsUUFBUUMsR0FBRyxDQUFDTztRQUVaLElBQUlBLFVBQVUsU0FBUztZQUNyQixNQUFNTixTQUNKLE1BQU1mLE9BQU9nQixTQUFTLENBQUMsc0JBQXNCLENBQUM7WUFDaERkLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO1FBQ3ZCLE9BQ0ssSUFBSU0sVUFBVSxNQUFNO1lBQ3ZCLE1BQU1OLFNBQVMsTUFBTWYsT0FBT2dCLFNBQVMsQ0FBQyxnQ0FBZ0MsRUFBRUksTUFBTSxDQUFDO1lBQy9FbEIsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7WUFDckJGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDZCxDQUFDO0lBQ0gsQ0FBQztBQUNILEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXJpa2VycG9ydGFsLy4vcGFnZXMvYXBpL3g3d1VrNWxlWTFqdi9la2lwL2Rlc3Rla2FsLmpzPzIxYjciXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgeyBhZHNveWFkIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCB7IHRlbGVmb24gfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IHsgYWRyZXMgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IHsga29udSB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc3QgeyB0YXJpaCB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc3QgeyBhY2lrbGFtYSB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc3QgeyBtZXNsZWsgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IHsgaXN5ZXJpIH0gPSByZXEucXVlcnk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYWRzb3lhZCk7XHJcbiAgICBjb25zb2xlLmxvZyh0ZWxlZm9uKTtcclxuICAgIGNvbnNvbGUubG9nKGFkcmVzKTtcclxuICAgIGNvbnNvbGUubG9nKGtvbnUpO1xyXG4gICAgY29uc29sZS5sb2codGFyaWgpO1xyXG4gICAgY29uc29sZS5sb2coYWNpa2xhbWEpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLiRxdWVyeVJhd2BJTlNFUlQgSU5UTyBkZXN0ZWtvbCAoYWRzb3lhZCx0ZWxlZm9uLGFkcmVzLGtvbnUsdGFyaWgsYWNpa2xhbWEsbWVzbGVrLGlzeWVyaSkgVkFMVUVTICgke2Fkc295YWR9LCR7dGVsZWZvbn0sJHthZHJlc30sJHtrb251fSwke3RhcmlofSwke2FjaWtsYW1hfSwke21lc2xla30sJHtpc3llcml9KWA7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcInllbmkgZGVzdGVrIGFsIHRhbGViaSBla2xlbmRpXCIpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgZXJyOiBcIkVycm9yIG9jY3VyZWQuXCIgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICBjb25zdCB7IGdldGlyIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCB7IGR1cnVtIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhcImdldGlyXCIpO1xyXG4gICAgY29uc29sZS5sb2coZ2V0aXIpO1xyXG4gICAgY29uc29sZS5sb2coXCJkdXJ1bVwiKTtcclxuICAgIGNvbnNvbGUubG9nKGR1cnVtKTtcclxuXHJcbiAgICBpZiAoZHVydW0gPT09IFwiZ2VuZWxcIikge1xyXG4gICAgICBjb25zdCByZXN1bHQgPVxyXG4gICAgICAgIGF3YWl0IHByaXNtYS4kcXVlcnlSYXdgU0VMRUNUICogRlJPTSBkZXN0ZWthbGA7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkdXJ1bSA9PT0gXCJpZFwiKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS4kcXVlcnlSYXdgU0VMRUNUICogRlJPTSBkZXN0ZWthbCB3aGVyZSBpZD0ke2dldGlyfWA7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYWRzb3lhZCIsInF1ZXJ5IiwidGVsZWZvbiIsImFkcmVzIiwia29udSIsInRhcmloIiwiYWNpa2xhbWEiLCJtZXNsZWsiLCJpc3llcmkiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwiJHF1ZXJ5UmF3Iiwic3RhdHVzIiwianNvbiIsImVyciIsImdldGlyIiwiZHVydW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/x7wUk5leY1jv/ekip/destekal.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/x7wUk5leY1jv/ekip/destekal.js"));
module.exports = __webpack_exports__;

})();