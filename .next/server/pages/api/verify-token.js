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
exports.id = "pages/api/verify-token";
exports.ids = ["pages/api/verify-token"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fverify-token&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cverify-token.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fverify-token&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cverify-token.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_verify_token_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src\\pages\\api\\verify-token.js */ \"(api)/./src/pages/api/verify-token.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_verify_token_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_verify_token_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/verify-token\",\n        pathname: \"/api/verify-token\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_verify_token_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnZlcmlmeS10b2tlbiZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnNyYyU1Q3BhZ2VzJTVDYXBpJTVDdmVyaWZ5LXRva2VuLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQytEO0FBQy9EO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQywyREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsMkRBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlc3Rpb25iYW5rLz83NTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9zcmNcXFxccGFnZXNcXFxcYXBpXFxcXHZlcmlmeS10b2tlbi5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3ZlcmlmeS10b2tlblwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ZlcmlmeS10b2tlblwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fverify-token&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cverify-token.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./_ultils/mongoDbconnect.js":
/*!***********************************!*\
  !*** ./_ultils/mongoDbconnect.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst connectDB = async ()=>{\n    try {\n        await mongoose.connect(\"mongodb+srv://mandarim:IybSuQmXxmpPjZGo@teste.knxnpxi.mongodb.net\", {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"MongoDB connected\");\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB\", error);\n    }\n};\nconst disconnectDB = async ()=>{\n    try {\n        await mongoose.disconnect();\n        console.log(\"MongoDB disconnected\");\n    } catch (error) {\n        console.error(\"Error disconnecting from MongoDB\", error);\n    }\n};\nmodule.exports = {\n    connectDB,\n    disconnectDB\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9fdWx0aWxzL21vbmdvRGJjb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV6QixNQUFNQyxZQUFZO0lBQ2hCLElBQUk7UUFDRixNQUFNRixTQUFTRyxPQUFPLENBQUNDLG1FQUF1QixFQUFFO1lBQzlDRyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUNBQyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLCtCQUErQkE7SUFDL0M7QUFDRjtBQUVBLE1BQU1DLGVBQWU7SUFDbkIsSUFBSTtRQUNGLE1BQU1aLFNBQVNhLFVBQVU7UUFDekJKLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0MsT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsb0NBQW9DQTtJQUNwRDtBQUNGO0FBRUFHLE9BQU9DLE9BQU8sR0FBRztJQUFFYjtJQUFXVTtBQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlc3Rpb25iYW5rLy4vX3VsdGlscy9tb25nb0RiY29ubmVjdC5qcz84ZmIyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ01vbmdvREIgY29ubmVjdGVkJyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQicsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBkaXNjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGRpc2Nvbm5lY3RlZCcpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkaXNjb25uZWN0aW5nIGZyb20gTW9uZ29EQicsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgY29ubmVjdERCLCBkaXNjb25uZWN0REIgfTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXNjb25uZWN0REIiLCJkaXNjb25uZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./_ultils/mongoDbconnect.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/verify-token.js":
/*!***************************************!*\
  !*** ./src/pages/api/verify-token.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ultils_mongoDbconnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_ultils/mongoDbconnect */ \"(api)/./_ultils/mongoDbconnect.js\");\n/* harmony import */ var _ultils_mongoDbconnect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ultils_mongoDbconnect__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function verifyToken(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).end();\n    }\n    await (0,_ultils_mongoDbconnect__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n    const { token } = req.body;\n    try {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NDY1NjQ1MiwiaWF0IjoxNjk0NjU2NDUyfQ.Y0x_BPx1i-AwQ_FxsGFVODVBm4JPJ4nNCiuMukcZN9U\");\n        res.status(200).json({\n            role: decoded.role\n        });\n    } catch (error) {\n        res.status(401).json({\n            error: \"Token inv\\xe1lido\"\n        });\n    }\n    await (0,_ultils_mongoDbconnect__WEBPACK_IMPORTED_MODULE_1__.disconnectDB)();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3ZlcmlmeS10b2tlbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUMyQztBQUUzRCxlQUFlRyxZQUFZQyxHQUFHLEVBQUVDLEdBQUc7SUFDaEQsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDNUI7SUFDQSxNQUFNUCxpRUFBU0E7SUFDZixNQUFNLEVBQUVRLEtBQUssRUFBRSxHQUFHTCxJQUFJTSxJQUFJO0lBQzFCLElBQUk7UUFDRixNQUFNQyxVQUFVWCwwREFBVSxDQUFDUyxPQUFPSSw2TEFBc0I7UUFDeERSLElBQUlFLE1BQU0sQ0FBQyxLQUFLUyxJQUFJLENBQUM7WUFBRUMsTUFBTU4sUUFBUU0sSUFBSTtRQUFDO0lBQzVDLEVBQUUsT0FBT0MsT0FBTztRQUNkYixJQUFJRSxNQUFNLENBQUMsS0FBS1MsSUFBSSxDQUFDO1lBQUVFLE9BQU87UUFBaUI7SUFDakQ7SUFDQSxNQUFNaEIsb0VBQVlBO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlc3Rpb25iYW5rLy4vc3JjL3BhZ2VzL2FwaS92ZXJpZnktdG9rZW4uanM/NGU1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCB7IGNvbm5lY3REQiwgZGlzY29ubmVjdERCIH0gZnJvbSAnLi4vLi4vLi4vX3VsdGlscy9tb25nb0RiY29ubmVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlUb2tlbihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XHJcbiAgfVxyXG4gIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gIGNvbnN0IHsgdG9rZW4gfSA9IHJlcS5ib2R5O1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJvbGU6IGRlY29kZWQucm9sZSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ1Rva2VuIGludsOhbGlkbycgfSk7XHJcbiAgfVxyXG4gIGF3YWl0IGRpc2Nvbm5lY3REQigpXHJcbn0iXSwibmFtZXMiOlsiand0IiwiY29ubmVjdERCIiwiZGlzY29ubmVjdERCIiwidmVyaWZ5VG9rZW4iLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJ0b2tlbiIsImJvZHkiLCJkZWNvZGVkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJqc29uIiwicm9sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/verify-token.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fverify-token&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cverify-token.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();