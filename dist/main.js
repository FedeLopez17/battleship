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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --gameboard-width: min(90%, 500px);\n  --missed-attack-color: lightsteelblue;\n  --ship-color: steelblue;\n  --hit-ship-color: lightpink;\n  --sunk-ship-color: crimson;\n}\n\n.gameboard-wrapper {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  gap: 10px;\n}\n\n.gameboard {\n  aspect-ratio: 2/2;\n  width: var(--gameboard-width);\n  display: flex;\n  pointer-events: none;\n  transition: filter 500ms;\n}\n\n.gameboard > .column {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  pointer-events: none;\n}\n\n.gameboard .cell {\n  flex: 1;\n  outline: 1px solid midnightblue;\n  background-color: #f8f8ffed; /* slightly transparent ghostwhite*/\n  pointer-events: auto;\n  cursor: pointer;\n  margin: 2px;\n}\n\n.gameboard .cell:hover {\n  background-color: var(--missed-attack-color);\n}\n\n.gameboard .cell.ship {\n  background-color: var(--ship-color);\n}\n\n.gameboard .cell.hit,\n.gameboard .cell.sunk,\n.gameboard .cell.missed-attack {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n\n.gameboard .cell.hit {\n  background-color: var(--hit-ship-color);\n}\n\n.gameboard .cell.sunk {\n  background-color: var(--sunk-ship-color);\n}\n\n.gameboard .cell.missed-attack {\n  background-color: var(--missed-attack-color);\n  font-size: 0.4rem;\n}\n\n.gameboard.disabled {\n  pointer-events: auto;\n  cursor: wait;\n  filter: brightness(0.9);\n}\n\n.gameboard.disabled .cell {\n  pointer-events: none;\n}\n\n.gameboard-wrapper .ships-tracker > .ships-wrapper {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n\n.gameboard-wrapper#player-two .ships-tracker > .ships-wrapper {\n  align-items: flex-start;\n}\n\n.ships-tracker .ship {\n  flex: 1;\n  display: flex;\n  gap: 2px;\n}\n\n.ships-tracker .ship > .subdivision {\n  flex: 1;\n  background-color: var(--ship-color);\n}\n\n.ships-tracker .ship.sunk > .subdivision {\n  background-color: var(--sunk-ship-color);\n}\n\n@media (orientation: portrait) {\n  .gameboard-wrapper {\n    padding: 10% 0;\n  }\n}\n\n@media (max-width: 300px) {\n  .gameboard .cell {\n    margin: 1px;\n  }\n}\n\n@media (max-width: 1340px) {\n  .gameboard-wrapper#player-one {\n    flex-direction: column-reverse;\n  }\n\n  .gameboard-wrapper#player-two {\n    flex-direction: column;\n  }\n\n  .gameboard-wrapper .ships-tracker {\n    width: var(--gameboard-width);\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .gameboard-wrapper#player-two .ships-tracker {\n    justify-content: flex-end;\n  }\n\n  .gameboard-wrapper#player-one .ships-tracker > .ships-wrapper {\n    align-items: flex-start;\n  }\n\n  .gameboard-wrapper#player-two .ships-tracker > .ships-wrapper {\n    align-items: flex-end;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;EAClC,qCAAqC;EACrC,uBAAuB;EACvB,2BAA2B;EAC3B,0BAA0B;AAC5B;;AAEA;EACE,OAAO;EACP,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,aAAa;EACb,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,OAAO;EACP,+BAA+B;EAC/B,2BAA2B,EAAE,mCAAmC;EAChE,oBAAoB;EACpB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,mCAAmC;AACrC;;AAEA;;;EAGE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,4CAA4C;EAC5C,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,OAAO;EACP,mCAAmC;AACrC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,8BAA8B;EAChC;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,6BAA6B;IAC7B,aAAa;IACb,2BAA2B;EAC7B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,qBAAqB;EACvB;AACF","sourcesContent":[":root {\n  --gameboard-width: min(90%, 500px);\n  --missed-attack-color: lightsteelblue;\n  --ship-color: steelblue;\n  --hit-ship-color: lightpink;\n  --sunk-ship-color: crimson;\n}\n\n.gameboard-wrapper {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  gap: 10px;\n}\n\n.gameboard {\n  aspect-ratio: 2/2;\n  width: var(--gameboard-width);\n  display: flex;\n  pointer-events: none;\n  transition: filter 500ms;\n}\n\n.gameboard > .column {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  pointer-events: none;\n}\n\n.gameboard .cell {\n  flex: 1;\n  outline: 1px solid midnightblue;\n  background-color: #f8f8ffed; /* slightly transparent ghostwhite*/\n  pointer-events: auto;\n  cursor: pointer;\n  margin: 2px;\n}\n\n.gameboard .cell:hover {\n  background-color: var(--missed-attack-color);\n}\n\n.gameboard .cell.ship {\n  background-color: var(--ship-color);\n}\n\n.gameboard .cell.hit,\n.gameboard .cell.sunk,\n.gameboard .cell.missed-attack {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n\n.gameboard .cell.hit {\n  background-color: var(--hit-ship-color);\n}\n\n.gameboard .cell.sunk {\n  background-color: var(--sunk-ship-color);\n}\n\n.gameboard .cell.missed-attack {\n  background-color: var(--missed-attack-color);\n  font-size: 0.4rem;\n}\n\n.gameboard.disabled {\n  pointer-events: auto;\n  cursor: wait;\n  filter: brightness(0.9);\n}\n\n.gameboard.disabled .cell {\n  pointer-events: none;\n}\n\n.gameboard-wrapper .ships-tracker > .ships-wrapper {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n\n.gameboard-wrapper#player-two .ships-tracker > .ships-wrapper {\n  align-items: flex-start;\n}\n\n.ships-tracker .ship {\n  flex: 1;\n  display: flex;\n  gap: 2px;\n}\n\n.ships-tracker .ship > .subdivision {\n  flex: 1;\n  background-color: var(--ship-color);\n}\n\n.ships-tracker .ship.sunk > .subdivision {\n  background-color: var(--sunk-ship-color);\n}\n\n@media (orientation: portrait) {\n  .gameboard-wrapper {\n    padding: 10% 0;\n  }\n}\n\n@media (max-width: 300px) {\n  .gameboard .cell {\n    margin: 1px;\n  }\n}\n\n@media (max-width: 1340px) {\n  .gameboard-wrapper#player-one {\n    flex-direction: column-reverse;\n  }\n\n  .gameboard-wrapper#player-two {\n    flex-direction: column;\n  }\n\n  .gameboard-wrapper .ships-tracker {\n    width: var(--gameboard-width);\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .gameboard-wrapper#player-two .ships-tracker {\n    justify-content: flex-end;\n  }\n\n  .gameboard-wrapper#player-one .ships-tracker > .ships-wrapper {\n    align-items: flex-start;\n  }\n\n  .gameboard-wrapper#player-two .ships-tracker > .ships-wrapper {\n    align-items: flex-end;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7QUFDWCxFQUFFLHNEQUFVO0FBQ1o7QUFDQTs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsa0VBQW1COztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtFQUFtQjtBQUN0QyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2JhdHRsZS1zY3JlZW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcHMtbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvYmF0dGxlLXNjcmVlbi5jc3M/YzNmYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lLW92ZXItc2NyZWVuLmNzcz9jMzI5Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3M/MjE4NyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3NoaXBzLWxheW91dC5jc3M/MzAwZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVyLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91c2VyLWludGVyZmFjZS91aS1nYW1lLW92ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91c2VyLWludGVyZmFjZS91aS1nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91c2VyLWludGVyZmFjZS91c2VyLWludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNiYXR0bGUuc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jYmF0dGxlLnNjcmVlbiAjcGxheWVyLW9uZSAuZ2FtZWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI2JhdHRsZS5zY3JlZW4gI3BsYXllci1vbmUgLmdhbWVib2FyZCAuY2VsbDpub3QoLnNoaXApOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xcbiAgI2JhdHRsZS5zY3JlZW4ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JhdHRsZS1zY3JlZW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2JhdHRsZS5zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNiYXR0bGUuc2NyZWVuICNwbGF5ZXItb25lIC5nYW1lYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4jYmF0dGxlLnNjcmVlbiAjcGxheWVyLW9uZSAuZ2FtZWJvYXJkIC5jZWxsOm5vdCguc2hpcCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XFxuICAjYmF0dGxlLnNjcmVlbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JlZW4jZ2FtZS1vdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA3MCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2NyZWVuI2dhbWUtb3ZlciAuYnV0dG9ucyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uc2NyZWVuI2dhbWUtb3ZlciAuYnV0dG9ucyA+ICoge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxufVxcblxcbi5zY3JlZW4jZ2FtZS1vdmVyIC5idXR0b25zID4gKjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZS1vdmVyLXNjcmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNjcmVlbiNnYW1lLW92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDcwJSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zY3JlZW4jZ2FtZS1vdmVyIC5idXR0b25zIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5zY3JlZW4jZ2FtZS1vdmVyIC5idXR0b25zID4gKiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuXFxuLnNjcmVlbiNnYW1lLW92ZXIgLmJ1dHRvbnMgPiAqOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1nYW1lYm9hcmQtd2lkdGg6IG1pbig5MCUsIDUwMHB4KTtcXG4gIC0tbWlzc2VkLWF0dGFjay1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxuICAtLXNoaXAtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gIC0taGl0LXNoaXAtY29sb3I6IGxpZ2h0cGluaztcXG4gIC0tc3Vuay1zaGlwLWNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgZmxleDogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgYXNwZWN0LXJhdGlvOiAyLzI7XFxuICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciA1MDBtcztcXG59XFxuXFxuLmdhbWVib2FyZCA+IC5jb2x1bW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwge1xcbiAgZmxleDogMTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBtaWRuaWdodGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZmZWQ7IC8qIHNsaWdodGx5IHRyYW5zcGFyZW50IGdob3N0d2hpdGUqL1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDJweDtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWQtYXR0YWNrLWNvbG9yKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsLmhpdCxcXG4uZ2FtZWJvYXJkIC5jZWxsLnN1bmssXFxuLmdhbWVib2FyZCAuY2VsbC5taXNzZWQtYXR0YWNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuay1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5taXNzZWQtYXR0YWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3NlZC1hdHRhY2stY29sb3IpO1xcbiAgZm9udC1zaXplOiAwLjRyZW07XFxufVxcblxcbi5nYW1lYm9hcmQuZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBjdXJzb3I6IHdhaXQ7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG59XFxuXFxuLmdhbWVib2FyZC5kaXNhYmxlZCAuY2VsbCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZC13cmFwcGVyIC5zaGlwcy10cmFja2VyID4gLnNoaXBzLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLXR3byAuc2hpcHMtdHJhY2tlciA+IC5zaGlwcy13cmFwcGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc2hpcHMtdHJhY2tlciAuc2hpcCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4uc2hpcHMtdHJhY2tlciAuc2hpcCA+IC5zdWJkaXZpc2lvbiB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5zaGlwcy10cmFja2VyIC5zaGlwLnN1bmsgPiAuc3ViZGl2aXNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuay1zaGlwLWNvbG9yKTtcXG59XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcXG4gIC5nYW1lYm9hcmQtd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDEwJSAwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcXG4gIC5nYW1lYm9hcmQgLmNlbGwge1xcbiAgICBtYXJnaW46IDFweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNDBweCkge1xcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci1vbmUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuXFxuICAuZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLXR3byB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuZ2FtZWJvYXJkLXdyYXBwZXIgLnNoaXBzLXRyYWNrZXIge1xcbiAgICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci10d28gLnNoaXBzLXRyYWNrZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci1vbmUgLnNoaXBzLXRyYWNrZXIgPiAuc2hpcHMtd3JhcHBlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci10d28gLnNoaXBzLXRyYWNrZXIgPiAuc2hpcHMtd3JhcHBlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0NBQWtDO0VBQ2xDLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsT0FBTztFQUNQLCtCQUErQjtFQUMvQiwyQkFBMkIsRUFBRSxtQ0FBbUM7RUFDaEUsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7OztFQUdFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tZ2FtZWJvYXJkLXdpZHRoOiBtaW4oOTAlLCA1MDBweCk7XFxuICAtLW1pc3NlZC1hdHRhY2stY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xcbiAgLS1zaGlwLWNvbG9yOiBzdGVlbGJsdWU7XFxuICAtLWhpdC1zaGlwLWNvbG9yOiBsaWdodHBpbms7XFxuICAtLXN1bmstc2hpcC1jb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLmdhbWVib2FyZC13cmFwcGVyIHtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGFzcGVjdC1yYXRpbzogMi8yO1xcbiAgd2lkdGg6IHZhcigtLWdhbWVib2FyZC13aWR0aCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgNTAwbXM7XFxufVxcblxcbi5nYW1lYm9hcmQgPiAuY29sdW1uIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsIHtcXG4gIGZsZXg6IDE7XFxuICBvdXRsaW5lOiAxcHggc29saWQgbWlkbmlnaHRibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmZmVkOyAvKiBzbGlnaHRseSB0cmFuc3BhcmVudCBnaG9zdHdoaXRlKi9cXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAycHg7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzc2VkLWF0dGFjay1jb2xvcik7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5oaXQsXFxuLmdhbWVib2FyZCAuY2VsbC5zdW5rLFxcbi5nYW1lYm9hcmQgLmNlbGwubWlzc2VkLWF0dGFjayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmstc2hpcC1jb2xvcik7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwubWlzc2VkLWF0dGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWQtYXR0YWNrLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMC40cmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLmRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgY3Vyc29yOiB3YWl0O1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcblxcbi5nYW1lYm9hcmQuZGlzYWJsZWQgLmNlbGwge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQtd3JhcHBlciAuc2hpcHMtdHJhY2tlciA+IC5zaGlwcy13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci10d28gLnNoaXBzLXRyYWNrZXIgPiAuc2hpcHMtd3JhcHBlciB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnNoaXBzLXRyYWNrZXIgLnNoaXAge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnNoaXBzLXRyYWNrZXIgLnNoaXAgPiAuc3ViZGl2aXNpb24ge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uc2hpcHMtdHJhY2tlciAuc2hpcC5zdW5rID4gLnN1YmRpdmlzaW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmstc2hpcC1jb2xvcik7XFxufVxcblxcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XFxuICAuZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxMCUgMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxuICAuZ2FtZWJvYXJkIC5jZWxsIHtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzQwcHgpIHtcXG4gIC5nYW1lYm9hcmQtd3JhcHBlciNwbGF5ZXItb25lIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci10d28ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyIC5zaGlwcy10cmFja2VyIHtcXG4gICAgd2lkdGg6IHZhcigtLWdhbWVib2FyZC13aWR0aCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5nYW1lYm9hcmQtd3JhcHBlciNwbGF5ZXItdHdvIC5zaGlwcy10cmFja2VyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5nYW1lYm9hcmQtd3JhcHBlciNwbGF5ZXItb25lIC5zaGlwcy10cmFja2VyID4gLnNoaXBzLXdyYXBwZXIge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5nYW1lYm9hcmQtd3JhcHBlciNwbGF5ZXItdHdvIC5zaGlwcy10cmFja2VyID4gLnNoaXBzLXdyYXBwZXIge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3dhdmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDE4MC40ZGVnLFxcbiAgICByZ2IoMTM0IDIwMiAyNTUpIC0yLjIlLFxcbiAgICAjZmZmYmY1IDgzLjUlXFxuICApO1xcbn1cXG5cXG4jd2F2ZXMtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiN3YXZlcy13cmFwcGVyID4gLndhdmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDIwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgMTAwJTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGFuaW1hdGlvbjogbW92ZV93YXZlIDVzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuXFxuI3dhdmVzLXdyYXBwZXIgPiAud2F2ZTpudGgtb2YtdHlwZSgyKSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBhbmltYXRpb246IG1vdmVfd2F2ZSA0cyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbiN3YXZlcy13cmFwcGVyID4gLndhdmU6bnRoLW9mLXR5cGUoMykge1xcbiAgb3BhY2l0eTogMC40O1xcbiAgYW5pbWF0aW9uOiBtb3ZlX3dhdmUgN3MgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVfd2F2ZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpO1xcbiAgICBoZWlnaHQ6IDU1JTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDEpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCOzs7O0dBSUM7QUFDSDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLHlEQUEyQztFQUMzQyx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsV0FBVztFQUNiO0VBQ0E7SUFDRSxxQ0FBcUM7SUFDckMsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDE4MC40ZGVnLFxcbiAgICByZ2IoMTM0IDIwMiAyNTUpIC0yLjIlLFxcbiAgICAjZmZmYmY1IDgzLjUlXFxuICApO1xcbn1cXG5cXG4jd2F2ZXMtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiN3YXZlcy13cmFwcGVyID4gLndhdmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDIwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy93YXZlLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgMTAwJTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGFuaW1hdGlvbjogbW92ZV93YXZlIDVzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuXFxuI3dhdmVzLXdyYXBwZXIgPiAud2F2ZTpudGgtb2YtdHlwZSgyKSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBhbmltYXRpb246IG1vdmVfd2F2ZSA0cyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbiN3YXZlcy13cmFwcGVyID4gLndhdmU6bnRoLW9mLXR5cGUoMykge1xcbiAgb3BhY2l0eTogMC40O1xcbiAgYW5pbWF0aW9uOiBtb3ZlX3dhdmUgN3MgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVfd2F2ZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpO1xcbiAgICBoZWlnaHQ6IDU1JTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDEpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JlZW4jc2hpcHMtbGF5b3V0IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQjbmFtZSB7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IC5nYW1lYm9hcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCAuZ2FtZWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZCAuY2VsbDpub3QoLnNoaXApOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCBpbnB1dCNuYW1lIHtcXG4gIG91dGxpbmU6IHNvbGlkIDJweDtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQjbmFtZS52YWxpZCB7XFxuICBvdXRsaW5lLWNvbG9yOiBsaW1lO1xcbn1cXG4uc2NyZWVuI3NoaXBzLWxheW91dCBpbnB1dCNuYW1lLmludmFsaWQge1xcbiAgb3V0bGluZS1jb2xvcjogaG90cGluaztcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lLWNvbG9yOiBza3libHVlO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCAuZ2FtZWJvYXJkLXdyYXBwZXIgLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiB2YXIoLS1nYW1lYm9hcmQtd2lkdGgpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCAuZ2FtZWJvYXJkLXdyYXBwZXIgLmJ1dHRvbnMgPiAqIHtcXG4gIHdpZHRoOiAxMGNoO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2hpcHMtbGF5b3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2NyZWVuI3NoaXBzLWxheW91dCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0I25hbWUge1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCAuZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZCAuY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IC5nYW1lYm9hcmQgLmNlbGw6bm90KC5zaGlwKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQjbmFtZSB7XFxuICBvdXRsaW5lOiBzb2xpZCAycHg7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0I25hbWUudmFsaWQge1xcbiAgb3V0bGluZS1jb2xvcjogbGltZTtcXG59XFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQjbmFtZS5pbnZhbGlkIHtcXG4gIG91dGxpbmUtY29sb3I6IGhvdHBpbms7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZS1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZC13cmFwcGVyIC5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZC13cmFwcGVyIC5idXR0b25zID4gKiB7XFxuICB3aWR0aDogMTBjaDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmF0dGxlLXNjcmVlbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JhdHRsZS1zY3JlZW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUtb3Zlci1zY3JlZW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLW92ZXItc2NyZWVuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwcy1sYXlvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwcy1sYXlvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENvbXB1dGVyUGxheWVyLCBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgR0FNRSA9IHtcbiAgc2hpcExlbmd0aHM6IFs1LCA0LCAzLCAzLCAyXSxcbiAgc3RhcnRlZDogZmFsc2UsXG4gIHBsYXllcnM6IHsgXCJwbGF5ZXItb25lXCI6IG51bGwsIFwicGxheWVyLXR3b1wiOiBudWxsIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBHQU1FLm92ZXIgPSBmYWxzZTtcbiAgR0FNRS53aW5uZXIgPSB1bmRlZmluZWQ7XG4gIEdBTUUuY3VycmVudFR1cm4gPSBcInBsYXllci1vbmVcIjtcbiAgR0FNRS5wbGF5ZXJzW1wicGxheWVyLW9uZVwiXSA9IG5ldyBQbGF5ZXIoKTtcbiAgR0FNRS5wbGF5ZXJzW1wicGxheWVyLXR3b1wiXSA9IG5ldyBDb21wdXRlclBsYXllcihcbiAgICBHQU1FLnBsYXllcnNbXCJwbGF5ZXItb25lXCJdLmdhbWVib2FyZFxuICApO1xuICBHQU1FLnN0YXJ0ZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2FtZVN0YXRlKCkge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRUdXJuOiBHQU1FLmN1cnJlbnRUdXJuLFxuICAgIGF2YWlsYWJsZVNoaXBzOiBbLi4uR0FNRS5zaGlwTGVuZ3Roc10sXG4gICAgaXNPdmVyOiBHQU1FLm92ZXIsXG4gICAgd2lubmVyOiBHQU1FLndpbm5lcixcbiAgICBwbGF5ZXJzOiBHQU1FLnBsYXllcnMsXG4gICAgZ2FtZWJvYXJkczoge1xuICAgICAgXCJwbGF5ZXItb25lXCI6IEdBTUUucGxheWVyc1tcInBsYXllci1vbmVcIl1cbiAgICAgICAgPyBHQU1FLnBsYXllcnNbXCJwbGF5ZXItb25lXCJdLmdhbWVib2FyZC5nZXRTdGF0ZSgpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIFwicGxheWVyLXR3b1wiOiBHQU1FLnBsYXllcnNbXCJwbGF5ZXItdHdvXCJdXG4gICAgICAgID8gR0FNRS5wbGF5ZXJzW1wicGxheWVyLXR3b1wiXS5nYW1lYm9hcmQuZ2V0U3RhdGUoKVxuICAgICAgICA6IG51bGwsXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVHVybnMoKSB7XG4gIEdBTUUuY3VycmVudFR1cm4gPVxuICAgIEdBTUUuY3VycmVudFR1cm4gPT09IFwicGxheWVyLW9uZVwiID8gXCJwbGF5ZXItdHdvXCIgOiBcInBsYXllci1vbmVcIjtcbn1cblxuZnVuY3Rpb24gbmV4dFR1cm4oKSB7XG4gIHN3aXRjaFR1cm5zKCk7XG4gIGlmIChHQU1FLmN1cnJlbnRUdXJuID09PSBcInBsYXllci10d29cIikgYWlQbGF5c1R1cm4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcHMoc2hpcHNDb29yZGluYXRlcykge1xuICBpZiAoIXNoaXBzQ29vcmRpbmF0ZXMpIHRocm93IG5ldyBFcnJvcihcImNvb3JkaW5hdGVzIGFyZ3VtZW50IG1pc3NpbmdcIik7XG4gIGlmICghR0FNRS5zdGFydGVkKSB0aHJvdyBuZXcgRXJyb3IoYEdhbWUgaGFzIG5vdCBzdGFydGVkYCk7XG5cbiAgZm9yIChjb25zdCBjb29yZGluYXRlcyBvZiBzaGlwc0Nvb3JkaW5hdGVzKSB7XG4gICAgR0FNRS5wbGF5ZXJzW1wicGxheWVyLW9uZVwiXS5nYW1lYm9hcmQucGxhY2VTaGlwKGNvb3JkaW5hdGVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaHVtYW5QbGF5c1R1cm4oY29vcmRpbmF0ZXMpIHtcbiAgaWYgKCFHQU1FLnN0YXJ0ZWQpIHRocm93IG5ldyBFcnJvcihcImNhbid0IHBsYXkgdW50aWwgZ2FtZSBoYXMgYmVlbiBzdGFydGVkIFwiKTtcbiAgaWYgKCFjb29yZGluYXRlcykgdGhyb3cgbmV3IEVycm9yKFwiY29vcmRpbmF0ZXMgYXJndW1lbnQgbWlzc2luZ1wiKTtcbiAgaWYgKEdBTUUuY3VycmVudFR1cm4gIT09IFwicGxheWVyLW9uZVwiIHx8IEdBTUUub3Zlcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGh1bWFuIHBsYXllcidzIHR1cm5gKTtcbiAgfVxuXG4gIGNvbnN0IHN1Y2Nlc3NmdWxBdHRhY2sgPVxuICAgIEdBTUUucGxheWVyc1tcInBsYXllci10d29cIl0uZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuXG4gIGlmIChzdWNjZXNzZnVsQXR0YWNrKSB7XG4gICAgaWYgKEdBTUUucGxheWVyc1tcInBsYXllci10d29cIl0uZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBHQU1FLm92ZXIgPSB0cnVlO1xuICAgICAgR0FNRS53aW5uZXIgPSBcInBsYXllci1vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dFR1cm4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGxheWVyOiBcInBsYXllci10d29cIixcbiAgICAgIGdhbWVib2FyZFN0YXRlOiBHQU1FLnBsYXllcnNbXCJwbGF5ZXItdHdvXCJdLmdhbWVib2FyZC5nZXRTdGF0ZSgpLFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gYWlQbGF5c1R1cm4oKSB7XG4gIEdBTUUucGxheWVyc1tcInBsYXllci10d29cIl0uYXR0YWNrKCk7XG5cbiAgaWYgKEdBTUUucGxheWVyc1tcInBsYXllci1vbmVcIl0uZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgR0FNRS5vdmVyID0gdHJ1ZTtcbiAgICBHQU1FLndpbm5lciA9IFwicGxheWVyLXR3b1wiO1xuICB9IGVsc2Uge1xuICAgIG5leHRUdXJuKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFyckluY2x1ZGVzT2JqIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY29uc3QgR0FNRUJPQVJEX1dJRFRIID0gMTA7XG5leHBvcnQgY29uc3QgR0FNRUJPQVJEX0hFSUdIVCA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVtcHR5Q2VsbHMgPSB0aGlzLl9zZXRJbml0aWFsRW1wdHlDZWxscygpO1xuICB9XG5cbiAgX3NldEluaXRpYWxFbXB0eUNlbGxzKCkge1xuICAgIGNvbnN0IGVtcHR5Q2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEdBTUVCT0FSRF9XSURUSDsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEdBTUVCT0FSRF9IRUlHSFQ7IHkrKykge1xuICAgICAgICBlbXB0eUNlbGxzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW1wdHlDZWxscztcbiAgfVxuXG4gIHNoaXBzID0gW107XG4gIG1pc3NlZEF0dGFja3MgPSBbXTtcblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hpcHM6IHRoaXMuc2hpcHMsXG4gICAgICBtaXNzZWRBdHRhY2tzOiB0aGlzLm1pc3NlZEF0dGFja3MsXG4gICAgICBlbXB0eUNlbGxzOiBbLi4udGhpcy5lbXB0eUNlbGxzXSxcbiAgICB9O1xuICB9XG5cbiAgcGxhY2VTaGlwKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgZW10cHlDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzLmZpbHRlcigoY29vcmRzKSA9PiB7XG4gICAgICByZXR1cm4gYXJySW5jbHVkZXNPYmoodGhpcy5lbXB0eUNlbGxzLCBjb29yZHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGVtdHB5Q29vcmRpbmF0ZXMubGVuZ3RoICE9PSBjb29yZGluYXRlcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29vcmRpbmF0ZXNcIik7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gICAgc2hpcC5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcblxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgY29uc3QgY29vcmRzSW5kZXggPSB0aGlzLmVtcHR5Q2VsbHMuZmluZEluZGV4KFxuICAgICAgICAoY2VsbCkgPT4gY2VsbC54ID09PSBjb29yZHMueCAmJiBjZWxsLnkgPT09IGNvb3Jkcy55XG4gICAgICApO1xuICAgICAgdGhpcy5lbXB0eUNlbGxzLnNwbGljZShjb29yZHNJbmRleCwgMSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyByZXR1cm5zIHdoZXRoZXIgdGhlIGF0dGFjayB3YXMgc3VjY2Vzc2Z1bCBvciBub3RcbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICBpZiAoYXJySW5jbHVkZXNPYmooc2hpcC5jb29yZGluYXRlcywgY29vcmRpbmF0ZXMpKSB7XG4gICAgICAgIGlmIChhcnJJbmNsdWRlc09iaihzaGlwLmhpdHNUYWtlbiwgY29vcmRpbmF0ZXMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgc2hpcC5oaXQoY29vcmRpbmF0ZXMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgY29vcmRpbmF0ZXMgZG9uJ3QgYmVsb25nIHRvIGFueSBzaGlwLCB0aGUgYXR0YWNrIG1pc3NlZC5cblxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBjb29yZGluYXRlcyBhcmVuJ3QgYWxyZWFkeSBpbiBtaXNzZWRBdHRhY2tzXG4gICAgaWYgKGFyckluY2x1ZGVzT2JqKHRoaXMubWlzc2VkQXR0YWNrcywgY29vcmRpbmF0ZXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGxldCBzdW5rU2hpcHMgPSAwO1xuICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHN1bmtTaGlwcysrO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1bmtTaGlwcyA9PT0gdGhpcy5zaGlwcy5sZW5ndGg7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRlZ2VySW5SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyckluY2x1ZGVzT2JqKGFyciwgb2JqKSB7XG4gIGNvbnN0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICByZXR1cm4gYXJyLnNvbWUoKGFyck9iaikgPT4gb2JqS2V5cy5ldmVyeSgoa2V5KSA9PiBhcnJPYmpba2V5XSA9PT0gb2JqW2tleV0pKTtcbn1cbiIsImltcG9ydCB7IGdldEdhbWVTdGF0ZSB9IGZyb20gXCIuL2dhbWUtbG9vcFwiO1xuaW1wb3J0IEdhbWVib2FyZCwgeyBHQU1FQk9BUkRfSEVJR0hULCBHQU1FQk9BUkRfV0lEVEggfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGFyckluY2x1ZGVzT2JqLCByYW5kb21JbnRlZ2VySW5SYW5nZSB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wdXRlclBsYXllciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG9wcG9uZW50R2FtZWJvYXJkKSB7XG4gICAgaWYgKCFvcHBvbmVudEdhbWVib2FyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwib3Bwb25lbnQgZ2FtZWJvYXJkIGFyZ3VtZW50IG1pc3NpbmdcIik7XG4gICAgfVxuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcHBvbmVudEdhbWVib2FyZCA9IG9wcG9uZW50R2FtZWJvYXJkO1xuICAgIHRoaXMubGVnYWxNb3ZlcyA9IHRoaXMuX3NldEluaXRpYWxsTGVnYWxNb3ZlcygpO1xuICAgIHRoaXMuX3JhbmRvbWl6ZUdhbWVib2FyZCgpO1xuICB9XG5cbiAgX3NldEluaXRpYWxsTGVnYWxNb3ZlcygpIHtcbiAgICBjb25zdCBsZWdhbE1vdmVzID0gW107XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBHQU1FQk9BUkRfV0lEVEg7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBHQU1FQk9BUkRfSEVJR0hUOyB5KyspIHtcbiAgICAgICAgbGVnYWxNb3Zlcy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxlZ2FsTW92ZXM7XG4gIH1cblxuICBfcmFuZG9taXplR2FtZWJvYXJkKCkge1xuICAgIGNvbnN0IGVtcHR5Q2VsbHMgPSB0aGlzLmdhbWVib2FyZC5nZXRTdGF0ZSgpLmVtcHR5Q2VsbHM7XG5cbiAgICBjb25zdCBnZXRSYW5kb21QbGFjZW1lbnRDb29yZGluYXRlcyA9IChzaGlwTGVuZ3RoKSA9PiB7XG4gICAgICBjb25zdCBpc0hvcml6b250YWwgPSBbdHJ1ZSwgZmFsc2VdW3JhbmRvbUludGVnZXJJblJhbmdlKDAsIDEpXTtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gW107XG5cbiAgICAgIGZvciAoY29uc3QgY3VycmVudENlbGwgb2YgZW1wdHlDZWxscykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKGlzSG9yaXpvbnRhbCAmJiBjdXJyZW50Q2VsbC54ID4gR0FNRUJPQVJEX1dJRFRIIC0gc2hpcExlbmd0aCkgfHxcbiAgICAgICAgICAoIWlzSG9yaXpvbnRhbCAmJiBjdXJyZW50Q2VsbC55ID4gR0FNRUJPQVJEX0hFSUdIVCAtIHNoaXBMZW5ndGgpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRqYWNlbnRDZWxscyA9IFtjdXJyZW50Q2VsbF07XG4gICAgICAgIGxldCBuZXh0Q2VsbDtcbiAgICAgICAgbGV0IHByZXZpb3VzQ2VsbCA9IGN1cnJlbnRDZWxsO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFkamFjZW50Q2VsbHMubGVuZ3RoID09PSBzaGlwTGVuZ3RoKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVDb29yZGluYXRlcy5wdXNoKGFkamFjZW50Q2VsbHMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dENlbGwgPSBpc0hvcml6b250YWxcbiAgICAgICAgICAgID8geyB4OiBwcmV2aW91c0NlbGwueCArIDEsIHk6IHByZXZpb3VzQ2VsbC55IH1cbiAgICAgICAgICAgIDogeyB4OiBwcmV2aW91c0NlbGwueCwgeTogcHJldmlvdXNDZWxsLnkgKyAxIH07XG5cbiAgICAgICAgICBwcmV2aW91c0NlbGwgPSBuZXh0Q2VsbDtcblxuICAgICAgICAgIGlmIChhcnJJbmNsdWRlc09iaihlbXB0eUNlbGxzLCBuZXh0Q2VsbCkpIHtcbiAgICAgICAgICAgIGFkamFjZW50Q2VsbHMucHVzaChuZXh0Q2VsbCk7XG4gICAgICAgICAgfSBlbHNlIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNob3NlbkNvb3JkaW5hdGVzID1cbiAgICAgICAgYXZhaWxhYmxlQ29vcmRpbmF0ZXNbXG4gICAgICAgICAgcmFuZG9tSW50ZWdlckluUmFuZ2UoMCwgYXZhaWxhYmxlQ29vcmRpbmF0ZXMubGVuZ3RoIC0gMSlcbiAgICAgICAgXTtcblxuICAgICAgY29uc3QgY29vcmRpbmF0ZXNGb3JEZWxldGlvbiA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hvc2VuQ29vcmRpbmF0ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGxPblRoZUxlZnQgPSB7XG4gICAgICAgICAgeDogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnggLSAxLFxuICAgICAgICAgIHk6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55LFxuICAgICAgICB9O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnggPiAwICYmXG4gICAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsT25UaGVMZWZ0KVxuICAgICAgICApIHtcbiAgICAgICAgICBjb29yZGluYXRlc0ZvckRlbGV0aW9uLnB1c2goY2VsbE9uVGhlTGVmdCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZWxsT25UaGVSaWdodCA9IHtcbiAgICAgICAgICB4OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCArIDEsXG4gICAgICAgICAgeTogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnksXG4gICAgICAgIH07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCA8IEdBTUVCT0FSRF9XSURUSCAtIDEgJiZcbiAgICAgICAgICAhYXJySW5jbHVkZXNPYmooY2hvc2VuQ29vcmRpbmF0ZXMsIGNlbGxPblRoZVJpZ2h0KVxuICAgICAgICApIHtcbiAgICAgICAgICBjb29yZGluYXRlc0ZvckRlbGV0aW9uLnB1c2goY2VsbE9uVGhlUmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2VsbEJlbG93ID0ge1xuICAgICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54LFxuICAgICAgICAgIHk6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55IC0gMSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55ID4gMCAmJlxuICAgICAgICAgICFhcnJJbmNsdWRlc09iaihjaG9zZW5Db29yZGluYXRlcywgY2VsbEJlbG93KVxuICAgICAgICApIHtcbiAgICAgICAgICBjb29yZGluYXRlc0ZvckRlbGV0aW9uLnB1c2goY2VsbEJlbG93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNlbGxBYm92ZSA9IHtcbiAgICAgICAgICB4OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCxcbiAgICAgICAgICB5OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSArIDEsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSA8IEdBTUVCT0FSRF9IRUlHSFQgLSAxICYmXG4gICAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsQWJvdmUpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzRm9yRGVsZXRpb24ucHVzaChjZWxsQWJvdmUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFsuLi5jaG9zZW5Db29yZGluYXRlcywgLi4uY29vcmRpbmF0ZXNGb3JEZWxldGlvbl0uZm9yRWFjaCgoY29vcmRzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3Jkc0luZGV4ID0gZW1wdHlDZWxscy5maW5kSW5kZXgoXG4gICAgICAgICAgKGNlbGwpID0+IGNlbGwueCA9PT0gY29vcmRzLnggJiYgY2VsbC55ID09PSBjb29yZHMueVxuICAgICAgICApO1xuICAgICAgICBlbXB0eUNlbGxzLnNwbGljZShjb29yZHNJbmRleCwgMSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjaG9zZW5Db29yZGluYXRlcztcbiAgICB9O1xuXG4gICAgZ2V0R2FtZVN0YXRlKCkuYXZhaWxhYmxlU2hpcHMuZm9yRWFjaCgoc2hpcExlbmd0aCkgPT4ge1xuICAgICAgY29uc3QgcGxhY2VtZW50Q29vcmRpbmF0ZXMgPSBnZXRSYW5kb21QbGFjZW1lbnRDb29yZGluYXRlcyhzaGlwTGVuZ3RoKTtcbiAgICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcChwbGFjZW1lbnRDb29yZGluYXRlcyk7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0UmFuZG9tQXR0YWNrQ29vcmRpbmF0ZXMoKSB7XG4gICAgaWYgKCF0aGlzLmxlZ2FsTW92ZXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtb3JlIGNlbGxzIGxlZnQgdG8gYXR0YWNrXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gcmFuZG9tSW50ZWdlckluUmFuZ2UoMCwgdGhpcy5sZWdhbE1vdmVzLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IGF0dGFja0Nvb3JkaW5hdGVzID0gdGhpcy5sZWdhbE1vdmVzW3JhbmRvbUluZGV4XTtcblxuICAgIC8vcmVtb3ZlIHRoZSBhdHRhY2sgZnJvbSB0aGUgbGVnYWwgbW92ZXMsIHNvIHRoYXQgdGhlIHNhbWUgY29vcmRpbmF0ZSBpc24ndCBhdHRhY2tlZCB0d2ljZVxuICAgIHRoaXMubGVnYWxNb3Zlcy5zcGxpY2UocmFuZG9tSW5kZXgsIDEpO1xuXG4gICAgcmV0dXJuIGF0dGFja0Nvb3JkaW5hdGVzO1xuICB9XG5cbiAgX29yaWdpbiA9IG51bGw7XG4gIF9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IG51bGw7XG4gIF9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudCA9IG51bGw7XG4gIF9sYXN0RGlyZWN0aW9uID0gbnVsbDtcbiAgX2lzVmVydGljYWwgPSBmYWxzZTtcbiAgX2lzSG9yaXpvbnRhbCA9IGZhbHNlO1xuXG4gIF92ZXJ0aWNhbFBhdGggPSB7IGJlbG93OiBbXSwgYWJvdmU6IFtdIH07XG4gIF9ob3Jpem9udGFsUGF0aCA9IHsgbGVmdDogW10sIHJpZ2h0OiBbXSB9O1xuXG4gIF9nZXRBZGphY2VudEF0dGFja0Nvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBpc0RpZmZlcmVudFNoaXApIHtcbiAgICBpZiAoIXRoaXMuX29yaWdpbiB8fCBpc0RpZmZlcmVudFNoaXApIHtcbiAgICAgIHRoaXMuX29yaWdpbiA9IGNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1ZlcnRpY2FsID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc0hvcml6b250YWwgPSBmYWxzZTtcblxuICAgICAgLy8gY2xlYXIgYW5kIHBvcHVsYXRlIGhvcml6b250YWwgcGF0aFxuICAgICAgdGhpcy5faG9yaXpvbnRhbFBhdGgubGVmdCA9IFtdO1xuICAgICAgdGhpcy5faG9yaXpvbnRhbFBhdGgucmlnaHQgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSBjb29yZGluYXRlcy54IC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICBjb25zdCBuZXdBZGphY2VudENvb3JkaW5hdGVzID0geyB4OiBpbmRleCwgeTogY29vcmRpbmF0ZXMueSB9O1xuICAgICAgICBpZiAoIWFyckluY2x1ZGVzT2JqKHRoaXMubGVnYWxNb3ZlcywgbmV3QWRqYWNlbnRDb29yZGluYXRlcykpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2hvcml6b250YWxQYXRoLmxlZnQudW5zaGlmdChuZXdBZGphY2VudENvb3JkaW5hdGVzKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaW5kZXggPSBjb29yZGluYXRlcy54ICsgMTsgaW5kZXggPCBHQU1FQk9BUkRfV0lEVEg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmV3QWRqYWNlbnRDb29yZGluYXRlcyA9IHsgeDogaW5kZXgsIHk6IGNvb3JkaW5hdGVzLnkgfTtcbiAgICAgICAgaWYgKCFhcnJJbmNsdWRlc09iaih0aGlzLmxlZ2FsTW92ZXMsIG5ld0FkamFjZW50Q29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsUGF0aC5yaWdodC5wdXNoKG5ld0FkamFjZW50Q29vcmRpbmF0ZXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBjbGVhciBhbmQgcG9wdWxhdGUgdmVydGljYWwgcGF0aFxuICAgICAgdGhpcy5fdmVydGljYWxQYXRoLmJlbG93ID0gW107XG4gICAgICB0aGlzLl92ZXJ0aWNhbFBhdGguYWJvdmUgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSBjb29yZGluYXRlcy55IC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICBjb25zdCBuZXdBZGphY2VudENvb3JkaW5hdGVzID0geyB4OiBjb29yZGluYXRlcy54LCB5OiBpbmRleCB9O1xuICAgICAgICBpZiAoIWFyckluY2x1ZGVzT2JqKHRoaXMubGVnYWxNb3ZlcywgbmV3QWRqYWNlbnRDb29yZGluYXRlcykpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ZlcnRpY2FsUGF0aC5iZWxvdy51bnNoaWZ0KG5ld0FkamFjZW50Q29vcmRpbmF0ZXMpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IGNvb3JkaW5hdGVzLnkgKyAxOyBpbmRleCA8IEdBTUVCT0FSRF9IRUlHSFQ7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmV3QWRqYWNlbnRDb29yZGluYXRlcyA9IHsgeDogY29vcmRpbmF0ZXMueCwgeTogaW5kZXggfTtcbiAgICAgICAgaWYgKCFhcnJJbmNsdWRlc09iaih0aGlzLmxlZ2FsTW92ZXMsIG5ld0FkamFjZW50Q29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFBhdGguYWJvdmUucHVzaChuZXdBZGphY2VudENvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBdHRhY2sgYWxsIGZvdXIgZGlyZWN0aW9ucyB1bnRpbCBhIHRoZXJlJ3MgYSBoaXRcbiAgICBpZiAoY29vcmRpbmF0ZXMueCA9PT0gdGhpcy5fb3JpZ2luLnggJiYgY29vcmRpbmF0ZXMueSA9PT0gdGhpcy5fb3JpZ2luLnkpIHtcbiAgICAgIGlmICghdGhpcy5fbGFzdERpcmVjdGlvbiAmJiB0aGlzLl92ZXJ0aWNhbFBhdGguYmVsb3cubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID0gdGhpcy5fdmVydGljYWxQYXRoLmJlbG93LnNwbGljZSgtMSlbMF07XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPSBcImJlbG93XCI7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBbbnVsbCwgXCJiZWxvd1wiXS5pbmNsdWRlcyh0aGlzLl9sYXN0RGlyZWN0aW9uKSAmJlxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFBhdGguYWJvdmUubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSB0aGlzLl92ZXJ0aWNhbFBhdGguYWJvdmUuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IFwiYWJvdmVcIjtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIFtudWxsLCBcImJlbG93XCIsIFwiYWJvdmVcIl0uaW5jbHVkZXModGhpcy5fbGFzdERpcmVjdGlvbikgJiZcbiAgICAgICAgdGhpcy5faG9yaXpvbnRhbFBhdGgubGVmdC5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IHRoaXMuX2hvcml6b250YWxQYXRoLmxlZnQuc3BsaWNlKC0xKVswXTtcbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSB0aGlzLl9ob3Jpem9udGFsUGF0aC5yaWdodC5zaGlmdCgpO1xuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgfVxuXG4gICAgICAvL3JlbW92ZSB0aGUgYXR0YWNrIGZyb20gdGhlIGxlZ2FsIG1vdmVzLCBzbyB0aGF0IHRoZSBzYW1lIGNvb3JkaW5hdGUgaXNuJ3QgYXR0YWNrZWQgaW4gdGhlIGZ1dHVyZVxuICAgICAgY29uc3QgbGFzdEF0dGFja0luZGV4ID0gdGhpcy5sZWdhbE1vdmVzLmZpbmRJbmRleChcbiAgICAgICAgKGNvb3JkcykgPT5cbiAgICAgICAgICBjb29yZHMueCA9PT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQueCAmJlxuICAgICAgICAgIGNvb3Jkcy55ID09PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZC55XG4gICAgICApO1xuICAgICAgdGhpcy5sZWdhbE1vdmVzLnNwbGljZShsYXN0QXR0YWNrSW5kZXgsIDEpO1xuXG4gICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudCA9IGNvb3JkaW5hdGVzO1xuICAgICAgcmV0dXJuIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkO1xuICAgIH1cblxuICAgIC8vIFRoZSBmaXJzdCB0aW1lIHRoZXJlJ3MgYSBoaXQsIHNlZSB3aGV0aGVyIHRoZSBzaGlwIGlzIHBsYWNlZCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxuICAgIGlmIChcbiAgICAgIChjb29yZGluYXRlcy54ICE9PSB0aGlzLl9vcmlnaW4ueCB8fCBjb29yZGluYXRlcy55ICE9PSB0aGlzLl9vcmlnaW4ueSkgJiZcbiAgICAgICF0aGlzLl9pc1ZlcnRpY2FsICYmXG4gICAgICAhdGhpcy5faXNIb3Jpem9udGFsXG4gICAgKSB7XG4gICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID09PSBcImJlbG93XCIgfHwgdGhpcy5fbGFzdERpcmVjdGlvbiA9PT0gXCJhYm92ZVwiXG4gICAgICAgID8gKHRoaXMuX2lzVmVydGljYWwgPSB0cnVlKVxuICAgICAgICA6ICh0aGlzLl9pc0hvcml6b250YWwgPSB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgY29vcmRpbmF0ZXMgYXJndW1lbnQgaXMgcmVwZWF0ZWQgb3Igd2UgcmVhY2hlZCB0aGUgZW5kIG9mIHRoYXQgc2lkZSwgd2UgY2hhbmdlIHRvIHRoZSBvdGhlciBzaWRlLlxuICAgIGlmIChcbiAgICAgIHRoaXMuX2lzVmVydGljYWwgJiZcbiAgICAgICgoY29vcmRpbmF0ZXMueCA9PT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQueCAmJlxuICAgICAgICBjb29yZGluYXRlcy55ID09PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudC55KSB8fFxuICAgICAgICAhdGhpcy5fdmVydGljYWxQYXRoW3RoaXMuX2xhc3REaXJlY3Rpb25dLmxlbmd0aClcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLl9sYXN0RGlyZWN0aW9uID09PSBcImJlbG93XCIpIHtcbiAgICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSB0aGlzLl92ZXJ0aWNhbFBhdGguYWJvdmUuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IFwiYWJvdmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID0gdGhpcy5fdmVydGljYWxQYXRoLmJlbG93LnNwbGljZSgtMSlbMF07XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPSBcImJlbG93XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQnV0IGlmIHRoZSBjdXJyZW50IGNvb3JkaW5hdGVzIGFyZSBkaWZmZXJlbnQgZnJvbSB0aGUgbGFzdCBjb29yZGluYXRlcywgdGhhdCBtZWFucyB0aGUgbGFzdEF0dGFjayB3YXMgYSBoaXQsIHNvIHdlIGtlZXAgYXR0YWNraW5nIHRvd2FyZHMgdGhhdCBzaWRlLlxuICAgIGVsc2UgaWYgKFxuICAgICAgdGhpcy5faXNWZXJ0aWNhbCAmJlxuICAgICAgdGhpcy5fdmVydGljYWxQYXRoW3RoaXMuX2xhc3REaXJlY3Rpb25dLmxlbmd0aCAmJlxuICAgICAgY29vcmRpbmF0ZXMueSAhPT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQueVxuICAgICkge1xuICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPVxuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID09PSBcImJlbG93XCJcbiAgICAgICAgICA/IHRoaXMuX3ZlcnRpY2FsUGF0aC5iZWxvdy5zcGxpY2UoLTEpWzBdXG4gICAgICAgICAgOiB0aGlzLl92ZXJ0aWNhbFBhdGguYWJvdmUuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyBBbmQgd2UgZG8gdGhlIHNhbWUgZm9yIHRoZSBvdGhlciBheGlzXG4gICAgaWYgKFxuICAgICAgdGhpcy5faXNIb3Jpem9udGFsICYmXG4gICAgICAoKGNvb3JkaW5hdGVzLnggPT09IHRoaXMuX2xhc3RDb29yZGluYXRlc0FyZ3VtZW50LnggJiZcbiAgICAgICAgY29vcmRpbmF0ZXMueSA9PT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQueSkgfHxcbiAgICAgICAgIXRoaXMuX2hvcml6b250YWxQYXRoW3RoaXMuX2xhc3REaXJlY3Rpb25dLmxlbmd0aClcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLl9sYXN0RGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IHRoaXMuX2hvcml6b250YWxQYXRoLnJpZ2h0LnNoaWZ0KCk7XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IHRoaXMuX2hvcml6b250YWxQYXRoLmxlZnQuc3BsaWNlKC0xKVswXTtcbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLl9pc0hvcml6b250YWwgJiZcbiAgICAgIHRoaXMuX2hvcml6b250YWxQYXRoW3RoaXMuX2xhc3REaXJlY3Rpb25dLmxlbmd0aCAmJlxuICAgICAgY29vcmRpbmF0ZXMueCAhPT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQueFxuICAgICkge1xuICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPVxuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID09PSBcImxlZnRcIlxuICAgICAgICAgID8gdGhpcy5faG9yaXpvbnRhbFBhdGgubGVmdC5zcGxpY2UoLTEpWzBdXG4gICAgICAgICAgOiB0aGlzLl9ob3Jpem9udGFsUGF0aC5yaWdodC5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vcmVtb3ZlIHRoZSBhdHRhY2sgZnJvbSB0aGUgbGVnYWwgbW92ZXMsIHNvIHRoYXQgdGhlIHNhbWUgY29vcmRpbmF0ZSBpc24ndCBhdHRhY2tlZCBpbiB0aGUgZnV0dXJlXG4gICAgY29uc3QgbGFzdEF0dGFja0luZGV4ID0gdGhpcy5sZWdhbE1vdmVzLmZpbmRJbmRleChcbiAgICAgIChjb29yZHMpID0+XG4gICAgICAgIGNvb3Jkcy54ID09PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZC54ICYmXG4gICAgICAgIGNvb3Jkcy55ID09PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZC55XG4gICAgKTtcbiAgICB0aGlzLmxlZ2FsTW92ZXMuc3BsaWNlKGxhc3RBdHRhY2tJbmRleCwgMSk7XG5cbiAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudCA9IGNvb3JkaW5hdGVzO1xuXG4gICAgcmV0dXJuIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkO1xuICB9XG5cbiAgbGFzdEhpdCA9IG51bGw7XG4gIGlzRGlmZmVyZW50U2hpcCA9IG51bGw7XG5cbiAgYXR0YWNrKCkge1xuICAgIGNvbnN0IGdldE9wcG9uZW50VG90YWxIaXRzID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub3Bwb25lbnRHYW1lYm9hcmQuc2hpcHMucmVkdWNlKCh0b3RhbEhpdHMsIGN1cnJlbnRTaGlwKSA9PiB7XG4gICAgICAgIHJldHVybiB0b3RhbEhpdHMgKyBjdXJyZW50U2hpcC5oaXRzVGFrZW4ubGVuZ3RoO1xuICAgICAgfSwgMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxhc3RTaGlwSGl0SXNOb3RTdW5rID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmxhc3RIaXQpIHJldHVybjtcblxuICAgICAgZm9yIChjb25zdCBzaGlwIG9mIHRoaXMub3Bwb25lbnRHYW1lYm9hcmQuc2hpcHMpIHtcbiAgICAgICAgaWYgKGFyckluY2x1ZGVzT2JqKHNoaXAuY29vcmRpbmF0ZXMsIHRoaXMubGFzdEhpdCkpIHtcbiAgICAgICAgICByZXR1cm4gIXNoaXAuaXNTdW5rKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMubGFzdEhpdCAmJiBsYXN0U2hpcEhpdElzTm90U3VuaygpKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMuX2dldEFkamFjZW50QXR0YWNrQ29vcmRpbmF0ZXMoXG4gICAgICAgIHRoaXMubGFzdEhpdCxcbiAgICAgICAgdGhpcy5pc0RpZmZlcmVudFNoaXBcbiAgICAgICk7XG5cbiAgICAgIGlmICh0aGlzLmlzRGlmZmVyZW50U2hpcCkgdGhpcy5pc0RpZmZlcmVudFNoaXAgPSBmYWxzZTtcblxuICAgICAgY29uc3Qgb3Bwb25lbnRIaXRzQmVmb3JlQXR0YWNrID0gZ2V0T3Bwb25lbnRUb3RhbEhpdHMoKTtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NmdWxBdHRhY2sgPVxuICAgICAgICB0aGlzLm9wcG9uZW50R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgICAgY29uc3Qgb3Bwb25lbnRIaXRzQWZ0ZXJBdHRhY2sgPSBnZXRPcHBvbmVudFRvdGFsSGl0cygpO1xuICAgICAgaWYgKFxuICAgICAgICBzdWNjZXNzZnVsQXR0YWNrICYmXG4gICAgICAgIG9wcG9uZW50SGl0c0FmdGVyQXR0YWNrID4gb3Bwb25lbnRIaXRzQmVmb3JlQXR0YWNrXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5sYXN0SGl0ID0gY29vcmRpbmF0ZXM7XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3NmdWxBdHRhY2s7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9wcG9uZW50SGl0c0JlZm9yZUF0dGFjayA9IGdldE9wcG9uZW50VG90YWxIaXRzKCk7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMuX2dldFJhbmRvbUF0dGFja0Nvb3JkaW5hdGVzKCk7XG4gICAgICBjb25zdCBzdWNjZXNzZnVsQXR0YWNrID1cbiAgICAgICAgdGhpcy5vcHBvbmVudEdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgIGNvbnN0IG9wcG9uZW50SGl0c0FmdGVyQXR0YWNrID0gZ2V0T3Bwb25lbnRUb3RhbEhpdHMoKTtcbiAgICAgIHRoaXMubGFzdEhpdCA9XG4gICAgICAgIG9wcG9uZW50SGl0c0FmdGVyQXR0YWNrID4gb3Bwb25lbnRIaXRzQmVmb3JlQXR0YWNrID8gY29vcmRpbmF0ZXMgOiBudWxsO1xuXG4gICAgICBpZiAoIXRoaXMuaXNEaWZmZXJlbnRTaGlwKSB0aGlzLmlzRGlmZmVyZW50U2hpcCA9IHRydWU7XG5cbiAgICAgIHJldHVybiBzdWNjZXNzZnVsQXR0YWNrO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKFwiQ29uc3RydWN0b3IgYXJndW1lbnQgbWlzc2luZyFcIik7XG5cbiAgICBpZiAodHlwZW9mIGxlbmd0aCAhPT0gXCJudW1iZXJcIiB8fCBsZW5ndGggPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbnN0cnVjdG9yIGFyZ3VtZW50XCIpO1xuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgY29vcmRpbmF0ZXMgPSBudWxsO1xuICBoaXRzVGFrZW4gPSBbXTtcblxuICBoaXQoY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmhpdHNUYWtlbi5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzVGFrZW4ubGVuZ3RoID09PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc2hpcHMtbGF5b3V0LmNzc1wiO1xuaW1wb3J0IGRpc3BsYXlTaGlwc0xheW91dFNjcmVlbiBmcm9tIFwiLi91c2VyLWludGVyZmFjZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUdhbWVPdmVyU2NyZWVuKHdpbm5lcikge1xuICBjb25zdCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBnYW1lT3ZlclNjcmVlbi5jbGFzc0xpc3QuYWRkKFwic2NyZWVuXCIpO1xuICBnYW1lT3ZlclNjcmVlbi5pZCA9IFwiZ2FtZS1vdmVyXCI7XG5cbiAgY29uc3QgZ2FtZU92ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBnYW1lT3ZlclNjcmVlbi5hcHBlbmRDaGlsZChnYW1lT3ZlclRleHQpO1xuICBnYW1lT3ZlclRleHQuaW5uZXJUZXh0ID0gYEdhbWUgT3ZlciwgeW91ICR7XG4gICAgd2lubmVyID09PSBcInBsYXllci1vbmVcIiA/IFwid29uIVwiIDogXCJsb3N0XCJcbiAgfWA7XG5cbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuICBnYW1lT3ZlclNjcmVlbi5hcHBlbmRDaGlsZChidXR0b25zKTtcblxuICBjb25zdCBwbGF5QWdhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgcGxheUFnYWluLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLWFycm93LXJvdGF0ZS1sZWZ0XCIpO1xuICBwbGF5QWdhaW4udGl0bGUgPSBcIlBMQVkgQUdBSU5cIjtcbiAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5U2hpcHNMYXlvdXRTY3JlZW4pO1xuICBidXR0b25zLmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVPdmVyU2NyZWVuKTtcbn1cbiIsImltcG9ydCB7IEdBTUVCT0FSRF9IRUlHSFQsIEdBTUVCT0FSRF9XSURUSCB9IGZyb20gXCIuLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGdldEdhbWVTdGF0ZSwgaHVtYW5QbGF5c1R1cm4gfSBmcm9tIFwiLi4vZ2FtZS1sb29wXCI7XG5pbXBvcnQgeyBhcnJJbmNsdWRlc09iaiwgcmFuZG9tSW50ZWdlckluUmFuZ2UgfSBmcm9tIFwiLi4vaGVscGVyLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZGlzcGxheUdhbWVPdmVyU2NyZWVuIH0gZnJvbSBcIi4vdWktZ2FtZS1vdmVyXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2FtZWJvYXJkLmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2hpcHNUcmFja2VyKHBsYXllcikge1xuICBjb25zdCBnYW1lU3RhdGUgPSBnZXRHYW1lU3RhdGUoKTtcblxuICBjb25zdCBsb25nZXN0U2hpcExlbmd0aCA9IE1hdGgubWF4KC4uLmdhbWVTdGF0ZS5hdmFpbGFibGVTaGlwcyk7XG5cbiAgY29uc3Qgc2hpcFRyYWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgc2hpcFRyYWNrZXIuY2xhc3NMaXN0LmFkZChcInNoaXBzLXRyYWNrZXJcIik7XG4gIGNvbnN0IHNoaXBzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBzaGlwc1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInNoaXBzLXdyYXBwZXJcIik7XG4gIHNoaXBUcmFja2VyLmFwcGVuZENoaWxkKHNoaXBzV3JhcHBlcik7XG4gIGdhbWVTdGF0ZS5nYW1lYm9hcmRzW3BsYXllcl0uc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHVpU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHVpU2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICB1aVNoaXAuc3R5bGUud2lkdGggPSBgJHsoMTAwIC8gbG9uZ2VzdFNoaXBMZW5ndGgpICogc2hpcC5sZW5ndGh9JWA7XG4gICAgaWYgKHNoaXAuaXNTdW5rKCkpIHVpU2hpcC5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICBmb3IgKFxuICAgICAgbGV0IHNoaXBDZWxsTnVtYmVyID0gMDtcbiAgICAgIHNoaXBDZWxsTnVtYmVyIDwgc2hpcC5sZW5ndGg7XG4gICAgICBzaGlwQ2VsbE51bWJlcisrXG4gICAgKSB7XG4gICAgICBjb25zdCB1aVNoaXBTdWJkaXZpc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgdWlTaGlwU3ViZGl2aXNpb24uY2xhc3NMaXN0LmFkZChcInN1YmRpdmlzaW9uXCIpO1xuICAgICAgdWlTaGlwLmFwcGVuZENoaWxkKHVpU2hpcFN1YmRpdmlzaW9uKTtcbiAgICB9XG4gICAgc2hpcHNXcmFwcGVyLmFwcGVuZENoaWxkKHVpU2hpcCk7XG4gIH0pO1xuXG4gIGNvbnN0IGdhbWVib2FyZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuZ2FtZWJvYXJkLXdyYXBwZXIjJHtwbGF5ZXJ9YFxuICApO1xuICBjb25zdCBwcmV2aW91c1RyYWNrZXIgPSBnYW1lYm9hcmRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtdHJhY2tlclwiKTtcblxuICBpZiAocHJldmlvdXNUcmFja2VyKSB7XG4gICAgcHJldmlvdXNUcmFja2VyLnJlcGxhY2VXaXRoKHNoaXBUcmFja2VyKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXIuaW5jbHVkZXMoXCJvbmVcIilcbiAgICAgID8gZ2FtZWJvYXJkV3JhcHBlci5maXJzdENoaWxkLmJlZm9yZShzaGlwVHJhY2tlcilcbiAgICAgIDogZ2FtZWJvYXJkV3JhcHBlci5hcHBlbmRDaGlsZChzaGlwVHJhY2tlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkKCkge1xuICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgZ2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmRcIik7XG5cbiAgZm9yIChsZXQgY29sdW1uTnVtYmVyID0gMDsgY29sdW1uTnVtYmVyIDwgR0FNRUJPQVJEX1dJRFRIOyBjb2x1bW5OdW1iZXIrKykge1xuICAgIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uXCIpO1xuICAgIGNvbHVtbi5pZCA9IGBjb2x1bW4tJHtjb2x1bW5OdW1iZXJ9YDtcbiAgICBnYW1lYm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uKTtcblxuICAgIGZvciAobGV0IHJvd051bWJlciA9IEdBTUVCT0FSRF9IRUlHSFQgLSAxOyByb3dOdW1iZXIgPj0gMDsgcm93TnVtYmVyLS0pIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBjb25zdCBjZWxsQ29vcmRpbmF0ZXMgPSBge3g6ICR7Y29sdW1uTnVtYmVyfSwgeTogJHtyb3dOdW1iZXJ9fWA7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIiwgY2VsbENvb3JkaW5hdGVzKTtcbiAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2FtZWJvYXJkO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVHYW1lYm9hcmRzKCkge1xuICBjb25zdCBnYW1lU3RhdGUgPSBnZXRHYW1lU3RhdGUoKTtcbiAgdXBkYXRlR2FtZWJvYXJkKFwicGxheWVyLXR3b1wiKTtcbiAgdXBkYXRlU2hpcHNUcmFja2VyKFwicGxheWVyLXR3b1wiKTtcblxuICBpZiAoZ2FtZVN0YXRlLmlzT3ZlciAmJiBnYW1lU3RhdGUud2lubmVyID09PSBcInBsYXllci1vbmVcIikge1xuICAgIGRpc3BsYXlHYW1lT3ZlclNjcmVlbihcInBsYXllci1vbmVcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcGxheWVyVHdvR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5nYW1lYm9hcmQtd3JhcHBlciNwbGF5ZXItdHdvIC5nYW1lYm9hcmRcIlxuICApO1xuICBwbGF5ZXJUd29HYW1lYm9hcmQuY2xhc3NMaXN0LnRvZ2dsZShcImRpc2FibGVkXCIpO1xuXG4gIGNvbnN0IHRoaW5raW5nVGltZSA9IHJhbmRvbUludGVnZXJJblJhbmdlKDYwMCwgMTAwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHVwZGF0ZUdhbWVib2FyZChcInBsYXllci1vbmVcIik7XG4gICAgdXBkYXRlU2hpcHNUcmFja2VyKFwicGxheWVyLW9uZVwiKTtcbiAgICBwbGF5ZXJUd29HYW1lYm9hcmQuY2xhc3NMaXN0LnRvZ2dsZShcImRpc2FibGVkXCIpO1xuXG4gICAgaWYgKGdhbWVTdGF0ZS5pc092ZXIpIHtcbiAgICAgIGRpc3BsYXlHYW1lT3ZlclNjcmVlbihcInBsYXllci10d29cIik7XG4gICAgfVxuICB9LCB0aGlua2luZ1RpbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlR2FtZWJvYXJkKHBsYXllcikge1xuICBjb25zdCBnYW1lYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcblxuICBjb25zdCBnYW1lYm9hcmRTdGF0ZSA9IGdldEdhbWVTdGF0ZSgpLmdhbWVib2FyZHNbcGxheWVyXTtcbiAgY29uc3QgaXNBaUdhbWVib2FyZCA9IHBsYXllci5pbmNsdWRlcyhcInR3b1wiKTtcblxuICBmb3IgKGNvbnN0IHNoaXAgb2YgZ2FtZWJvYXJkU3RhdGUuc2hpcHMpIHtcbiAgICBmb3IgKGNvbnN0IGNvb3JkcyBvZiBzaGlwLmNvb3JkaW5hdGVzKSB7XG4gICAgICBjb25zdCBnYW1lYm9hcmRDZWxsID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1jb29yZGluYXRlcyA9IFwie3g6ICR7Y29vcmRzLnh9LCB5OiAke2Nvb3Jkcy55fX1cIl1gXG4gICAgICApO1xuXG4gICAgICAvLyBUaGUgc2hpcHMgbXVzdCBub3QgYmUgdmlzaWJsZSBpbiB0aGUgQUkncyBnYW1lYm9hcmRcbiAgICAgIGlmICghaXNBaUdhbWVib2FyZCkgZ2FtZWJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcblxuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkgfHwgYXJySW5jbHVkZXNPYmooc2hpcC5oaXRzVGFrZW4sIGNvb3JkcykpIHtcbiAgICAgICAgZ2FtZWJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKHNoaXAuaXNTdW5rKCkgPyBcInN1bmtcIiA6IFwiaGl0XCIpO1xuXG4gICAgICAgIGNvbnN0IHhNYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIHhNYXJrLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXhtYXJrXCIpO1xuICAgICAgICBnYW1lYm9hcmRDZWxsLmFwcGVuZENoaWxkKHhNYXJrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IG1pc3NlZEF0dGFjayBvZiBnYW1lYm9hcmRTdGF0ZS5taXNzZWRBdHRhY2tzKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvb3JkaW5hdGVzID0gXCJ7eDogJHttaXNzZWRBdHRhY2sueH0sIHk6ICR7bWlzc2VkQXR0YWNrLnl9fVwiXWBcbiAgICApO1xuICAgIGdhbWVib2FyZENlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NlZC1hdHRhY2tcIik7XG5cbiAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBkb3QuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtY2lyY2xlXCIpO1xuICAgIGdhbWVib2FyZENlbGwuYXBwZW5kQ2hpbGQoZG90KTtcbiAgfVxuXG4gIGlmIChpc0FpR2FtZWJvYXJkKSB7XG4gICAgY29uc3QgY2VsbHMgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xuXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBodW1hblBsYXlzVHVybih7XG4gICAgICAgICAgeDogTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZGluYXRlc1wiKVs0XSksXG4gICAgICAgICAgeTogTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZGluYXRlc1wiKVsxMF0pLFxuICAgICAgICB9KTtcblxuICAgICAgICB1cGRhdGVHYW1lYm9hcmRzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBnYW1lYm9hcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLmdhbWVib2FyZC13cmFwcGVyIyR7cGxheWVyfWBcbiAgKTtcbiAgY29uc3QgcHJldmlvdXNHYW1lYm9hcmQgPSBnYW1lYm9hcmRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkXCIpO1xuXG4gIHByZXZpb3VzR2FtZWJvYXJkXG4gICAgPyBwcmV2aW91c0dhbWVib2FyZC5yZXBsYWNlV2l0aChnYW1lYm9hcmQpXG4gICAgOiBnYW1lYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKGdhbWVib2FyZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21pemVkR2FtZWJvYXJkKCkge1xuICBjb25zdCBnYW1lYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgY29uc3QgZW1wdHlDZWxscyA9IFtdO1xuICBnYW1lYm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjb25zdCB4ID0gTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZGluYXRlc1wiKVs0XSk7XG4gICAgY29uc3QgeSA9IE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIilbMTBdKTtcbiAgICBlbXB0eUNlbGxzLnB1c2goeyB4LCB5IH0pO1xuICB9KTtcblxuICBjb25zdCBnZXRSYW5kb21QbGFjZW1lbnRDb29yZGluYXRlcyA9IChzaGlwTGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gW3RydWUsIGZhbHNlXVtyYW5kb21JbnRlZ2VySW5SYW5nZSgwLCAxKV07XG4gICAgY29uc3QgYXZhaWxhYmxlQ29vcmRpbmF0ZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgY3VycmVudENlbGwgb2YgZW1wdHlDZWxscykge1xuICAgICAgaWYgKFxuICAgICAgICAoaXNIb3Jpem9udGFsICYmIGN1cnJlbnRDZWxsLnggPiBHQU1FQk9BUkRfV0lEVEggLSBzaGlwTGVuZ3RoKSB8fFxuICAgICAgICAoIWlzSG9yaXpvbnRhbCAmJiBjdXJyZW50Q2VsbC55ID4gR0FNRUJPQVJEX0hFSUdIVCAtIHNoaXBMZW5ndGgpXG4gICAgICApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFkamFjZW50Q2VsbHMgPSBbY3VycmVudENlbGxdO1xuICAgICAgbGV0IG5leHRDZWxsO1xuICAgICAgbGV0IHByZXZpb3VzQ2VsbCA9IGN1cnJlbnRDZWxsO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYWRqYWNlbnRDZWxscy5sZW5ndGggPT09IHNoaXBMZW5ndGgpIHtcbiAgICAgICAgICBhdmFpbGFibGVDb29yZGluYXRlcy5wdXNoKGFkamFjZW50Q2VsbHMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dENlbGwgPSBpc0hvcml6b250YWxcbiAgICAgICAgICA/IHsgeDogcHJldmlvdXNDZWxsLnggKyAxLCB5OiBwcmV2aW91c0NlbGwueSB9XG4gICAgICAgICAgOiB7IHg6IHByZXZpb3VzQ2VsbC54LCB5OiBwcmV2aW91c0NlbGwueSArIDEgfTtcblxuICAgICAgICBwcmV2aW91c0NlbGwgPSBuZXh0Q2VsbDtcblxuICAgICAgICBpZiAoYXJySW5jbHVkZXNPYmooZW1wdHlDZWxscywgbmV4dENlbGwpKSB7XG4gICAgICAgICAgYWRqYWNlbnRDZWxscy5wdXNoKG5leHRDZWxsKTtcbiAgICAgICAgfSBlbHNlIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNob3NlbkNvb3JkaW5hdGVzID1cbiAgICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzW1xuICAgICAgICByYW5kb21JbnRlZ2VySW5SYW5nZSgwLCBhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGggLSAxKVxuICAgICAgXTtcblxuICAgIGNvbnN0IGNvb3JkaW5hdGVzRm9yRGVsZXRpb24gPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaG9zZW5Db29yZGluYXRlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNlbGxPblRoZUxlZnQgPSB7XG4gICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54IC0gMSxcbiAgICAgICAgeTogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnksXG4gICAgICB9O1xuICAgICAgaWYgKFxuICAgICAgICBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCA+IDAgJiZcbiAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsT25UaGVMZWZ0KVxuICAgICAgKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzRm9yRGVsZXRpb24ucHVzaChjZWxsT25UaGVMZWZ0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2VsbE9uVGhlUmlnaHQgPSB7XG4gICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54ICsgMSxcbiAgICAgICAgeTogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnksXG4gICAgICB9O1xuICAgICAgaWYgKFxuICAgICAgICBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCA8IEdBTUVCT0FSRF9XSURUSCAtIDEgJiZcbiAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsT25UaGVSaWdodClcbiAgICAgICkge1xuICAgICAgICBjb29yZGluYXRlc0ZvckRlbGV0aW9uLnB1c2goY2VsbE9uVGhlUmlnaHQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjZWxsQmVsb3cgPSB7XG4gICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54LFxuICAgICAgICB5OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSAtIDEsXG4gICAgICB9O1xuICAgICAgaWYgKFxuICAgICAgICBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSA+IDAgJiZcbiAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsQmVsb3cpXG4gICAgICApIHtcbiAgICAgICAgY29vcmRpbmF0ZXNGb3JEZWxldGlvbi5wdXNoKGNlbGxCZWxvdyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNlbGxBYm92ZSA9IHtcbiAgICAgICAgeDogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLngsXG4gICAgICAgIHk6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55ICsgMSxcbiAgICAgIH07XG4gICAgICBpZiAoXG4gICAgICAgIGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55IDwgR0FNRUJPQVJEX0hFSUdIVCAtIDEgJiZcbiAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsQWJvdmUpXG4gICAgICApIHtcbiAgICAgICAgY29vcmRpbmF0ZXNGb3JEZWxldGlvbi5wdXNoKGNlbGxBYm92ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgWy4uLmNob3NlbkNvb3JkaW5hdGVzLCAuLi5jb29yZGluYXRlc0ZvckRlbGV0aW9uXS5mb3JFYWNoKChjb29yZHMpID0+IHtcbiAgICAgIGNvbnN0IGNvb3Jkc0luZGV4ID0gZW1wdHlDZWxscy5maW5kSW5kZXgoXG4gICAgICAgIChjZWxsKSA9PiBjZWxsLnggPT09IGNvb3Jkcy54ICYmIGNlbGwueSA9PT0gY29vcmRzLnlcbiAgICAgICk7XG4gICAgICBlbXB0eUNlbGxzLnNwbGljZShjb29yZHNJbmRleCwgMSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNob3NlbkNvb3JkaW5hdGVzO1xuICB9O1xuXG4gIGxldCBzaGlwc0Nvb3JkaW5hdGVzID0gW107XG5cbiAgZ2V0R2FtZVN0YXRlKCkuYXZhaWxhYmxlU2hpcHMuZm9yRWFjaCgoc2hpcExlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHBsYWNlbWVudENvb3JkaW5hdGVzID0gZ2V0UmFuZG9tUGxhY2VtZW50Q29vcmRpbmF0ZXMoc2hpcExlbmd0aCk7XG4gICAgc2hpcHNDb29yZGluYXRlcy5wdXNoKHBsYWNlbWVudENvb3JkaW5hdGVzKTtcbiAgICBwbGFjZW1lbnRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZHMpID0+IHtcbiAgICAgIGdhbWVib2FyZFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmNlbGxbZGF0YS1jb29yZGluYXRlcz0ne3g6ICR7Y29vcmRzLnh9LCB5OiAke2Nvb3Jkcy55fX0nXWBcbiAgICAgICAgKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGdhbWVib2FyZC5zZXRBdHRyaWJ1dGUoXG4gICAgXCJkYXRhLXNoaXBzLWNvb3JkaW5hdGVzXCIsXG4gICAgSlNPTi5zdHJpbmdpZnkoc2hpcHNDb29yZGluYXRlcylcbiAgKTtcbiAgcmV0dXJuIGdhbWVib2FyZDtcbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2JhdHRsZS1zY3JlZW4uY3NzXCI7XG5cbmltcG9ydCB7XG4gIHJhbmRvbWl6ZWRHYW1lYm9hcmQsXG4gIHVwZGF0ZUdhbWVib2FyZCxcbiAgdXBkYXRlU2hpcHNUcmFja2VyLFxufSBmcm9tIFwiLi91aS1nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHBsYWNlU2hpcHMsIHN0YXJ0R2FtZSB9IGZyb20gXCIuLi9nYW1lLWxvb3BcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5cbmZ1bmN0aW9uIGRpc3BsYXlCYXR0bGUoKSB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IGJhdHRsZVNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBiYXR0bGVTY3JlZW4uY2xhc3NMaXN0LmFkZChcInNjcmVlblwiKTtcbiAgYmF0dGxlU2NyZWVuLmlkID0gXCJiYXR0bGVcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhdHRsZVNjcmVlbik7XG5cbiAgY29uc3QgUExBWUVSUyA9IFtcInBsYXllci1vbmVcIiwgXCJwbGF5ZXItdHdvXCJdO1xuXG4gIFBMQVlFUlMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgY29uc3QgZ2FtZWJvYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGdhbWVib2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImdhbWVib2FyZC13cmFwcGVyXCIpO1xuICAgIGdhbWVib2FyZFdyYXBwZXIuaWQgPSBwbGF5ZXI7XG4gICAgYmF0dGxlU2NyZWVuLmFwcGVuZENoaWxkKGdhbWVib2FyZFdyYXBwZXIpO1xuICAgIHVwZGF0ZUdhbWVib2FyZChwbGF5ZXIpO1xuICAgIHVwZGF0ZVNoaXBzVHJhY2tlcihwbGF5ZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUJhdHRsZVdpdGhTaGlwcyhzaGlwc0Nvb3JkaW5hdGVzKSB7XG4gIHN0YXJ0R2FtZSgpO1xuICBwbGFjZVNoaXBzKHNoaXBzQ29vcmRpbmF0ZXMpO1xuICBkaXNwbGF5QmF0dGxlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlTaGlwc0xheW91dFNjcmVlbigpIHtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3Qgc2hpcHNMYXlvdXRTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgc2hpcHNMYXlvdXRTY3JlZW4uY2xhc3NMaXN0LmFkZChcInNjcmVlblwiKTtcbiAgc2hpcHNMYXlvdXRTY3JlZW4uaWQgPSBcInNoaXBzLWxheW91dFwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcHNMYXlvdXRTY3JlZW4pO1xuXG4gIGNvbnN0IGdhbWVib2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgZ2FtZWJvYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkLXdyYXBwZXJcIik7XG4gIHNoaXBzTGF5b3V0U2NyZWVuLmFwcGVuZENoaWxkKGdhbWVib2FyZFdyYXBwZXIpO1xuXG4gIGdhbWVib2FyZFdyYXBwZXIuYXBwZW5kKHJhbmRvbWl6ZWRHYW1lYm9hcmQoKSk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuICBnYW1lYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gIGNvbnN0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJhbmRvbWl6ZUJ1dHRvbi5pZCA9IFwicmFuZG9taXplXCI7XG4gIHJhbmRvbWl6ZUJ1dHRvbi5pbm5lclRleHQgPSBcIlJhbmRvbWl6ZVwiO1xuICByYW5kb21pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaGlwc0xheW91dFNjcmVlblxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkXCIpXG4gICAgICAucmVwbGFjZVdpdGgocmFuZG9taXplZEdhbWVib2FyZCgpKTtcbiAgfSk7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQocmFuZG9taXplQnV0dG9uKTtcblxuICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcGxheUJ1dHRvbi5pZCA9IFwicGxheVwiO1xuICBwbGF5QnV0dG9uLmlubmVyVGV4dCA9IFwiUGxheVwiO1xuICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNDb29yZGluYXRlcyA9IEpTT04ucGFyc2UoXG4gICAgICBnYW1lYm9hcmRXcmFwcGVyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZFwiKVxuICAgICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1zaGlwcy1jb29yZGluYXRlc1wiKVxuICAgICk7XG5cbiAgICBkaXNwbGF5QmF0dGxlV2l0aFNoaXBzKHNoaXBzQ29vcmRpbmF0ZXMpO1xuICB9KTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChwbGF5QnV0dG9uKTtcbn1cblxuZGlzcGxheVNoaXBzTGF5b3V0U2NyZWVuKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdXNlci1pbnRlcmZhY2UvdXNlci1pbnRlcmZhY2UuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=