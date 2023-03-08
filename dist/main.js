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
___CSS_LOADER_EXPORT___.push([module.id, ".screen#game-over {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  background-color: rgb(0 0 0 / 70%);\n  color: white;\n  font-family: \"Roboto Mono\", monospace;\n}\n\n.screen#game-over .buttons {\n  font-size: 2rem;\n  display: flex;\n  gap: 40px;\n}\n\n.screen#game-over .buttons > * {\n  cursor: pointer;\n  filter: brightness(0.8);\n}\n\n.screen#game-over .buttons > *:hover {\n  filter: brightness(1);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/game-over-screen.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,MAAM;EACN,kCAAkC;EAClC,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,eAAe;EACf,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[".screen#game-over {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  background-color: rgb(0 0 0 / 70%);\n  color: white;\n  font-family: \"Roboto Mono\", monospace;\n}\n\n.screen#game-over .buttons {\n  font-size: 2rem;\n  display: flex;\n  gap: 40px;\n}\n\n.screen#game-over .buttons > * {\n  cursor: pointer;\n  filter: brightness(0.8);\n}\n\n.screen#game-over .buttons > *:hover {\n  filter: brightness(1);\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --gameboard-width: min(90vmin, 500px);\n  --missed-attack-color: lightsteelblue;\n  --ship-color: steelblue;\n  --hit-ship-color: lightpink;\n  --sunk-ship-color: crimson;\n}\n\n.gameboard-wrapper {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  gap: 10px;\n}\n\n.gameboard {\n  aspect-ratio: 2/2;\n  width: var(--gameboard-width);\n  display: flex;\n  pointer-events: none;\n  transition: filter 500ms, opacity 500ms;\n}\n\n.gameboard > .column {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  pointer-events: none;\n}\n\n.gameboard .cell {\n  flex: 1;\n  outline: 1px solid midnightblue;\n  background-color: #f8f8ffed; /* slightly transparent ghostwhite*/\n  pointer-events: auto;\n  cursor: pointer;\n  margin: 2px;\n}\n\n.gameboard .cell:hover {\n  background-color: var(--missed-attack-color);\n}\n\n.gameboard .cell.ship {\n  background-color: var(--ship-color);\n}\n\n.gameboard .cell.hit,\n.gameboard .cell.sunk,\n.gameboard .cell.missed-attack {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n\n.gameboard .cell.hit {\n  background-color: var(--hit-ship-color);\n}\n\n.gameboard .cell.sunk {\n  background-color: var(--sunk-ship-color);\n}\n\n.gameboard .cell.missed-attack {\n  background-color: var(--missed-attack-color);\n  font-size: 0.4rem;\n}\n\n.gameboard.disabled {\n  pointer-events: auto;\n  cursor: wait;\n  filter: brightness(0.9);\n  opacity: 0.5;\n}\n\n.gameboard.disabled .cell {\n  pointer-events: none;\n}\n\n.gameboard-wrapper .ships-tracker > .ships-wrapper {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n\n.gameboard-wrapper#player-two .ships-tracker > .ships-wrapper {\n  align-items: flex-start;\n}\n\n.ships-tracker .ship {\n  flex: 1;\n  display: flex;\n  gap: 2px;\n}\n\n.ships-tracker .ship > .subdivision {\n  flex: 1;\n  background-color: var(--ship-color);\n}\n\n.ships-tracker .ship.sunk > .subdivision {\n  background-color: var(--sunk-ship-color);\n}\n\n@media (orientation: portrait) {\n  .gameboard-wrapper {\n    padding: 10% 0;\n  }\n}\n\n@media (max-width: 300px) {\n  .gameboard .cell {\n    margin: 1px;\n  }\n}\n\n@media (max-width: 1340px) {\n  .gameboard-wrapper#player-one {\n    flex-direction: column-reverse;\n  }\n\n  .gameboard-wrapper#player-two {\n    flex-direction: column;\n  }\n\n  .gameboard-wrapper .ships-tracker {\n    width: var(--gameboard-width);\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .gameboard-wrapper#player-two .ships-tracker {\n    justify-content: flex-end;\n  }\n\n  .gameboard-wrapper#player-one .ships-tracker > .ships-wrapper {\n    align-items: flex-start;\n  }\n\n  .gameboard-wrapper#player-two .ships-tracker > .ships-wrapper {\n    align-items: flex-end;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;EACrC,qCAAqC;EACrC,uBAAuB;EACvB,2BAA2B;EAC3B,0BAA0B;AAC5B;;AAEA;EACE,OAAO;EACP,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,aAAa;EACb,oBAAoB;EACpB,uCAAuC;AACzC;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,OAAO;EACP,+BAA+B;EAC/B,2BAA2B,EAAE,mCAAmC;EAChE,oBAAoB;EACpB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,mCAAmC;AACrC;;AAEA;;;EAGE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,4CAA4C;EAC5C,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,OAAO;EACP,mCAAmC;AACrC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,8BAA8B;EAChC;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,6BAA6B;IAC7B,aAAa;IACb,2BAA2B;EAC7B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,qBAAqB;EACvB;AACF","sourcesContent":[":root {\n  --gameboard-width: min(90vmin, 500px);\n  --missed-attack-color: lightsteelblue;\n  --ship-color: steelblue;\n  --hit-ship-color: lightpink;\n  --sunk-ship-color: crimson;\n}\n\n.gameboard-wrapper {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  gap: 10px;\n}\n\n.gameboard {\n  aspect-ratio: 2/2;\n  width: var(--gameboard-width);\n  display: flex;\n  pointer-events: none;\n  transition: filter 500ms, opacity 500ms;\n}\n\n.gameboard > .column {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  pointer-events: none;\n}\n\n.gameboard .cell {\n  flex: 1;\n  outline: 1px solid midnightblue;\n  background-color: #f8f8ffed; /* slightly transparent ghostwhite*/\n  pointer-events: auto;\n  cursor: pointer;\n  margin: 2px;\n}\n\n.gameboard .cell:hover {\n  background-color: var(--missed-attack-color);\n}\n\n.gameboard .cell.ship {\n  background-color: var(--ship-color);\n}\n\n.gameboard .cell.hit,\n.gameboard .cell.sunk,\n.gameboard .cell.missed-attack {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n\n.gameboard .cell.hit {\n  background-color: var(--hit-ship-color);\n}\n\n.gameboard .cell.sunk {\n  background-color: var(--sunk-ship-color);\n}\n\n.gameboard .cell.missed-attack {\n  background-color: var(--missed-attack-color);\n  font-size: 0.4rem;\n}\n\n.gameboard.disabled {\n  pointer-events: auto;\n  cursor: wait;\n  filter: brightness(0.9);\n  opacity: 0.5;\n}\n\n.gameboard.disabled .cell {\n  pointer-events: none;\n}\n\n.gameboard-wrapper .ships-tracker > .ships-wrapper {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n\n.gameboard-wrapper#player-two .ships-tracker > .ships-wrapper {\n  align-items: flex-start;\n}\n\n.ships-tracker .ship {\n  flex: 1;\n  display: flex;\n  gap: 2px;\n}\n\n.ships-tracker .ship > .subdivision {\n  flex: 1;\n  background-color: var(--ship-color);\n}\n\n.ships-tracker .ship.sunk > .subdivision {\n  background-color: var(--sunk-ship-color);\n}\n\n@media (orientation: portrait) {\n  .gameboard-wrapper {\n    padding: 10% 0;\n  }\n}\n\n@media (max-width: 300px) {\n  .gameboard .cell {\n    margin: 1px;\n  }\n}\n\n@media (max-width: 1340px) {\n  .gameboard-wrapper#player-one {\n    flex-direction: column-reverse;\n  }\n\n  .gameboard-wrapper#player-two {\n    flex-direction: column;\n  }\n\n  .gameboard-wrapper .ships-tracker {\n    width: var(--gameboard-width);\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .gameboard-wrapper#player-two .ships-tracker {\n    justify-content: flex-end;\n  }\n\n  .gameboard-wrapper#player-one .ships-tracker > .ships-wrapper {\n    align-items: flex-start;\n  }\n\n  .gameboard-wrapper#player-two .ships-tracker > .ships-wrapper {\n    align-items: flex-end;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".screen#ships-layout {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.screen#ships-layout input#name {\n  width: 400px;\n}\n\n.screen#ships-layout .gameboard-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.screen#ships-layout .gameboard .cell:hover {\n  cursor: default;\n}\n\n.screen#ships-layout .gameboard .cell:not(.ship):hover {\n  background-color: white;\n}\n\n.screen#ships-layout input#name {\n  outline: solid 2px;\n}\n\n.screen#ships-layout input#name.valid {\n  outline-color: lime;\n}\n.screen#ships-layout input#name.invalid {\n  outline-color: hotpink;\n}\n\n.screen#ships-layout input:focus-visible {\n  outline-color: skyblue;\n}\n\n.screen#ships-layout .gameboard-wrapper .buttons {\n  display: flex;\n  width: var(--gameboard-width);\n  justify-content: space-between;\n}\n\n.screen#ships-layout .gameboard-wrapper .buttons > * {\n  width: 10ch;\n  padding: 5px 10px;\n  cursor: pointer;\n  box-sizing: content-box;\n  margin-top: 10px;\n  font-family: \"Roboto Mono\", monospace;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/ships-layout.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,gBAAgB;EAChB,qCAAqC;AACvC","sourcesContent":[".screen#ships-layout {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.screen#ships-layout input#name {\n  width: 400px;\n}\n\n.screen#ships-layout .gameboard-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.screen#ships-layout .gameboard .cell:hover {\n  cursor: default;\n}\n\n.screen#ships-layout .gameboard .cell:not(.ship):hover {\n  background-color: white;\n}\n\n.screen#ships-layout input#name {\n  outline: solid 2px;\n}\n\n.screen#ships-layout input#name.valid {\n  outline-color: lime;\n}\n.screen#ships-layout input#name.invalid {\n  outline-color: hotpink;\n}\n\n.screen#ships-layout input:focus-visible {\n  outline-color: skyblue;\n}\n\n.screen#ships-layout .gameboard-wrapper .buttons {\n  display: flex;\n  width: var(--gameboard-width);\n  justify-content: space-between;\n}\n\n.screen#ships-layout .gameboard-wrapper .buttons > * {\n  width: 10ch;\n  padding: 5px 10px;\n  cursor: pointer;\n  box-sizing: content-box;\n  margin-top: 10px;\n  font-family: \"Roboto Mono\", monospace;\n}\n"],"sourceRoot":""}]);
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
  gameOverText.innerText = `Game over, you ${
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2JhdHRsZS1zY3JlZW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcHMtbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvYmF0dGxlLXNjcmVlbi5jc3M/YzNmYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lLW92ZXItc2NyZWVuLmNzcz9jMzI5Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3M/MjE4NyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3NoaXBzLWxheW91dC5jc3M/MzAwZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVyLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91c2VyLWludGVyZmFjZS91aS1nYW1lLW92ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91c2VyLWludGVyZmFjZS91aS1nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91c2VyLWludGVyZmFjZS91c2VyLWludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNiYXR0bGUuc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jYmF0dGxlLnNjcmVlbiAjcGxheWVyLW9uZSAuZ2FtZWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI2JhdHRsZS5zY3JlZW4gI3BsYXllci1vbmUgLmdhbWVib2FyZCAuY2VsbDpub3QoLnNoaXApOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xcbiAgI2JhdHRsZS5zY3JlZW4ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JhdHRsZS1zY3JlZW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2JhdHRsZS5zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNiYXR0bGUuc2NyZWVuICNwbGF5ZXItb25lIC5nYW1lYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4jYmF0dGxlLnNjcmVlbiAjcGxheWVyLW9uZSAuZ2FtZWJvYXJkIC5jZWxsOm5vdCguc2hpcCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XFxuICAjYmF0dGxlLnNjcmVlbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JlZW4jZ2FtZS1vdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA3MCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnNjcmVlbiNnYW1lLW92ZXIgLmJ1dHRvbnMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLnNjcmVlbiNnYW1lLW92ZXIgLmJ1dHRvbnMgPiAqIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcbn1cXG5cXG4uc2NyZWVuI2dhbWUtb3ZlciAuYnV0dG9ucyA+ICo6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLE1BQU07RUFDTixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2NyZWVuI2dhbWUtb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gNzAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbi5zY3JlZW4jZ2FtZS1vdmVyIC5idXR0b25zIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5zY3JlZW4jZ2FtZS1vdmVyIC5idXR0b25zID4gKiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuXFxuLnNjcmVlbiNnYW1lLW92ZXIgLmJ1dHRvbnMgPiAqOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1nYW1lYm9hcmQtd2lkdGg6IG1pbig5MHZtaW4sIDUwMHB4KTtcXG4gIC0tbWlzc2VkLWF0dGFjay1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxuICAtLXNoaXAtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gIC0taGl0LXNoaXAtY29sb3I6IGxpZ2h0cGluaztcXG4gIC0tc3Vuay1zaGlwLWNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgZmxleDogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgYXNwZWN0LXJhdGlvOiAyLzI7XFxuICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciA1MDBtcywgb3BhY2l0eSA1MDBtcztcXG59XFxuXFxuLmdhbWVib2FyZCA+IC5jb2x1bW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwge1xcbiAgZmxleDogMTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBtaWRuaWdodGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZmZWQ7IC8qIHNsaWdodGx5IHRyYW5zcGFyZW50IGdob3N0d2hpdGUqL1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDJweDtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWQtYXR0YWNrLWNvbG9yKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsLmhpdCxcXG4uZ2FtZWJvYXJkIC5jZWxsLnN1bmssXFxuLmdhbWVib2FyZCAuY2VsbC5taXNzZWQtYXR0YWNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuay1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5taXNzZWQtYXR0YWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3NlZC1hdHRhY2stY29sb3IpO1xcbiAgZm9udC1zaXplOiAwLjRyZW07XFxufVxcblxcbi5nYW1lYm9hcmQuZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBjdXJzb3I6IHdhaXQ7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmdhbWVib2FyZC5kaXNhYmxlZCAuY2VsbCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZC13cmFwcGVyIC5zaGlwcy10cmFja2VyID4gLnNoaXBzLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLXR3byAuc2hpcHMtdHJhY2tlciA+IC5zaGlwcy13cmFwcGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc2hpcHMtdHJhY2tlciAuc2hpcCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4uc2hpcHMtdHJhY2tlciAuc2hpcCA+IC5zdWJkaXZpc2lvbiB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5zaGlwcy10cmFja2VyIC5zaGlwLnN1bmsgPiAuc3ViZGl2aXNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuay1zaGlwLWNvbG9yKTtcXG59XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcXG4gIC5nYW1lYm9hcmQtd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDEwJSAwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcXG4gIC5nYW1lYm9hcmQgLmNlbGwge1xcbiAgICBtYXJnaW46IDFweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNDBweCkge1xcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci1vbmUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuXFxuICAuZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLXR3byB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuZ2FtZWJvYXJkLXdyYXBwZXIgLnNoaXBzLXRyYWNrZXIge1xcbiAgICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci10d28gLnNoaXBzLXRyYWNrZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci1vbmUgLnNoaXBzLXRyYWNrZXIgPiAuc2hpcHMtd3JhcHBlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci10d28gLnNoaXBzLXRyYWNrZXIgPiAuc2hpcHMtd3JhcHBlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsT0FBTztFQUNQLCtCQUErQjtFQUMvQiwyQkFBMkIsRUFBRSxtQ0FBbUM7RUFDaEUsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7OztFQUdFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsT0FBTztFQUNQLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWdhbWVib2FyZC13aWR0aDogbWluKDkwdm1pbiwgNTAwcHgpO1xcbiAgLS1taXNzZWQtYXR0YWNrLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXG4gIC0tc2hpcC1jb2xvcjogc3RlZWxibHVlO1xcbiAgLS1oaXQtc2hpcC1jb2xvcjogbGlnaHRwaW5rO1xcbiAgLS1zdW5rLXNoaXAtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi5nYW1lYm9hcmQtd3JhcHBlciB7XFxuICBmbGV4OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBhc3BlY3QtcmF0aW86IDIvMjtcXG4gIHdpZHRoOiB2YXIoLS1nYW1lYm9hcmQtd2lkdGgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDUwMG1zLCBvcGFjaXR5IDUwMG1zO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gLmNvbHVtbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbCB7XFxuICBmbGV4OiAxO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIG1pZG5pZ2h0Ymx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZmZlZDsgLyogc2xpZ2h0bHkgdHJhbnNwYXJlbnQgZ2hvc3R3aGl0ZSovXFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMnB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3NlZC1hdHRhY2stY29sb3IpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwuaGl0LFxcbi5nYW1lYm9hcmQgLmNlbGwuc3VuayxcXG4uZ2FtZWJvYXJkIC5jZWxsLm1pc3NlZC1hdHRhY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtc2hpcC1jb2xvcik7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdW5rLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsLm1pc3NlZC1hdHRhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzc2VkLWF0dGFjay1jb2xvcik7XFxuICBmb250LXNpemU6IDAuNHJlbTtcXG59XFxuXFxuLmdhbWVib2FyZC5kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIGN1cnNvcjogd2FpdDtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLmRpc2FibGVkIC5jZWxsIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXdyYXBwZXIgLnNoaXBzLXRyYWNrZXIgPiAuc2hpcHMtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQtd3JhcHBlciNwbGF5ZXItdHdvIC5zaGlwcy10cmFja2VyID4gLnNoaXBzLXdyYXBwZXIge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zaGlwcy10cmFja2VyIC5zaGlwIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5zaGlwcy10cmFja2VyIC5zaGlwID4gLnN1YmRpdmlzaW9uIHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLnNoaXBzLXRyYWNrZXIgLnNoaXAuc3VuayA+IC5zdWJkaXZpc2lvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdW5rLXNoaXAtY29sb3IpO1xcbn1cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xcbiAgLmdhbWVib2FyZC13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMTAlIDA7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xcbiAgLmdhbWVib2FyZCAuY2VsbCB7XFxuICAgIG1hcmdpbjogMXB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTM0MHB4KSB7XFxuICAuZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLW9uZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG5cXG4gIC5nYW1lYm9hcmQtd3JhcHBlciNwbGF5ZXItdHdvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5nYW1lYm9hcmQtd3JhcHBlciAuc2hpcHMtdHJhY2tlciB7XFxuICAgIHdpZHRoOiB2YXIoLS1nYW1lYm9hcmQtd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAuZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLXR3byAuc2hpcHMtdHJhY2tlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLW9uZSAuc2hpcHMtdHJhY2tlciA+IC5zaGlwcy13cmFwcGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAuZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLXR3byAuc2hpcHMtdHJhY2tlciA+IC5zaGlwcy13cmFwcGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy93YXZlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxODAuNGRlZyxcXG4gICAgcmdiKDEzNCAyMDIgMjU1KSAtMi4yJSxcXG4gICAgI2ZmZmJmNSA4My41JVxcbiAgKTtcXG59XFxuXFxuI3dhdmVzLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXZoO1xcbiAgYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jd2F2ZXMtd3JhcHBlciA+IC53YXZlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAyMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNTAlIDEwMCU7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBhbmltYXRpb246IG1vdmVfd2F2ZSA1cyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbiN3YXZlcy13cmFwcGVyID4gLndhdmU6bnRoLW9mLXR5cGUoMikge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgYW5pbWF0aW9uOiBtb3ZlX3dhdmUgNHMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG4jd2F2ZXMtd3JhcHBlciA+IC53YXZlOm50aC1vZi10eXBlKDMpIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGFuaW1hdGlvbjogbW92ZV93YXZlIDdzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlX3dhdmUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUlKTtcXG4gICAgaGVpZ2h0OiA1NSU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgxKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQjs7OztHQUlDO0FBQ0g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBMkM7RUFDM0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUNBQXFDO0lBQ3JDLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxODAuNGRlZyxcXG4gICAgcmdiKDEzNCAyMDIgMjU1KSAtMi4yJSxcXG4gICAgI2ZmZmJmNSA4My41JVxcbiAgKTtcXG59XFxuXFxuI3dhdmVzLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXZoO1xcbiAgYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jd2F2ZXMtd3JhcHBlciA+IC53YXZlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAyMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvd2F2ZS5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNTAlIDEwMCU7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBhbmltYXRpb246IG1vdmVfd2F2ZSA1cyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbiN3YXZlcy13cmFwcGVyID4gLndhdmU6bnRoLW9mLXR5cGUoMikge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgYW5pbWF0aW9uOiBtb3ZlX3dhdmUgNHMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG4jd2F2ZXMtd3JhcHBlciA+IC53YXZlOm50aC1vZi10eXBlKDMpIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGFuaW1hdGlvbjogbW92ZV93YXZlIDdzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlX3dhdmUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUlKTtcXG4gICAgaGVpZ2h0OiA1NSU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgxKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2NyZWVuI3NoaXBzLWxheW91dCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0I25hbWUge1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCAuZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZCAuY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IC5nYW1lYm9hcmQgLmNlbGw6bm90KC5zaGlwKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQjbmFtZSB7XFxuICBvdXRsaW5lOiBzb2xpZCAycHg7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0I25hbWUudmFsaWQge1xcbiAgb3V0bGluZS1jb2xvcjogbGltZTtcXG59XFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQjbmFtZS5pbnZhbGlkIHtcXG4gIG91dGxpbmUtY29sb3I6IGhvdHBpbms7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZS1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZC13cmFwcGVyIC5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZC13cmFwcGVyIC5idXR0b25zID4gKiB7XFxuICB3aWR0aDogMTBjaDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zaGlwcy1sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHFDQUFxQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2NyZWVuI3NoaXBzLWxheW91dCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0I25hbWUge1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCAuZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZCAuY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IC5nYW1lYm9hcmQgLmNlbGw6bm90KC5zaGlwKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQjbmFtZSB7XFxuICBvdXRsaW5lOiBzb2xpZCAycHg7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0I25hbWUudmFsaWQge1xcbiAgb3V0bGluZS1jb2xvcjogbGltZTtcXG59XFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQjbmFtZS5pbnZhbGlkIHtcXG4gIG91dGxpbmUtY29sb3I6IGhvdHBpbms7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZS1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZC13cmFwcGVyIC5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZC13cmFwcGVyIC5idXR0b25zID4gKiB7XFxuICB3aWR0aDogMTBjaDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JhdHRsZS1zY3JlZW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXR0bGUtc2NyZWVuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLW92ZXItc2NyZWVuLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1vdmVyLXNjcmVlbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHMtbGF5b3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHMtbGF5b3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBDb21wdXRlclBsYXllciwgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IEdBTUUgPSB7XG4gIHNoaXBMZW5ndGhzOiBbNSwgNCwgMywgMywgMl0sXG4gIHN0YXJ0ZWQ6IGZhbHNlLFxuICBwbGF5ZXJzOiB7IFwicGxheWVyLW9uZVwiOiBudWxsLCBcInBsYXllci10d29cIjogbnVsbCB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgR0FNRS5vdmVyID0gZmFsc2U7XG4gIEdBTUUud2lubmVyID0gdW5kZWZpbmVkO1xuICBHQU1FLmN1cnJlbnRUdXJuID0gXCJwbGF5ZXItb25lXCI7XG4gIEdBTUUucGxheWVyc1tcInBsYXllci1vbmVcIl0gPSBuZXcgUGxheWVyKCk7XG4gIEdBTUUucGxheWVyc1tcInBsYXllci10d29cIl0gPSBuZXcgQ29tcHV0ZXJQbGF5ZXIoXG4gICAgR0FNRS5wbGF5ZXJzW1wicGxheWVyLW9uZVwiXS5nYW1lYm9hcmRcbiAgKTtcbiAgR0FNRS5zdGFydGVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdhbWVTdGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VHVybjogR0FNRS5jdXJyZW50VHVybixcbiAgICBhdmFpbGFibGVTaGlwczogWy4uLkdBTUUuc2hpcExlbmd0aHNdLFxuICAgIGlzT3ZlcjogR0FNRS5vdmVyLFxuICAgIHdpbm5lcjogR0FNRS53aW5uZXIsXG4gICAgcGxheWVyczogR0FNRS5wbGF5ZXJzLFxuICAgIGdhbWVib2FyZHM6IHtcbiAgICAgIFwicGxheWVyLW9uZVwiOiBHQU1FLnBsYXllcnNbXCJwbGF5ZXItb25lXCJdXG4gICAgICAgID8gR0FNRS5wbGF5ZXJzW1wicGxheWVyLW9uZVwiXS5nYW1lYm9hcmQuZ2V0U3RhdGUoKVxuICAgICAgICA6IG51bGwsXG4gICAgICBcInBsYXllci10d29cIjogR0FNRS5wbGF5ZXJzW1wicGxheWVyLXR3b1wiXVxuICAgICAgICA/IEdBTUUucGxheWVyc1tcInBsYXllci10d29cIl0uZ2FtZWJvYXJkLmdldFN0YXRlKClcbiAgICAgICAgOiBudWxsLFxuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFR1cm5zKCkge1xuICBHQU1FLmN1cnJlbnRUdXJuID1cbiAgICBHQU1FLmN1cnJlbnRUdXJuID09PSBcInBsYXllci1vbmVcIiA/IFwicGxheWVyLXR3b1wiIDogXCJwbGF5ZXItb25lXCI7XG59XG5cbmZ1bmN0aW9uIG5leHRUdXJuKCkge1xuICBzd2l0Y2hUdXJucygpO1xuICBpZiAoR0FNRS5jdXJyZW50VHVybiA9PT0gXCJwbGF5ZXItdHdvXCIpIGFpUGxheXNUdXJuKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVNoaXBzKHNoaXBzQ29vcmRpbmF0ZXMpIHtcbiAgaWYgKCFzaGlwc0Nvb3JkaW5hdGVzKSB0aHJvdyBuZXcgRXJyb3IoXCJjb29yZGluYXRlcyBhcmd1bWVudCBtaXNzaW5nXCIpO1xuICBpZiAoIUdBTUUuc3RhcnRlZCkgdGhyb3cgbmV3IEVycm9yKGBHYW1lIGhhcyBub3Qgc3RhcnRlZGApO1xuXG4gIGZvciAoY29uc3QgY29vcmRpbmF0ZXMgb2Ygc2hpcHNDb29yZGluYXRlcykge1xuICAgIEdBTUUucGxheWVyc1tcInBsYXllci1vbmVcIl0uZ2FtZWJvYXJkLnBsYWNlU2hpcChjb29yZGluYXRlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1bWFuUGxheXNUdXJuKGNvb3JkaW5hdGVzKSB7XG4gIGlmICghR0FNRS5zdGFydGVkKSB0aHJvdyBuZXcgRXJyb3IoXCJjYW4ndCBwbGF5IHVudGlsIGdhbWUgaGFzIGJlZW4gc3RhcnRlZCBcIik7XG4gIGlmICghY29vcmRpbmF0ZXMpIHRocm93IG5ldyBFcnJvcihcImNvb3JkaW5hdGVzIGFyZ3VtZW50IG1pc3NpbmdcIik7XG4gIGlmIChHQU1FLmN1cnJlbnRUdXJuICE9PSBcInBsYXllci1vbmVcIiB8fCBHQU1FLm92ZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBodW1hbiBwbGF5ZXIncyB0dXJuYCk7XG4gIH1cblxuICBjb25zdCBzdWNjZXNzZnVsQXR0YWNrID1cbiAgICBHQU1FLnBsYXllcnNbXCJwbGF5ZXItdHdvXCJdLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcblxuICBpZiAoc3VjY2Vzc2Z1bEF0dGFjaykge1xuICAgIGlmIChHQU1FLnBsYXllcnNbXCJwbGF5ZXItdHdvXCJdLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgR0FNRS5vdmVyID0gdHJ1ZTtcbiAgICAgIEdBTUUud2lubmVyID0gXCJwbGF5ZXItb25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRUdXJuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYXllcjogXCJwbGF5ZXItdHdvXCIsXG4gICAgICBnYW1lYm9hcmRTdGF0ZTogR0FNRS5wbGF5ZXJzW1wicGxheWVyLXR3b1wiXS5nYW1lYm9hcmQuZ2V0U3RhdGUoKSxcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGFpUGxheXNUdXJuKCkge1xuICBHQU1FLnBsYXllcnNbXCJwbGF5ZXItdHdvXCJdLmF0dGFjaygpO1xuXG4gIGlmIChHQU1FLnBsYXllcnNbXCJwbGF5ZXItb25lXCJdLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIEdBTUUub3ZlciA9IHRydWU7XG4gICAgR0FNRS53aW5uZXIgPSBcInBsYXllci10d29cIjtcbiAgfSBlbHNlIHtcbiAgICBuZXh0VHVybigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBhcnJJbmNsdWRlc09iaiB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnNcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGNvbnN0IEdBTUVCT0FSRF9XSURUSCA9IDEwO1xuZXhwb3J0IGNvbnN0IEdBTUVCT0FSRF9IRUlHSFQgPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lbXB0eUNlbGxzID0gdGhpcy5fc2V0SW5pdGlhbEVtcHR5Q2VsbHMoKTtcbiAgfVxuXG4gIF9zZXRJbml0aWFsRW1wdHlDZWxscygpIHtcbiAgICBjb25zdCBlbXB0eUNlbGxzID0gW107XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBHQU1FQk9BUkRfV0lEVEg7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBHQU1FQk9BUkRfSEVJR0hUOyB5KyspIHtcbiAgICAgICAgZW1wdHlDZWxscy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVtcHR5Q2VsbHM7XG4gIH1cblxuICBzaGlwcyA9IFtdO1xuICBtaXNzZWRBdHRhY2tzID0gW107XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoaXBzOiB0aGlzLnNoaXBzLFxuICAgICAgbWlzc2VkQXR0YWNrczogdGhpcy5taXNzZWRBdHRhY2tzLFxuICAgICAgZW1wdHlDZWxsczogWy4uLnRoaXMuZW1wdHlDZWxsc10sXG4gICAgfTtcbiAgfVxuXG4gIHBsYWNlU2hpcChjb29yZGluYXRlcykge1xuICAgIGNvbnN0IGVtdHB5Q29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcy5maWx0ZXIoKGNvb3JkcykgPT4ge1xuICAgICAgcmV0dXJuIGFyckluY2x1ZGVzT2JqKHRoaXMuZW1wdHlDZWxscywgY29vcmRzKTtcbiAgICB9KTtcblxuICAgIGlmIChlbXRweUNvb3JkaW5hdGVzLmxlbmd0aCAhPT0gY29vcmRpbmF0ZXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChjb29yZGluYXRlcy5sZW5ndGgpO1xuICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZHMpID0+IHtcbiAgICAgIGNvbnN0IGNvb3Jkc0luZGV4ID0gdGhpcy5lbXB0eUNlbGxzLmZpbmRJbmRleChcbiAgICAgICAgKGNlbGwpID0+IGNlbGwueCA9PT0gY29vcmRzLnggJiYgY2VsbC55ID09PSBjb29yZHMueVxuICAgICAgKTtcbiAgICAgIHRoaXMuZW1wdHlDZWxscy5zcGxpY2UoY29vcmRzSW5kZXgsIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gcmV0dXJucyB3aGV0aGVyIHRoZSBhdHRhY2sgd2FzIHN1Y2Nlc3NmdWwgb3Igbm90XG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgaWYgKGFyckluY2x1ZGVzT2JqKHNoaXAuY29vcmRpbmF0ZXMsIGNvb3JkaW5hdGVzKSkge1xuICAgICAgICBpZiAoYXJySW5jbHVkZXNPYmooc2hpcC5oaXRzVGFrZW4sIGNvb3JkaW5hdGVzKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHNoaXAuaGl0KGNvb3JkaW5hdGVzKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGNvb3JkaW5hdGVzIGRvbid0IGJlbG9uZyB0byBhbnkgc2hpcCwgdGhlIGF0dGFjayBtaXNzZWQuXG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgY29vcmRpbmF0ZXMgYXJlbid0IGFscmVhZHkgaW4gbWlzc2VkQXR0YWNrc1xuICAgIGlmIChhcnJJbmNsdWRlc09iaih0aGlzLm1pc3NlZEF0dGFja3MsIGNvb3JkaW5hdGVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBsZXQgc3Vua1NoaXBzID0gMDtcbiAgICB0aGlzLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSBzdW5rU2hpcHMrKztcbiAgICB9KTtcblxuICAgIHJldHVybiBzdW5rU2hpcHMgPT09IHRoaXMuc2hpcHMubGVuZ3RoO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlckluUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJJbmNsdWRlc09iaihhcnIsIG9iaikge1xuICBjb25zdCBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgcmV0dXJuIGFyci5zb21lKChhcnJPYmopID0+IG9iaktleXMuZXZlcnkoKGtleSkgPT4gYXJyT2JqW2tleV0gPT09IG9ialtrZXldKSk7XG59XG4iLCJpbXBvcnQgeyBnZXRHYW1lU3RhdGUgfSBmcm9tIFwiLi9nYW1lLWxvb3BcIjtcbmltcG9ydCBHYW1lYm9hcmQsIHsgR0FNRUJPQVJEX0hFSUdIVCwgR0FNRUJPQVJEX1dJRFRIIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBhcnJJbmNsdWRlc09iaiwgcmFuZG9tSW50ZWdlckluUmFuZ2UgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcHV0ZXJQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihvcHBvbmVudEdhbWVib2FyZCkge1xuICAgIGlmICghb3Bwb25lbnRHYW1lYm9hcmQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm9wcG9uZW50IGdhbWVib2FyZCBhcmd1bWVudCBtaXNzaW5nXCIpO1xuICAgIH1cbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3Bwb25lbnRHYW1lYm9hcmQgPSBvcHBvbmVudEdhbWVib2FyZDtcbiAgICB0aGlzLmxlZ2FsTW92ZXMgPSB0aGlzLl9zZXRJbml0aWFsbExlZ2FsTW92ZXMoKTtcbiAgICB0aGlzLl9yYW5kb21pemVHYW1lYm9hcmQoKTtcbiAgfVxuXG4gIF9zZXRJbml0aWFsbExlZ2FsTW92ZXMoKSB7XG4gICAgY29uc3QgbGVnYWxNb3ZlcyA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgR0FNRUJPQVJEX1dJRFRIOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgR0FNRUJPQVJEX0hFSUdIVDsgeSsrKSB7XG4gICAgICAgIGxlZ2FsTW92ZXMucHVzaCh7IHgsIHkgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsZWdhbE1vdmVzO1xuICB9XG5cbiAgX3JhbmRvbWl6ZUdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBlbXB0eUNlbGxzID0gdGhpcy5nYW1lYm9hcmQuZ2V0U3RhdGUoKS5lbXB0eUNlbGxzO1xuXG4gICAgY29uc3QgZ2V0UmFuZG9tUGxhY2VtZW50Q29vcmRpbmF0ZXMgPSAoc2hpcExlbmd0aCkgPT4ge1xuICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gW3RydWUsIGZhbHNlXVtyYW5kb21JbnRlZ2VySW5SYW5nZSgwLCAxKV07XG4gICAgICBjb25zdCBhdmFpbGFibGVDb29yZGluYXRlcyA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IGN1cnJlbnRDZWxsIG9mIGVtcHR5Q2VsbHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChpc0hvcml6b250YWwgJiYgY3VycmVudENlbGwueCA+IEdBTUVCT0FSRF9XSURUSCAtIHNoaXBMZW5ndGgpIHx8XG4gICAgICAgICAgKCFpc0hvcml6b250YWwgJiYgY3VycmVudENlbGwueSA+IEdBTUVCT0FSRF9IRUlHSFQgLSBzaGlwTGVuZ3RoKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkamFjZW50Q2VsbHMgPSBbY3VycmVudENlbGxdO1xuICAgICAgICBsZXQgbmV4dENlbGw7XG4gICAgICAgIGxldCBwcmV2aW91c0NlbGwgPSBjdXJyZW50Q2VsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhZGphY2VudENlbGxzLmxlbmd0aCA9PT0gc2hpcExlbmd0aCkge1xuICAgICAgICAgICAgYXZhaWxhYmxlQ29vcmRpbmF0ZXMucHVzaChhZGphY2VudENlbGxzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHRDZWxsID0gaXNIb3Jpem9udGFsXG4gICAgICAgICAgICA/IHsgeDogcHJldmlvdXNDZWxsLnggKyAxLCB5OiBwcmV2aW91c0NlbGwueSB9XG4gICAgICAgICAgICA6IHsgeDogcHJldmlvdXNDZWxsLngsIHk6IHByZXZpb3VzQ2VsbC55ICsgMSB9O1xuXG4gICAgICAgICAgcHJldmlvdXNDZWxsID0gbmV4dENlbGw7XG5cbiAgICAgICAgICBpZiAoYXJySW5jbHVkZXNPYmooZW1wdHlDZWxscywgbmV4dENlbGwpKSB7XG4gICAgICAgICAgICBhZGphY2VudENlbGxzLnB1c2gobmV4dENlbGwpO1xuICAgICAgICAgIH0gZWxzZSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaG9zZW5Db29yZGluYXRlcyA9XG4gICAgICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzW1xuICAgICAgICAgIHJhbmRvbUludGVnZXJJblJhbmdlKDAsIGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCAtIDEpXG4gICAgICAgIF07XG5cbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzRm9yRGVsZXRpb24gPSBbXTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNob3NlbkNvb3JkaW5hdGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjZWxsT25UaGVMZWZ0ID0ge1xuICAgICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54IC0gMSxcbiAgICAgICAgICB5OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54ID4gMCAmJlxuICAgICAgICAgICFhcnJJbmNsdWRlc09iaihjaG9zZW5Db29yZGluYXRlcywgY2VsbE9uVGhlTGVmdClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXNGb3JEZWxldGlvbi5wdXNoKGNlbGxPblRoZUxlZnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2VsbE9uVGhlUmlnaHQgPSB7XG4gICAgICAgICAgeDogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnggKyAxLFxuICAgICAgICAgIHk6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55LFxuICAgICAgICB9O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnggPCBHQU1FQk9BUkRfV0lEVEggLSAxICYmXG4gICAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsT25UaGVSaWdodClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXNGb3JEZWxldGlvbi5wdXNoKGNlbGxPblRoZVJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNlbGxCZWxvdyA9IHtcbiAgICAgICAgICB4OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCxcbiAgICAgICAgICB5OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSAtIDEsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSA+IDAgJiZcbiAgICAgICAgICAhYXJySW5jbHVkZXNPYmooY2hvc2VuQ29vcmRpbmF0ZXMsIGNlbGxCZWxvdylcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXNGb3JEZWxldGlvbi5wdXNoKGNlbGxCZWxvdyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZWxsQWJvdmUgPSB7XG4gICAgICAgICAgeDogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLngsXG4gICAgICAgICAgeTogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnkgKyAxLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnkgPCBHQU1FQk9BUkRfSEVJR0hUIC0gMSAmJlxuICAgICAgICAgICFhcnJJbmNsdWRlc09iaihjaG9zZW5Db29yZGluYXRlcywgY2VsbEFib3ZlKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb29yZGluYXRlc0ZvckRlbGV0aW9uLnB1c2goY2VsbEFib3ZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBbLi4uY2hvc2VuQ29vcmRpbmF0ZXMsIC4uLmNvb3JkaW5hdGVzRm9yRGVsZXRpb25dLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgICBjb25zdCBjb29yZHNJbmRleCA9IGVtcHR5Q2VsbHMuZmluZEluZGV4KFxuICAgICAgICAgIChjZWxsKSA9PiBjZWxsLnggPT09IGNvb3Jkcy54ICYmIGNlbGwueSA9PT0gY29vcmRzLnlcbiAgICAgICAgKTtcbiAgICAgICAgZW1wdHlDZWxscy5zcGxpY2UoY29vcmRzSW5kZXgsIDEpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2hvc2VuQ29vcmRpbmF0ZXM7XG4gICAgfTtcblxuICAgIGdldEdhbWVTdGF0ZSgpLmF2YWlsYWJsZVNoaXBzLmZvckVhY2goKHNoaXBMZW5ndGgpID0+IHtcbiAgICAgIGNvbnN0IHBsYWNlbWVudENvb3JkaW5hdGVzID0gZ2V0UmFuZG9tUGxhY2VtZW50Q29vcmRpbmF0ZXMoc2hpcExlbmd0aCk7XG4gICAgICB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAocGxhY2VtZW50Q29vcmRpbmF0ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldFJhbmRvbUF0dGFja0Nvb3JkaW5hdGVzKCkge1xuICAgIGlmICghdGhpcy5sZWdhbE1vdmVzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbW9yZSBjZWxscyBsZWZ0IHRvIGF0dGFja1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21JbmRleCA9IHJhbmRvbUludGVnZXJJblJhbmdlKDAsIHRoaXMubGVnYWxNb3Zlcy5sZW5ndGggLSAxKTtcbiAgICBjb25zdCBhdHRhY2tDb29yZGluYXRlcyA9IHRoaXMubGVnYWxNb3Zlc1tyYW5kb21JbmRleF07XG5cbiAgICAvL3JlbW92ZSB0aGUgYXR0YWNrIGZyb20gdGhlIGxlZ2FsIG1vdmVzLCBzbyB0aGF0IHRoZSBzYW1lIGNvb3JkaW5hdGUgaXNuJ3QgYXR0YWNrZWQgdHdpY2VcbiAgICB0aGlzLmxlZ2FsTW92ZXMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKTtcblxuICAgIHJldHVybiBhdHRhY2tDb29yZGluYXRlcztcbiAgfVxuXG4gIF9vcmlnaW4gPSBudWxsO1xuICBfbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSBudWxsO1xuICBfbGFzdENvb3JkaW5hdGVzQXJndW1lbnQgPSBudWxsO1xuICBfbGFzdERpcmVjdGlvbiA9IG51bGw7XG4gIF9pc1ZlcnRpY2FsID0gZmFsc2U7XG4gIF9pc0hvcml6b250YWwgPSBmYWxzZTtcblxuICBfdmVydGljYWxQYXRoID0geyBiZWxvdzogW10sIGFib3ZlOiBbXSB9O1xuICBfaG9yaXpvbnRhbFBhdGggPSB7IGxlZnQ6IFtdLCByaWdodDogW10gfTtcblxuICBfZ2V0QWRqYWNlbnRBdHRhY2tDb29yZGluYXRlcyhjb29yZGluYXRlcywgaXNEaWZmZXJlbnRTaGlwKSB7XG4gICAgaWYgKCF0aGlzLl9vcmlnaW4gfHwgaXNEaWZmZXJlbnRTaGlwKSB7XG4gICAgICB0aGlzLl9vcmlnaW4gPSBjb29yZGluYXRlcztcbiAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0FyZ3VtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSBudWxsO1xuICAgICAgdGhpcy5faXNWZXJ0aWNhbCA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNIb3Jpem9udGFsID0gZmFsc2U7XG5cbiAgICAgIC8vIGNsZWFyIGFuZCBwb3B1bGF0ZSBob3Jpem9udGFsIHBhdGhcbiAgICAgIHRoaXMuX2hvcml6b250YWxQYXRoLmxlZnQgPSBbXTtcbiAgICAgIHRoaXMuX2hvcml6b250YWxQYXRoLnJpZ2h0ID0gW107XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gY29vcmRpbmF0ZXMueCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgY29uc3QgbmV3QWRqYWNlbnRDb29yZGluYXRlcyA9IHsgeDogaW5kZXgsIHk6IGNvb3JkaW5hdGVzLnkgfTtcbiAgICAgICAgaWYgKCFhcnJJbmNsdWRlc09iaih0aGlzLmxlZ2FsTW92ZXMsIG5ld0FkamFjZW50Q29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsUGF0aC5sZWZ0LnVuc2hpZnQobmV3QWRqYWNlbnRDb29yZGluYXRlcyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gY29vcmRpbmF0ZXMueCArIDE7IGluZGV4IDwgR0FNRUJPQVJEX1dJRFRIOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5ld0FkamFjZW50Q29vcmRpbmF0ZXMgPSB7IHg6IGluZGV4LCB5OiBjb29yZGluYXRlcy55IH07XG4gICAgICAgIGlmICghYXJySW5jbHVkZXNPYmoodGhpcy5sZWdhbE1vdmVzLCBuZXdBZGphY2VudENvb3JkaW5hdGVzKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faG9yaXpvbnRhbFBhdGgucmlnaHQucHVzaChuZXdBZGphY2VudENvb3JkaW5hdGVzKTtcbiAgICAgIH1cblxuICAgICAgLy8gY2xlYXIgYW5kIHBvcHVsYXRlIHZlcnRpY2FsIHBhdGhcbiAgICAgIHRoaXMuX3ZlcnRpY2FsUGF0aC5iZWxvdyA9IFtdO1xuICAgICAgdGhpcy5fdmVydGljYWxQYXRoLmFib3ZlID0gW107XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gY29vcmRpbmF0ZXMueSAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgY29uc3QgbmV3QWRqYWNlbnRDb29yZGluYXRlcyA9IHsgeDogY29vcmRpbmF0ZXMueCwgeTogaW5kZXggfTtcbiAgICAgICAgaWYgKCFhcnJJbmNsdWRlc09iaih0aGlzLmxlZ2FsTW92ZXMsIG5ld0FkamFjZW50Q29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFBhdGguYmVsb3cudW5zaGlmdChuZXdBZGphY2VudENvb3JkaW5hdGVzKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaW5kZXggPSBjb29yZGluYXRlcy55ICsgMTsgaW5kZXggPCBHQU1FQk9BUkRfSEVJR0hUOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5ld0FkamFjZW50Q29vcmRpbmF0ZXMgPSB7IHg6IGNvb3JkaW5hdGVzLngsIHk6IGluZGV4IH07XG4gICAgICAgIGlmICghYXJySW5jbHVkZXNPYmoodGhpcy5sZWdhbE1vdmVzLCBuZXdBZGphY2VudENvb3JkaW5hdGVzKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdmVydGljYWxQYXRoLmFib3ZlLnB1c2gobmV3QWRqYWNlbnRDb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXR0YWNrIGFsbCBmb3VyIGRpcmVjdGlvbnMgdW50aWwgYSB0aGVyZSdzIGEgaGl0XG4gICAgaWYgKGNvb3JkaW5hdGVzLnggPT09IHRoaXMuX29yaWdpbi54ICYmIGNvb3JkaW5hdGVzLnkgPT09IHRoaXMuX29yaWdpbi55KSB7XG4gICAgICBpZiAoIXRoaXMuX2xhc3REaXJlY3Rpb24gJiYgdGhpcy5fdmVydGljYWxQYXRoLmJlbG93Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IHRoaXMuX3ZlcnRpY2FsUGF0aC5iZWxvdy5zcGxpY2UoLTEpWzBdO1xuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID0gXCJiZWxvd1wiO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgW251bGwsIFwiYmVsb3dcIl0uaW5jbHVkZXModGhpcy5fbGFzdERpcmVjdGlvbikgJiZcbiAgICAgICAgdGhpcy5fdmVydGljYWxQYXRoLmFib3ZlLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID0gdGhpcy5fdmVydGljYWxQYXRoLmFib3ZlLnNoaWZ0KCk7XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPSBcImFib3ZlXCI7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBbbnVsbCwgXCJiZWxvd1wiLCBcImFib3ZlXCJdLmluY2x1ZGVzKHRoaXMuX2xhc3REaXJlY3Rpb24pICYmXG4gICAgICAgIHRoaXMuX2hvcml6b250YWxQYXRoLmxlZnQubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSB0aGlzLl9ob3Jpem9udGFsUGF0aC5sZWZ0LnNwbGljZSgtMSlbMF07XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID0gdGhpcy5faG9yaXpvbnRhbFBhdGgucmlnaHQuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgIH1cblxuICAgICAgLy9yZW1vdmUgdGhlIGF0dGFjayBmcm9tIHRoZSBsZWdhbCBtb3Zlcywgc28gdGhhdCB0aGUgc2FtZSBjb29yZGluYXRlIGlzbid0IGF0dGFja2VkIGluIHRoZSBmdXR1cmVcbiAgICAgIGNvbnN0IGxhc3RBdHRhY2tJbmRleCA9IHRoaXMubGVnYWxNb3Zlcy5maW5kSW5kZXgoXG4gICAgICAgIChjb29yZHMpID0+XG4gICAgICAgICAgY29vcmRzLnggPT09IHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkLnggJiZcbiAgICAgICAgICBjb29yZHMueSA9PT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQueVxuICAgICAgKTtcbiAgICAgIHRoaXMubGVnYWxNb3Zlcy5zcGxpY2UobGFzdEF0dGFja0luZGV4LCAxKTtcblxuICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQgPSBjb29yZGluYXRlcztcbiAgICAgIHJldHVybiB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZDtcbiAgICB9XG5cbiAgICAvLyBUaGUgZmlyc3QgdGltZSB0aGVyZSdzIGEgaGl0LCBzZWUgd2hldGhlciB0aGUgc2hpcCBpcyBwbGFjZWQgaG9yaXpvbnRhbGx5IG9yIHZlcnRpY2FsbHlcbiAgICBpZiAoXG4gICAgICAoY29vcmRpbmF0ZXMueCAhPT0gdGhpcy5fb3JpZ2luLnggfHwgY29vcmRpbmF0ZXMueSAhPT0gdGhpcy5fb3JpZ2luLnkpICYmXG4gICAgICAhdGhpcy5faXNWZXJ0aWNhbCAmJlxuICAgICAgIXRoaXMuX2lzSG9yaXpvbnRhbFxuICAgICkge1xuICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9PT0gXCJiZWxvd1wiIHx8IHRoaXMuX2xhc3REaXJlY3Rpb24gPT09IFwiYWJvdmVcIlxuICAgICAgICA/ICh0aGlzLl9pc1ZlcnRpY2FsID0gdHJ1ZSlcbiAgICAgICAgOiAodGhpcy5faXNIb3Jpem9udGFsID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGNvb3JkaW5hdGVzIGFyZ3VtZW50IGlzIHJlcGVhdGVkIG9yIHdlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGF0IHNpZGUsIHdlIGNoYW5nZSB0byB0aGUgb3RoZXIgc2lkZS5cbiAgICBpZiAoXG4gICAgICB0aGlzLl9pc1ZlcnRpY2FsICYmXG4gICAgICAoKGNvb3JkaW5hdGVzLnggPT09IHRoaXMuX2xhc3RDb29yZGluYXRlc0FyZ3VtZW50LnggJiZcbiAgICAgICAgY29vcmRpbmF0ZXMueSA9PT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQueSkgfHxcbiAgICAgICAgIXRoaXMuX3ZlcnRpY2FsUGF0aFt0aGlzLl9sYXN0RGlyZWN0aW9uXS5sZW5ndGgpXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5fbGFzdERpcmVjdGlvbiA9PT0gXCJiZWxvd1wiKSB7XG4gICAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID0gdGhpcy5fdmVydGljYWxQYXRoLmFib3ZlLnNoaWZ0KCk7XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPSBcImFib3ZlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IHRoaXMuX3ZlcnRpY2FsUGF0aC5iZWxvdy5zcGxpY2UoLTEpWzBdO1xuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID0gXCJiZWxvd1wiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJ1dCBpZiB0aGUgY3VycmVudCBjb29yZGluYXRlcyBhcmUgZGlmZmVyZW50IGZyb20gdGhlIGxhc3QgY29vcmRpbmF0ZXMsIHRoYXQgbWVhbnMgdGhlIGxhc3RBdHRhY2sgd2FzIGEgaGl0LCBzbyB3ZSBrZWVwIGF0dGFja2luZyB0b3dhcmRzIHRoYXQgc2lkZS5cbiAgICBlbHNlIGlmIChcbiAgICAgIHRoaXMuX2lzVmVydGljYWwgJiZcbiAgICAgIHRoaXMuX3ZlcnRpY2FsUGF0aFt0aGlzLl9sYXN0RGlyZWN0aW9uXS5sZW5ndGggJiZcbiAgICAgIGNvb3JkaW5hdGVzLnkgIT09IHRoaXMuX2xhc3RDb29yZGluYXRlc0FyZ3VtZW50LnlcbiAgICApIHtcbiAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID1cbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9PT0gXCJiZWxvd1wiXG4gICAgICAgICAgPyB0aGlzLl92ZXJ0aWNhbFBhdGguYmVsb3cuc3BsaWNlKC0xKVswXVxuICAgICAgICAgIDogdGhpcy5fdmVydGljYWxQYXRoLmFib3ZlLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gQW5kIHdlIGRvIHRoZSBzYW1lIGZvciB0aGUgb3RoZXIgYXhpc1xuICAgIGlmIChcbiAgICAgIHRoaXMuX2lzSG9yaXpvbnRhbCAmJlxuICAgICAgKChjb29yZGluYXRlcy54ID09PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudC54ICYmXG4gICAgICAgIGNvb3JkaW5hdGVzLnkgPT09IHRoaXMuX2xhc3RDb29yZGluYXRlc0FyZ3VtZW50LnkpIHx8XG4gICAgICAgICF0aGlzLl9ob3Jpem9udGFsUGF0aFt0aGlzLl9sYXN0RGlyZWN0aW9uXS5sZW5ndGgpXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5fbGFzdERpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSB0aGlzLl9ob3Jpem9udGFsUGF0aC5yaWdodC5zaGlmdCgpO1xuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSB0aGlzLl9ob3Jpem9udGFsUGF0aC5sZWZ0LnNwbGljZSgtMSlbMF07XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5faXNIb3Jpem9udGFsICYmXG4gICAgICB0aGlzLl9ob3Jpem9udGFsUGF0aFt0aGlzLl9sYXN0RGlyZWN0aW9uXS5sZW5ndGggJiZcbiAgICAgIGNvb3JkaW5hdGVzLnggIT09IHRoaXMuX2xhc3RDb29yZGluYXRlc0FyZ3VtZW50LnhcbiAgICApIHtcbiAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID1cbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9PT0gXCJsZWZ0XCJcbiAgICAgICAgICA/IHRoaXMuX2hvcml6b250YWxQYXRoLmxlZnQuc3BsaWNlKC0xKVswXVxuICAgICAgICAgIDogdGhpcy5faG9yaXpvbnRhbFBhdGgucmlnaHQuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvL3JlbW92ZSB0aGUgYXR0YWNrIGZyb20gdGhlIGxlZ2FsIG1vdmVzLCBzbyB0aGF0IHRoZSBzYW1lIGNvb3JkaW5hdGUgaXNuJ3QgYXR0YWNrZWQgaW4gdGhlIGZ1dHVyZVxuICAgIGNvbnN0IGxhc3RBdHRhY2tJbmRleCA9IHRoaXMubGVnYWxNb3Zlcy5maW5kSW5kZXgoXG4gICAgICAoY29vcmRzKSA9PlxuICAgICAgICBjb29yZHMueCA9PT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQueCAmJlxuICAgICAgICBjb29yZHMueSA9PT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQueVxuICAgICk7XG4gICAgdGhpcy5sZWdhbE1vdmVzLnNwbGljZShsYXN0QXR0YWNrSW5kZXgsIDEpO1xuXG4gICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQgPSBjb29yZGluYXRlcztcblxuICAgIHJldHVybiB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZDtcbiAgfVxuXG4gIGxhc3RIaXQgPSBudWxsO1xuICBpc0RpZmZlcmVudFNoaXAgPSBudWxsO1xuXG4gIGF0dGFjaygpIHtcbiAgICBjb25zdCBnZXRPcHBvbmVudFRvdGFsSGl0cyA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9wcG9uZW50R2FtZWJvYXJkLnNoaXBzLnJlZHVjZSgodG90YWxIaXRzLCBjdXJyZW50U2hpcCkgPT4ge1xuICAgICAgICByZXR1cm4gdG90YWxIaXRzICsgY3VycmVudFNoaXAuaGl0c1Rha2VuLmxlbmd0aDtcbiAgICAgIH0sIDApO1xuICAgIH07XG5cbiAgICBjb25zdCBsYXN0U2hpcEhpdElzTm90U3VuayA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5sYXN0SGl0KSByZXR1cm47XG5cbiAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0aGlzLm9wcG9uZW50R2FtZWJvYXJkLnNoaXBzKSB7XG4gICAgICAgIGlmIChhcnJJbmNsdWRlc09iaihzaGlwLmNvb3JkaW5hdGVzLCB0aGlzLmxhc3RIaXQpKSB7XG4gICAgICAgICAgcmV0dXJuICFzaGlwLmlzU3VuaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmxhc3RIaXQgJiYgbGFzdFNoaXBIaXRJc05vdFN1bmsoKSkge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB0aGlzLl9nZXRBZGphY2VudEF0dGFja0Nvb3JkaW5hdGVzKFxuICAgICAgICB0aGlzLmxhc3RIaXQsXG4gICAgICAgIHRoaXMuaXNEaWZmZXJlbnRTaGlwXG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5pc0RpZmZlcmVudFNoaXApIHRoaXMuaXNEaWZmZXJlbnRTaGlwID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IG9wcG9uZW50SGl0c0JlZm9yZUF0dGFjayA9IGdldE9wcG9uZW50VG90YWxIaXRzKCk7XG4gICAgICBjb25zdCBzdWNjZXNzZnVsQXR0YWNrID1cbiAgICAgICAgdGhpcy5vcHBvbmVudEdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgIGNvbnN0IG9wcG9uZW50SGl0c0FmdGVyQXR0YWNrID0gZ2V0T3Bwb25lbnRUb3RhbEhpdHMoKTtcbiAgICAgIGlmIChcbiAgICAgICAgc3VjY2Vzc2Z1bEF0dGFjayAmJlxuICAgICAgICBvcHBvbmVudEhpdHNBZnRlckF0dGFjayA+IG9wcG9uZW50SGl0c0JlZm9yZUF0dGFja1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMubGFzdEhpdCA9IGNvb3JkaW5hdGVzO1xuXG4gICAgICAgIHJldHVybiBzdWNjZXNzZnVsQXR0YWNrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcHBvbmVudEhpdHNCZWZvcmVBdHRhY2sgPSBnZXRPcHBvbmVudFRvdGFsSGl0cygpO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB0aGlzLl9nZXRSYW5kb21BdHRhY2tDb29yZGluYXRlcygpO1xuICAgICAgY29uc3Qgc3VjY2Vzc2Z1bEF0dGFjayA9XG4gICAgICAgIHRoaXMub3Bwb25lbnRHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICBjb25zdCBvcHBvbmVudEhpdHNBZnRlckF0dGFjayA9IGdldE9wcG9uZW50VG90YWxIaXRzKCk7XG4gICAgICB0aGlzLmxhc3RIaXQgPVxuICAgICAgICBvcHBvbmVudEhpdHNBZnRlckF0dGFjayA+IG9wcG9uZW50SGl0c0JlZm9yZUF0dGFjayA/IGNvb3JkaW5hdGVzIDogbnVsbDtcblxuICAgICAgaWYgKCF0aGlzLmlzRGlmZmVyZW50U2hpcCkgdGhpcy5pc0RpZmZlcmVudFNoaXAgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gc3VjY2Vzc2Z1bEF0dGFjaztcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihcIkNvbnN0cnVjdG9yIGFyZ3VtZW50IG1pc3NpbmchXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBsZW5ndGggIT09IFwibnVtYmVyXCIgfHwgbGVuZ3RoIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb25zdHJ1Y3RvciBhcmd1bWVudFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgfVxuXG4gIGNvb3JkaW5hdGVzID0gbnVsbDtcbiAgaGl0c1Rha2VuID0gW107XG5cbiAgaGl0KGNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5oaXRzVGFrZW4ucHVzaChjb29yZGluYXRlcyk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0c1Rha2VuLmxlbmd0aCA9PT0gdGhpcy5sZW5ndGg7XG4gIH1cbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy9nYW1lLW92ZXItc2NyZWVuLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3NoaXBzLWxheW91dC5jc3NcIjtcbmltcG9ydCBkaXNwbGF5U2hpcHNMYXlvdXRTY3JlZW4gZnJvbSBcIi4vdXNlci1pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlHYW1lT3ZlclNjcmVlbih3aW5uZXIpIHtcbiAgY29uc3QgZ2FtZU92ZXJTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgZ2FtZU92ZXJTY3JlZW4uY2xhc3NMaXN0LmFkZChcInNjcmVlblwiKTtcbiAgZ2FtZU92ZXJTY3JlZW4uaWQgPSBcImdhbWUtb3ZlclwiO1xuXG4gIGNvbnN0IGdhbWVPdmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kQ2hpbGQoZ2FtZU92ZXJUZXh0KTtcbiAgZ2FtZU92ZXJUZXh0LmlubmVyVGV4dCA9IGBHYW1lIG92ZXIsIHlvdSAke1xuICAgIHdpbm5lciA9PT0gXCJwbGF5ZXItb25lXCIgPyBcIndvbiFcIiA6IFwibG9zdFwiXG4gIH1gO1xuXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uc1wiKTtcbiAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIHBsYXlBZ2Fpbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1hcnJvdy1yb3RhdGUtbGVmdFwiKTtcbiAgcGxheUFnYWluLnRpdGxlID0gXCJQTEFZIEFHQUlOXCI7XG4gIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVNoaXBzTGF5b3V0U2NyZWVuKTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChwbGF5QWdhaW4pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lT3ZlclNjcmVlbik7XG59XG4iLCJpbXBvcnQgeyBHQU1FQk9BUkRfSEVJR0hULCBHQU1FQk9BUkRfV0lEVEggfSBmcm9tIFwiLi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBnZXRHYW1lU3RhdGUsIGh1bWFuUGxheXNUdXJuIH0gZnJvbSBcIi4uL2dhbWUtbG9vcFwiO1xuaW1wb3J0IHsgYXJySW5jbHVkZXNPYmosIHJhbmRvbUludGVnZXJJblJhbmdlIH0gZnJvbSBcIi4uL2hlbHBlci1mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGRpc3BsYXlHYW1lT3ZlclNjcmVlbiB9IGZyb20gXCIuL3VpLWdhbWUtb3ZlclwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dhbWVib2FyZC5jc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNoaXBzVHJhY2tlcihwbGF5ZXIpIHtcbiAgY29uc3QgZ2FtZVN0YXRlID0gZ2V0R2FtZVN0YXRlKCk7XG5cbiAgY29uc3QgbG9uZ2VzdFNoaXBMZW5ndGggPSBNYXRoLm1heCguLi5nYW1lU3RhdGUuYXZhaWxhYmxlU2hpcHMpO1xuXG4gIGNvbnN0IHNoaXBUcmFja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHNoaXBUcmFja2VyLmNsYXNzTGlzdC5hZGQoXCJzaGlwcy10cmFja2VyXCIpO1xuICBjb25zdCBzaGlwc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgc2hpcHNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzaGlwcy13cmFwcGVyXCIpO1xuICBzaGlwVHJhY2tlci5hcHBlbmRDaGlsZChzaGlwc1dyYXBwZXIpO1xuICBnYW1lU3RhdGUuZ2FtZWJvYXJkc1twbGF5ZXJdLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCB1aVNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICB1aVNoaXAuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgdWlTaGlwLnN0eWxlLndpZHRoID0gYCR7KDEwMCAvIGxvbmdlc3RTaGlwTGVuZ3RoKSAqIHNoaXAubGVuZ3RofSVgO1xuICAgIGlmIChzaGlwLmlzU3VuaygpKSB1aVNoaXAuY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgZm9yIChcbiAgICAgIGxldCBzaGlwQ2VsbE51bWJlciA9IDA7XG4gICAgICBzaGlwQ2VsbE51bWJlciA8IHNoaXAubGVuZ3RoO1xuICAgICAgc2hpcENlbGxOdW1iZXIrK1xuICAgICkge1xuICAgICAgY29uc3QgdWlTaGlwU3ViZGl2aXNpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgIHVpU2hpcFN1YmRpdmlzaW9uLmNsYXNzTGlzdC5hZGQoXCJzdWJkaXZpc2lvblwiKTtcbiAgICAgIHVpU2hpcC5hcHBlbmRDaGlsZCh1aVNoaXBTdWJkaXZpc2lvbik7XG4gICAgfVxuICAgIHNoaXBzV3JhcHBlci5hcHBlbmRDaGlsZCh1aVNoaXApO1xuICB9KTtcblxuICBjb25zdCBnYW1lYm9hcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLmdhbWVib2FyZC13cmFwcGVyIyR7cGxheWVyfWBcbiAgKTtcbiAgY29uc3QgcHJldmlvdXNUcmFja2VyID0gZ2FtZWJvYXJkV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzLXRyYWNrZXJcIik7XG5cbiAgaWYgKHByZXZpb3VzVHJhY2tlcikge1xuICAgIHByZXZpb3VzVHJhY2tlci5yZXBsYWNlV2l0aChzaGlwVHJhY2tlcik7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyLmluY2x1ZGVzKFwib25lXCIpXG4gICAgICA/IGdhbWVib2FyZFdyYXBwZXIuZmlyc3RDaGlsZC5iZWZvcmUoc2hpcFRyYWNrZXIpXG4gICAgICA6IGdhbWVib2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2hpcFRyYWNrZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkXCIpO1xuXG4gIGZvciAobGV0IGNvbHVtbk51bWJlciA9IDA7IGNvbHVtbk51bWJlciA8IEdBTUVCT0FSRF9XSURUSDsgY29sdW1uTnVtYmVyKyspIHtcbiAgICBjb25zdCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgICBjb2x1bW4uaWQgPSBgY29sdW1uLSR7Y29sdW1uTnVtYmVyfWA7XG4gICAgZ2FtZWJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbik7XG5cbiAgICBmb3IgKGxldCByb3dOdW1iZXIgPSBHQU1FQk9BUkRfSEVJR0hUIC0gMTsgcm93TnVtYmVyID49IDA7IHJvd051bWJlci0tKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgY29uc3QgY2VsbENvb3JkaW5hdGVzID0gYHt4OiAke2NvbHVtbk51bWJlcn0sIHk6ICR7cm93TnVtYmVyfX1gO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVzXCIsIGNlbGxDb29yZGluYXRlcyk7XG4gICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdhbWVib2FyZDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlR2FtZWJvYXJkcygpIHtcbiAgY29uc3QgZ2FtZVN0YXRlID0gZ2V0R2FtZVN0YXRlKCk7XG4gIHVwZGF0ZUdhbWVib2FyZChcInBsYXllci10d29cIik7XG4gIHVwZGF0ZVNoaXBzVHJhY2tlcihcInBsYXllci10d29cIik7XG5cbiAgaWYgKGdhbWVTdGF0ZS5pc092ZXIgJiYgZ2FtZVN0YXRlLndpbm5lciA9PT0gXCJwbGF5ZXItb25lXCIpIHtcbiAgICBkaXNwbGF5R2FtZU92ZXJTY3JlZW4oXCJwbGF5ZXItb25lXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBsYXllclR3b0dhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLXR3byAuZ2FtZWJvYXJkXCJcbiAgKTtcbiAgcGxheWVyVHdvR2FtZWJvYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNhYmxlZFwiKTtcblxuICBjb25zdCB0aGlua2luZ1RpbWUgPSByYW5kb21JbnRlZ2VySW5SYW5nZSg2MDAsIDEwMDApO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB1cGRhdGVHYW1lYm9hcmQoXCJwbGF5ZXItb25lXCIpO1xuICAgIHVwZGF0ZVNoaXBzVHJhY2tlcihcInBsYXllci1vbmVcIik7XG4gICAgcGxheWVyVHdvR2FtZWJvYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNhYmxlZFwiKTtcblxuICAgIGlmIChnYW1lU3RhdGUuaXNPdmVyKSB7XG4gICAgICBkaXNwbGF5R2FtZU92ZXJTY3JlZW4oXCJwbGF5ZXItdHdvXCIpO1xuICAgIH1cbiAgfSwgdGhpbmtpbmdUaW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUdhbWVib2FyZChwbGF5ZXIpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgZ2FtZWJvYXJkU3RhdGUgPSBnZXRHYW1lU3RhdGUoKS5nYW1lYm9hcmRzW3BsYXllcl07XG4gIGNvbnN0IGlzQWlHYW1lYm9hcmQgPSBwbGF5ZXIuaW5jbHVkZXMoXCJ0d29cIik7XG5cbiAgZm9yIChjb25zdCBzaGlwIG9mIGdhbWVib2FyZFN0YXRlLnNoaXBzKSB7XG4gICAgZm9yIChjb25zdCBjb29yZHMgb2Ygc2hpcC5jb29yZGluYXRlcykge1xuICAgICAgY29uc3QgZ2FtZWJvYXJkQ2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29vcmRpbmF0ZXMgPSBcInt4OiAke2Nvb3Jkcy54fSwgeTogJHtjb29yZHMueX19XCJdYFxuICAgICAgKTtcblxuICAgICAgLy8gVGhlIHNoaXBzIG11c3Qgbm90IGJlIHZpc2libGUgaW4gdGhlIEFJJ3MgZ2FtZWJvYXJkXG4gICAgICBpZiAoIWlzQWlHYW1lYm9hcmQpIGdhbWVib2FyZENlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG5cbiAgICAgIGlmIChzaGlwLmlzU3VuaygpIHx8IGFyckluY2x1ZGVzT2JqKHNoaXAuaGl0c1Rha2VuLCBjb29yZHMpKSB7XG4gICAgICAgIGdhbWVib2FyZENlbGwuY2xhc3NMaXN0LmFkZChzaGlwLmlzU3VuaygpID8gXCJzdW5rXCIgOiBcImhpdFwiKTtcblxuICAgICAgICBjb25zdCB4TWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICB4TWFyay5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS14bWFya1wiKTtcbiAgICAgICAgZ2FtZWJvYXJkQ2VsbC5hcHBlbmRDaGlsZCh4TWFyayk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBtaXNzZWRBdHRhY2sgb2YgZ2FtZWJvYXJkU3RhdGUubWlzc2VkQXR0YWNrcykge1xuICAgIGNvbnN0IGdhbWVib2FyZENlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb29yZGluYXRlcyA9IFwie3g6ICR7bWlzc2VkQXR0YWNrLnh9LCB5OiAke21pc3NlZEF0dGFjay55fX1cIl1gXG4gICAgKTtcbiAgICBnYW1lYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWQtYXR0YWNrXCIpO1xuXG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgZG90LmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLWNpcmNsZVwiKTtcbiAgICBnYW1lYm9hcmRDZWxsLmFwcGVuZENoaWxkKGRvdCk7XG4gIH1cblxuICBpZiAoaXNBaUdhbWVib2FyZCkge1xuICAgIGNvbnN0IGNlbGxzID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKTtcblxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaHVtYW5QbGF5c1R1cm4oe1xuICAgICAgICAgIHg6IE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIilbNF0pLFxuICAgICAgICAgIHk6IE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIilbMTBdKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlR2FtZWJvYXJkcygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgZ2FtZWJvYXJkV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5nYW1lYm9hcmQtd3JhcHBlciMke3BsYXllcn1gXG4gICk7XG4gIGNvbnN0IHByZXZpb3VzR2FtZWJvYXJkID0gZ2FtZWJvYXJkV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZFwiKTtcblxuICBwcmV2aW91c0dhbWVib2FyZFxuICAgID8gcHJldmlvdXNHYW1lYm9hcmQucmVwbGFjZVdpdGgoZ2FtZWJvYXJkKVxuICAgIDogZ2FtZWJvYXJkV3JhcHBlci5hcHBlbmRDaGlsZChnYW1lYm9hcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9taXplZEdhbWVib2FyZCgpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGVtcHR5Q2VsbHMgPSBbXTtcbiAgZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIilbNF0pO1xuICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVzXCIpWzEwXSk7XG4gICAgZW1wdHlDZWxscy5wdXNoKHsgeCwgeSB9KTtcbiAgfSk7XG5cbiAgY29uc3QgZ2V0UmFuZG9tUGxhY2VtZW50Q29vcmRpbmF0ZXMgPSAoc2hpcExlbmd0aCkgPT4ge1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IFt0cnVlLCBmYWxzZV1bcmFuZG9tSW50ZWdlckluUmFuZ2UoMCwgMSldO1xuICAgIGNvbnN0IGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGN1cnJlbnRDZWxsIG9mIGVtcHR5Q2VsbHMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKGlzSG9yaXpvbnRhbCAmJiBjdXJyZW50Q2VsbC54ID4gR0FNRUJPQVJEX1dJRFRIIC0gc2hpcExlbmd0aCkgfHxcbiAgICAgICAgKCFpc0hvcml6b250YWwgJiYgY3VycmVudENlbGwueSA+IEdBTUVCT0FSRF9IRUlHSFQgLSBzaGlwTGVuZ3RoKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhZGphY2VudENlbGxzID0gW2N1cnJlbnRDZWxsXTtcbiAgICAgIGxldCBuZXh0Q2VsbDtcbiAgICAgIGxldCBwcmV2aW91c0NlbGwgPSBjdXJyZW50Q2VsbDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFkamFjZW50Q2VsbHMubGVuZ3RoID09PSBzaGlwTGVuZ3RoKSB7XG4gICAgICAgICAgYXZhaWxhYmxlQ29vcmRpbmF0ZXMucHVzaChhZGphY2VudENlbGxzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHRDZWxsID0gaXNIb3Jpem9udGFsXG4gICAgICAgICAgPyB7IHg6IHByZXZpb3VzQ2VsbC54ICsgMSwgeTogcHJldmlvdXNDZWxsLnkgfVxuICAgICAgICAgIDogeyB4OiBwcmV2aW91c0NlbGwueCwgeTogcHJldmlvdXNDZWxsLnkgKyAxIH07XG5cbiAgICAgICAgcHJldmlvdXNDZWxsID0gbmV4dENlbGw7XG5cbiAgICAgICAgaWYgKGFyckluY2x1ZGVzT2JqKGVtcHR5Q2VsbHMsIG5leHRDZWxsKSkge1xuICAgICAgICAgIGFkamFjZW50Q2VsbHMucHVzaChuZXh0Q2VsbCk7XG4gICAgICAgIH0gZWxzZSBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaG9zZW5Db29yZGluYXRlcyA9XG4gICAgICBhdmFpbGFibGVDb29yZGluYXRlc1tcbiAgICAgICAgcmFuZG9tSW50ZWdlckluUmFuZ2UoMCwgYXZhaWxhYmxlQ29vcmRpbmF0ZXMubGVuZ3RoIC0gMSlcbiAgICAgIF07XG5cbiAgICBjb25zdCBjb29yZGluYXRlc0ZvckRlbGV0aW9uID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hvc2VuQ29vcmRpbmF0ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBjZWxsT25UaGVMZWZ0ID0ge1xuICAgICAgICB4OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCAtIDEsXG4gICAgICAgIHk6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55LFxuICAgICAgfTtcbiAgICAgIGlmIChcbiAgICAgICAgY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnggPiAwICYmXG4gICAgICAgICFhcnJJbmNsdWRlc09iaihjaG9zZW5Db29yZGluYXRlcywgY2VsbE9uVGhlTGVmdClcbiAgICAgICkge1xuICAgICAgICBjb29yZGluYXRlc0ZvckRlbGV0aW9uLnB1c2goY2VsbE9uVGhlTGVmdCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNlbGxPblRoZVJpZ2h0ID0ge1xuICAgICAgICB4OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCArIDEsXG4gICAgICAgIHk6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55LFxuICAgICAgfTtcbiAgICAgIGlmIChcbiAgICAgICAgY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnggPCBHQU1FQk9BUkRfV0lEVEggLSAxICYmXG4gICAgICAgICFhcnJJbmNsdWRlc09iaihjaG9zZW5Db29yZGluYXRlcywgY2VsbE9uVGhlUmlnaHQpXG4gICAgICApIHtcbiAgICAgICAgY29vcmRpbmF0ZXNGb3JEZWxldGlvbi5wdXNoKGNlbGxPblRoZVJpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2VsbEJlbG93ID0ge1xuICAgICAgICB4OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCxcbiAgICAgICAgeTogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnkgLSAxLFxuICAgICAgfTtcbiAgICAgIGlmIChcbiAgICAgICAgY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnkgPiAwICYmXG4gICAgICAgICFhcnJJbmNsdWRlc09iaihjaG9zZW5Db29yZGluYXRlcywgY2VsbEJlbG93KVxuICAgICAgKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzRm9yRGVsZXRpb24ucHVzaChjZWxsQmVsb3cpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjZWxsQWJvdmUgPSB7XG4gICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54LFxuICAgICAgICB5OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSArIDEsXG4gICAgICB9O1xuICAgICAgaWYgKFxuICAgICAgICBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSA8IEdBTUVCT0FSRF9IRUlHSFQgLSAxICYmXG4gICAgICAgICFhcnJJbmNsdWRlc09iaihjaG9zZW5Db29yZGluYXRlcywgY2VsbEFib3ZlKVxuICAgICAgKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzRm9yRGVsZXRpb24ucHVzaChjZWxsQWJvdmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFsuLi5jaG9zZW5Db29yZGluYXRlcywgLi4uY29vcmRpbmF0ZXNGb3JEZWxldGlvbl0uZm9yRWFjaCgoY29vcmRzKSA9PiB7XG4gICAgICBjb25zdCBjb29yZHNJbmRleCA9IGVtcHR5Q2VsbHMuZmluZEluZGV4KFxuICAgICAgICAoY2VsbCkgPT4gY2VsbC54ID09PSBjb29yZHMueCAmJiBjZWxsLnkgPT09IGNvb3Jkcy55XG4gICAgICApO1xuICAgICAgZW1wdHlDZWxscy5zcGxpY2UoY29vcmRzSW5kZXgsIDEpO1xuICAgIH0pO1xuICAgIHJldHVybiBjaG9zZW5Db29yZGluYXRlcztcbiAgfTtcblxuICBsZXQgc2hpcHNDb29yZGluYXRlcyA9IFtdO1xuXG4gIGdldEdhbWVTdGF0ZSgpLmF2YWlsYWJsZVNoaXBzLmZvckVhY2goKHNoaXBMZW5ndGgpID0+IHtcbiAgICBjb25zdCBwbGFjZW1lbnRDb29yZGluYXRlcyA9IGdldFJhbmRvbVBsYWNlbWVudENvb3JkaW5hdGVzKHNoaXBMZW5ndGgpO1xuICAgIHNoaXBzQ29vcmRpbmF0ZXMucHVzaChwbGFjZW1lbnRDb29yZGluYXRlcyk7XG4gICAgcGxhY2VtZW50Q29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRzKSA9PiB7XG4gICAgICBnYW1lYm9hcmRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5jZWxsW2RhdGEtY29vcmRpbmF0ZXM9J3t4OiAke2Nvb3Jkcy54fSwgeTogJHtjb29yZHMueX19J11gXG4gICAgICAgIClcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIH0pO1xuICB9KTtcblxuICBnYW1lYm9hcmQuc2V0QXR0cmlidXRlKFxuICAgIFwiZGF0YS1zaGlwcy1jb29yZGluYXRlc1wiLFxuICAgIEpTT04uc3RyaW5naWZ5KHNoaXBzQ29vcmRpbmF0ZXMpXG4gICk7XG4gIHJldHVybiBnYW1lYm9hcmQ7XG59XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9iYXR0bGUtc2NyZWVuLmNzc1wiO1xuXG5pbXBvcnQge1xuICByYW5kb21pemVkR2FtZWJvYXJkLFxuICB1cGRhdGVHYW1lYm9hcmQsXG4gIHVwZGF0ZVNoaXBzVHJhY2tlcixcbn0gZnJvbSBcIi4vdWktZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGFjZVNoaXBzLCBzdGFydEdhbWUgfSBmcm9tIFwiLi4vZ2FtZS1sb29wXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuXG5mdW5jdGlvbiBkaXNwbGF5QmF0dGxlKCkge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBiYXR0bGVTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYmF0dGxlU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJzY3JlZW5cIik7XG4gIGJhdHRsZVNjcmVlbi5pZCA9IFwiYmF0dGxlXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXR0bGVTY3JlZW4pO1xuXG4gIGNvbnN0IFBMQVlFUlMgPSBbXCJwbGF5ZXItb25lXCIsIFwicGxheWVyLXR3b1wiXTtcblxuICBQTEFZRVJTLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBnYW1lYm9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmQtd3JhcHBlclwiKTtcbiAgICBnYW1lYm9hcmRXcmFwcGVyLmlkID0gcGxheWVyO1xuICAgIGJhdHRsZVNjcmVlbi5hcHBlbmRDaGlsZChnYW1lYm9hcmRXcmFwcGVyKTtcbiAgICB1cGRhdGVHYW1lYm9hcmQocGxheWVyKTtcbiAgICB1cGRhdGVTaGlwc1RyYWNrZXIocGxheWVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlCYXR0bGVXaXRoU2hpcHMoc2hpcHNDb29yZGluYXRlcykge1xuICBzdGFydEdhbWUoKTtcbiAgcGxhY2VTaGlwcyhzaGlwc0Nvb3JkaW5hdGVzKTtcbiAgZGlzcGxheUJhdHRsZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5U2hpcHNMYXlvdXRTY3JlZW4oKSB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IHNoaXBzTGF5b3V0U2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHNoaXBzTGF5b3V0U2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJzY3JlZW5cIik7XG4gIHNoaXBzTGF5b3V0U2NyZWVuLmlkID0gXCJzaGlwcy1sYXlvdXRcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBzTGF5b3V0U2NyZWVuKTtcblxuICBjb25zdCBnYW1lYm9hcmRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGdhbWVib2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImdhbWVib2FyZC13cmFwcGVyXCIpO1xuICBzaGlwc0xheW91dFNjcmVlbi5hcHBlbmRDaGlsZChnYW1lYm9hcmRXcmFwcGVyKTtcblxuICBnYW1lYm9hcmRXcmFwcGVyLmFwcGVuZChyYW5kb21pemVkR2FtZWJvYXJkKCkpO1xuXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uc1wiKTtcbiAgZ2FtZWJvYXJkV3JhcHBlci5hcHBlbmRDaGlsZChidXR0b25zKTtcblxuICBjb25zdCByYW5kb21pemVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByYW5kb21pemVCdXR0b24uaWQgPSBcInJhbmRvbWl6ZVwiO1xuICByYW5kb21pemVCdXR0b24uaW5uZXJUZXh0ID0gXCJSYW5kb21pemVcIjtcbiAgcmFuZG9taXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2hpcHNMYXlvdXRTY3JlZW5cbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZFwiKVxuICAgICAgLnJlcGxhY2VXaXRoKHJhbmRvbWl6ZWRHYW1lYm9hcmQoKSk7XG4gIH0pO1xuICBidXR0b25zLmFwcGVuZENoaWxkKHJhbmRvbWl6ZUJ1dHRvbik7XG5cbiAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsYXlCdXR0b24uaWQgPSBcInBsYXlcIjtcbiAgcGxheUJ1dHRvbi5pbm5lclRleHQgPSBcIlBsYXlcIjtcbiAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzQ29vcmRpbmF0ZXMgPSBKU09OLnBhcnNlKFxuICAgICAgZ2FtZWJvYXJkV3JhcHBlclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5nYW1lYm9hcmRcIilcbiAgICAgICAgLmdldEF0dHJpYnV0ZShcImRhdGEtc2hpcHMtY29vcmRpbmF0ZXNcIilcbiAgICApO1xuXG4gICAgZGlzcGxheUJhdHRsZVdpdGhTaGlwcyhzaGlwc0Nvb3JkaW5hdGVzKTtcbiAgfSk7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQocGxheUJ1dHRvbik7XG59XG5cbmRpc3BsYXlTaGlwc0xheW91dFNjcmVlbigpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3VzZXItaW50ZXJmYWNlL3VzZXItaW50ZXJmYWNlLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9