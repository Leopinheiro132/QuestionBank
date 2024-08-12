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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

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

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src\\pages\\api\\login.js */ \"(api)/./src/pages/api/login.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/login\",\n        pathname: \"/api/login\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmxvZ2luJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGc3JjJTVDcGFnZXMlNUNhcGklNUNsb2dpbi5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDTDtBQUMxRDtBQUN3RDtBQUN4RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsb0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLG9EQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLGdIQUFtQjtBQUNsRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZXN0aW9uYmFuay8/MjMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vc3JjXFxcXHBhZ2VzXFxcXGFwaVxcXFxsb2dpbi5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xvZ2luXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbG9naW5cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./_ultils/mongoDbconnect.js":
/*!***********************************!*\
  !*** ./_ultils/mongoDbconnect.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst connectDB = async ()=>{\n    try {\n        await mongoose.connect(\"mongodb+srv://mandarim:IybSuQmXxmpPjZGo@teste.knxnpxi.mongodb.net\", {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"MongoDB connected\");\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB\", error);\n    }\n};\nmodule.exports = connectDB;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9fdWx0aWxzL21vbmdvRGJjb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV6QixNQUFNQyxZQUFZO0lBQ2hCLElBQUk7UUFDRixNQUFNRixTQUFTRyxPQUFPLENBQUNDLG1FQUF1QixFQUFFO1lBQzlDRyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUNBQyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLCtCQUErQkE7SUFDL0M7QUFDRjtBQUVBQyxPQUFPQyxPQUFPLEdBQUdYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVlc3Rpb25iYW5rLy4vX3VsdGlscy9tb25nb0RiY29ubmVjdC5qcz84ZmIyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ01vbmdvREIgY29ubmVjdGVkJyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQicsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3REQjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./_ultils/mongoDbconnect.js\n");

/***/ }),

/***/ "(api)/./models/UserModel.js":
/*!*****************************!*\
  !*** ./models/UserModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    nome: String,\n    email: {\n        type: String,\n        unique: true\n    },\n    password: String,\n    role: {\n        type: String,\n        default: \"user\"\n    } // Por exemplo, 'user', 'admin', 'moderator'\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlck1vZGVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxhQUFhLElBQUlELHdEQUFlLENBQUM7SUFDckNHLE1BQU1DO0lBQ05DLE9BQU87UUFBRUMsTUFBTUY7UUFBUUcsUUFBUTtJQUFLO0lBQ3BDQyxVQUFVSjtJQUNWSyxNQUFNO1FBQUVILE1BQU1GO1FBQVFNLFNBQVM7SUFBTyxFQUFFLDRDQUE0QztBQUN0RjtBQUVBLE1BQU1DLE9BQU9YLHdEQUFlLENBQUNXLElBQUksSUFBSVgscURBQWMsQ0FBQyxRQUFRQztBQUM1RCxpRUFBZVUsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1ZXN0aW9uYmFuay8uL21vZGVscy9Vc2VyTW9kZWwuanM/NmU0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG5vbWU6IFN0cmluZyxcclxuICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gIHBhc3N3b3JkOiBTdHJpbmcsXHJcbiAgcm9sZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICd1c2VyJyB9IC8vIFBvciBleGVtcGxvLCAndXNlcicsICdhZG1pbicsICdtb2RlcmF0b3InXHJcbn0pO1xyXG5cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsIm5vbWUiLCJTdHJpbmciLCJlbWFpbCIsInR5cGUiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0IiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/UserModel.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/login.js":
/*!********************************!*\
  !*** ./src/pages/api/login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ultils_mongoDbconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_ultils/mongoDbconnect */ \"(api)/./_ultils/mongoDbconnect.js\");\n/* harmony import */ var _ultils_mongoDbconnect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ultils_mongoDbconnect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_UserModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/UserModel */ \"(api)/./models/UserModel.js\");\n\n\n\n\n_ultils_mongoDbconnect__WEBPACK_IMPORTED_MODULE_2___default()();\nasync function login(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).end();\n    }\n    const { email, password } = req.body;\n    const user = await _models_UserModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n        email: email\n    });\n    if (!user) {\n        return res.status(401).json({\n            error: \"Usuario inexistente\"\n        });\n    }\n    const passwordDecrip = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.password);\n    if (!passwordDecrip) {\n        return res.status(401).json({\n            error: \"Credenciais inv\\xe1lidas\"\n        });\n    }\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n        email: user.email,\n        role: user.role\n    }, \"eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NDY1NjQ1MiwiaWF0IjoxNjk0NjU2NDUyfQ.Y0x_BPx1i-AwQ_FxsGFVODVBm4JPJ4nNCiuMukcZN9U\", {\n        expiresIn: \"4h\"\n    });\n    if (user.role == \"admin\") {\n        res.status(200).json({\n            token,\n            redirect: \"/dashboard\"\n        });\n    } else {\n        res.status(200).json({\n            token,\n            redirect: \"/home\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0g7QUFDNEI7QUFDWDtBQUU3Q0UsNkRBQVNBO0FBRU0sZUFBZUUsTUFBTUMsR0FBRyxFQUFFQyxHQUFHO0lBQzFDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQzVCO0lBRUEsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHTixJQUFJTyxJQUFJO0lBQ3BDLE1BQU1DLE9BQU8sTUFBTVYsaUVBQVksQ0FBQztRQUFFTyxPQUFPQTtJQUFNO0lBRS9DLElBQUksQ0FBQ0csTUFBTTtRQUNULE9BQU9QLElBQUlFLE1BQU0sQ0FBQyxLQUFLTyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFzQjtJQUM3RDtJQUVBLE1BQU1DLGlCQUFpQixNQUFNaEIscURBQWMsQ0FBQ1UsVUFBVUUsS0FBS0YsUUFBUTtJQUNuRSxJQUFJLENBQUNNLGdCQUFnQjtRQUNuQixPQUFPWCxJQUFJRSxNQUFNLENBQUMsS0FBS08sSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0I7SUFDL0Q7SUFFQSxNQUFNRyxRQUFRbkIsd0RBQVEsQ0FBQztRQUFFVSxPQUFPRyxLQUFLSCxLQUFLO1FBQUVXLE1BQU1SLEtBQUtRLElBQUk7SUFBQyxHQUFHQyw2TEFBc0IsRUFBRTtRQUFFRyxXQUFXO0lBQUs7SUFFekcsSUFBSVosS0FBS1EsSUFBSSxJQUFJLFNBQVM7UUFDeEJmLElBQUlFLE1BQU0sQ0FBQyxLQUFLTyxJQUFJLENBQUM7WUFBRUk7WUFBT08sVUFBVTtRQUFhO0lBQ3ZELE9BQU87UUFDTHBCLElBQUlFLE1BQU0sQ0FBQyxLQUFLTyxJQUFJLENBQUM7WUFBRUk7WUFBT08sVUFBVTtRQUFRO0lBQ2xEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdGlvbmJhbmsvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzP2VlZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vX3VsdGlscy9tb25nb0RiY29ubmVjdCc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL21vZGVscy9Vc2VyTW9kZWwnO1xyXG5cclxuY29ubmVjdERCKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dpbihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IGVtYWlsIH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnVXN1YXJpbyBpbmV4aXN0ZW50ZScgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXNzd29yZERlY3JpcCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICBpZiAoIXBhc3N3b3JkRGVjcmlwKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ0NyZWRlbmNpYWlzIGludsOhbGlkYXMnIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IGVtYWlsOiB1c2VyLmVtYWlsLCByb2xlOiB1c2VyLnJvbGUgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwgeyBleHBpcmVzSW46ICc0aCcgfSk7XHJcblxyXG4gIGlmICh1c2VyLnJvbGUgPT0gXCJhZG1pblwiKSB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRva2VuLCByZWRpcmVjdDogJy9kYXNoYm9hcmQnIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRva2VuLCByZWRpcmVjdDogJy9ob21lJyB9KTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiand0IiwiYmNyeXB0IiwiY29ubmVjdERCIiwiVXNlciIsImxvZ2luIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJ1c2VyIiwiZmluZE9uZSIsImpzb24iLCJlcnJvciIsInBhc3N3b3JkRGVjcmlwIiwiY29tcGFyZSIsInRva2VuIiwic2lnbiIsInJvbGUiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();