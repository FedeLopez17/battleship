/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/battle-screen.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/battle-screen.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#battle.screen {\n  height: 100vh;\n  display: flex;\n}\n\n#battle.screen #player-one .gameboard .cell:hover {\n  cursor: default;\n}\n\n#battle.screen #player-one .gameboard .cell:not(.ship):hover {\n  background-color: white;\n}\n\n@media (orientation: portrait) {\n  #battle.screen {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/battle-screen.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE;IACE,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;EACd;AACF","sourcesContent":["#battle.screen {\n  height: 100vh;\n  display: flex;\n}\n\n#battle.screen #player-one .gameboard .cell:hover {\n  cursor: default;\n}\n\n#battle.screen #player-one .gameboard .cell:not(.ship):hover {\n  background-color: white;\n}\n\n@media (orientation: portrait) {\n  #battle.screen {\n    flex-direction: column;\n    min-height: 100vh;\n    height: auto;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/game-over-screen.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/game-over-screen.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".screen#game-over {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  background-color: rgb(0 0 0 / 70%);\n  color: white;\n}\n\n.screen#game-over .buttons {\n  font-size: 2rem;\n  display: flex;\n  gap: 40px;\n}\n\n.screen#game-over .buttons > * {\n  cursor: pointer;\n  filter: brightness(0.8);\n}\n\n.screen#game-over .buttons > *:hover {\n  filter: brightness(1);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/game-over-screen.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,MAAM;EACN,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[".screen#game-over {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  background-color: rgb(0 0 0 / 70%);\n  color: white;\n}\n\n.screen#game-over .buttons {\n  font-size: 2rem;\n  display: flex;\n  gap: 40px;\n}\n\n.screen#game-over .buttons > * {\n  cursor: pointer;\n  filter: brightness(0.8);\n}\n\n.screen#game-over .buttons > *:hover {\n  filter: brightness(1);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --gameboard-width: min(90%, 500px);\n  --missed-attack-color: lightsteelblue;\n  --ship-color: steelblue;\n  --hit-ship-color: lightpink;\n  --sunk-ship-color: crimson;\n}\n\n.gameboard-wrapper {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  gap: 10px;\n}\n\n.gameboard {\n  aspect-ratio: 2/2;\n  width: var(--gameboard-width);\n  display: flex;\n  pointer-events: none;\n  transition: filter 500ms;\n}\n\n.gameboard > .column {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  pointer-events: none;\n}\n\n.gameboard .cell {\n  flex: 1;\n  outline: 1px solid midnightblue;\n  background-color: #f8f8ffed; /* slightly transparent ghostwhite*/\n  pointer-events: auto;\n  cursor: pointer;\n  margin: 2px;\n}\n\n.gameboard .cell:hover {\n  background-color: rgb(210, 224, 230);\n}\n\n.gameboard .cell.ship {\n  background-color: var(--ship-color);\n}\n\n.gameboard .cell.hit,\n.gameboard .cell.sunk,\n.gameboard .cell.missed-attack {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n\n.gameboard .cell.hit {\n  background-color: var(--hit-ship-color);\n}\n\n.gameboard .cell.sunk {\n  background-color: var(--sunk-ship-color);\n}\n\n.gameboard .cell.missed-attack {\n  background-color: var(--missed-attack-color);\n  font-size: 0.4rem;\n}\n\n.gameboard.disabled {\n  pointer-events: auto;\n  cursor: wait;\n  filter: brightness(0.9);\n}\n\n.gameboard.disabled .cell {\n  pointer-events: none;\n}\n\n.gameboard-wrapper .ships-tracker > .ships-wrapper {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n\n.gameboard-wrapper#player-two .ships-tracker > .ships-wrapper {\n  align-items: flex-start;\n}\n\n.ships-tracker .ship {\n  flex: 1;\n  display: flex;\n  gap: 2px;\n}\n\n.ships-tracker .ship > .subdivision {\n  flex: 1;\n  background-color: var(--ship-color);\n}\n\n.ships-tracker .ship.sunk > .subdivision {\n  background-color: var(--sunk-ship-color);\n}\n\n@media (orientation: portrait) {\n  .gameboard-wrapper {\n    padding: 10% 0;\n  }\n}\n\n@media (max-width: 300px) {\n  .gameboard .cell {\n    margin: 1px;\n  }\n}\n\n@media (max-width: 1340px) {\n  .gameboard-wrapper#player-one {\n    flex-direction: column-reverse;\n  }\n\n  .gameboard-wrapper#player-two {\n    flex-direction: column;\n  }\n\n  .gameboard-wrapper .ships-tracker {\n    width: var(--gameboard-width);\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .gameboard-wrapper#player-two .ships-tracker {\n    justify-content: flex-end;\n  }\n\n  .gameboard-wrapper#player-one .ships-tracker > .ships-wrapper {\n    align-items: flex-start;\n  }\n\n  .gameboard-wrapper#player-two .ships-tracker > .ships-wrapper {\n    align-items: flex-end;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;EAClC,qCAAqC;EACrC,uBAAuB;EACvB,2BAA2B;EAC3B,0BAA0B;AAC5B;;AAEA;EACE,OAAO;EACP,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,aAAa;EACb,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,OAAO;EACP,+BAA+B;EAC/B,2BAA2B,EAAE,mCAAmC;EAChE,oBAAoB;EACpB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;;;EAGE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,4CAA4C;EAC5C,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,OAAO;EACP,mCAAmC;AACrC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,8BAA8B;EAChC;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,6BAA6B;IAC7B,aAAa;IACb,2BAA2B;EAC7B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,qBAAqB;EACvB;AACF","sourcesContent":[":root {\n  --gameboard-width: min(90%, 500px);\n  --missed-attack-color: lightsteelblue;\n  --ship-color: steelblue;\n  --hit-ship-color: lightpink;\n  --sunk-ship-color: crimson;\n}\n\n.gameboard-wrapper {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  gap: 10px;\n}\n\n.gameboard {\n  aspect-ratio: 2/2;\n  width: var(--gameboard-width);\n  display: flex;\n  pointer-events: none;\n  transition: filter 500ms;\n}\n\n.gameboard > .column {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  pointer-events: none;\n}\n\n.gameboard .cell {\n  flex: 1;\n  outline: 1px solid midnightblue;\n  background-color: #f8f8ffed; /* slightly transparent ghostwhite*/\n  pointer-events: auto;\n  cursor: pointer;\n  margin: 2px;\n}\n\n.gameboard .cell:hover {\n  background-color: rgb(210, 224, 230);\n}\n\n.gameboard .cell.ship {\n  background-color: var(--ship-color);\n}\n\n.gameboard .cell.hit,\n.gameboard .cell.sunk,\n.gameboard .cell.missed-attack {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n\n.gameboard .cell.hit {\n  background-color: var(--hit-ship-color);\n}\n\n.gameboard .cell.sunk {\n  background-color: var(--sunk-ship-color);\n}\n\n.gameboard .cell.missed-attack {\n  background-color: var(--missed-attack-color);\n  font-size: 0.4rem;\n}\n\n.gameboard.disabled {\n  pointer-events: auto;\n  cursor: wait;\n  filter: brightness(0.9);\n}\n\n.gameboard.disabled .cell {\n  pointer-events: none;\n}\n\n.gameboard-wrapper .ships-tracker > .ships-wrapper {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n\n.gameboard-wrapper#player-two .ships-tracker > .ships-wrapper {\n  align-items: flex-start;\n}\n\n.ships-tracker .ship {\n  flex: 1;\n  display: flex;\n  gap: 2px;\n}\n\n.ships-tracker .ship > .subdivision {\n  flex: 1;\n  background-color: var(--ship-color);\n}\n\n.ships-tracker .ship.sunk > .subdivision {\n  background-color: var(--sunk-ship-color);\n}\n\n@media (orientation: portrait) {\n  .gameboard-wrapper {\n    padding: 10% 0;\n  }\n}\n\n@media (max-width: 300px) {\n  .gameboard .cell {\n    margin: 1px;\n  }\n}\n\n@media (max-width: 1340px) {\n  .gameboard-wrapper#player-one {\n    flex-direction: column-reverse;\n  }\n\n  .gameboard-wrapper#player-two {\n    flex-direction: column;\n  }\n\n  .gameboard-wrapper .ships-tracker {\n    width: var(--gameboard-width);\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .gameboard-wrapper#player-two .ships-tracker {\n    justify-content: flex-end;\n  }\n\n  .gameboard-wrapper#player-one .ships-tracker > .ships-wrapper {\n    align-items: flex-start;\n  }\n\n  .gameboard-wrapper#player-two .ships-tracker > .ships-wrapper {\n    align-items: flex-end;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/wave.png */ "./src/images/wave.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  position: relative;\n  background-image: linear-gradient(\n    180.4deg,\n    rgb(134 202 255) -2.2%,\n    #fffbf5 83.5%\n  );\n}\n\n#waves-wrapper {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 5vh;\n  bottom: 0;\n  overflow-x: hidden;\n}\n\n#waves-wrapper > .wave {\n  position: absolute;\n  bottom: 0;\n  height: 100%;\n  width: 200%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 50% 100%;\n  opacity: 0.8;\n  animation: move_wave 5s infinite linear;\n}\n\n#waves-wrapper > .wave:nth-of-type(2) {\n  opacity: 0.5;\n  animation: move_wave 4s infinite linear;\n}\n\n#waves-wrapper > .wave:nth-of-type(3) {\n  opacity: 0.4;\n  animation: move_wave 7s infinite linear;\n}\n\n@keyframes move_wave {\n  0% {\n    transform: translateX(0);\n    height: 100%;\n  }\n  50% {\n    transform: translateX(-25%);\n    height: 55%;\n  }\n  100% {\n    transform: translateX(-50%) scaleY(1);\n    height: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,kBAAkB;EAClB;;;;GAIC;AACH;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,WAAW;EACX,yDAA2C;EAC3C,yBAAyB;EACzB,YAAY;EACZ,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,uCAAuC;AACzC;;AAEA;EACE;IACE,wBAAwB;IACxB,YAAY;EACd;EACA;IACE,2BAA2B;IAC3B,WAAW;EACb;EACA;IACE,qCAAqC;IACrC,YAAY;EACd;AACF","sourcesContent":["body {\n  margin: 0;\n  position: relative;\n  background-image: linear-gradient(\n    180.4deg,\n    rgb(134 202 255) -2.2%,\n    #fffbf5 83.5%\n  );\n}\n\n#waves-wrapper {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 5vh;\n  bottom: 0;\n  overflow-x: hidden;\n}\n\n#waves-wrapper > .wave {\n  position: absolute;\n  bottom: 0;\n  height: 100%;\n  width: 200%;\n  background-image: url(\"../images/wave.png\");\n  background-size: 50% 100%;\n  opacity: 0.8;\n  animation: move_wave 5s infinite linear;\n}\n\n#waves-wrapper > .wave:nth-of-type(2) {\n  opacity: 0.5;\n  animation: move_wave 4s infinite linear;\n}\n\n#waves-wrapper > .wave:nth-of-type(3) {\n  opacity: 0.4;\n  animation: move_wave 7s infinite linear;\n}\n\n@keyframes move_wave {\n  0% {\n    transform: translateX(0);\n    height: 100%;\n  }\n  50% {\n    transform: translateX(-25%);\n    height: 55%;\n  }\n  100% {\n    transform: translateX(-50%) scaleY(1);\n    height: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/ships-layout.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/ships-layout.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".screen#ships-layout {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.screen#ships-layout input#name {\n  width: 400px;\n}\n\n.screen#ships-layout .gameboard-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.screen#ships-layout .gameboard .cell:hover {\n  cursor: default;\n}\n\n.screen#ships-layout .gameboard .cell:not(.ship):hover {\n  background-color: white;\n}\n\n.screen#ships-layout input#name {\n  outline: solid 2px;\n}\n\n.screen#ships-layout input#name.valid {\n  outline-color: lime;\n}\n.screen#ships-layout input#name.invalid {\n  outline-color: hotpink;\n}\n\n.screen#ships-layout input:focus-visible {\n  outline-color: skyblue;\n}\n\n.screen#ships-layout .gameboard-wrapper .buttons {\n  display: flex;\n  width: var(--gameboard-width);\n  justify-content: space-between;\n}\n\n.screen#ships-layout .gameboard-wrapper .buttons > * {\n  width: 10ch;\n  padding: 5px 10px;\n  cursor: pointer;\n  box-sizing: content-box;\n  margin-top: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/ships-layout.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,gBAAgB;AAClB","sourcesContent":[".screen#ships-layout {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.screen#ships-layout input#name {\n  width: 400px;\n}\n\n.screen#ships-layout .gameboard-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.screen#ships-layout .gameboard .cell:hover {\n  cursor: default;\n}\n\n.screen#ships-layout .gameboard .cell:not(.ship):hover {\n  background-color: white;\n}\n\n.screen#ships-layout input#name {\n  outline: solid 2px;\n}\n\n.screen#ships-layout input#name.valid {\n  outline-color: lime;\n}\n.screen#ships-layout input#name.invalid {\n  outline-color: hotpink;\n}\n\n.screen#ships-layout input:focus-visible {\n  outline-color: skyblue;\n}\n\n.screen#ships-layout .gameboard-wrapper .buttons {\n  display: flex;\n  width: var(--gameboard-width);\n  justify-content: space-between;\n}\n\n.screen#ships-layout .gameboard-wrapper .buttons > * {\n  width: 10ch;\n  padding: 5px 10px;\n  cursor: pointer;\n  box-sizing: content-box;\n  margin-top: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/battle-screen.css":
/*!**************************************!*\
  !*** ./src/styles/battle-screen.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_battle_screen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./battle-screen.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/battle-screen.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_battle_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_battle_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_battle_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_battle_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/game-over-screen.css":
/*!*****************************************!*\
  !*** ./src/styles/game-over-screen.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_over_screen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./game-over-screen.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/game-over-screen.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_over_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_over_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_game_over_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_game_over_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/gameboard.css":
/*!**********************************!*\
  !*** ./src/styles/gameboard.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameboard.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/ships-layout.css":
/*!*************************************!*\
  !*** ./src/styles/ships-layout.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ships_layout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ships-layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/ships-layout.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ships_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ships_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ships_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ships_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGameState": () => (/* binding */ getGameState),
/* harmony export */   "humanPlaysTurn": () => (/* binding */ humanPlaysTurn),
/* harmony export */   "placeShips": () => (/* binding */ placeShips),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");


const GAME = {
  shipLengths: [5, 4, 3, 3, 2],
  started: false,
  players: { "player-one": null, "player-two": null },
};

function startGame() {
  GAME.over = false;
  GAME.winner = undefined;
  GAME.currentTurn = "player-one";
  GAME.players["player-one"] = new _player__WEBPACK_IMPORTED_MODULE_0__.Player();
  GAME.players["player-two"] = new _player__WEBPACK_IMPORTED_MODULE_0__.ComputerPlayer(
    GAME.players["player-one"].gameboard
  );
  GAME.started = true;
}

function getGameState() {
  return {
    currentTurn: GAME.currentTurn,
    availableShips: [...GAME.shipLengths],
    isOver: GAME.over,
    winner: GAME.winner,
    players: GAME.players,
    gameboards: {
      "player-one": GAME.players["player-one"]
        ? GAME.players["player-one"].gameboard.getState()
        : null,
      "player-two": GAME.players["player-two"]
        ? GAME.players["player-two"].gameboard.getState()
        : null,
    },
  };
}

function switchTurns() {
  GAME.currentTurn =
    GAME.currentTurn === "player-one" ? "player-two" : "player-one";
}

function nextTurn() {
  switchTurns();
  if (GAME.currentTurn === "player-two") aiPlaysTurn();
}

function placeShips(shipsCoordinates) {
  if (!shipsCoordinates) throw new Error("coordinates argument missing");
  if (!GAME.started) throw new Error(`Game has not started`);

  for (const coordinates of shipsCoordinates) {
    GAME.players["player-one"].gameboard.placeShip(coordinates);
  }
}

function humanPlaysTurn(coordinates) {
  if (!GAME.started) throw new Error("can't play until game has been started ");
  if (!coordinates) throw new Error("coordinates argument missing");
  if (GAME.currentTurn !== "player-one" || GAME.over) {
    throw new Error(`Not human player's turn`);
  }

  const successfulAttack =
    GAME.players["player-two"].gameboard.receiveAttack(coordinates);

  if (successfulAttack) {
    if (GAME.players["player-two"].gameboard.allShipsSunk()) {
      GAME.over = true;
      GAME.winner = "player-one";
    } else {
      nextTurn();
    }

    return {
      player: "player-two",
      gameboardState: GAME.players["player-two"].gameboard.getState(),
    };
  }
}

function aiPlaysTurn() {
  GAME.players["player-two"].attack();

  if (GAME.players["player-one"].gameboard.allShipsSunk()) {
    GAME.over = true;
    GAME.winner = "player-two";
  } else {
    nextTurn();
  }
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GAMEBOARD_HEIGHT": () => (/* binding */ GAMEBOARD_HEIGHT),
/* harmony export */   "GAMEBOARD_WIDTH": () => (/* binding */ GAMEBOARD_WIDTH),
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions */ "./src/helper-functions.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



const GAMEBOARD_WIDTH = 10;
const GAMEBOARD_HEIGHT = 10;

class Gameboard {
  constructor() {
    this.emptyCells = this._setInitialEmptyCells();
  }

  _setInitialEmptyCells() {
    const emptyCells = [];
    for (let x = 0; x < GAMEBOARD_WIDTH; x++) {
      for (let y = 0; y < GAMEBOARD_HEIGHT; y++) {
        emptyCells.push({ x, y });
      }
    }
    return emptyCells;
  }

  ships = [];
  missedAttacks = [];

  getState() {
    return {
      ships: this.ships,
      missedAttacks: this.missedAttacks,
      emptyCells: [...this.emptyCells],
    };
  }

  placeShip(coordinates) {
    const emtpyCoordinates = coordinates.filter((coords) => {
      return (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.arrIncludesObj)(this.emptyCells, coords);
    });

    if (emtpyCoordinates.length !== coordinates.length) {
      throw new Error("Invalid coordinates");
    }

    const ship = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](coordinates.length);
    ship.coordinates = coordinates;
    this.ships.push(ship);

    coordinates.forEach((coords) => {
      const coordsIndex = this.emptyCells.findIndex(
        (cell) => cell.x === coords.x && cell.y === coords.y
      );
      this.emptyCells.splice(coordsIndex, 1);
    });
  }

  // returns whether the attack was successful or not
  receiveAttack(coordinates) {
    for (const ship of this.ships) {
      if ((0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.arrIncludesObj)(ship.coordinates, coordinates)) {
        if ((0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.arrIncludesObj)(ship.hitsTaken, coordinates)) return false;

        ship.hit(coordinates);
        return true;
      }
    }

    // If the coordinates don't belong to any ship, the attack missed.

    // Make sure that the coordinates aren't already in missedAttacks
    if ((0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.arrIncludesObj)(this.missedAttacks, coordinates)) {
      return false;
    }

    this.missedAttacks.push(coordinates);
    return true;
  }

  allShipsSunk() {
    let sunkShips = 0;
    this.ships.forEach((ship) => {
      if (ship.isSunk()) sunkShips++;
    });

    return sunkShips === this.ships.length;
  }
}


/***/ }),

/***/ "./src/helper-functions.js":
/*!*********************************!*\
  !*** ./src/helper-functions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrIncludesObj": () => (/* binding */ arrIncludesObj),
/* harmony export */   "randomIntegerInRange": () => (/* binding */ randomIntegerInRange)
/* harmony export */ });
function randomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arrIncludesObj(arr, obj) {
  const objKeys = Object.keys(obj);
  return arr.some((arrObj) => objKeys.every((key) => arrObj[key] === obj[key]));
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputerPlayer": () => (/* binding */ ComputerPlayer),
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-loop */ "./src/game-loop.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper-functions */ "./src/helper-functions.js");




class Player {
  constructor() {
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}

class ComputerPlayer extends Player {
  constructor(opponentGameboard) {
    if (!opponentGameboard) {
      throw new Error("opponent gameboard argument missing");
    }
    super();
    this.opponentGameboard = opponentGameboard;
    this.legalMoves = this._setInitiallLegalMoves();
    this._randomizeGameboard();
  }

  _setInitiallLegalMoves() {
    const legalMoves = [];
    for (let x = 0; x < _gameboard__WEBPACK_IMPORTED_MODULE_1__.GAMEBOARD_WIDTH; x++) {
      for (let y = 0; y < _gameboard__WEBPACK_IMPORTED_MODULE_1__.GAMEBOARD_HEIGHT; y++) {
        legalMoves.push({ x, y });
      }
    }
    return legalMoves;
  }

  _randomizeGameboard() {
    const emptyCells = this.gameboard.getState().emptyCells;

    const getRandomPlacementCoordinates = (shipLength) => {
      const isHorizontal = [true, false][(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.randomIntegerInRange)(0, 1)];
      const availableCoordinates = [];

      for (const currentCell of emptyCells) {
        if (
          (isHorizontal && currentCell.x > _gameboard__WEBPACK_IMPORTED_MODULE_1__.GAMEBOARD_WIDTH - shipLength) ||
          (!isHorizontal && currentCell.y > _gameboard__WEBPACK_IMPORTED_MODULE_1__.GAMEBOARD_HEIGHT - shipLength)
        ) {
          continue;
        }

        const adjacentCells = [currentCell];
        let nextCell;
        let previousCell = currentCell;

        for (let i = 0; i < shipLength; i++) {
          if (adjacentCells.length === shipLength) {
            availableCoordinates.push(adjacentCells);
            break;
          }

          nextCell = isHorizontal
            ? { x: previousCell.x + 1, y: previousCell.y }
            : { x: previousCell.x, y: previousCell.y + 1 };

          previousCell = nextCell;

          if ((0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(emptyCells, nextCell)) {
            adjacentCells.push(nextCell);
          } else break;
        }
      }

      const chosenCoordinates =
        availableCoordinates[
          (0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.randomIntegerInRange)(0, availableCoordinates.length - 1)
        ];

      const coordinatesForDeletion = [];

      for (let index = 0; index < chosenCoordinates.length; index++) {
        const cellOnTheLeft = {
          x: chosenCoordinates[index].x - 1,
          y: chosenCoordinates[index].y,
        };
        if (
          chosenCoordinates[index].x > 0 &&
          !(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(chosenCoordinates, cellOnTheLeft)
        ) {
          coordinatesForDeletion.push(cellOnTheLeft);
        }

        const cellOnTheRight = {
          x: chosenCoordinates[index].x + 1,
          y: chosenCoordinates[index].y,
        };
        if (
          chosenCoordinates[index].x < _gameboard__WEBPACK_IMPORTED_MODULE_1__.GAMEBOARD_WIDTH - 1 &&
          !(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(chosenCoordinates, cellOnTheRight)
        ) {
          coordinatesForDeletion.push(cellOnTheRight);
        }

        const cellBelow = {
          x: chosenCoordinates[index].x,
          y: chosenCoordinates[index].y - 1,
        };
        if (
          chosenCoordinates[index].y > 0 &&
          !(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(chosenCoordinates, cellBelow)
        ) {
          coordinatesForDeletion.push(cellBelow);
        }

        const cellAbove = {
          x: chosenCoordinates[index].x,
          y: chosenCoordinates[index].y + 1,
        };
        if (
          chosenCoordinates[index].y < _gameboard__WEBPACK_IMPORTED_MODULE_1__.GAMEBOARD_HEIGHT - 1 &&
          !(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(chosenCoordinates, cellAbove)
        ) {
          coordinatesForDeletion.push(cellAbove);
        }
      }

      [...chosenCoordinates, ...coordinatesForDeletion].forEach((coords) => {
        const coordsIndex = emptyCells.findIndex(
          (cell) => cell.x === coords.x && cell.y === coords.y
        );
        emptyCells.splice(coordsIndex, 1);
      });
      return chosenCoordinates;
    };

    (0,_game_loop__WEBPACK_IMPORTED_MODULE_0__.getGameState)().availableShips.forEach((shipLength) => {
      const placementCoordinates = getRandomPlacementCoordinates(shipLength);
      this.gameboard.placeShip(placementCoordinates);
    });
  }

  _getRandomAttackCoordinates() {
    if (!this.legalMoves.length) {
      throw new Error("No more cells left to attack");
    }

    const randomIndex = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.randomIntegerInRange)(0, this.legalMoves.length - 1);
    const attackCoordinates = this.legalMoves[randomIndex];

    //remove the attack from the legal moves, so that the same coordinate isn't attacked twice
    this.legalMoves.splice(randomIndex, 1);

    return attackCoordinates;
  }

  _origin = null;
  _lastCoordinatesAttacked = null;
  _lastCoordinatesArgument = null;
  _lastDirection = null;
  _isVertical = false;
  _isHorizontal = false;

  _verticalPath = { below: [], above: [] };
  _horizontalPath = { left: [], right: [] };

  _getAdjacentAttackCoordinates(coordinates, isDifferentShip) {
    if (!this._origin || isDifferentShip) {
      this._origin = coordinates;
      this._lastCoordinatesArgument = null;
      this._lastDirection = null;
      this._lastCoordinatesAttacked = null;
      this._isVertical = false;
      this._isHorizontal = false;

      // clear and populate horizontal path
      this._horizontalPath.left = [];
      this._horizontalPath.right = [];

      for (let index = coordinates.x - 1; index >= 0; index--) {
        const newAdjacentCoordinates = { x: index, y: coordinates.y };
        if (!(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(this.legalMoves, newAdjacentCoordinates)) {
          break;
        }

        this._horizontalPath.left.unshift(newAdjacentCoordinates);
      }

      for (let index = coordinates.x + 1; index < _gameboard__WEBPACK_IMPORTED_MODULE_1__.GAMEBOARD_WIDTH; index++) {
        const newAdjacentCoordinates = { x: index, y: coordinates.y };
        if (!(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(this.legalMoves, newAdjacentCoordinates)) {
          break;
        }

        this._horizontalPath.right.push(newAdjacentCoordinates);
      }

      // clear and populate vertical path
      this._verticalPath.below = [];
      this._verticalPath.above = [];

      for (let index = coordinates.y - 1; index >= 0; index--) {
        const newAdjacentCoordinates = { x: coordinates.x, y: index };
        if (!(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(this.legalMoves, newAdjacentCoordinates)) {
          break;
        }

        this._verticalPath.below.unshift(newAdjacentCoordinates);
      }

      for (let index = coordinates.y + 1; index < _gameboard__WEBPACK_IMPORTED_MODULE_1__.GAMEBOARD_HEIGHT; index++) {
        const newAdjacentCoordinates = { x: coordinates.x, y: index };
        if (!(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(this.legalMoves, newAdjacentCoordinates)) {
          break;
        }

        this._verticalPath.above.push(newAdjacentCoordinates);
      }
    }

    // Attack all four directions until a there's a hit
    if (coordinates.x === this._origin.x && coordinates.y === this._origin.y) {
      if (!this._lastDirection && this._verticalPath.below.length) {
        this._lastCoordinatesAttacked = this._verticalPath.below.splice(-1)[0];
        this._lastDirection = "below";
      } else if (
        [null, "below"].includes(this._lastDirection) &&
        this._verticalPath.above.length
      ) {
        this._lastCoordinatesAttacked = this._verticalPath.above.shift();
        this._lastDirection = "above";
      } else if (
        [null, "below", "above"].includes(this._lastDirection) &&
        this._horizontalPath.left.length
      ) {
        this._lastCoordinatesAttacked = this._horizontalPath.left.splice(-1)[0];
        this._lastDirection = "left";
      } else {
        this._lastCoordinatesAttacked = this._horizontalPath.right.shift();
        this._lastDirection = "right";
      }

      //remove the attack from the legal moves, so that the same coordinate isn't attacked in the future
      const lastAttackIndex = this.legalMoves.findIndex(
        (coords) =>
          coords.x === this._lastCoordinatesAttacked.x &&
          coords.y === this._lastCoordinatesAttacked.y
      );
      this.legalMoves.splice(lastAttackIndex, 1);

      this._lastCoordinatesArgument = coordinates;
      return this._lastCoordinatesAttacked;
    }

    // The first time there's a hit, see whether the ship is placed horizontally or vertically
    if (
      (coordinates.x !== this._origin.x || coordinates.y !== this._origin.y) &&
      !this._isVertical &&
      !this._isHorizontal
    ) {
      this._lastDirection === "below" || this._lastDirection === "above"
        ? (this._isVertical = true)
        : (this._isHorizontal = true);
    }

    // If the coordinates argument is repeated or we reached the end of that side, we change to the other side.
    if (
      this._isVertical &&
      ((coordinates.x === this._lastCoordinatesArgument.x &&
        coordinates.y === this._lastCoordinatesArgument.y) ||
        !this._verticalPath[this._lastDirection].length)
    ) {
      if (this._lastDirection === "below") {
        this._lastCoordinatesAttacked = this._verticalPath.above.shift();
        this._lastDirection = "above";
      } else {
        this._lastCoordinatesAttacked = this._verticalPath.below.splice(-1)[0];
        this._lastDirection = "below";
      }
    }

    // But if the current coordinates are different from the last coordinates, that means the lastAttack was a hit, so we keep attacking towards that side.
    else if (
      this._isVertical &&
      this._verticalPath[this._lastDirection].length &&
      coordinates.y !== this._lastCoordinatesArgument.y
    ) {
      this._lastCoordinatesAttacked =
        this._lastDirection === "below"
          ? this._verticalPath.below.splice(-1)[0]
          : this._verticalPath.above.shift();
    }

    // And we do the same for the other axis
    if (
      this._isHorizontal &&
      ((coordinates.x === this._lastCoordinatesArgument.x &&
        coordinates.y === this._lastCoordinatesArgument.y) ||
        !this._horizontalPath[this._lastDirection].length)
    ) {
      if (this._lastDirection === "left") {
        this._lastCoordinatesAttacked = this._horizontalPath.right.shift();
        this._lastDirection = "right";
      } else {
        this._lastCoordinatesAttacked = this._horizontalPath.left.splice(-1)[0];
        this._lastDirection = "left";
      }
    } else if (
      this._isHorizontal &&
      this._horizontalPath[this._lastDirection].length &&
      coordinates.x !== this._lastCoordinatesArgument.x
    ) {
      this._lastCoordinatesAttacked =
        this._lastDirection === "left"
          ? this._horizontalPath.left.splice(-1)[0]
          : this._horizontalPath.right.shift();
    }

    //remove the attack from the legal moves, so that the same coordinate isn't attacked in the future
    const lastAttackIndex = this.legalMoves.findIndex(
      (coords) =>
        coords.x === this._lastCoordinatesAttacked.x &&
        coords.y === this._lastCoordinatesAttacked.y
    );
    this.legalMoves.splice(lastAttackIndex, 1);

    this._lastCoordinatesArgument = coordinates;

    return this._lastCoordinatesAttacked;
  }

  lastHit = null;
  isDifferentShip = null;

  attack() {
    const getOpponentTotalHits = () => {
      return this.opponentGameboard.ships.reduce((totalHits, currentShip) => {
        return totalHits + currentShip.hitsTaken.length;
      }, 0);
    };

    const lastShipHitIsNotSunk = () => {
      if (!this.lastHit) return;

      for (const ship of this.opponentGameboard.ships) {
        if ((0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(ship.coordinates, this.lastHit)) {
          return !ship.isSunk();
        }
      }
    };

    if (this.lastHit && lastShipHitIsNotSunk()) {
      const coordinates = this._getAdjacentAttackCoordinates(
        this.lastHit,
        this.isDifferentShip
      );

      if (this.isDifferentShip) this.isDifferentShip = false;

      const opponentHitsBeforeAttack = getOpponentTotalHits();
      const successfulAttack =
        this.opponentGameboard.receiveAttack(coordinates);
      const opponentHitsAfterAttack = getOpponentTotalHits();
      if (
        successfulAttack &&
        opponentHitsAfterAttack > opponentHitsBeforeAttack
      ) {
        this.lastHit = coordinates;

        return successfulAttack;
      }
    } else {
      const opponentHitsBeforeAttack = getOpponentTotalHits();
      const coordinates = this._getRandomAttackCoordinates();
      const successfulAttack =
        this.opponentGameboard.receiveAttack(coordinates);
      const opponentHitsAfterAttack = getOpponentTotalHits();
      this.lastHit =
        opponentHitsAfterAttack > opponentHitsBeforeAttack ? coordinates : null;

      if (!this.isDifferentShip) this.isDifferentShip = true;

      return successfulAttack;
    }
  }
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    if (length === undefined) throw new Error("Constructor argument missing!");

    if (typeof length !== "number" || length < 1) {
      throw new Error("Invalid constructor argument");
    }

    this.length = length;
  }

  coordinates = null;
  hitsTaken = [];

  hit(coordinates) {
    this.hitsTaken.push(coordinates);
  }

  isSunk() {
    return this.hitsTaken.length === this.length;
  }
}


/***/ }),

/***/ "./src/user-interface/ui-game-over.js":
/*!********************************************!*\
  !*** ./src/user-interface/ui-game-over.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayGameOverScreen": () => (/* binding */ displayGameOverScreen)
/* harmony export */ });
/* harmony import */ var _styles_game_over_screen_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/game-over-screen.css */ "./src/styles/game-over-screen.css");
/* harmony import */ var _styles_ships_layout_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ships-layout.css */ "./src/styles/ships-layout.css");
/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-interface */ "./src/user-interface/user-interface.js");




function displayGameOverScreen(winner) {
  const gameOverScreen = document.createElement("section");
  gameOverScreen.classList.add("screen");
  gameOverScreen.id = "game-over";

  const gameOverText = document.createElement("h1");
  gameOverScreen.appendChild(gameOverText);
  gameOverText.innerText = `Game Over, you ${
    winner === "player-one" ? "won!" : "lost"
  }`;

  const buttons = document.createElement("section");
  buttons.classList.add("buttons");
  gameOverScreen.appendChild(buttons);

  const playAgain = document.createElement("i");
  playAgain.classList.add("fa-solid", "fa-arrow-rotate-left");
  playAgain.title = "PLAY AGAIN";
  playAgain.addEventListener("click", _user_interface__WEBPACK_IMPORTED_MODULE_2__["default"]);
  buttons.appendChild(playAgain);

  container.appendChild(gameOverScreen);
}


/***/ }),

/***/ "./src/user-interface/ui-gameboard.js":
/*!********************************************!*\
  !*** ./src/user-interface/ui-gameboard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomizedGameboard": () => (/* binding */ randomizedGameboard),
/* harmony export */   "updateGameboard": () => (/* binding */ updateGameboard),
/* harmony export */   "updateShipsTracker": () => (/* binding */ updateShipsTracker)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard */ "./src/gameboard.js");
/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-loop */ "./src/game-loop.js");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-functions */ "./src/helper-functions.js");
/* harmony import */ var _ui_game_over__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-game-over */ "./src/user-interface/ui-game-over.js");
/* harmony import */ var _styles_gameboard_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/gameboard.css */ "./src/styles/gameboard.css");






function updateShipsTracker(player) {
  const gameState = (0,_game_loop__WEBPACK_IMPORTED_MODULE_1__.getGameState)();

  const longestShipLength = Math.max(...gameState.availableShips);

  const shipTracker = document.createElement("section");
  shipTracker.classList.add("ships-tracker");
  const shipsWrapper = document.createElement("section");
  shipsWrapper.classList.add("ships-wrapper");
  shipTracker.appendChild(shipsWrapper);
  gameState.gameboards[player].ships.forEach((ship) => {
    const uiShip = document.createElement("section");
    uiShip.classList.add("ship");
    uiShip.style.width = `${(100 / longestShipLength) * ship.length}%`;
    if (ship.isSunk()) uiShip.classList.add("sunk");
    for (
      let shipCellNumber = 0;
      shipCellNumber < ship.length;
      shipCellNumber++
    ) {
      const uiShipSubdivision = document.createElement("section");
      uiShipSubdivision.classList.add("subdivision");
      uiShip.appendChild(uiShipSubdivision);
    }
    shipsWrapper.appendChild(uiShip);
  });

  const gameboardWrapper = document.querySelector(
    `.gameboard-wrapper#${player}`
  );
  const previousTracker = gameboardWrapper.querySelector(".ships-tracker");

  if (previousTracker) {
    previousTracker.replaceWith(shipTracker);
  } else {
    player.includes("one")
      ? gameboardWrapper.firstChild.before(shipTracker)
      : gameboardWrapper.appendChild(shipTracker);
  }
}

function createGameboard() {
  const gameboard = document.createElement("section");
  gameboard.classList.add("gameboard");

  for (let columnNumber = 0; columnNumber < _gameboard__WEBPACK_IMPORTED_MODULE_0__.GAMEBOARD_WIDTH; columnNumber++) {
    const column = document.createElement("section");
    column.classList.add("column");
    column.id = `column-${columnNumber}`;
    gameboard.appendChild(column);

    for (let rowNumber = _gameboard__WEBPACK_IMPORTED_MODULE_0__.GAMEBOARD_HEIGHT - 1; rowNumber >= 0; rowNumber--) {
      const cell = document.createElement("section");
      cell.classList.add("cell");
      const cellCoordinates = `{x: ${columnNumber}, y: ${rowNumber}}`;
      cell.setAttribute("data-coordinates", cellCoordinates);
      column.appendChild(cell);
    }
  }

  return gameboard;
}

function updateGameboards() {
  const gameState = (0,_game_loop__WEBPACK_IMPORTED_MODULE_1__.getGameState)();
  updateGameboard("player-two");
  updateShipsTracker("player-two");

  if (gameState.isOver && gameState.winner === "player-one") {
    (0,_ui_game_over__WEBPACK_IMPORTED_MODULE_3__.displayGameOverScreen)("player-one");
    return;
  }

  const playerTwoGameboard = document.querySelector(
    ".gameboard-wrapper#player-two .gameboard"
  );
  playerTwoGameboard.classList.toggle("disabled");

  const thinkingTime = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.randomIntegerInRange)(600, 1000);
  setTimeout(() => {
    updateGameboard("player-one");
    updateShipsTracker("player-one");
    playerTwoGameboard.classList.toggle("disabled");

    if (gameState.isOver) {
      (0,_ui_game_over__WEBPACK_IMPORTED_MODULE_3__.displayGameOverScreen)("player-two");
    }
  }, thinkingTime);
}

function updateGameboard(player) {
  const gameboard = createGameboard();

  const gameboardState = (0,_game_loop__WEBPACK_IMPORTED_MODULE_1__.getGameState)().gameboards[player];
  const isAiGameboard = player.includes("two");

  for (const ship of gameboardState.ships) {
    for (const coords of ship.coordinates) {
      const gameboardCell = gameboard.querySelector(
        `[data-coordinates = "{x: ${coords.x}, y: ${coords.y}}"]`
      );

      // The ships must not be visible in the AI's gameboard
      if (!isAiGameboard) gameboardCell.classList.add("ship");

      if (ship.isSunk() || (0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(ship.hitsTaken, coords)) {
        gameboardCell.classList.add(ship.isSunk() ? "sunk" : "hit");

        const xMark = document.createElement("i");
        xMark.classList.add("fa-solid", "fa-xmark");
        gameboardCell.appendChild(xMark);
      }
    }
  }

  for (const missedAttack of gameboardState.missedAttacks) {
    const gameboardCell = gameboard.querySelector(
      `[data-coordinates = "{x: ${missedAttack.x}, y: ${missedAttack.y}}"]`
    );
    gameboardCell.classList.add("missed-attack");

    const dot = document.createElement("i");
    dot.classList.add("fa-solid", "fa-circle");
    gameboardCell.appendChild(dot);
  }

  if (isAiGameboard) {
    const cells = gameboard.querySelectorAll(".cell");

    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        (0,_game_loop__WEBPACK_IMPORTED_MODULE_1__.humanPlaysTurn)({
          x: Number(cell.getAttribute("data-coordinates")[4]),
          y: Number(cell.getAttribute("data-coordinates")[10]),
        });

        updateGameboards();
      });
    });
  }
  const gameboardWrapper = document.querySelector(
    `.gameboard-wrapper#${player}`
  );
  const previousGameboard = gameboardWrapper.querySelector(".gameboard");

  previousGameboard
    ? previousGameboard.replaceWith(gameboard)
    : gameboardWrapper.appendChild(gameboard);
}

function randomizedGameboard() {
  const gameboard = createGameboard();
  const emptyCells = [];
  gameboard.querySelectorAll(".cell").forEach((cell) => {
    const x = Number(cell.getAttribute("data-coordinates")[4]);
    const y = Number(cell.getAttribute("data-coordinates")[10]);
    emptyCells.push({ x, y });
  });

  const getRandomPlacementCoordinates = (shipLength) => {
    const isHorizontal = [true, false][(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.randomIntegerInRange)(0, 1)];
    const availableCoordinates = [];

    for (const currentCell of emptyCells) {
      if (
        (isHorizontal && currentCell.x > _gameboard__WEBPACK_IMPORTED_MODULE_0__.GAMEBOARD_WIDTH - shipLength) ||
        (!isHorizontal && currentCell.y > _gameboard__WEBPACK_IMPORTED_MODULE_0__.GAMEBOARD_HEIGHT - shipLength)
      ) {
        continue;
      }

      const adjacentCells = [currentCell];
      let nextCell;
      let previousCell = currentCell;

      for (let i = 0; i < shipLength; i++) {
        if (adjacentCells.length === shipLength) {
          availableCoordinates.push(adjacentCells);
          break;
        }

        nextCell = isHorizontal
          ? { x: previousCell.x + 1, y: previousCell.y }
          : { x: previousCell.x, y: previousCell.y + 1 };

        previousCell = nextCell;

        if ((0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(emptyCells, nextCell)) {
          adjacentCells.push(nextCell);
        } else break;
      }
    }

    const chosenCoordinates =
      availableCoordinates[
        (0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.randomIntegerInRange)(0, availableCoordinates.length - 1)
      ];

    const coordinatesForDeletion = [];

    for (let index = 0; index < chosenCoordinates.length; index++) {
      const cellOnTheLeft = {
        x: chosenCoordinates[index].x - 1,
        y: chosenCoordinates[index].y,
      };
      if (
        chosenCoordinates[index].x > 0 &&
        !(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(chosenCoordinates, cellOnTheLeft)
      ) {
        coordinatesForDeletion.push(cellOnTheLeft);
      }

      const cellOnTheRight = {
        x: chosenCoordinates[index].x + 1,
        y: chosenCoordinates[index].y,
      };
      if (
        chosenCoordinates[index].x < _gameboard__WEBPACK_IMPORTED_MODULE_0__.GAMEBOARD_WIDTH - 1 &&
        !(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(chosenCoordinates, cellOnTheRight)
      ) {
        coordinatesForDeletion.push(cellOnTheRight);
      }

      const cellBelow = {
        x: chosenCoordinates[index].x,
        y: chosenCoordinates[index].y - 1,
      };
      if (
        chosenCoordinates[index].y > 0 &&
        !(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(chosenCoordinates, cellBelow)
      ) {
        coordinatesForDeletion.push(cellBelow);
      }

      const cellAbove = {
        x: chosenCoordinates[index].x,
        y: chosenCoordinates[index].y + 1,
      };
      if (
        chosenCoordinates[index].y < _gameboard__WEBPACK_IMPORTED_MODULE_0__.GAMEBOARD_HEIGHT - 1 &&
        !(0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(chosenCoordinates, cellAbove)
      ) {
        coordinatesForDeletion.push(cellAbove);
      }
    }

    [...chosenCoordinates, ...coordinatesForDeletion].forEach((coords) => {
      const coordsIndex = emptyCells.findIndex(
        (cell) => cell.x === coords.x && cell.y === coords.y
      );
      emptyCells.splice(coordsIndex, 1);
    });
    return chosenCoordinates;
  };

  let shipsCoordinates = [];

  (0,_game_loop__WEBPACK_IMPORTED_MODULE_1__.getGameState)().availableShips.forEach((shipLength) => {
    const placementCoordinates = getRandomPlacementCoordinates(shipLength);
    shipsCoordinates.push(placementCoordinates);
    placementCoordinates.forEach((coords) => {
      gameboard
        .querySelector(
          `.cell[data-coordinates='{x: ${coords.x}, y: ${coords.y}}']`
        )
        .classList.add("ship");
    });
  });

  gameboard.setAttribute(
    "data-ships-coordinates",
    JSON.stringify(shipsCoordinates)
  );
  return gameboard;
}


/***/ }),

/***/ "./src/user-interface/user-interface.js":
/*!**********************************************!*\
  !*** ./src/user-interface/user-interface.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayShipsLayoutScreen)
/* harmony export */ });
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_battle_screen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/battle-screen.css */ "./src/styles/battle-screen.css");
/* harmony import */ var _ui_gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-gameboard */ "./src/user-interface/ui-gameboard.js");
/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-loop */ "./src/game-loop.js");






const container = document.querySelector("#container");

function displayBattle() {
  container.innerHTML = "";

  const battleScreen = document.createElement("section");
  battleScreen.classList.add("screen");
  battleScreen.id = "battle";
  container.appendChild(battleScreen);

  const PLAYERS = ["player-one", "player-two"];

  PLAYERS.forEach((player) => {
    const gameboardWrapper = document.createElement("section");
    gameboardWrapper.classList.add("gameboard-wrapper");
    gameboardWrapper.id = player;
    battleScreen.appendChild(gameboardWrapper);
    (0,_ui_gameboard__WEBPACK_IMPORTED_MODULE_2__.updateGameboard)(player);
    (0,_ui_gameboard__WEBPACK_IMPORTED_MODULE_2__.updateShipsTracker)(player);
  });
}

function displayBattleWithShips(shipsCoordinates) {
  (0,_game_loop__WEBPACK_IMPORTED_MODULE_3__.startGame)();
  (0,_game_loop__WEBPACK_IMPORTED_MODULE_3__.placeShips)(shipsCoordinates);
  displayBattle();
}

function displayShipsLayoutScreen() {
  container.innerHTML = "";

  const shipsLayoutScreen = document.createElement("section");
  shipsLayoutScreen.classList.add("screen");
  shipsLayoutScreen.id = "ships-layout";
  container.appendChild(shipsLayoutScreen);

  const gameboardWrapper = document.createElement("section");
  gameboardWrapper.classList.add("gameboard-wrapper");
  shipsLayoutScreen.appendChild(gameboardWrapper);

  gameboardWrapper.append((0,_ui_gameboard__WEBPACK_IMPORTED_MODULE_2__.randomizedGameboard)());

  const buttons = document.createElement("section");
  buttons.classList.add("buttons");
  gameboardWrapper.appendChild(buttons);

  const randomizeButton = document.createElement("button");
  randomizeButton.id = "randomize";
  randomizeButton.innerText = "Randomize";
  randomizeButton.addEventListener("click", () => {
    shipsLayoutScreen
      .querySelector(".gameboard")
      .replaceWith((0,_ui_gameboard__WEBPACK_IMPORTED_MODULE_2__.randomizedGameboard)());
  });
  buttons.appendChild(randomizeButton);

  const playButton = document.createElement("button");
  playButton.id = "play";
  playButton.innerText = "Play";
  playButton.addEventListener("click", () => {
    const shipsCoordinates = JSON.parse(
      gameboardWrapper
        .querySelector(".gameboard")
        .getAttribute("data-ships-coordinates")
    );

    displayBattleWithShips(shipsCoordinates);
  });
  buttons.appendChild(playButton);
}

displayShipsLayoutScreen();


/***/ }),

/***/ "./src/images/wave.png":
/*!*****************************!*\
  !*** ./src/images/wave.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c42c2b3b7212023353c.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/user-interface/user-interface.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7QUFDWCxFQUFFLHNEQUFVO0FBQ1o7QUFDQTs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsa0VBQW1COztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtFQUFtQjtBQUN0QyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2JhdHRsZS1zY3JlZW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcHMtbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvYmF0dGxlLXNjcmVlbi5jc3M/YzNmYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lLW92ZXItc2NyZWVuLmNzcz9jMzI5Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3M/MjE4NyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3NoaXBzLWxheW91dC5jc3M/MzAwZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVyLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91c2VyLWludGVyZmFjZS91aS1nYW1lLW92ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91c2VyLWludGVyZmFjZS91aS1nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91c2VyLWludGVyZmFjZS91c2VyLWludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNiYXR0bGUuc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jYmF0dGxlLnNjcmVlbiAjcGxheWVyLW9uZSAuZ2FtZWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI2JhdHRsZS5zY3JlZW4gI3BsYXllci1vbmUgLmdhbWVib2FyZCAuY2VsbDpub3QoLnNoaXApOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xcbiAgI2JhdHRsZS5zY3JlZW4ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JhdHRsZS1zY3JlZW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2JhdHRsZS5zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNiYXR0bGUuc2NyZWVuICNwbGF5ZXItb25lIC5nYW1lYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4jYmF0dGxlLnNjcmVlbiAjcGxheWVyLW9uZSAuZ2FtZWJvYXJkIC5jZWxsOm5vdCguc2hpcCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XFxuICAjYmF0dGxlLnNjcmVlbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JlZW4jZ2FtZS1vdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA3MCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2NyZWVuI2dhbWUtb3ZlciAuYnV0dG9ucyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uc2NyZWVuI2dhbWUtb3ZlciAuYnV0dG9ucyA+ICoge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxufVxcblxcbi5zY3JlZW4jZ2FtZS1vdmVyIC5idXR0b25zID4gKjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZS1vdmVyLXNjcmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNjcmVlbiNnYW1lLW92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDcwJSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zY3JlZW4jZ2FtZS1vdmVyIC5idXR0b25zIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5zY3JlZW4jZ2FtZS1vdmVyIC5idXR0b25zID4gKiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuXFxuLnNjcmVlbiNnYW1lLW92ZXIgLmJ1dHRvbnMgPiAqOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1nYW1lYm9hcmQtd2lkdGg6IG1pbig5MCUsIDUwMHB4KTtcXG4gIC0tbWlzc2VkLWF0dGFjay1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxuICAtLXNoaXAtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gIC0taGl0LXNoaXAtY29sb3I6IGxpZ2h0cGluaztcXG4gIC0tc3Vuay1zaGlwLWNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgZmxleDogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgYXNwZWN0LXJhdGlvOiAyLzI7XFxuICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciA1MDBtcztcXG59XFxuXFxuLmdhbWVib2FyZCA+IC5jb2x1bW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwge1xcbiAgZmxleDogMTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBtaWRuaWdodGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZmZWQ7IC8qIHNsaWdodGx5IHRyYW5zcGFyZW50IGdob3N0d2hpdGUqL1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDJweDtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMjQsIDIzMCk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5oaXQsXFxuLmdhbWVib2FyZCAuY2VsbC5zdW5rLFxcbi5nYW1lYm9hcmQgLmNlbGwubWlzc2VkLWF0dGFjayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmstc2hpcC1jb2xvcik7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwubWlzc2VkLWF0dGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWQtYXR0YWNrLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMC40cmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLmRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgY3Vyc29yOiB3YWl0O1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcblxcbi5nYW1lYm9hcmQuZGlzYWJsZWQgLmNlbGwge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQtd3JhcHBlciAuc2hpcHMtdHJhY2tlciA+IC5zaGlwcy13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci10d28gLnNoaXBzLXRyYWNrZXIgPiAuc2hpcHMtd3JhcHBlciB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnNoaXBzLXRyYWNrZXIgLnNoaXAge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnNoaXBzLXRyYWNrZXIgLnNoaXAgPiAuc3ViZGl2aXNpb24ge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uc2hpcHMtdHJhY2tlciAuc2hpcC5zdW5rID4gLnN1YmRpdmlzaW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmstc2hpcC1jb2xvcik7XFxufVxcblxcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XFxuICAuZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxMCUgMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxuICAuZ2FtZWJvYXJkIC5jZWxsIHtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzQwcHgpIHtcXG4gIC5nYW1lYm9hcmQtd3JhcHBlciNwbGF5ZXItb25lIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci10d28ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyIC5zaGlwcy10cmFja2VyIHtcXG4gICAgd2lkdGg6IHZhcigtLWdhbWVib2FyZC13aWR0aCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5nYW1lYm9hcmQtd3JhcHBlciNwbGF5ZXItdHdvIC5zaGlwcy10cmFja2VyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5nYW1lYm9hcmQtd3JhcHBlciNwbGF5ZXItb25lIC5zaGlwcy10cmFja2VyID4gLnNoaXBzLXdyYXBwZXIge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5nYW1lYm9hcmQtd3JhcHBlciNwbGF5ZXItdHdvIC5zaGlwcy10cmFja2VyID4gLnNoaXBzLXdyYXBwZXIge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCwrQkFBK0I7RUFDL0IsMkJBQTJCLEVBQUUsbUNBQW1DO0VBQ2hFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsT0FBTztFQUNQLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWdhbWVib2FyZC13aWR0aDogbWluKDkwJSwgNTAwcHgpO1xcbiAgLS1taXNzZWQtYXR0YWNrLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXG4gIC0tc2hpcC1jb2xvcjogc3RlZWxibHVlO1xcbiAgLS1oaXQtc2hpcC1jb2xvcjogbGlnaHRwaW5rO1xcbiAgLS1zdW5rLXNoaXAtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi5nYW1lYm9hcmQtd3JhcHBlciB7XFxuICBmbGV4OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBhc3BlY3QtcmF0aW86IDIvMjtcXG4gIHdpZHRoOiB2YXIoLS1nYW1lYm9hcmQtd2lkdGgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDUwMG1zO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gLmNvbHVtbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbCB7XFxuICBmbGV4OiAxO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIG1pZG5pZ2h0Ymx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZmZlZDsgLyogc2xpZ2h0bHkgdHJhbnNwYXJlbnQgZ2hvc3R3aGl0ZSovXFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMnB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIyNCwgMjMwKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsLmhpdCxcXG4uZ2FtZWJvYXJkIC5jZWxsLnN1bmssXFxuLmdhbWVib2FyZCAuY2VsbC5taXNzZWQtYXR0YWNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuay1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5taXNzZWQtYXR0YWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3NlZC1hdHRhY2stY29sb3IpO1xcbiAgZm9udC1zaXplOiAwLjRyZW07XFxufVxcblxcbi5nYW1lYm9hcmQuZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBjdXJzb3I6IHdhaXQ7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG59XFxuXFxuLmdhbWVib2FyZC5kaXNhYmxlZCAuY2VsbCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZC13cmFwcGVyIC5zaGlwcy10cmFja2VyID4gLnNoaXBzLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLXR3byAuc2hpcHMtdHJhY2tlciA+IC5zaGlwcy13cmFwcGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc2hpcHMtdHJhY2tlciAuc2hpcCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4uc2hpcHMtdHJhY2tlciAuc2hpcCA+IC5zdWJkaXZpc2lvbiB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5zaGlwcy10cmFja2VyIC5zaGlwLnN1bmsgPiAuc3ViZGl2aXNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuay1zaGlwLWNvbG9yKTtcXG59XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcXG4gIC5nYW1lYm9hcmQtd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDEwJSAwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcXG4gIC5nYW1lYm9hcmQgLmNlbGwge1xcbiAgICBtYXJnaW46IDFweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNDBweCkge1xcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci1vbmUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuXFxuICAuZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLXR3byB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuZ2FtZWJvYXJkLXdyYXBwZXIgLnNoaXBzLXRyYWNrZXIge1xcbiAgICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci10d28gLnNoaXBzLXRyYWNrZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci1vbmUgLnNoaXBzLXRyYWNrZXIgPiAuc2hpcHMtd3JhcHBlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci10d28gLnNoaXBzLXRyYWNrZXIgPiAuc2hpcHMtd3JhcHBlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvd2F2ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTgwLjRkZWcsXFxuICAgIHJnYigxMzQgMjAyIDI1NSkgLTIuMiUsXFxuICAgICNmZmZiZjUgODMuNSVcXG4gICk7XFxufVxcblxcbiN3YXZlcy13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI3dhdmVzLXdyYXBwZXIgPiAud2F2ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMjAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJSAxMDAlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYW5pbWF0aW9uOiBtb3ZlX3dhdmUgNXMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG4jd2F2ZXMtd3JhcHBlciA+IC53YXZlOm50aC1vZi10eXBlKDIpIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGFuaW1hdGlvbjogbW92ZV93YXZlIDRzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuXFxuI3dhdmVzLXdyYXBwZXIgPiAud2F2ZTpudGgtb2YtdHlwZSgzKSB7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBhbmltYXRpb246IG1vdmVfd2F2ZSA3cyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZV93YXZlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSk7XFxuICAgIGhlaWdodDogNTUlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEI7Ozs7R0FJQztBQUNIOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gseURBQTJDO0VBQzNDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixXQUFXO0VBQ2I7RUFDQTtJQUNFLHFDQUFxQztJQUNyQyxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTgwLjRkZWcsXFxuICAgIHJnYigxMzQgMjAyIDI1NSkgLTIuMiUsXFxuICAgICNmZmZiZjUgODMuNSVcXG4gICk7XFxufVxcblxcbiN3YXZlcy13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGJvdHRvbTogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI3dhdmVzLXdyYXBwZXIgPiAud2F2ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMjAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL3dhdmUucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJSAxMDAlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYW5pbWF0aW9uOiBtb3ZlX3dhdmUgNXMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG4jd2F2ZXMtd3JhcHBlciA+IC53YXZlOm50aC1vZi10eXBlKDIpIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGFuaW1hdGlvbjogbW92ZV93YXZlIDRzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuXFxuI3dhdmVzLXdyYXBwZXIgPiAud2F2ZTpudGgtb2YtdHlwZSgzKSB7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBhbmltYXRpb246IG1vdmVfd2F2ZSA3cyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZV93YXZlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSk7XFxuICAgIGhlaWdodDogNTUlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNjcmVlbiNzaGlwcy1sYXlvdXQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCBpbnB1dCNuYW1lIHtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IC5nYW1lYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCAuZ2FtZWJvYXJkIC5jZWxsOm5vdCguc2hpcCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0I25hbWUge1xcbiAgb3V0bGluZTogc29saWQgMnB4O1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCBpbnB1dCNuYW1lLnZhbGlkIHtcXG4gIG91dGxpbmUtY29sb3I6IGxpbWU7XFxufVxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0I25hbWUuaW52YWxpZCB7XFxuICBvdXRsaW5lLWNvbG9yOiBob3RwaW5rO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmUtY29sb3I6IHNreWJsdWU7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IC5nYW1lYm9hcmQtd3JhcHBlciAuYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IHZhcigtLWdhbWVib2FyZC13aWR0aCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IC5nYW1lYm9hcmQtd3JhcHBlciAuYnV0dG9ucyA+ICoge1xcbiAgd2lkdGg6IDEwY2g7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zaGlwcy1sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zY3JlZW4jc2hpcHMtbGF5b3V0IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQjbmFtZSB7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IC5nYW1lYm9hcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCAuZ2FtZWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZCAuY2VsbDpub3QoLnNoaXApOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCBpbnB1dCNuYW1lIHtcXG4gIG91dGxpbmU6IHNvbGlkIDJweDtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQjbmFtZS52YWxpZCB7XFxuICBvdXRsaW5lLWNvbG9yOiBsaW1lO1xcbn1cXG4uc2NyZWVuI3NoaXBzLWxheW91dCBpbnB1dCNuYW1lLmludmFsaWQge1xcbiAgb3V0bGluZS1jb2xvcjogaG90cGluaztcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lLWNvbG9yOiBza3libHVlO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCAuZ2FtZWJvYXJkLXdyYXBwZXIgLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiB2YXIoLS1nYW1lYm9hcmQtd2lkdGgpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCAuZ2FtZWJvYXJkLXdyYXBwZXIgLmJ1dHRvbnMgPiAqIHtcXG4gIHdpZHRoOiAxMGNoO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXR0bGUtc2NyZWVuLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmF0dGxlLXNjcmVlbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1vdmVyLXNjcmVlbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUtb3Zlci1zY3JlZW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzLWxheW91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzLWxheW91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ29tcHV0ZXJQbGF5ZXIsIFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBHQU1FID0ge1xuICBzaGlwTGVuZ3RoczogWzUsIDQsIDMsIDMsIDJdLFxuICBzdGFydGVkOiBmYWxzZSxcbiAgcGxheWVyczogeyBcInBsYXllci1vbmVcIjogbnVsbCwgXCJwbGF5ZXItdHdvXCI6IG51bGwgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIEdBTUUub3ZlciA9IGZhbHNlO1xuICBHQU1FLndpbm5lciA9IHVuZGVmaW5lZDtcbiAgR0FNRS5jdXJyZW50VHVybiA9IFwicGxheWVyLW9uZVwiO1xuICBHQU1FLnBsYXllcnNbXCJwbGF5ZXItb25lXCJdID0gbmV3IFBsYXllcigpO1xuICBHQU1FLnBsYXllcnNbXCJwbGF5ZXItdHdvXCJdID0gbmV3IENvbXB1dGVyUGxheWVyKFxuICAgIEdBTUUucGxheWVyc1tcInBsYXllci1vbmVcIl0uZ2FtZWJvYXJkXG4gICk7XG4gIEdBTUUuc3RhcnRlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHYW1lU3RhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFR1cm46IEdBTUUuY3VycmVudFR1cm4sXG4gICAgYXZhaWxhYmxlU2hpcHM6IFsuLi5HQU1FLnNoaXBMZW5ndGhzXSxcbiAgICBpc092ZXI6IEdBTUUub3ZlcixcbiAgICB3aW5uZXI6IEdBTUUud2lubmVyLFxuICAgIHBsYXllcnM6IEdBTUUucGxheWVycyxcbiAgICBnYW1lYm9hcmRzOiB7XG4gICAgICBcInBsYXllci1vbmVcIjogR0FNRS5wbGF5ZXJzW1wicGxheWVyLW9uZVwiXVxuICAgICAgICA/IEdBTUUucGxheWVyc1tcInBsYXllci1vbmVcIl0uZ2FtZWJvYXJkLmdldFN0YXRlKClcbiAgICAgICAgOiBudWxsLFxuICAgICAgXCJwbGF5ZXItdHdvXCI6IEdBTUUucGxheWVyc1tcInBsYXllci10d29cIl1cbiAgICAgICAgPyBHQU1FLnBsYXllcnNbXCJwbGF5ZXItdHdvXCJdLmdhbWVib2FyZC5nZXRTdGF0ZSgpXG4gICAgICAgIDogbnVsbCxcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUdXJucygpIHtcbiAgR0FNRS5jdXJyZW50VHVybiA9XG4gICAgR0FNRS5jdXJyZW50VHVybiA9PT0gXCJwbGF5ZXItb25lXCIgPyBcInBsYXllci10d29cIiA6IFwicGxheWVyLW9uZVwiO1xufVxuXG5mdW5jdGlvbiBuZXh0VHVybigpIHtcbiAgc3dpdGNoVHVybnMoKTtcbiAgaWYgKEdBTUUuY3VycmVudFR1cm4gPT09IFwicGxheWVyLXR3b1wiKSBhaVBsYXlzVHVybigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwcyhzaGlwc0Nvb3JkaW5hdGVzKSB7XG4gIGlmICghc2hpcHNDb29yZGluYXRlcykgdGhyb3cgbmV3IEVycm9yKFwiY29vcmRpbmF0ZXMgYXJndW1lbnQgbWlzc2luZ1wiKTtcbiAgaWYgKCFHQU1FLnN0YXJ0ZWQpIHRocm93IG5ldyBFcnJvcihgR2FtZSBoYXMgbm90IHN0YXJ0ZWRgKTtcblxuICBmb3IgKGNvbnN0IGNvb3JkaW5hdGVzIG9mIHNoaXBzQ29vcmRpbmF0ZXMpIHtcbiAgICBHQU1FLnBsYXllcnNbXCJwbGF5ZXItb25lXCJdLmdhbWVib2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodW1hblBsYXlzVHVybihjb29yZGluYXRlcykge1xuICBpZiAoIUdBTUUuc3RhcnRlZCkgdGhyb3cgbmV3IEVycm9yKFwiY2FuJ3QgcGxheSB1bnRpbCBnYW1lIGhhcyBiZWVuIHN0YXJ0ZWQgXCIpO1xuICBpZiAoIWNvb3JkaW5hdGVzKSB0aHJvdyBuZXcgRXJyb3IoXCJjb29yZGluYXRlcyBhcmd1bWVudCBtaXNzaW5nXCIpO1xuICBpZiAoR0FNRS5jdXJyZW50VHVybiAhPT0gXCJwbGF5ZXItb25lXCIgfHwgR0FNRS5vdmVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgaHVtYW4gcGxheWVyJ3MgdHVybmApO1xuICB9XG5cbiAgY29uc3Qgc3VjY2Vzc2Z1bEF0dGFjayA9XG4gICAgR0FNRS5wbGF5ZXJzW1wicGxheWVyLXR3b1wiXS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG5cbiAgaWYgKHN1Y2Nlc3NmdWxBdHRhY2spIHtcbiAgICBpZiAoR0FNRS5wbGF5ZXJzW1wicGxheWVyLXR3b1wiXS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIEdBTUUub3ZlciA9IHRydWU7XG4gICAgICBHQU1FLndpbm5lciA9IFwicGxheWVyLW9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0VHVybigpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwbGF5ZXI6IFwicGxheWVyLXR3b1wiLFxuICAgICAgZ2FtZWJvYXJkU3RhdGU6IEdBTUUucGxheWVyc1tcInBsYXllci10d29cIl0uZ2FtZWJvYXJkLmdldFN0YXRlKCksXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhaVBsYXlzVHVybigpIHtcbiAgR0FNRS5wbGF5ZXJzW1wicGxheWVyLXR3b1wiXS5hdHRhY2soKTtcblxuICBpZiAoR0FNRS5wbGF5ZXJzW1wicGxheWVyLW9uZVwiXS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICBHQU1FLm92ZXIgPSB0cnVlO1xuICAgIEdBTUUud2lubmVyID0gXCJwbGF5ZXItdHdvXCI7XG4gIH0gZWxzZSB7XG4gICAgbmV4dFR1cm4oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYXJySW5jbHVkZXNPYmogfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjb25zdCBHQU1FQk9BUkRfV0lEVEggPSAxMDtcbmV4cG9ydCBjb25zdCBHQU1FQk9BUkRfSEVJR0hUID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZW1wdHlDZWxscyA9IHRoaXMuX3NldEluaXRpYWxFbXB0eUNlbGxzKCk7XG4gIH1cblxuICBfc2V0SW5pdGlhbEVtcHR5Q2VsbHMoKSB7XG4gICAgY29uc3QgZW1wdHlDZWxscyA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgR0FNRUJPQVJEX1dJRFRIOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgR0FNRUJPQVJEX0hFSUdIVDsgeSsrKSB7XG4gICAgICAgIGVtcHR5Q2VsbHMucHVzaCh7IHgsIHkgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbXB0eUNlbGxzO1xuICB9XG5cbiAgc2hpcHMgPSBbXTtcbiAgbWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaGlwczogdGhpcy5zaGlwcyxcbiAgICAgIG1pc3NlZEF0dGFja3M6IHRoaXMubWlzc2VkQXR0YWNrcyxcbiAgICAgIGVtcHR5Q2VsbHM6IFsuLi50aGlzLmVtcHR5Q2VsbHNdLFxuICAgIH07XG4gIH1cblxuICBwbGFjZVNoaXAoY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBlbXRweUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMuZmlsdGVyKChjb29yZHMpID0+IHtcbiAgICAgIHJldHVybiBhcnJJbmNsdWRlc09iaih0aGlzLmVtcHR5Q2VsbHMsIGNvb3Jkcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoZW10cHlDb29yZGluYXRlcy5sZW5ndGggIT09IGNvb3JkaW5hdGVzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlc1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoY29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgICBzaGlwLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRzKSA9PiB7XG4gICAgICBjb25zdCBjb29yZHNJbmRleCA9IHRoaXMuZW1wdHlDZWxscy5maW5kSW5kZXgoXG4gICAgICAgIChjZWxsKSA9PiBjZWxsLnggPT09IGNvb3Jkcy54ICYmIGNlbGwueSA9PT0gY29vcmRzLnlcbiAgICAgICk7XG4gICAgICB0aGlzLmVtcHR5Q2VsbHMuc3BsaWNlKGNvb3Jkc0luZGV4LCAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHJldHVybnMgd2hldGhlciB0aGUgYXR0YWNrIHdhcyBzdWNjZXNzZnVsIG9yIG5vdFxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgIGlmIChhcnJJbmNsdWRlc09iaihzaGlwLmNvb3JkaW5hdGVzLCBjb29yZGluYXRlcykpIHtcbiAgICAgICAgaWYgKGFyckluY2x1ZGVzT2JqKHNoaXAuaGl0c1Rha2VuLCBjb29yZGluYXRlcykpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBzaGlwLmhpdChjb29yZGluYXRlcyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBjb29yZGluYXRlcyBkb24ndCBiZWxvbmcgdG8gYW55IHNoaXAsIHRoZSBhdHRhY2sgbWlzc2VkLlxuXG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGNvb3JkaW5hdGVzIGFyZW4ndCBhbHJlYWR5IGluIG1pc3NlZEF0dGFja3NcbiAgICBpZiAoYXJySW5jbHVkZXNPYmoodGhpcy5taXNzZWRBdHRhY2tzLCBjb29yZGluYXRlcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLm1pc3NlZEF0dGFja3MucHVzaChjb29yZGluYXRlcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgbGV0IHN1bmtTaGlwcyA9IDA7XG4gICAgdGhpcy5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkgc3Vua1NoaXBzKys7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vua1NoaXBzID09PSB0aGlzLnNoaXBzLmxlbmd0aDtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludGVnZXJJblJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJySW5jbHVkZXNPYmooYXJyLCBvYmopIHtcbiAgY29uc3Qgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIHJldHVybiBhcnIuc29tZSgoYXJyT2JqKSA9PiBvYmpLZXlzLmV2ZXJ5KChrZXkpID0+IGFyck9ialtrZXldID09PSBvYmpba2V5XSkpO1xufVxuIiwiaW1wb3J0IHsgZ2V0R2FtZVN0YXRlIH0gZnJvbSBcIi4vZ2FtZS1sb29wXCI7XG5pbXBvcnQgR2FtZWJvYXJkLCB7IEdBTUVCT0FSRF9IRUlHSFQsIEdBTUVCT0FSRF9XSURUSCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgYXJySW5jbHVkZXNPYmosIHJhbmRvbUludGVnZXJJblJhbmdlIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXB1dGVyUGxheWVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3Iob3Bwb25lbnRHYW1lYm9hcmQpIHtcbiAgICBpZiAoIW9wcG9uZW50R2FtZWJvYXJkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJvcHBvbmVudCBnYW1lYm9hcmQgYXJndW1lbnQgbWlzc2luZ1wiKTtcbiAgICB9XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9wcG9uZW50R2FtZWJvYXJkID0gb3Bwb25lbnRHYW1lYm9hcmQ7XG4gICAgdGhpcy5sZWdhbE1vdmVzID0gdGhpcy5fc2V0SW5pdGlhbGxMZWdhbE1vdmVzKCk7XG4gICAgdGhpcy5fcmFuZG9taXplR2FtZWJvYXJkKCk7XG4gIH1cblxuICBfc2V0SW5pdGlhbGxMZWdhbE1vdmVzKCkge1xuICAgIGNvbnN0IGxlZ2FsTW92ZXMgPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEdBTUVCT0FSRF9XSURUSDsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEdBTUVCT0FSRF9IRUlHSFQ7IHkrKykge1xuICAgICAgICBsZWdhbE1vdmVzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVnYWxNb3ZlcztcbiAgfVxuXG4gIF9yYW5kb21pemVHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgZW1wdHlDZWxscyA9IHRoaXMuZ2FtZWJvYXJkLmdldFN0YXRlKCkuZW1wdHlDZWxscztcblxuICAgIGNvbnN0IGdldFJhbmRvbVBsYWNlbWVudENvb3JkaW5hdGVzID0gKHNoaXBMZW5ndGgpID0+IHtcbiAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IFt0cnVlLCBmYWxzZV1bcmFuZG9tSW50ZWdlckluUmFuZ2UoMCwgMSldO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRpbmF0ZXMgPSBbXTtcblxuICAgICAgZm9yIChjb25zdCBjdXJyZW50Q2VsbCBvZiBlbXB0eUNlbGxzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoaXNIb3Jpem9udGFsICYmIGN1cnJlbnRDZWxsLnggPiBHQU1FQk9BUkRfV0lEVEggLSBzaGlwTGVuZ3RoKSB8fFxuICAgICAgICAgICghaXNIb3Jpem9udGFsICYmIGN1cnJlbnRDZWxsLnkgPiBHQU1FQk9BUkRfSEVJR0hUIC0gc2hpcExlbmd0aClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGphY2VudENlbGxzID0gW2N1cnJlbnRDZWxsXTtcbiAgICAgICAgbGV0IG5leHRDZWxsO1xuICAgICAgICBsZXQgcHJldmlvdXNDZWxsID0gY3VycmVudENlbGw7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYWRqYWNlbnRDZWxscy5sZW5ndGggPT09IHNoaXBMZW5ndGgpIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzLnB1c2goYWRqYWNlbnRDZWxscyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0Q2VsbCA9IGlzSG9yaXpvbnRhbFxuICAgICAgICAgICAgPyB7IHg6IHByZXZpb3VzQ2VsbC54ICsgMSwgeTogcHJldmlvdXNDZWxsLnkgfVxuICAgICAgICAgICAgOiB7IHg6IHByZXZpb3VzQ2VsbC54LCB5OiBwcmV2aW91c0NlbGwueSArIDEgfTtcblxuICAgICAgICAgIHByZXZpb3VzQ2VsbCA9IG5leHRDZWxsO1xuXG4gICAgICAgICAgaWYgKGFyckluY2x1ZGVzT2JqKGVtcHR5Q2VsbHMsIG5leHRDZWxsKSkge1xuICAgICAgICAgICAgYWRqYWNlbnRDZWxscy5wdXNoKG5leHRDZWxsKTtcbiAgICAgICAgICB9IGVsc2UgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hvc2VuQ29vcmRpbmF0ZXMgPVxuICAgICAgICBhdmFpbGFibGVDb29yZGluYXRlc1tcbiAgICAgICAgICByYW5kb21JbnRlZ2VySW5SYW5nZSgwLCBhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGggLSAxKVxuICAgICAgICBdO1xuXG4gICAgICBjb25zdCBjb29yZGluYXRlc0ZvckRlbGV0aW9uID0gW107XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaG9zZW5Db29yZGluYXRlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY2VsbE9uVGhlTGVmdCA9IHtcbiAgICAgICAgICB4OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCAtIDEsXG4gICAgICAgICAgeTogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnksXG4gICAgICAgIH07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCA+IDAgJiZcbiAgICAgICAgICAhYXJySW5jbHVkZXNPYmooY2hvc2VuQ29vcmRpbmF0ZXMsIGNlbGxPblRoZUxlZnQpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzRm9yRGVsZXRpb24ucHVzaChjZWxsT25UaGVMZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNlbGxPblRoZVJpZ2h0ID0ge1xuICAgICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54ICsgMSxcbiAgICAgICAgICB5OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54IDwgR0FNRUJPQVJEX1dJRFRIIC0gMSAmJlxuICAgICAgICAgICFhcnJJbmNsdWRlc09iaihjaG9zZW5Db29yZGluYXRlcywgY2VsbE9uVGhlUmlnaHQpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzRm9yRGVsZXRpb24ucHVzaChjZWxsT25UaGVSaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZWxsQmVsb3cgPSB7XG4gICAgICAgICAgeDogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLngsXG4gICAgICAgICAgeTogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnkgLSAxLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnkgPiAwICYmXG4gICAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsQmVsb3cpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzRm9yRGVsZXRpb24ucHVzaChjZWxsQmVsb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2VsbEFib3ZlID0ge1xuICAgICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54LFxuICAgICAgICAgIHk6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55ICsgMSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55IDwgR0FNRUJPQVJEX0hFSUdIVCAtIDEgJiZcbiAgICAgICAgICAhYXJySW5jbHVkZXNPYmooY2hvc2VuQ29vcmRpbmF0ZXMsIGNlbGxBYm92ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXNGb3JEZWxldGlvbi5wdXNoKGNlbGxBYm92ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgWy4uLmNob3NlbkNvb3JkaW5hdGVzLCAuLi5jb29yZGluYXRlc0ZvckRlbGV0aW9uXS5mb3JFYWNoKChjb29yZHMpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRzSW5kZXggPSBlbXB0eUNlbGxzLmZpbmRJbmRleChcbiAgICAgICAgICAoY2VsbCkgPT4gY2VsbC54ID09PSBjb29yZHMueCAmJiBjZWxsLnkgPT09IGNvb3Jkcy55XG4gICAgICAgICk7XG4gICAgICAgIGVtcHR5Q2VsbHMuc3BsaWNlKGNvb3Jkc0luZGV4LCAxKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNob3NlbkNvb3JkaW5hdGVzO1xuICAgIH07XG5cbiAgICBnZXRHYW1lU3RhdGUoKS5hdmFpbGFibGVTaGlwcy5mb3JFYWNoKChzaGlwTGVuZ3RoKSA9PiB7XG4gICAgICBjb25zdCBwbGFjZW1lbnRDb29yZGluYXRlcyA9IGdldFJhbmRvbVBsYWNlbWVudENvb3JkaW5hdGVzKHNoaXBMZW5ndGgpO1xuICAgICAgdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwKHBsYWNlbWVudENvb3JkaW5hdGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRSYW5kb21BdHRhY2tDb29yZGluYXRlcygpIHtcbiAgICBpZiAoIXRoaXMubGVnYWxNb3Zlcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG1vcmUgY2VsbHMgbGVmdCB0byBhdHRhY2tcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSByYW5kb21JbnRlZ2VySW5SYW5nZSgwLCB0aGlzLmxlZ2FsTW92ZXMubGVuZ3RoIC0gMSk7XG4gICAgY29uc3QgYXR0YWNrQ29vcmRpbmF0ZXMgPSB0aGlzLmxlZ2FsTW92ZXNbcmFuZG9tSW5kZXhdO1xuXG4gICAgLy9yZW1vdmUgdGhlIGF0dGFjayBmcm9tIHRoZSBsZWdhbCBtb3Zlcywgc28gdGhhdCB0aGUgc2FtZSBjb29yZGluYXRlIGlzbid0IGF0dGFja2VkIHR3aWNlXG4gICAgdGhpcy5sZWdhbE1vdmVzLnNwbGljZShyYW5kb21JbmRleCwgMSk7XG5cbiAgICByZXR1cm4gYXR0YWNrQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBfb3JpZ2luID0gbnVsbDtcbiAgX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID0gbnVsbDtcbiAgX2xhc3RDb29yZGluYXRlc0FyZ3VtZW50ID0gbnVsbDtcbiAgX2xhc3REaXJlY3Rpb24gPSBudWxsO1xuICBfaXNWZXJ0aWNhbCA9IGZhbHNlO1xuICBfaXNIb3Jpem9udGFsID0gZmFsc2U7XG5cbiAgX3ZlcnRpY2FsUGF0aCA9IHsgYmVsb3c6IFtdLCBhYm92ZTogW10gfTtcbiAgX2hvcml6b250YWxQYXRoID0geyBsZWZ0OiBbXSwgcmlnaHQ6IFtdIH07XG5cbiAgX2dldEFkamFjZW50QXR0YWNrQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGlzRGlmZmVyZW50U2hpcCkge1xuICAgIGlmICghdGhpcy5fb3JpZ2luIHx8IGlzRGlmZmVyZW50U2hpcCkge1xuICAgICAgdGhpcy5fb3JpZ2luID0gY29vcmRpbmF0ZXM7XG4gICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzVmVydGljYWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzSG9yaXpvbnRhbCA9IGZhbHNlO1xuXG4gICAgICAvLyBjbGVhciBhbmQgcG9wdWxhdGUgaG9yaXpvbnRhbCBwYXRoXG4gICAgICB0aGlzLl9ob3Jpem9udGFsUGF0aC5sZWZ0ID0gW107XG4gICAgICB0aGlzLl9ob3Jpem9udGFsUGF0aC5yaWdodCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IGNvb3JkaW5hdGVzLnggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgIGNvbnN0IG5ld0FkamFjZW50Q29vcmRpbmF0ZXMgPSB7IHg6IGluZGV4LCB5OiBjb29yZGluYXRlcy55IH07XG4gICAgICAgIGlmICghYXJySW5jbHVkZXNPYmoodGhpcy5sZWdhbE1vdmVzLCBuZXdBZGphY2VudENvb3JkaW5hdGVzKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faG9yaXpvbnRhbFBhdGgubGVmdC51bnNoaWZ0KG5ld0FkamFjZW50Q29vcmRpbmF0ZXMpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IGNvb3JkaW5hdGVzLnggKyAxOyBpbmRleCA8IEdBTUVCT0FSRF9XSURUSDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuZXdBZGphY2VudENvb3JkaW5hdGVzID0geyB4OiBpbmRleCwgeTogY29vcmRpbmF0ZXMueSB9O1xuICAgICAgICBpZiAoIWFyckluY2x1ZGVzT2JqKHRoaXMubGVnYWxNb3ZlcywgbmV3QWRqYWNlbnRDb29yZGluYXRlcykpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2hvcml6b250YWxQYXRoLnJpZ2h0LnB1c2gobmV3QWRqYWNlbnRDb29yZGluYXRlcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNsZWFyIGFuZCBwb3B1bGF0ZSB2ZXJ0aWNhbCBwYXRoXG4gICAgICB0aGlzLl92ZXJ0aWNhbFBhdGguYmVsb3cgPSBbXTtcbiAgICAgIHRoaXMuX3ZlcnRpY2FsUGF0aC5hYm92ZSA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IGNvb3JkaW5hdGVzLnkgLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgIGNvbnN0IG5ld0FkamFjZW50Q29vcmRpbmF0ZXMgPSB7IHg6IGNvb3JkaW5hdGVzLngsIHk6IGluZGV4IH07XG4gICAgICAgIGlmICghYXJySW5jbHVkZXNPYmoodGhpcy5sZWdhbE1vdmVzLCBuZXdBZGphY2VudENvb3JkaW5hdGVzKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdmVydGljYWxQYXRoLmJlbG93LnVuc2hpZnQobmV3QWRqYWNlbnRDb29yZGluYXRlcyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gY29vcmRpbmF0ZXMueSArIDE7IGluZGV4IDwgR0FNRUJPQVJEX0hFSUdIVDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuZXdBZGphY2VudENvb3JkaW5hdGVzID0geyB4OiBjb29yZGluYXRlcy54LCB5OiBpbmRleCB9O1xuICAgICAgICBpZiAoIWFyckluY2x1ZGVzT2JqKHRoaXMubGVnYWxNb3ZlcywgbmV3QWRqYWNlbnRDb29yZGluYXRlcykpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ZlcnRpY2FsUGF0aC5hYm92ZS5wdXNoKG5ld0FkamFjZW50Q29vcmRpbmF0ZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEF0dGFjayBhbGwgZm91ciBkaXJlY3Rpb25zIHVudGlsIGEgdGhlcmUncyBhIGhpdFxuICAgIGlmIChjb29yZGluYXRlcy54ID09PSB0aGlzLl9vcmlnaW4ueCAmJiBjb29yZGluYXRlcy55ID09PSB0aGlzLl9vcmlnaW4ueSkge1xuICAgICAgaWYgKCF0aGlzLl9sYXN0RGlyZWN0aW9uICYmIHRoaXMuX3ZlcnRpY2FsUGF0aC5iZWxvdy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSB0aGlzLl92ZXJ0aWNhbFBhdGguYmVsb3cuc3BsaWNlKC0xKVswXTtcbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IFwiYmVsb3dcIjtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIFtudWxsLCBcImJlbG93XCJdLmluY2x1ZGVzKHRoaXMuX2xhc3REaXJlY3Rpb24pICYmXG4gICAgICAgIHRoaXMuX3ZlcnRpY2FsUGF0aC5hYm92ZS5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IHRoaXMuX3ZlcnRpY2FsUGF0aC5hYm92ZS5zaGlmdCgpO1xuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID0gXCJhYm92ZVwiO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgW251bGwsIFwiYmVsb3dcIiwgXCJhYm92ZVwiXS5pbmNsdWRlcyh0aGlzLl9sYXN0RGlyZWN0aW9uKSAmJlxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsUGF0aC5sZWZ0Lmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID0gdGhpcy5faG9yaXpvbnRhbFBhdGgubGVmdC5zcGxpY2UoLTEpWzBdO1xuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IHRoaXMuX2hvcml6b250YWxQYXRoLnJpZ2h0LnNoaWZ0KCk7XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICB9XG5cbiAgICAgIC8vcmVtb3ZlIHRoZSBhdHRhY2sgZnJvbSB0aGUgbGVnYWwgbW92ZXMsIHNvIHRoYXQgdGhlIHNhbWUgY29vcmRpbmF0ZSBpc24ndCBhdHRhY2tlZCBpbiB0aGUgZnV0dXJlXG4gICAgICBjb25zdCBsYXN0QXR0YWNrSW5kZXggPSB0aGlzLmxlZ2FsTW92ZXMuZmluZEluZGV4KFxuICAgICAgICAoY29vcmRzKSA9PlxuICAgICAgICAgIGNvb3Jkcy54ID09PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZC54ICYmXG4gICAgICAgICAgY29vcmRzLnkgPT09IHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkLnlcbiAgICAgICk7XG4gICAgICB0aGlzLmxlZ2FsTW92ZXMuc3BsaWNlKGxhc3RBdHRhY2tJbmRleCwgMSk7XG5cbiAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0FyZ3VtZW50ID0gY29vcmRpbmF0ZXM7XG4gICAgICByZXR1cm4gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQ7XG4gICAgfVxuXG4gICAgLy8gVGhlIGZpcnN0IHRpbWUgdGhlcmUncyBhIGhpdCwgc2VlIHdoZXRoZXIgdGhlIHNoaXAgaXMgcGxhY2VkIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5XG4gICAgaWYgKFxuICAgICAgKGNvb3JkaW5hdGVzLnggIT09IHRoaXMuX29yaWdpbi54IHx8IGNvb3JkaW5hdGVzLnkgIT09IHRoaXMuX29yaWdpbi55KSAmJlxuICAgICAgIXRoaXMuX2lzVmVydGljYWwgJiZcbiAgICAgICF0aGlzLl9pc0hvcml6b250YWxcbiAgICApIHtcbiAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPT09IFwiYmVsb3dcIiB8fCB0aGlzLl9sYXN0RGlyZWN0aW9uID09PSBcImFib3ZlXCJcbiAgICAgICAgPyAodGhpcy5faXNWZXJ0aWNhbCA9IHRydWUpXG4gICAgICAgIDogKHRoaXMuX2lzSG9yaXpvbnRhbCA9IHRydWUpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBjb29yZGluYXRlcyBhcmd1bWVudCBpcyByZXBlYXRlZCBvciB3ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhhdCBzaWRlLCB3ZSBjaGFuZ2UgdG8gdGhlIG90aGVyIHNpZGUuXG4gICAgaWYgKFxuICAgICAgdGhpcy5faXNWZXJ0aWNhbCAmJlxuICAgICAgKChjb29yZGluYXRlcy54ID09PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudC54ICYmXG4gICAgICAgIGNvb3JkaW5hdGVzLnkgPT09IHRoaXMuX2xhc3RDb29yZGluYXRlc0FyZ3VtZW50LnkpIHx8XG4gICAgICAgICF0aGlzLl92ZXJ0aWNhbFBhdGhbdGhpcy5fbGFzdERpcmVjdGlvbl0ubGVuZ3RoKVxuICAgICkge1xuICAgICAgaWYgKHRoaXMuX2xhc3REaXJlY3Rpb24gPT09IFwiYmVsb3dcIikge1xuICAgICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IHRoaXMuX3ZlcnRpY2FsUGF0aC5hYm92ZS5zaGlmdCgpO1xuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID0gXCJhYm92ZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSB0aGlzLl92ZXJ0aWNhbFBhdGguYmVsb3cuc3BsaWNlKC0xKVswXTtcbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IFwiYmVsb3dcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCdXQgaWYgdGhlIGN1cnJlbnQgY29vcmRpbmF0ZXMgYXJlIGRpZmZlcmVudCBmcm9tIHRoZSBsYXN0IGNvb3JkaW5hdGVzLCB0aGF0IG1lYW5zIHRoZSBsYXN0QXR0YWNrIHdhcyBhIGhpdCwgc28gd2Uga2VlcCBhdHRhY2tpbmcgdG93YXJkcyB0aGF0IHNpZGUuXG4gICAgZWxzZSBpZiAoXG4gICAgICB0aGlzLl9pc1ZlcnRpY2FsICYmXG4gICAgICB0aGlzLl92ZXJ0aWNhbFBhdGhbdGhpcy5fbGFzdERpcmVjdGlvbl0ubGVuZ3RoICYmXG4gICAgICBjb29yZGluYXRlcy55ICE9PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudC55XG4gICAgKSB7XG4gICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPT09IFwiYmVsb3dcIlxuICAgICAgICAgID8gdGhpcy5fdmVydGljYWxQYXRoLmJlbG93LnNwbGljZSgtMSlbMF1cbiAgICAgICAgICA6IHRoaXMuX3ZlcnRpY2FsUGF0aC5hYm92ZS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIEFuZCB3ZSBkbyB0aGUgc2FtZSBmb3IgdGhlIG90aGVyIGF4aXNcbiAgICBpZiAoXG4gICAgICB0aGlzLl9pc0hvcml6b250YWwgJiZcbiAgICAgICgoY29vcmRpbmF0ZXMueCA9PT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQueCAmJlxuICAgICAgICBjb29yZGluYXRlcy55ID09PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudC55KSB8fFxuICAgICAgICAhdGhpcy5faG9yaXpvbnRhbFBhdGhbdGhpcy5fbGFzdERpcmVjdGlvbl0ubGVuZ3RoKVxuICAgICkge1xuICAgICAgaWYgKHRoaXMuX2xhc3REaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID0gdGhpcy5faG9yaXpvbnRhbFBhdGgucmlnaHQuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID0gdGhpcy5faG9yaXpvbnRhbFBhdGgubGVmdC5zcGxpY2UoLTEpWzBdO1xuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMuX2lzSG9yaXpvbnRhbCAmJlxuICAgICAgdGhpcy5faG9yaXpvbnRhbFBhdGhbdGhpcy5fbGFzdERpcmVjdGlvbl0ubGVuZ3RoICYmXG4gICAgICBjb29yZGluYXRlcy54ICE9PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudC54XG4gICAgKSB7XG4gICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPT09IFwibGVmdFwiXG4gICAgICAgICAgPyB0aGlzLl9ob3Jpem9udGFsUGF0aC5sZWZ0LnNwbGljZSgtMSlbMF1cbiAgICAgICAgICA6IHRoaXMuX2hvcml6b250YWxQYXRoLnJpZ2h0LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy9yZW1vdmUgdGhlIGF0dGFjayBmcm9tIHRoZSBsZWdhbCBtb3Zlcywgc28gdGhhdCB0aGUgc2FtZSBjb29yZGluYXRlIGlzbid0IGF0dGFja2VkIGluIHRoZSBmdXR1cmVcbiAgICBjb25zdCBsYXN0QXR0YWNrSW5kZXggPSB0aGlzLmxlZ2FsTW92ZXMuZmluZEluZGV4KFxuICAgICAgKGNvb3JkcykgPT5cbiAgICAgICAgY29vcmRzLnggPT09IHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkLnggJiZcbiAgICAgICAgY29vcmRzLnkgPT09IHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkLnlcbiAgICApO1xuICAgIHRoaXMubGVnYWxNb3Zlcy5zcGxpY2UobGFzdEF0dGFja0luZGV4LCAxKTtcblxuICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0FyZ3VtZW50ID0gY29vcmRpbmF0ZXM7XG5cbiAgICByZXR1cm4gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQ7XG4gIH1cblxuICBsYXN0SGl0ID0gbnVsbDtcbiAgaXNEaWZmZXJlbnRTaGlwID0gbnVsbDtcblxuICBhdHRhY2soKSB7XG4gICAgY29uc3QgZ2V0T3Bwb25lbnRUb3RhbEhpdHMgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vcHBvbmVudEdhbWVib2FyZC5zaGlwcy5yZWR1Y2UoKHRvdGFsSGl0cywgY3VycmVudFNoaXApID0+IHtcbiAgICAgICAgcmV0dXJuIHRvdGFsSGl0cyArIGN1cnJlbnRTaGlwLmhpdHNUYWtlbi5sZW5ndGg7XG4gICAgICB9LCAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGFzdFNoaXBIaXRJc05vdFN1bmsgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMubGFzdEhpdCkgcmV0dXJuO1xuXG4gICAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5vcHBvbmVudEdhbWVib2FyZC5zaGlwcykge1xuICAgICAgICBpZiAoYXJySW5jbHVkZXNPYmooc2hpcC5jb29yZGluYXRlcywgdGhpcy5sYXN0SGl0KSkge1xuICAgICAgICAgIHJldHVybiAhc2hpcC5pc1N1bmsoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5sYXN0SGl0ICYmIGxhc3RTaGlwSGl0SXNOb3RTdW5rKCkpIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy5fZ2V0QWRqYWNlbnRBdHRhY2tDb29yZGluYXRlcyhcbiAgICAgICAgdGhpcy5sYXN0SGl0LFxuICAgICAgICB0aGlzLmlzRGlmZmVyZW50U2hpcFxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuaXNEaWZmZXJlbnRTaGlwKSB0aGlzLmlzRGlmZmVyZW50U2hpcCA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBvcHBvbmVudEhpdHNCZWZvcmVBdHRhY2sgPSBnZXRPcHBvbmVudFRvdGFsSGl0cygpO1xuICAgICAgY29uc3Qgc3VjY2Vzc2Z1bEF0dGFjayA9XG4gICAgICAgIHRoaXMub3Bwb25lbnRHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICBjb25zdCBvcHBvbmVudEhpdHNBZnRlckF0dGFjayA9IGdldE9wcG9uZW50VG90YWxIaXRzKCk7XG4gICAgICBpZiAoXG4gICAgICAgIHN1Y2Nlc3NmdWxBdHRhY2sgJiZcbiAgICAgICAgb3Bwb25lbnRIaXRzQWZ0ZXJBdHRhY2sgPiBvcHBvbmVudEhpdHNCZWZvcmVBdHRhY2tcbiAgICAgICkge1xuICAgICAgICB0aGlzLmxhc3RIaXQgPSBjb29yZGluYXRlcztcblxuICAgICAgICByZXR1cm4gc3VjY2Vzc2Z1bEF0dGFjaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3Bwb25lbnRIaXRzQmVmb3JlQXR0YWNrID0gZ2V0T3Bwb25lbnRUb3RhbEhpdHMoKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy5fZ2V0UmFuZG9tQXR0YWNrQ29vcmRpbmF0ZXMoKTtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NmdWxBdHRhY2sgPVxuICAgICAgICB0aGlzLm9wcG9uZW50R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgICAgY29uc3Qgb3Bwb25lbnRIaXRzQWZ0ZXJBdHRhY2sgPSBnZXRPcHBvbmVudFRvdGFsSGl0cygpO1xuICAgICAgdGhpcy5sYXN0SGl0ID1cbiAgICAgICAgb3Bwb25lbnRIaXRzQWZ0ZXJBdHRhY2sgPiBvcHBvbmVudEhpdHNCZWZvcmVBdHRhY2sgPyBjb29yZGluYXRlcyA6IG51bGw7XG5cbiAgICAgIGlmICghdGhpcy5pc0RpZmZlcmVudFNoaXApIHRoaXMuaXNEaWZmZXJlbnRTaGlwID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHN1Y2Nlc3NmdWxBdHRhY2s7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoXCJDb25zdHJ1Y3RvciBhcmd1bWVudCBtaXNzaW5nIVwiKTtcblxuICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSBcIm51bWJlclwiIHx8IGxlbmd0aCA8IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29uc3RydWN0b3IgYXJndW1lbnRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gIH1cblxuICBjb29yZGluYXRlcyA9IG51bGw7XG4gIGhpdHNUYWtlbiA9IFtdO1xuXG4gIGhpdChjb29yZGluYXRlcykge1xuICAgIHRoaXMuaGl0c1Rha2VuLnB1c2goY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHNUYWtlbi5sZW5ndGggPT09IHRoaXMubGVuZ3RoO1xuICB9XG59XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvZ2FtZS1vdmVyLXNjcmVlbi5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zaGlwcy1sYXlvdXQuY3NzXCI7XG5pbXBvcnQgZGlzcGxheVNoaXBzTGF5b3V0U2NyZWVuIGZyb20gXCIuL3VzZXItaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5R2FtZU92ZXJTY3JlZW4od2lubmVyKSB7XG4gIGNvbnN0IGdhbWVPdmVyU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJzY3JlZW5cIik7XG4gIGdhbWVPdmVyU2NyZWVuLmlkID0gXCJnYW1lLW92ZXJcIjtcblxuICBjb25zdCBnYW1lT3ZlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGdhbWVPdmVyU2NyZWVuLmFwcGVuZENoaWxkKGdhbWVPdmVyVGV4dCk7XG4gIGdhbWVPdmVyVGV4dC5pbm5lclRleHQgPSBgR2FtZSBPdmVyLCB5b3UgJHtcbiAgICB3aW5uZXIgPT09IFwicGxheWVyLW9uZVwiID8gXCJ3b24hXCIgOiBcImxvc3RcIlxuICB9YDtcblxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG4gIGdhbWVPdmVyU2NyZWVuLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gIGNvbnN0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBwbGF5QWdhaW4uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtYXJyb3ctcm90YXRlLWxlZnRcIik7XG4gIHBsYXlBZ2Fpbi50aXRsZSA9IFwiUExBWSBBR0FJTlwiO1xuICBwbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlTaGlwc0xheW91dFNjcmVlbik7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQocGxheUFnYWluKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY3JlZW4pO1xufVxuIiwiaW1wb3J0IHsgR0FNRUJPQVJEX0hFSUdIVCwgR0FNRUJPQVJEX1dJRFRIIH0gZnJvbSBcIi4uL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgZ2V0R2FtZVN0YXRlLCBodW1hblBsYXlzVHVybiB9IGZyb20gXCIuLi9nYW1lLWxvb3BcIjtcbmltcG9ydCB7IGFyckluY2x1ZGVzT2JqLCByYW5kb21JbnRlZ2VySW5SYW5nZSB9IGZyb20gXCIuLi9oZWxwZXItZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5R2FtZU92ZXJTY3JlZW4gfSBmcm9tIFwiLi91aS1nYW1lLW92ZXJcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nYW1lYm9hcmQuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTaGlwc1RyYWNrZXIocGxheWVyKSB7XG4gIGNvbnN0IGdhbWVTdGF0ZSA9IGdldEdhbWVTdGF0ZSgpO1xuXG4gIGNvbnN0IGxvbmdlc3RTaGlwTGVuZ3RoID0gTWF0aC5tYXgoLi4uZ2FtZVN0YXRlLmF2YWlsYWJsZVNoaXBzKTtcblxuICBjb25zdCBzaGlwVHJhY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBzaGlwVHJhY2tlci5jbGFzc0xpc3QuYWRkKFwic2hpcHMtdHJhY2tlclwiKTtcbiAgY29uc3Qgc2hpcHNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHNoaXBzV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwic2hpcHMtd3JhcHBlclwiKTtcbiAgc2hpcFRyYWNrZXIuYXBwZW5kQ2hpbGQoc2hpcHNXcmFwcGVyKTtcbiAgZ2FtZVN0YXRlLmdhbWVib2FyZHNbcGxheWVyXS5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3QgdWlTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgdWlTaGlwLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIHVpU2hpcC5zdHlsZS53aWR0aCA9IGAkeygxMDAgLyBsb25nZXN0U2hpcExlbmd0aCkgKiBzaGlwLmxlbmd0aH0lYDtcbiAgICBpZiAoc2hpcC5pc1N1bmsoKSkgdWlTaGlwLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgIGZvciAoXG4gICAgICBsZXQgc2hpcENlbGxOdW1iZXIgPSAwO1xuICAgICAgc2hpcENlbGxOdW1iZXIgPCBzaGlwLmxlbmd0aDtcbiAgICAgIHNoaXBDZWxsTnVtYmVyKytcbiAgICApIHtcbiAgICAgIGNvbnN0IHVpU2hpcFN1YmRpdmlzaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICB1aVNoaXBTdWJkaXZpc2lvbi5jbGFzc0xpc3QuYWRkKFwic3ViZGl2aXNpb25cIik7XG4gICAgICB1aVNoaXAuYXBwZW5kQ2hpbGQodWlTaGlwU3ViZGl2aXNpb24pO1xuICAgIH1cbiAgICBzaGlwc1dyYXBwZXIuYXBwZW5kQ2hpbGQodWlTaGlwKTtcbiAgfSk7XG5cbiAgY29uc3QgZ2FtZWJvYXJkV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5nYW1lYm9hcmQtd3JhcHBlciMke3BsYXllcn1gXG4gICk7XG4gIGNvbnN0IHByZXZpb3VzVHJhY2tlciA9IGdhbWVib2FyZFdyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5zaGlwcy10cmFja2VyXCIpO1xuXG4gIGlmIChwcmV2aW91c1RyYWNrZXIpIHtcbiAgICBwcmV2aW91c1RyYWNrZXIucmVwbGFjZVdpdGgoc2hpcFRyYWNrZXIpO1xuICB9IGVsc2Uge1xuICAgIHBsYXllci5pbmNsdWRlcyhcIm9uZVwiKVxuICAgICAgPyBnYW1lYm9hcmRXcmFwcGVyLmZpcnN0Q2hpbGQuYmVmb3JlKHNoaXBUcmFja2VyKVxuICAgICAgOiBnYW1lYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKHNoaXBUcmFja2VyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBnYW1lYm9hcmQuY2xhc3NMaXN0LmFkZChcImdhbWVib2FyZFwiKTtcblxuICBmb3IgKGxldCBjb2x1bW5OdW1iZXIgPSAwOyBjb2x1bW5OdW1iZXIgPCBHQU1FQk9BUkRfV0lEVEg7IGNvbHVtbk51bWJlcisrKSB7XG4gICAgY29uc3QgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5cIik7XG4gICAgY29sdW1uLmlkID0gYGNvbHVtbi0ke2NvbHVtbk51bWJlcn1gO1xuICAgIGdhbWVib2FyZC5hcHBlbmRDaGlsZChjb2x1bW4pO1xuXG4gICAgZm9yIChsZXQgcm93TnVtYmVyID0gR0FNRUJPQVJEX0hFSUdIVCAtIDE7IHJvd051bWJlciA+PSAwOyByb3dOdW1iZXItLSkge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgIGNvbnN0IGNlbGxDb29yZGluYXRlcyA9IGB7eDogJHtjb2x1bW5OdW1iZXJ9LCB5OiAke3Jvd051bWJlcn19YDtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZGluYXRlc1wiLCBjZWxsQ29vcmRpbmF0ZXMpO1xuICAgICAgY29sdW1uLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnYW1lYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUdhbWVib2FyZHMoKSB7XG4gIGNvbnN0IGdhbWVTdGF0ZSA9IGdldEdhbWVTdGF0ZSgpO1xuICB1cGRhdGVHYW1lYm9hcmQoXCJwbGF5ZXItdHdvXCIpO1xuICB1cGRhdGVTaGlwc1RyYWNrZXIoXCJwbGF5ZXItdHdvXCIpO1xuXG4gIGlmIChnYW1lU3RhdGUuaXNPdmVyICYmIGdhbWVTdGF0ZS53aW5uZXIgPT09IFwicGxheWVyLW9uZVwiKSB7XG4gICAgZGlzcGxheUdhbWVPdmVyU2NyZWVuKFwicGxheWVyLW9uZVwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwbGF5ZXJUd29HYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci10d28gLmdhbWVib2FyZFwiXG4gICk7XG4gIHBsYXllclR3b0dhbWVib2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZWRcIik7XG5cbiAgY29uc3QgdGhpbmtpbmdUaW1lID0gcmFuZG9tSW50ZWdlckluUmFuZ2UoNjAwLCAxMDAwKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdXBkYXRlR2FtZWJvYXJkKFwicGxheWVyLW9uZVwiKTtcbiAgICB1cGRhdGVTaGlwc1RyYWNrZXIoXCJwbGF5ZXItb25lXCIpO1xuICAgIHBsYXllclR3b0dhbWVib2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZWRcIik7XG5cbiAgICBpZiAoZ2FtZVN0YXRlLmlzT3Zlcikge1xuICAgICAgZGlzcGxheUdhbWVPdmVyU2NyZWVuKFwicGxheWVyLXR3b1wiKTtcbiAgICB9XG4gIH0sIHRoaW5raW5nVGltZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVHYW1lYm9hcmQocGxheWVyKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IGdhbWVib2FyZFN0YXRlID0gZ2V0R2FtZVN0YXRlKCkuZ2FtZWJvYXJkc1twbGF5ZXJdO1xuICBjb25zdCBpc0FpR2FtZWJvYXJkID0gcGxheWVyLmluY2x1ZGVzKFwidHdvXCIpO1xuXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBnYW1lYm9hcmRTdGF0ZS5zaGlwcykge1xuICAgIGZvciAoY29uc3QgY29vcmRzIG9mIHNoaXAuY29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZENlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWNvb3JkaW5hdGVzID0gXCJ7eDogJHtjb29yZHMueH0sIHk6ICR7Y29vcmRzLnl9fVwiXWBcbiAgICAgICk7XG5cbiAgICAgIC8vIFRoZSBzaGlwcyBtdXN0IG5vdCBiZSB2aXNpYmxlIGluIHRoZSBBSSdzIGdhbWVib2FyZFxuICAgICAgaWYgKCFpc0FpR2FtZWJvYXJkKSBnYW1lYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuXG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSB8fCBhcnJJbmNsdWRlc09iaihzaGlwLmhpdHNUYWtlbiwgY29vcmRzKSkge1xuICAgICAgICBnYW1lYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoc2hpcC5pc1N1bmsoKSA/IFwic3Vua1wiIDogXCJoaXRcIik7XG5cbiAgICAgICAgY29uc3QgeE1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgeE1hcmsuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEteG1hcmtcIik7XG4gICAgICAgIGdhbWVib2FyZENlbGwuYXBwZW5kQ2hpbGQoeE1hcmspO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3QgbWlzc2VkQXR0YWNrIG9mIGdhbWVib2FyZFN0YXRlLm1pc3NlZEF0dGFja3MpIHtcbiAgICBjb25zdCBnYW1lYm9hcmRDZWxsID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29vcmRpbmF0ZXMgPSBcInt4OiAke21pc3NlZEF0dGFjay54fSwgeTogJHttaXNzZWRBdHRhY2sueX19XCJdYFxuICAgICk7XG4gICAgZ2FtZWJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkLWF0dGFja1wiKTtcblxuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGRvdC5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1jaXJjbGVcIik7XG4gICAgZ2FtZWJvYXJkQ2VsbC5hcHBlbmRDaGlsZChkb3QpO1xuICB9XG5cbiAgaWYgKGlzQWlHYW1lYm9hcmQpIHtcbiAgICBjb25zdCBjZWxscyA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIik7XG5cbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGh1bWFuUGxheXNUdXJuKHtcbiAgICAgICAgICB4OiBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVzXCIpWzRdKSxcbiAgICAgICAgICB5OiBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVzXCIpWzEwXSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZUdhbWVib2FyZHMoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGdhbWVib2FyZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuZ2FtZWJvYXJkLXdyYXBwZXIjJHtwbGF5ZXJ9YFxuICApO1xuICBjb25zdCBwcmV2aW91c0dhbWVib2FyZCA9IGdhbWVib2FyZFdyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5nYW1lYm9hcmRcIik7XG5cbiAgcHJldmlvdXNHYW1lYm9hcmRcbiAgICA/IHByZXZpb3VzR2FtZWJvYXJkLnJlcGxhY2VXaXRoKGdhbWVib2FyZClcbiAgICA6IGdhbWVib2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbWl6ZWRHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuICBjb25zdCBlbXB0eUNlbGxzID0gW107XG4gIGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIikuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNvbnN0IHggPSBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVzXCIpWzRdKTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZGluYXRlc1wiKVsxMF0pO1xuICAgIGVtcHR5Q2VsbHMucHVzaCh7IHgsIHkgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGdldFJhbmRvbVBsYWNlbWVudENvb3JkaW5hdGVzID0gKHNoaXBMZW5ndGgpID0+IHtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSBbdHJ1ZSwgZmFsc2VdW3JhbmRvbUludGVnZXJJblJhbmdlKDAsIDEpXTtcbiAgICBjb25zdCBhdmFpbGFibGVDb29yZGluYXRlcyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBjdXJyZW50Q2VsbCBvZiBlbXB0eUNlbGxzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIChpc0hvcml6b250YWwgJiYgY3VycmVudENlbGwueCA+IEdBTUVCT0FSRF9XSURUSCAtIHNoaXBMZW5ndGgpIHx8XG4gICAgICAgICghaXNIb3Jpem9udGFsICYmIGN1cnJlbnRDZWxsLnkgPiBHQU1FQk9BUkRfSEVJR0hUIC0gc2hpcExlbmd0aClcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWRqYWNlbnRDZWxscyA9IFtjdXJyZW50Q2VsbF07XG4gICAgICBsZXQgbmV4dENlbGw7XG4gICAgICBsZXQgcHJldmlvdXNDZWxsID0gY3VycmVudENlbGw7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhZGphY2VudENlbGxzLmxlbmd0aCA9PT0gc2hpcExlbmd0aCkge1xuICAgICAgICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzLnB1c2goYWRqYWNlbnRDZWxscyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0Q2VsbCA9IGlzSG9yaXpvbnRhbFxuICAgICAgICAgID8geyB4OiBwcmV2aW91c0NlbGwueCArIDEsIHk6IHByZXZpb3VzQ2VsbC55IH1cbiAgICAgICAgICA6IHsgeDogcHJldmlvdXNDZWxsLngsIHk6IHByZXZpb3VzQ2VsbC55ICsgMSB9O1xuXG4gICAgICAgIHByZXZpb3VzQ2VsbCA9IG5leHRDZWxsO1xuXG4gICAgICAgIGlmIChhcnJJbmNsdWRlc09iaihlbXB0eUNlbGxzLCBuZXh0Q2VsbCkpIHtcbiAgICAgICAgICBhZGphY2VudENlbGxzLnB1c2gobmV4dENlbGwpO1xuICAgICAgICB9IGVsc2UgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hvc2VuQ29vcmRpbmF0ZXMgPVxuICAgICAgYXZhaWxhYmxlQ29vcmRpbmF0ZXNbXG4gICAgICAgIHJhbmRvbUludGVnZXJJblJhbmdlKDAsIGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCAtIDEpXG4gICAgICBdO1xuXG4gICAgY29uc3QgY29vcmRpbmF0ZXNGb3JEZWxldGlvbiA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNob3NlbkNvb3JkaW5hdGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY2VsbE9uVGhlTGVmdCA9IHtcbiAgICAgICAgeDogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnggLSAxLFxuICAgICAgICB5OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSxcbiAgICAgIH07XG4gICAgICBpZiAoXG4gICAgICAgIGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54ID4gMCAmJlxuICAgICAgICAhYXJySW5jbHVkZXNPYmooY2hvc2VuQ29vcmRpbmF0ZXMsIGNlbGxPblRoZUxlZnQpXG4gICAgICApIHtcbiAgICAgICAgY29vcmRpbmF0ZXNGb3JEZWxldGlvbi5wdXNoKGNlbGxPblRoZUxlZnQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjZWxsT25UaGVSaWdodCA9IHtcbiAgICAgICAgeDogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnggKyAxLFxuICAgICAgICB5OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSxcbiAgICAgIH07XG4gICAgICBpZiAoXG4gICAgICAgIGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54IDwgR0FNRUJPQVJEX1dJRFRIIC0gMSAmJlxuICAgICAgICAhYXJySW5jbHVkZXNPYmooY2hvc2VuQ29vcmRpbmF0ZXMsIGNlbGxPblRoZVJpZ2h0KVxuICAgICAgKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzRm9yRGVsZXRpb24ucHVzaChjZWxsT25UaGVSaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNlbGxCZWxvdyA9IHtcbiAgICAgICAgeDogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLngsXG4gICAgICAgIHk6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55IC0gMSxcbiAgICAgIH07XG4gICAgICBpZiAoXG4gICAgICAgIGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55ID4gMCAmJlxuICAgICAgICAhYXJySW5jbHVkZXNPYmooY2hvc2VuQ29vcmRpbmF0ZXMsIGNlbGxCZWxvdylcbiAgICAgICkge1xuICAgICAgICBjb29yZGluYXRlc0ZvckRlbGV0aW9uLnB1c2goY2VsbEJlbG93KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2VsbEFib3ZlID0ge1xuICAgICAgICB4OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCxcbiAgICAgICAgeTogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnkgKyAxLFxuICAgICAgfTtcbiAgICAgIGlmIChcbiAgICAgICAgY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnkgPCBHQU1FQk9BUkRfSEVJR0hUIC0gMSAmJlxuICAgICAgICAhYXJySW5jbHVkZXNPYmooY2hvc2VuQ29vcmRpbmF0ZXMsIGNlbGxBYm92ZSlcbiAgICAgICkge1xuICAgICAgICBjb29yZGluYXRlc0ZvckRlbGV0aW9uLnB1c2goY2VsbEFib3ZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbLi4uY2hvc2VuQ29vcmRpbmF0ZXMsIC4uLmNvb3JkaW5hdGVzRm9yRGVsZXRpb25dLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgY29uc3QgY29vcmRzSW5kZXggPSBlbXB0eUNlbGxzLmZpbmRJbmRleChcbiAgICAgICAgKGNlbGwpID0+IGNlbGwueCA9PT0gY29vcmRzLnggJiYgY2VsbC55ID09PSBjb29yZHMueVxuICAgICAgKTtcbiAgICAgIGVtcHR5Q2VsbHMuc3BsaWNlKGNvb3Jkc0luZGV4LCAxKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hvc2VuQ29vcmRpbmF0ZXM7XG4gIH07XG5cbiAgbGV0IHNoaXBzQ29vcmRpbmF0ZXMgPSBbXTtcblxuICBnZXRHYW1lU3RhdGUoKS5hdmFpbGFibGVTaGlwcy5mb3JFYWNoKChzaGlwTGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgcGxhY2VtZW50Q29vcmRpbmF0ZXMgPSBnZXRSYW5kb21QbGFjZW1lbnRDb29yZGluYXRlcyhzaGlwTGVuZ3RoKTtcbiAgICBzaGlwc0Nvb3JkaW5hdGVzLnB1c2gocGxhY2VtZW50Q29vcmRpbmF0ZXMpO1xuICAgIHBsYWNlbWVudENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgZ2FtZWJvYXJkXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuY2VsbFtkYXRhLWNvb3JkaW5hdGVzPSd7eDogJHtjb29yZHMueH0sIHk6ICR7Y29vcmRzLnl9fSddYFxuICAgICAgICApXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZ2FtZWJvYXJkLnNldEF0dHJpYnV0ZShcbiAgICBcImRhdGEtc2hpcHMtY29vcmRpbmF0ZXNcIixcbiAgICBKU09OLnN0cmluZ2lmeShzaGlwc0Nvb3JkaW5hdGVzKVxuICApO1xuICByZXR1cm4gZ2FtZWJvYXJkO1xufVxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvYmF0dGxlLXNjcmVlbi5jc3NcIjtcblxuaW1wb3J0IHtcbiAgcmFuZG9taXplZEdhbWVib2FyZCxcbiAgdXBkYXRlR2FtZWJvYXJkLFxuICB1cGRhdGVTaGlwc1RyYWNrZXIsXG59IGZyb20gXCIuL3VpLWdhbWVib2FyZFwiO1xuaW1wb3J0IHsgcGxhY2VTaGlwcywgc3RhcnRHYW1lIH0gZnJvbSBcIi4uL2dhbWUtbG9vcFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcblxuZnVuY3Rpb24gZGlzcGxheUJhdHRsZSgpIHtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3QgYmF0dGxlU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGJhdHRsZVNjcmVlbi5jbGFzc0xpc3QuYWRkKFwic2NyZWVuXCIpO1xuICBiYXR0bGVTY3JlZW4uaWQgPSBcImJhdHRsZVwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmF0dGxlU2NyZWVuKTtcblxuICBjb25zdCBQTEFZRVJTID0gW1wicGxheWVyLW9uZVwiLCBcInBsYXllci10d29cIl07XG5cbiAgUExBWUVSUy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBnYW1lYm9hcmRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgZ2FtZWJvYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkLXdyYXBwZXJcIik7XG4gICAgZ2FtZWJvYXJkV3JhcHBlci5pZCA9IHBsYXllcjtcbiAgICBiYXR0bGVTY3JlZW4uYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkV3JhcHBlcik7XG4gICAgdXBkYXRlR2FtZWJvYXJkKHBsYXllcik7XG4gICAgdXBkYXRlU2hpcHNUcmFja2VyKHBsYXllcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QmF0dGxlV2l0aFNoaXBzKHNoaXBzQ29vcmRpbmF0ZXMpIHtcbiAgc3RhcnRHYW1lKCk7XG4gIHBsYWNlU2hpcHMoc2hpcHNDb29yZGluYXRlcyk7XG4gIGRpc3BsYXlCYXR0bGUoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVNoaXBzTGF5b3V0U2NyZWVuKCkge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBzaGlwc0xheW91dFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBzaGlwc0xheW91dFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwic2NyZWVuXCIpO1xuICBzaGlwc0xheW91dFNjcmVlbi5pZCA9IFwic2hpcHMtbGF5b3V0XCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwc0xheW91dFNjcmVlbik7XG5cbiAgY29uc3QgZ2FtZWJvYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBnYW1lYm9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmQtd3JhcHBlclwiKTtcbiAgc2hpcHNMYXlvdXRTY3JlZW4uYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkV3JhcHBlcik7XG5cbiAgZ2FtZWJvYXJkV3JhcHBlci5hcHBlbmQocmFuZG9taXplZEdhbWVib2FyZCgpKTtcblxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG4gIGdhbWVib2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmFuZG9taXplQnV0dG9uLmlkID0gXCJyYW5kb21pemVcIjtcbiAgcmFuZG9taXplQnV0dG9uLmlubmVyVGV4dCA9IFwiUmFuZG9taXplXCI7XG4gIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNoaXBzTGF5b3V0U2NyZWVuXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5nYW1lYm9hcmRcIilcbiAgICAgIC5yZXBsYWNlV2l0aChyYW5kb21pemVkR2FtZWJvYXJkKCkpO1xuICB9KTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChyYW5kb21pemVCdXR0b24pO1xuXG4gIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5XCI7XG4gIHBsYXlCdXR0b24uaW5uZXJUZXh0ID0gXCJQbGF5XCI7XG4gIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBzaGlwc0Nvb3JkaW5hdGVzID0gSlNPTi5wYXJzZShcbiAgICAgIGdhbWVib2FyZFdyYXBwZXJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkXCIpXG4gICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNoaXBzLWNvb3JkaW5hdGVzXCIpXG4gICAgKTtcblxuICAgIGRpc3BsYXlCYXR0bGVXaXRoU2hpcHMoc2hpcHNDb29yZGluYXRlcyk7XG4gIH0pO1xuICBidXR0b25zLmFwcGVuZENoaWxkKHBsYXlCdXR0b24pO1xufVxuXG5kaXNwbGF5U2hpcHNMYXlvdXRTY3JlZW4oKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy91c2VyLWludGVyZmFjZS91c2VyLWludGVyZmFjZS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==