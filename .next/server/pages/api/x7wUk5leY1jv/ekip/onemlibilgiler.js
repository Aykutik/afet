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
exports.id = "pages/api/x7wUk5leY1jv/ekip/onemlibilgiler";
exports.ids = ["pages/api/x7wUk5leY1jv/ekip/onemlibilgiler"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/x7wUk5leY1jv/ekip/onemlibilgiler/index.js":
/*!*************************************************************!*\
  !*** ./pages/api/x7wUk5leY1jv/ekip/onemlibilgiler/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable import/no-anonymous-default-export */ \nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"GET\") {\n        const { getir  } = req.query;\n        if (getir === \"telefon\") {\n            const result = await prisma.$queryRaw`SELECT * FROM bilgi_telefon where onay=1`;\n            res.status(200).json(result);\n        } else if (getir === \"web\") {\n            const result = await prisma.$queryRaw`SELECT * FROM bilgi_web where onay=1`;\n            res.status(200).json(result);\n        }\n    } else if (req.method === \"POST\") {\n        const { getir  } = req.query;\n        if (getir === \"telefon\") {\n            const { birim  } = req.query;\n            const { telefon  } = req.query;\n            const { aciklama  } = req.query;\n            const { ekleyen  } = req.query;\n            const { eklenmetarihi  } = req.query;\n            try {\n                const result = await prisma.$queryRaw`INSERT INTO bilgi_telefon (birim,telefon,aciklama,ekleyen,eklenmetarihi) VALUES (${birim},${telefon},${aciklama},${ekleyen},${eklenmetarihi})`;\n                res.status(200).json(result);\n            } catch (err) {\n                console.log(err);\n                res.status(403).json({\n                    err: \"Error occured.\"\n                });\n            }\n        } else if (getir === \"web\") {\n            const { birim  } = req.query;\n            const { web  } = req.query;\n            const { aciklama  } = req.query;\n            const { ekleyen  } = req.query;\n            const { eklenmetarihi  } = req.query;\n            try {\n                const result = await prisma.$queryRaw`INSERT INTO bilgi_web (birim,web,aciklama,ekleyen,eklenmetarihi) VALUES (${birim},${web},${aciklama},${ekleyen},${eklenmetarihi})`;\n                res.status(200).json(result);\n            } catch (err) {\n                console.log(err);\n                res.status(403).json({\n                    err: \"Error occured.\"\n                });\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkveDd3VWs1bGVZMWp2L2VraXAvb25lbWxpYmlsZ2lsZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscURBQXFELEdBQ1A7QUFFOUMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUE7QUFFL0IsaUVBQWUsT0FBT0UsS0FBS0MsTUFBUTtJQUVqQyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHSCxJQUFJSSxLQUFLO1FBRTNCLElBQUlELFVBQVUsV0FBVztZQUN2QixNQUFNRSxTQUNKLE1BQU1OLE9BQU9PLFNBQVMsQ0FBQyx3Q0FBd0MsQ0FBQztZQUNsRUwsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7UUFDdkIsT0FBTyxJQUFJRixVQUFVLE9BQU87WUFDMUIsTUFBTUUsU0FDSixNQUFNTixPQUFPTyxTQUFTLENBQUMsb0NBQW9DLENBQUM7WUFDOURMLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO1FBQ3ZCLENBQUM7SUFFSCxPQUFPLElBQUlMLElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ2hDLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdILElBQUlJLEtBQUs7UUFFM0IsSUFBSUQsVUFBVSxXQUFXO1lBQ3ZCLE1BQU0sRUFBRU0sTUFBSyxFQUFFLEdBQUdULElBQUlJLEtBQUs7WUFDM0IsTUFBTSxFQUFFTSxRQUFPLEVBQUUsR0FBR1YsSUFBSUksS0FBSztZQUM3QixNQUFNLEVBQUVPLFNBQVEsRUFBRSxHQUFHWCxJQUFJSSxLQUFLO1lBQzlCLE1BQU0sRUFBRVEsUUFBTyxFQUFFLEdBQUdaLElBQUlJLEtBQUs7WUFDN0IsTUFBTSxFQUFFUyxjQUFhLEVBQUUsR0FBR2IsSUFBSUksS0FBSztZQUNuQyxJQUFJO2dCQUNGLE1BQU1DLFNBQ0osTUFBTU4sT0FBT08sU0FBUyxDQUFDLGlGQUFpRixFQUFFRyxNQUFNLENBQUMsRUFBRUMsUUFBUSxDQUFDLEVBQUVDLFNBQVMsQ0FBQyxFQUFFQyxRQUFRLENBQUMsRUFBRUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3ZLWixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtZQUN2QixFQUFFLE9BQU9TLEtBQUs7Z0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQ1piLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVNLEtBQUs7Z0JBQWlCO1lBQy9DO1FBQ0YsT0FDSyxJQUFJWCxVQUFVLE9BQU87WUFDeEIsTUFBTSxFQUFFTSxNQUFLLEVBQUUsR0FBR1QsSUFBSUksS0FBSztZQUMzQixNQUFNLEVBQUVhLElBQUcsRUFBRSxHQUFHakIsSUFBSUksS0FBSztZQUN6QixNQUFNLEVBQUVPLFNBQVEsRUFBRSxHQUFHWCxJQUFJSSxLQUFLO1lBQzlCLE1BQU0sRUFBRVEsUUFBTyxFQUFFLEdBQUdaLElBQUlJLEtBQUs7WUFDN0IsTUFBTSxFQUFFUyxjQUFhLEVBQUUsR0FBR2IsSUFBSUksS0FBSztZQUNuQyxJQUFJO2dCQUNGLE1BQU1DLFNBQ0osTUFBTU4sT0FBT08sU0FBUyxDQUFDLHlFQUF5RSxFQUFFRyxNQUFNLENBQUMsRUFBRVEsSUFBSSxDQUFDLEVBQUVOLFNBQVMsQ0FBQyxFQUFFQyxRQUFRLENBQUMsRUFBRUMsY0FBYyxDQUFDLENBQUM7Z0JBQzNKWixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtZQUN2QixFQUFFLE9BQU9TLEtBQUs7Z0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQ1piLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVNLEtBQUs7Z0JBQWlCO1lBQy9DO1FBQ0YsQ0FBQztJQUNILENBQUM7QUFDSCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lyaWtlcnBvcnRhbC8uL3BhZ2VzL2FwaS94N3dVazVsZVkxanYvZWtpcC9vbmVtbGliaWxnaWxlci9pbmRleC5qcz9iZGI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgIGNvbnN0IHsgZ2V0aXIgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiAgICBpZiAoZ2V0aXIgPT09IFwidGVsZWZvblwiKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLiRxdWVyeVJhd2BTRUxFQ1QgKiBGUk9NIGJpbGdpX3RlbGVmb24gd2hlcmUgb25heT0xYDtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcclxuICAgIH0gZWxzZSBpZiAoZ2V0aXIgPT09IFwid2ViXCIpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID1cclxuICAgICAgICBhd2FpdCBwcmlzbWEuJHF1ZXJ5UmF3YFNFTEVDVCAqIEZST00gYmlsZ2lfd2ViIHdoZXJlIG9uYXk9MWA7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IHsgZ2V0aXIgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiAgICBpZiAoZ2V0aXIgPT09IFwidGVsZWZvblwiKSB7XHJcbiAgICAgIGNvbnN0IHsgYmlyaW0gfSA9IHJlcS5xdWVyeTtcclxuICAgICAgY29uc3QgeyB0ZWxlZm9uIH0gPSByZXEucXVlcnk7XHJcbiAgICAgIGNvbnN0IHsgYWNpa2xhbWEgfSA9IHJlcS5xdWVyeTtcclxuICAgICAgY29uc3QgeyBla2xleWVuIH0gPSByZXEucXVlcnk7XHJcbiAgICAgIGNvbnN0IHsgZWtsZW5tZXRhcmloaSB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9XHJcbiAgICAgICAgICBhd2FpdCBwcmlzbWEuJHF1ZXJ5UmF3YElOU0VSVCBJTlRPIGJpbGdpX3RlbGVmb24gKGJpcmltLHRlbGVmb24sYWNpa2xhbWEsZWtsZXllbixla2xlbm1ldGFyaWhpKSBWQUxVRVMgKCR7YmlyaW19LCR7dGVsZWZvbn0sJHthY2lrbGFtYX0sJHtla2xleWVufSwke2VrbGVubWV0YXJpaGl9KWA7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7IGVycjogXCJFcnJvciBvY2N1cmVkLlwiIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChnZXRpciA9PT0gXCJ3ZWJcIikgeyAgICAgICAgXHJcbiAgICAgIGNvbnN0IHsgYmlyaW0gfSA9IHJlcS5xdWVyeTtcclxuICAgICAgY29uc3QgeyB3ZWIgfSA9IHJlcS5xdWVyeTtcclxuICAgICAgY29uc3QgeyBhY2lrbGFtYSB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgICBjb25zdCB7IGVrbGV5ZW4gfSA9IHJlcS5xdWVyeTtcclxuICAgICAgY29uc3QgeyBla2xlbm1ldGFyaWhpIH0gPSByZXEucXVlcnk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID1cclxuICAgICAgICAgIGF3YWl0IHByaXNtYS4kcXVlcnlSYXdgSU5TRVJUIElOVE8gYmlsZ2lfd2ViIChiaXJpbSx3ZWIsYWNpa2xhbWEsZWtsZXllbixla2xlbm1ldGFyaWhpKSBWQUxVRVMgKCR7YmlyaW19LCR7d2VifSwke2FjaWtsYW1hfSwke2VrbGV5ZW59LCR7ZWtsZW5tZXRhcmloaX0pYDtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgZXJyOiBcIkVycm9yIG9jY3VyZWQuXCIgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImdldGlyIiwicXVlcnkiLCJyZXN1bHQiLCIkcXVlcnlSYXciLCJzdGF0dXMiLCJqc29uIiwiYmlyaW0iLCJ0ZWxlZm9uIiwiYWNpa2xhbWEiLCJla2xleWVuIiwiZWtsZW5tZXRhcmloaSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ3ZWIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/x7wUk5leY1jv/ekip/onemlibilgiler/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/x7wUk5leY1jv/ekip/onemlibilgiler/index.js"));
module.exports = __webpack_exports__;

})();