/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, ".screen#game-over {\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  background-color: rgb(0 0 0 / 70%);\n  color: white;\n}\n\n.screen#game-over .buttons {\n  font-size: 2rem;\n  display: flex;\n  gap: 40px;\n}\n\n.screen#game-over .buttons > * {\n  cursor: pointer;\n  filter: brightness(0.8);\n}\n\n.screen#game-over .buttons > *:hover {\n  filter: brightness(1);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/game-over-screen.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,MAAM;EACN,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[".screen#game-over {\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  background-color: rgb(0 0 0 / 70%);\n  color: white;\n}\n\n.screen#game-over .buttons {\n  font-size: 2rem;\n  display: flex;\n  gap: 40px;\n}\n\n.screen#game-over .buttons > * {\n  cursor: pointer;\n  filter: brightness(0.8);\n}\n\n.screen#game-over .buttons > *:hover {\n  filter: brightness(1);\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".gameboard-wrapper {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.gameboard-wrapper#player-one {\n  background-color: pink;\n}\n\n.gameboard-wrapper#player-two {\n  background-color: blue;\n}\n\n.gameboard {\n  aspect-ratio: 2/2;\n  width: min(90%, 500px);\n  display: flex;\n  background-color: white;\n  pointer-events: none;\n  transition: filter 500ms;\n}\n\n.gameboard > .column {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  pointer-events: none;\n}\n\n.gameboard .cell {\n  flex: 1;\n  border: 1px solid grey;\n  pointer-events: auto;\n  cursor: pointer;\n}\n\n.gameboard .cell:hover {\n  background-color: rgb(210, 224, 230);\n}\n\n.gameboard .cell.ship {\n  background-color: skyblue;\n}\n\n.gameboard .cell.hit {\n  background-color: hotpink;\n  pointer-events: none;\n}\n\n.gameboard .cell.sunk {\n  background-color: red;\n  pointer-events: none;\n}\n\n.gameboard .cell.missed-attack {\n  background-color: grey;\n  pointer-events: none;\n}\n\n.gameboard.disabled {\n  pointer-events: auto;\n  cursor: wait;\n  filter: brightness(0.9);\n}\n\n.gameboard.disabled .cell {\n  pointer-events: none;\n}\n\n.gameboard-wrapper .ships-tracker {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n}\n\n.gameboard-wrapper#player-one .ships-tracker {\n  align-items: flex-end;\n}\n\n.ships-tracker .ship {\n  flex: 1;\n  display: flex;\n  gap: 2px;\n}\n\n.ships-tracker .ship > .subdivision {\n  flex: 1;\n  background-color: yellow;\n}\n\n.ships-tracker .ship.sunk > .subdivision {\n  background-color: orange;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":"AAAA;EACE,OAAO;EACP,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,OAAO;EACP,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,OAAO;EACP,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B","sourcesContent":[".gameboard-wrapper {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.gameboard-wrapper#player-one {\n  background-color: pink;\n}\n\n.gameboard-wrapper#player-two {\n  background-color: blue;\n}\n\n.gameboard {\n  aspect-ratio: 2/2;\n  width: min(90%, 500px);\n  display: flex;\n  background-color: white;\n  pointer-events: none;\n  transition: filter 500ms;\n}\n\n.gameboard > .column {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  pointer-events: none;\n}\n\n.gameboard .cell {\n  flex: 1;\n  border: 1px solid grey;\n  pointer-events: auto;\n  cursor: pointer;\n}\n\n.gameboard .cell:hover {\n  background-color: rgb(210, 224, 230);\n}\n\n.gameboard .cell.ship {\n  background-color: skyblue;\n}\n\n.gameboard .cell.hit {\n  background-color: hotpink;\n  pointer-events: none;\n}\n\n.gameboard .cell.sunk {\n  background-color: red;\n  pointer-events: none;\n}\n\n.gameboard .cell.missed-attack {\n  background-color: grey;\n  pointer-events: none;\n}\n\n.gameboard.disabled {\n  pointer-events: auto;\n  cursor: wait;\n  filter: brightness(0.9);\n}\n\n.gameboard.disabled .cell {\n  pointer-events: none;\n}\n\n.gameboard-wrapper .ships-tracker {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n}\n\n.gameboard-wrapper#player-one .ships-tracker {\n  align-items: flex-end;\n}\n\n.ships-tracker .ship {\n  flex: 1;\n  display: flex;\n  gap: 2px;\n}\n\n.ships-tracker .ship > .subdivision {\n  flex: 1;\n  background-color: yellow;\n}\n\n.ships-tracker .ship.sunk > .subdivision {\n  background-color: orange;\n}\n"],"sourceRoot":""}]);
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  background-color: red;\n}\n\n#container {\n  height: 100vh;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf","sourcesContent":["body {\n  margin: 0;\n  background-color: red;\n}\n\n#container {\n  height: 100vh;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/pve-battle-screen.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/pve-battle-screen.css ***!
  \********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#pve-battle.screen {\n  height: 100%;\n  background-color: beige;\n  display: flex;\n}\n\n#pve-battle.screen #player-one .gameboard .cell:hover {\n  cursor: default;\n}\n\n#pve-battle.screen #player-one .gameboard .cell:not(.ship):hover {\n  background-color: white;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/pve-battle-screen.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":["#pve-battle.screen {\n  height: 100%;\n  background-color: beige;\n  display: flex;\n}\n\n#pve-battle.screen #player-one .gameboard .cell:hover {\n  cursor: default;\n}\n\n#pve-battle.screen #player-one .gameboard .cell:not(.ship):hover {\n  background-color: white;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".screen#ships-layout {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.screen#ships-layout input#name {\n  width: 400px;\n}\n\n.screen#ships-layout .gameboard-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.screen#ships-layout .gameboard .cell:hover {\n  cursor: default;\n}\n\n.screen#ships-layout .gameboard .cell:not(.ship):hover {\n  background-color: white;\n}\n\n.screen#ships-layout input#name {\n  outline: solid 2px;\n}\n\n.screen#ships-layout input#name.valid {\n  outline-color: lime;\n}\n.screen#ships-layout input#name.invalid {\n  outline-color: hotpink;\n}\n\n.screen#ships-layout input:focus-visible {\n  outline-color: skyblue;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/ships-layout.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":[".screen#ships-layout {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.screen#ships-layout input#name {\n  width: 400px;\n}\n\n.screen#ships-layout .gameboard-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.screen#ships-layout .gameboard .cell:hover {\n  cursor: default;\n}\n\n.screen#ships-layout .gameboard .cell:not(.ship):hover {\n  background-color: white;\n}\n\n.screen#ships-layout input#name {\n  outline: solid 2px;\n}\n\n.screen#ships-layout input#name.valid {\n  outline-color: lime;\n}\n.screen#ships-layout input#name.invalid {\n  outline-color: hotpink;\n}\n\n.screen#ships-layout input:focus-visible {\n  outline-color: skyblue;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/pve-battle-screen.css":
/*!******************************************!*\
  !*** ./src/styles/pve-battle-screen.css ***!
  \******************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pve_battle_screen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./pve-battle-screen.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/pve-battle-screen.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pve_battle_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pve_battle_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pve_battle_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pve_battle_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   "startPveGame": () => (/* binding */ startPveGame),
/* harmony export */   "startPvpGame": () => (/* binding */ startPvpGame)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-functions */ "./src/helper-functions.js");



const GAME = {
  shipLengths: [5, 4, 3, 3, 2],
  started: false,
  players: { "player-one": null, "player-two": null },
};

function resetGame() {
  GAME.over = false;
  GAME.winner = undefined;
  GAME.currentTurn = "player-one";
  GAME.players = { "player-one": null, "player-two": null };
  GAME.mode = { isPve: undefined, isPvp: undefined };
  GAME.started = false;
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

let aiLastHit;
let aiIsDifferentShip;

function startPveGame(playerName) {
  if (!playerName) throw new Error("Player name argument missing");

  resetGame();
  GAME.mode.isPve = true;
  GAME.players["player-one"] = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(playerName);
  GAME.players["player-two"] = new _player__WEBPACK_IMPORTED_MODULE_0__.ComputerPlayer();
  GAME.started = true;
  aiLastHit = null;
  aiIsDifferentShip = null;
}

function startPvpGame(playerOneName, playerTwoName) {
  if (!playerOneName) throw new Error("Player one name argument missing");
  if (!playerTwoName) throw new Error("Player two name argument missing");

  resetGame();
  GAME.mode.isPvp = true;
  GAME.players["player-one"] = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(playerOneName);
  GAME.players["player-two"] = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(playerTwoName);
  GAME.started = true;
}

function switchTurns() {
  GAME.currentTurn =
    GAME.currentTurn === "player-one" ? "player-two" : "player-one";
}

function nextTurn() {
  switchTurns();
  if (GAME.mode.isPve && GAME.currentTurn === "player-two") aiPlaysTurn();
}

function placeShips(player, shipsCoordinates) {
  if (!player) throw new Error("player argument missing");
  if (!shipsCoordinates) throw new Error("coordinates argument missing");
  if (!GAME.players[player]) throw new Error(`No ${player}`);

  for (const coordinates of shipsCoordinates) {
    GAME.players[player].gameboard.placeShip(coordinates);
  }
}

function attack({ receiver, coordinates }) {
  const successfulAttack =
    GAME.players[receiver].gameboard.receiveAttack(coordinates);

  return successfulAttack;
}

function humanPlaysTurn({ attacker, coordinates }) {
  if (!GAME.started) throw new Error("can't play until game has been started ");
  if (!attacker) throw new Error("attacker argument missing");
  if (!coordinates) throw new Error("coordinates argument missing");
  if (attacker !== GAME.currentTurn || GAME.over) {
    throw new Error(`Not ${attacker}'s turn`);
  }

  const receiver = attacker === "player-one" ? "player-two" : "player-one";

  const successfulAttack = attack({ receiver, coordinates });
  if (successfulAttack) {
    if (GAME.players[receiver].gameboard.allShipsSunk()) {
      GAME.over = true;
      GAME.winner = attacker;
    } else {
      nextTurn();
    }

    return {
      player: receiver,
      gameboardState: GAME.players[receiver].gameboard.getState(),
    };
  }
}

function aiPlaysTurn() {
  const attacker = "player-two";
  const receiver = "player-one";

  const getPlayerOneTotalHitsTaken = () => {
    return GAME.players["player-one"].gameboard.ships.reduce(
      (totalHits, currentShip) => {
        return totalHits + currentShip.hitsTaken.length;
      },
      0
    );
  };

  const lastShipHitIsNotSunk = () => {
    if (!aiLastHit) return;

    for (const ship of GAME.players[receiver].gameboard.ships) {
      if ((0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.arrIncludesObj)(ship.coordinates, aiLastHit)) {
        return !ship.isSunk();
      }
    }
  };

  if (aiLastHit && lastShipHitIsNotSunk()) {
    const coordinates = GAME.players[attacker].getAdjacentAttackCoordinates(
      aiLastHit,
      aiIsDifferentShip
    );

    if (aiIsDifferentShip) aiIsDifferentShip = false;

    const playerOneHitsTakenBeforeAttack = getPlayerOneTotalHitsTaken();
    const successfulAttack = attack({ receiver, coordinates });
    const playerOneHitsTakenAfterAttack = getPlayerOneTotalHitsTaken();
    if (successfulAttack) {
      if (GAME.players[receiver].gameboard.allShipsSunk()) {
        GAME.over = true;
        GAME.winner = attacker;
      } else {
        nextTurn();
      }

      if (
        playerOneHitsTakenAfterAttack ===
        playerOneHitsTakenBeforeAttack + 1
      ) {
        aiLastHit = coordinates;
      }

      return {
        player: receiver,
        gameboardState: GAME.players[receiver].gameboard.getState(),
      };
    }
  } else {
    const playerOneHitsTakenBeforeAttack = getPlayerOneTotalHitsTaken();
    const coordinates = GAME.players[attacker].getRandomAttackCoordinates();
    const successfulAttack = attack({
      receiver,
      coordinates,
    });
    const playerOneHitsTakenAfterAttack = getPlayerOneTotalHitsTaken();
    aiLastHit =
      playerOneHitsTakenAfterAttack === playerOneHitsTakenBeforeAttack + 1
        ? coordinates
        : null;

    if (!aiIsDifferentShip) aiIsDifferentShip = true;

    if (successfulAttack) {
      if (GAME.players[receiver].gameboard.allShipsSunk()) {
        GAME.over = true;
        GAME.winner = attacker;
      } else {
        nextTurn();
      }

      return {
        player: receiver,
        gameboardState: GAME.players[receiver].gameboard.getState(),
      };
    }
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
  constructor(name) {
    this.name = name;
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}

class ComputerPlayer extends Player {
  constructor() {
    super("AI");
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

  getRandomAttackCoordinates() {
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

  getAdjacentAttackCoordinates(coordinates, isDifferentShip) {
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
/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-loop */ "./src/game-loop.js");
/* harmony import */ var _styles_game_over_screen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/game-over-screen.css */ "./src/styles/game-over-screen.css");
/* harmony import */ var _styles_ships_layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ships-layout.css */ "./src/styles/ships-layout.css");
/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-interface */ "./src/user-interface/user-interface.js");





function displayGameOverScreen(winnerName) {
  const gameOverScreen = document.createElement("section");
  gameOverScreen.classList.add("screen");
  gameOverScreen.id = "game-over";

  const gameOverText = document.createElement("h1");
  gameOverScreen.appendChild(gameOverText);
  gameOverText.innerText = `Game Over, ${winnerName} won!`;

  const buttons = document.createElement("section");
  buttons.classList.add("buttons");
  gameOverScreen.appendChild(buttons);

  const playAgain = document.createElement("i");
  playAgain.classList.add("fa-solid", "fa-arrow-rotate-left");
  playAgain.title = "PLAY AGAIN";
  playAgain.addEventListener("click", () => {
    (0,_user_interface__WEBPACK_IMPORTED_MODULE_3__.displayShipsLayoutScreen)((0,_game_loop__WEBPACK_IMPORTED_MODULE_0__.getGameState)().players["player-one"].name);
  });
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
/* harmony export */   "updatePveGameboard": () => (/* binding */ updatePveGameboard),
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
    shipTracker.appendChild(uiShip);
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

function updatePveGameboards() {
  const gameState = (0,_game_loop__WEBPACK_IMPORTED_MODULE_1__.getGameState)();
  updatePveGameboard("player-two");
  updateShipsTracker("player-two");

  if (gameState.isOver && gameState.winner === "player-one") {
    (0,_ui_game_over__WEBPACK_IMPORTED_MODULE_3__.displayGameOverScreen)(gameState.players["player-one"].name);
    return;
  }

  const thinkingTime = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.randomIntegerInRange)(600, 1000);
  const playerTwoGameboard = document.querySelector(
    ".gameboard-wrapper#player-two .gameboard"
  );
  playerTwoGameboard.classList.toggle("disabled");

  setTimeout(() => {
    updatePveGameboard("player-one");
    updateShipsTracker("player-one");
    playerTwoGameboard.classList.toggle("disabled");

    if (gameState.isOver) {
      (0,_ui_game_over__WEBPACK_IMPORTED_MODULE_3__.displayGameOverScreen)(gameState.players["player-two"].name);
    }
  }, thinkingTime);
}

function updatePveGameboard(player) {
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

      if (ship.isSunk()) {
        gameboardCell.classList.add("sunk");
      } else if ((0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.arrIncludesObj)(ship.hitsTaken, coords)) {
        gameboardCell.classList.add("hit");
      }
    }
  }

  for (const missedAttack of gameboardState.missedAttacks) {
    const gameboardCell = gameboard.querySelector(
      `[data-coordinates = "{x: ${missedAttack.x}, y: ${missedAttack.y}}"]`
    );
    gameboardCell.classList.add("missed-attack");
  }

  if (isAiGameboard) {
    const cells = gameboard.querySelectorAll(".cell");

    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        const attacker = player === "player-one" ? "player-two" : "player-one";
        const x = Number(cell.getAttribute("data-coordinates")[4]);
        const y = Number(cell.getAttribute("data-coordinates")[10]);
        (0,_game_loop__WEBPACK_IMPORTED_MODULE_1__.humanPlaysTurn)({
          attacker,
          coordinates: { x, y },
        });

        updatePveGameboards();
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
/* harmony export */   "displayPveBattle": () => (/* binding */ displayPveBattle),
/* harmony export */   "displayPveBattleWithShips": () => (/* binding */ displayPveBattleWithShips),
/* harmony export */   "displayShipsLayoutScreen": () => (/* binding */ displayShipsLayoutScreen)
/* harmony export */ });
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_pve_battle_screen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pve-battle-screen.css */ "./src/styles/pve-battle-screen.css");
/* harmony import */ var _ui_gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-gameboard */ "./src/user-interface/ui-gameboard.js");
/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-loop */ "./src/game-loop.js");






const container = document.querySelector("#container");

function displayPveBattle() {
  container.innerHTML = "";

  const battleScreen = document.createElement("section");
  battleScreen.classList.add("screen");
  battleScreen.id = "pve-battle";
  container.appendChild(battleScreen);

  const PLAYERS = ["player-one", "player-two"];

  PLAYERS.forEach((player) => {
    const gameboardWrapper = document.createElement("section");
    gameboardWrapper.classList.add("gameboard-wrapper");
    gameboardWrapper.id = player;
    battleScreen.appendChild(gameboardWrapper);
    (0,_ui_gameboard__WEBPACK_IMPORTED_MODULE_2__.updatePveGameboard)(player);
    (0,_ui_gameboard__WEBPACK_IMPORTED_MODULE_2__.updateShipsTracker)(player);
  });
}

function displayPveBattleWithShips({ name, shipsCoordinates }) {
  (0,_game_loop__WEBPACK_IMPORTED_MODULE_3__.startPveGame)(name);
  (0,_game_loop__WEBPACK_IMPORTED_MODULE_3__.placeShips)("player-one", shipsCoordinates);
  displayPveBattle();
}

function displayShipsLayoutScreen(name) {
  container.innerHTML = "";

  const shipsLayoutScreen = document.createElement("section");
  shipsLayoutScreen.classList.add("screen");
  shipsLayoutScreen.id = "ships-layout";
  container.appendChild(shipsLayoutScreen);

  const nameInput = document.createElement("input");
  nameInput.id = "name";
  nameInput.placeholder = "Name";
  nameInput.autocomplete = "off";
  if (name) nameInput.value = name;
  nameInput.addEventListener("input", () => {
    if (!nameInput.value && nameInput.className !== "invalid")
      nameInput.className = "invalid";
    if (nameInput.value && nameInput.className !== "valid")
      nameInput.className = "valid";
  });
  shipsLayoutScreen.appendChild(nameInput);

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
    if (!nameInput.value) {
      if (nameInput.className !== "invalid") nameInput.className = "invalid";
      return;
    }

    const shipsCoordinates = JSON.parse(
      gameboardWrapper
        .querySelector(".gameboard")
        .getAttribute("data-ships-coordinates")
    );

    displayPveBattleWithShips({ name: nameInput.value, shipsCoordinates });
  });
  buttons.appendChild(playButton);
}

displayShipsLayoutScreen();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZS1vdmVyLXNjcmVlbi5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9wdmUtYmF0dGxlLXNjcmVlbi5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcHMtbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZS1vdmVyLXNjcmVlbi5jc3M/YzMyOSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzPzIxODciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9wdmUtYmF0dGxlLXNjcmVlbi5jc3M/ZjUxZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwcy1sYXlvdXQuY3NzPzMwMGYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUtbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBlci1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXNlci1pbnRlcmZhY2UvdWktZ2FtZS1vdmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXNlci1pbnRlcmZhY2UvdWktZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXNlci1pbnRlcmZhY2UvdXNlci1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNjcmVlbiNnYW1lLW92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA3MCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2NyZWVuI2dhbWUtb3ZlciAuYnV0dG9ucyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uc2NyZWVuI2dhbWUtb3ZlciAuYnV0dG9ucyA+ICoge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxufVxcblxcbi5zY3JlZW4jZ2FtZS1vdmVyIC5idXR0b25zID4gKjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZS1vdmVyLXNjcmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNjcmVlbiNnYW1lLW92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA3MCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2NyZWVuI2dhbWUtb3ZlciAuYnV0dG9ucyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uc2NyZWVuI2dhbWUtb3ZlciAuYnV0dG9ucyA+ICoge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxufVxcblxcbi5zY3JlZW4jZ2FtZS1vdmVyIC5idXR0b25zID4gKjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lYm9hcmQtd3JhcHBlciB7XFxuICBmbGV4OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci1vbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuXFxuLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci10d28ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBhc3BlY3QtcmF0aW86IDIvMjtcXG4gIHdpZHRoOiBtaW4oOTAlLCA1MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciA1MDBtcztcXG59XFxuXFxuLmdhbWVib2FyZCA+IC5jb2x1bW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMjQsIDIzMCk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5taXNzZWQtYXR0YWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZC5kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIGN1cnNvcjogd2FpdDtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLmRpc2FibGVkIC5jZWxsIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXdyYXBwZXIgLnNoaXBzLXRyYWNrZXIge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQtd3JhcHBlciNwbGF5ZXItb25lIC5zaGlwcy10cmFja2VyIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnNoaXBzLXRyYWNrZXIgLnNoaXAge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnNoaXBzLXRyYWNrZXIgLnNoaXAgPiAuc3ViZGl2aXNpb24ge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLnNoaXBzLXRyYWNrZXIgLnNoaXAuc3VuayA+IC5zdWJkaXZpc2lvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLE9BQU87RUFDUCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZC13cmFwcGVyIHtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLW9uZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLXR3byB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGFzcGVjdC1yYXRpbzogMi8yO1xcbiAgd2lkdGg6IG1pbig5MCUsIDUwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDUwMG1zO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gLmNvbHVtbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbCB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIyNCwgMjMwKTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxufVxcblxcbi5nYW1lYm9hcmQgLmNlbGwuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVib2FyZCAuY2VsbC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5jZWxsLm1pc3NlZC1hdHRhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLmRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgY3Vyc29yOiB3YWl0O1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcblxcbi5nYW1lYm9hcmQuZGlzYWJsZWQgLmNlbGwge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmQtd3JhcHBlciAuc2hpcHMtdHJhY2tlciB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdhbWVib2FyZC13cmFwcGVyI3BsYXllci1vbmUgLnNoaXBzLXRyYWNrZXIge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc2hpcHMtdHJhY2tlciAuc2hpcCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4uc2hpcHMtdHJhY2tlciAuc2hpcCA+IC5zdWJkaXZpc2lvbiB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uc2hpcHMtdHJhY2tlciAuc2hpcC5zdW5rID4gLnN1YmRpdmlzaW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3B2ZS1iYXR0bGUuc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3B2ZS1iYXR0bGUuc2NyZWVuICNwbGF5ZXItb25lIC5nYW1lYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4jcHZlLWJhdHRsZS5zY3JlZW4gI3BsYXllci1vbmUgLmdhbWVib2FyZCAuY2VsbDpub3QoLnNoaXApOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3B2ZS1iYXR0bGUtc2NyZWVuLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcHZlLWJhdHRsZS5zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcHZlLWJhdHRsZS5zY3JlZW4gI3BsYXllci1vbmUgLmdhbWVib2FyZCAuY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbiNwdmUtYmF0dGxlLnNjcmVlbiAjcGxheWVyLW9uZSAuZ2FtZWJvYXJkIC5jZWxsOm5vdCguc2hpcCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JlZW4jc2hpcHMtbGF5b3V0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCBpbnB1dCNuYW1lIHtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IC5nYW1lYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCAuZ2FtZWJvYXJkIC5jZWxsOm5vdCguc2hpcCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0I25hbWUge1xcbiAgb3V0bGluZTogc29saWQgMnB4O1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCBpbnB1dCNuYW1lLnZhbGlkIHtcXG4gIG91dGxpbmUtY29sb3I6IGxpbWU7XFxufVxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IGlucHV0I25hbWUuaW52YWxpZCB7XFxuICBvdXRsaW5lLWNvbG9yOiBob3RwaW5rO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmUtY29sb3I6IHNreWJsdWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2hpcHMtbGF5b3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2NyZWVuI3NoaXBzLWxheW91dCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQjbmFtZSB7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5zY3JlZW4jc2hpcHMtbGF5b3V0IC5nYW1lYm9hcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCAuZ2FtZWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgLmdhbWVib2FyZCAuY2VsbDpub3QoLnNoaXApOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2NyZWVuI3NoaXBzLWxheW91dCBpbnB1dCNuYW1lIHtcXG4gIG91dGxpbmU6IHNvbGlkIDJweDtcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQjbmFtZS52YWxpZCB7XFxuICBvdXRsaW5lLWNvbG9yOiBsaW1lO1xcbn1cXG4uc2NyZWVuI3NoaXBzLWxheW91dCBpbnB1dCNuYW1lLmludmFsaWQge1xcbiAgb3V0bGluZS1jb2xvcjogaG90cGluaztcXG59XFxuXFxuLnNjcmVlbiNzaGlwcy1sYXlvdXQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lLWNvbG9yOiBza3libHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLW92ZXItc2NyZWVuLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1vdmVyLXNjcmVlbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHZlLWJhdHRsZS1zY3JlZW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wdmUtYmF0dGxlLXNjcmVlbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHMtbGF5b3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHMtbGF5b3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBDb21wdXRlclBsYXllciwgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBhcnJJbmNsdWRlc09iaiB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnNcIjtcblxuY29uc3QgR0FNRSA9IHtcbiAgc2hpcExlbmd0aHM6IFs1LCA0LCAzLCAzLCAyXSxcbiAgc3RhcnRlZDogZmFsc2UsXG4gIHBsYXllcnM6IHsgXCJwbGF5ZXItb25lXCI6IG51bGwsIFwicGxheWVyLXR3b1wiOiBudWxsIH0sXG59O1xuXG5mdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gIEdBTUUub3ZlciA9IGZhbHNlO1xuICBHQU1FLndpbm5lciA9IHVuZGVmaW5lZDtcbiAgR0FNRS5jdXJyZW50VHVybiA9IFwicGxheWVyLW9uZVwiO1xuICBHQU1FLnBsYXllcnMgPSB7IFwicGxheWVyLW9uZVwiOiBudWxsLCBcInBsYXllci10d29cIjogbnVsbCB9O1xuICBHQU1FLm1vZGUgPSB7IGlzUHZlOiB1bmRlZmluZWQsIGlzUHZwOiB1bmRlZmluZWQgfTtcbiAgR0FNRS5zdGFydGVkID0gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHYW1lU3RhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFR1cm46IEdBTUUuY3VycmVudFR1cm4sXG4gICAgYXZhaWxhYmxlU2hpcHM6IFsuLi5HQU1FLnNoaXBMZW5ndGhzXSxcbiAgICBpc092ZXI6IEdBTUUub3ZlcixcbiAgICB3aW5uZXI6IEdBTUUud2lubmVyLFxuICAgIHBsYXllcnM6IEdBTUUucGxheWVycyxcbiAgICBnYW1lYm9hcmRzOiB7XG4gICAgICBcInBsYXllci1vbmVcIjogR0FNRS5wbGF5ZXJzW1wicGxheWVyLW9uZVwiXVxuICAgICAgICA/IEdBTUUucGxheWVyc1tcInBsYXllci1vbmVcIl0uZ2FtZWJvYXJkLmdldFN0YXRlKClcbiAgICAgICAgOiBudWxsLFxuICAgICAgXCJwbGF5ZXItdHdvXCI6IEdBTUUucGxheWVyc1tcInBsYXllci10d29cIl1cbiAgICAgICAgPyBHQU1FLnBsYXllcnNbXCJwbGF5ZXItdHdvXCJdLmdhbWVib2FyZC5nZXRTdGF0ZSgpXG4gICAgICAgIDogbnVsbCxcbiAgICB9LFxuICB9O1xufVxuXG5sZXQgYWlMYXN0SGl0O1xubGV0IGFpSXNEaWZmZXJlbnRTaGlwO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRQdmVHYW1lKHBsYXllck5hbWUpIHtcbiAgaWYgKCFwbGF5ZXJOYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5ZXIgbmFtZSBhcmd1bWVudCBtaXNzaW5nXCIpO1xuXG4gIHJlc2V0R2FtZSgpO1xuICBHQU1FLm1vZGUuaXNQdmUgPSB0cnVlO1xuICBHQU1FLnBsYXllcnNbXCJwbGF5ZXItb25lXCJdID0gbmV3IFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgR0FNRS5wbGF5ZXJzW1wicGxheWVyLXR3b1wiXSA9IG5ldyBDb21wdXRlclBsYXllcigpO1xuICBHQU1FLnN0YXJ0ZWQgPSB0cnVlO1xuICBhaUxhc3RIaXQgPSBudWxsO1xuICBhaUlzRGlmZmVyZW50U2hpcCA9IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFB2cEdhbWUocGxheWVyT25lTmFtZSwgcGxheWVyVHdvTmFtZSkge1xuICBpZiAoIXBsYXllck9uZU5hbWUpIHRocm93IG5ldyBFcnJvcihcIlBsYXllciBvbmUgbmFtZSBhcmd1bWVudCBtaXNzaW5nXCIpO1xuICBpZiAoIXBsYXllclR3b05hbWUpIHRocm93IG5ldyBFcnJvcihcIlBsYXllciB0d28gbmFtZSBhcmd1bWVudCBtaXNzaW5nXCIpO1xuXG4gIHJlc2V0R2FtZSgpO1xuICBHQU1FLm1vZGUuaXNQdnAgPSB0cnVlO1xuICBHQU1FLnBsYXllcnNbXCJwbGF5ZXItb25lXCJdID0gbmV3IFBsYXllcihwbGF5ZXJPbmVOYW1lKTtcbiAgR0FNRS5wbGF5ZXJzW1wicGxheWVyLXR3b1wiXSA9IG5ldyBQbGF5ZXIocGxheWVyVHdvTmFtZSk7XG4gIEdBTUUuc3RhcnRlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFR1cm5zKCkge1xuICBHQU1FLmN1cnJlbnRUdXJuID1cbiAgICBHQU1FLmN1cnJlbnRUdXJuID09PSBcInBsYXllci1vbmVcIiA/IFwicGxheWVyLXR3b1wiIDogXCJwbGF5ZXItb25lXCI7XG59XG5cbmZ1bmN0aW9uIG5leHRUdXJuKCkge1xuICBzd2l0Y2hUdXJucygpO1xuICBpZiAoR0FNRS5tb2RlLmlzUHZlICYmIEdBTUUuY3VycmVudFR1cm4gPT09IFwicGxheWVyLXR3b1wiKSBhaVBsYXlzVHVybigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwcyhwbGF5ZXIsIHNoaXBzQ29vcmRpbmF0ZXMpIHtcbiAgaWYgKCFwbGF5ZXIpIHRocm93IG5ldyBFcnJvcihcInBsYXllciBhcmd1bWVudCBtaXNzaW5nXCIpO1xuICBpZiAoIXNoaXBzQ29vcmRpbmF0ZXMpIHRocm93IG5ldyBFcnJvcihcImNvb3JkaW5hdGVzIGFyZ3VtZW50IG1pc3NpbmdcIik7XG4gIGlmICghR0FNRS5wbGF5ZXJzW3BsYXllcl0pIHRocm93IG5ldyBFcnJvcihgTm8gJHtwbGF5ZXJ9YCk7XG5cbiAgZm9yIChjb25zdCBjb29yZGluYXRlcyBvZiBzaGlwc0Nvb3JkaW5hdGVzKSB7XG4gICAgR0FNRS5wbGF5ZXJzW3BsYXllcl0uZ2FtZWJvYXJkLnBsYWNlU2hpcChjb29yZGluYXRlcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXR0YWNrKHsgcmVjZWl2ZXIsIGNvb3JkaW5hdGVzIH0pIHtcbiAgY29uc3Qgc3VjY2Vzc2Z1bEF0dGFjayA9XG4gICAgR0FNRS5wbGF5ZXJzW3JlY2VpdmVyXS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG5cbiAgcmV0dXJuIHN1Y2Nlc3NmdWxBdHRhY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodW1hblBsYXlzVHVybih7IGF0dGFja2VyLCBjb29yZGluYXRlcyB9KSB7XG4gIGlmICghR0FNRS5zdGFydGVkKSB0aHJvdyBuZXcgRXJyb3IoXCJjYW4ndCBwbGF5IHVudGlsIGdhbWUgaGFzIGJlZW4gc3RhcnRlZCBcIik7XG4gIGlmICghYXR0YWNrZXIpIHRocm93IG5ldyBFcnJvcihcImF0dGFja2VyIGFyZ3VtZW50IG1pc3NpbmdcIik7XG4gIGlmICghY29vcmRpbmF0ZXMpIHRocm93IG5ldyBFcnJvcihcImNvb3JkaW5hdGVzIGFyZ3VtZW50IG1pc3NpbmdcIik7XG4gIGlmIChhdHRhY2tlciAhPT0gR0FNRS5jdXJyZW50VHVybiB8fCBHQU1FLm92ZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCAke2F0dGFja2VyfSdzIHR1cm5gKTtcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVyID0gYXR0YWNrZXIgPT09IFwicGxheWVyLW9uZVwiID8gXCJwbGF5ZXItdHdvXCIgOiBcInBsYXllci1vbmVcIjtcblxuICBjb25zdCBzdWNjZXNzZnVsQXR0YWNrID0gYXR0YWNrKHsgcmVjZWl2ZXIsIGNvb3JkaW5hdGVzIH0pO1xuICBpZiAoc3VjY2Vzc2Z1bEF0dGFjaykge1xuICAgIGlmIChHQU1FLnBsYXllcnNbcmVjZWl2ZXJdLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgR0FNRS5vdmVyID0gdHJ1ZTtcbiAgICAgIEdBTUUud2lubmVyID0gYXR0YWNrZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRUdXJuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYXllcjogcmVjZWl2ZXIsXG4gICAgICBnYW1lYm9hcmRTdGF0ZTogR0FNRS5wbGF5ZXJzW3JlY2VpdmVyXS5nYW1lYm9hcmQuZ2V0U3RhdGUoKSxcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGFpUGxheXNUdXJuKCkge1xuICBjb25zdCBhdHRhY2tlciA9IFwicGxheWVyLXR3b1wiO1xuICBjb25zdCByZWNlaXZlciA9IFwicGxheWVyLW9uZVwiO1xuXG4gIGNvbnN0IGdldFBsYXllck9uZVRvdGFsSGl0c1Rha2VuID0gKCkgPT4ge1xuICAgIHJldHVybiBHQU1FLnBsYXllcnNbXCJwbGF5ZXItb25lXCJdLmdhbWVib2FyZC5zaGlwcy5yZWR1Y2UoXG4gICAgICAodG90YWxIaXRzLCBjdXJyZW50U2hpcCkgPT4ge1xuICAgICAgICByZXR1cm4gdG90YWxIaXRzICsgY3VycmVudFNoaXAuaGl0c1Rha2VuLmxlbmd0aDtcbiAgICAgIH0sXG4gICAgICAwXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBsYXN0U2hpcEhpdElzTm90U3VuayA9ICgpID0+IHtcbiAgICBpZiAoIWFpTGFzdEhpdCkgcmV0dXJuO1xuXG4gICAgZm9yIChjb25zdCBzaGlwIG9mIEdBTUUucGxheWVyc1tyZWNlaXZlcl0uZ2FtZWJvYXJkLnNoaXBzKSB7XG4gICAgICBpZiAoYXJySW5jbHVkZXNPYmooc2hpcC5jb29yZGluYXRlcywgYWlMYXN0SGl0KSkge1xuICAgICAgICByZXR1cm4gIXNoaXAuaXNTdW5rKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGlmIChhaUxhc3RIaXQgJiYgbGFzdFNoaXBIaXRJc05vdFN1bmsoKSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gR0FNRS5wbGF5ZXJzW2F0dGFja2VyXS5nZXRBZGphY2VudEF0dGFja0Nvb3JkaW5hdGVzKFxuICAgICAgYWlMYXN0SGl0LFxuICAgICAgYWlJc0RpZmZlcmVudFNoaXBcbiAgICApO1xuXG4gICAgaWYgKGFpSXNEaWZmZXJlbnRTaGlwKSBhaUlzRGlmZmVyZW50U2hpcCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcGxheWVyT25lSGl0c1Rha2VuQmVmb3JlQXR0YWNrID0gZ2V0UGxheWVyT25lVG90YWxIaXRzVGFrZW4oKTtcbiAgICBjb25zdCBzdWNjZXNzZnVsQXR0YWNrID0gYXR0YWNrKHsgcmVjZWl2ZXIsIGNvb3JkaW5hdGVzIH0pO1xuICAgIGNvbnN0IHBsYXllck9uZUhpdHNUYWtlbkFmdGVyQXR0YWNrID0gZ2V0UGxheWVyT25lVG90YWxIaXRzVGFrZW4oKTtcbiAgICBpZiAoc3VjY2Vzc2Z1bEF0dGFjaykge1xuICAgICAgaWYgKEdBTUUucGxheWVyc1tyZWNlaXZlcl0uZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIEdBTUUub3ZlciA9IHRydWU7XG4gICAgICAgIEdBTUUud2lubmVyID0gYXR0YWNrZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0VHVybigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllck9uZUhpdHNUYWtlbkFmdGVyQXR0YWNrID09PVxuICAgICAgICBwbGF5ZXJPbmVIaXRzVGFrZW5CZWZvcmVBdHRhY2sgKyAxXG4gICAgICApIHtcbiAgICAgICAgYWlMYXN0SGl0ID0gY29vcmRpbmF0ZXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBsYXllcjogcmVjZWl2ZXIsXG4gICAgICAgIGdhbWVib2FyZFN0YXRlOiBHQU1FLnBsYXllcnNbcmVjZWl2ZXJdLmdhbWVib2FyZC5nZXRTdGF0ZSgpLFxuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGxheWVyT25lSGl0c1Rha2VuQmVmb3JlQXR0YWNrID0gZ2V0UGxheWVyT25lVG90YWxIaXRzVGFrZW4oKTtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IEdBTUUucGxheWVyc1thdHRhY2tlcl0uZ2V0UmFuZG9tQXR0YWNrQ29vcmRpbmF0ZXMoKTtcbiAgICBjb25zdCBzdWNjZXNzZnVsQXR0YWNrID0gYXR0YWNrKHtcbiAgICAgIHJlY2VpdmVyLFxuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgfSk7XG4gICAgY29uc3QgcGxheWVyT25lSGl0c1Rha2VuQWZ0ZXJBdHRhY2sgPSBnZXRQbGF5ZXJPbmVUb3RhbEhpdHNUYWtlbigpO1xuICAgIGFpTGFzdEhpdCA9XG4gICAgICBwbGF5ZXJPbmVIaXRzVGFrZW5BZnRlckF0dGFjayA9PT0gcGxheWVyT25lSGl0c1Rha2VuQmVmb3JlQXR0YWNrICsgMVxuICAgICAgICA/IGNvb3JkaW5hdGVzXG4gICAgICAgIDogbnVsbDtcblxuICAgIGlmICghYWlJc0RpZmZlcmVudFNoaXApIGFpSXNEaWZmZXJlbnRTaGlwID0gdHJ1ZTtcblxuICAgIGlmIChzdWNjZXNzZnVsQXR0YWNrKSB7XG4gICAgICBpZiAoR0FNRS5wbGF5ZXJzW3JlY2VpdmVyXS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgR0FNRS5vdmVyID0gdHJ1ZTtcbiAgICAgICAgR0FNRS53aW5uZXIgPSBhdHRhY2tlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRUdXJuKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBsYXllcjogcmVjZWl2ZXIsXG4gICAgICAgIGdhbWVib2FyZFN0YXRlOiBHQU1FLnBsYXllcnNbcmVjZWl2ZXJdLmdhbWVib2FyZC5nZXRTdGF0ZSgpLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGFyckluY2x1ZGVzT2JqIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY29uc3QgR0FNRUJPQVJEX1dJRFRIID0gMTA7XG5leHBvcnQgY29uc3QgR0FNRUJPQVJEX0hFSUdIVCA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVtcHR5Q2VsbHMgPSB0aGlzLl9zZXRJbml0aWFsRW1wdHlDZWxscygpO1xuICB9XG5cbiAgX3NldEluaXRpYWxFbXB0eUNlbGxzKCkge1xuICAgIGNvbnN0IGVtcHR5Q2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEdBTUVCT0FSRF9XSURUSDsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEdBTUVCT0FSRF9IRUlHSFQ7IHkrKykge1xuICAgICAgICBlbXB0eUNlbGxzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW1wdHlDZWxscztcbiAgfVxuXG4gIHNoaXBzID0gW107XG4gIG1pc3NlZEF0dGFja3MgPSBbXTtcblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hpcHM6IHRoaXMuc2hpcHMsXG4gICAgICBtaXNzZWRBdHRhY2tzOiB0aGlzLm1pc3NlZEF0dGFja3MsXG4gICAgICBlbXB0eUNlbGxzOiBbLi4udGhpcy5lbXB0eUNlbGxzXSxcbiAgICB9O1xuICB9XG5cbiAgcGxhY2VTaGlwKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgZW10cHlDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzLmZpbHRlcigoY29vcmRzKSA9PiB7XG4gICAgICByZXR1cm4gYXJySW5jbHVkZXNPYmoodGhpcy5lbXB0eUNlbGxzLCBjb29yZHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGVtdHB5Q29vcmRpbmF0ZXMubGVuZ3RoICE9PSBjb29yZGluYXRlcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29vcmRpbmF0ZXNcIik7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gICAgc2hpcC5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcblxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgY29uc3QgY29vcmRzSW5kZXggPSB0aGlzLmVtcHR5Q2VsbHMuZmluZEluZGV4KFxuICAgICAgICAoY2VsbCkgPT4gY2VsbC54ID09PSBjb29yZHMueCAmJiBjZWxsLnkgPT09IGNvb3Jkcy55XG4gICAgICApO1xuICAgICAgdGhpcy5lbXB0eUNlbGxzLnNwbGljZShjb29yZHNJbmRleCwgMSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyByZXR1cm5zIHdoZXRoZXIgdGhlIGF0dGFjayB3YXMgc3VjY2Vzc2Z1bCBvciBub3RcbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICBpZiAoYXJySW5jbHVkZXNPYmooc2hpcC5jb29yZGluYXRlcywgY29vcmRpbmF0ZXMpKSB7XG4gICAgICAgIGlmIChhcnJJbmNsdWRlc09iaihzaGlwLmhpdHNUYWtlbiwgY29vcmRpbmF0ZXMpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgc2hpcC5oaXQoY29vcmRpbmF0ZXMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgY29vcmRpbmF0ZXMgZG9uJ3QgYmVsb25nIHRvIGFueSBzaGlwLCB0aGUgYXR0YWNrIG1pc3NlZC5cblxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBjb29yZGluYXRlcyBhcmVuJ3QgYWxyZWFkeSBpbiBtaXNzZWRBdHRhY2tzXG4gICAgaWYgKGFyckluY2x1ZGVzT2JqKHRoaXMubWlzc2VkQXR0YWNrcywgY29vcmRpbmF0ZXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGxldCBzdW5rU2hpcHMgPSAwO1xuICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHN1bmtTaGlwcysrO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1bmtTaGlwcyA9PT0gdGhpcy5zaGlwcy5sZW5ndGg7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRlZ2VySW5SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyckluY2x1ZGVzT2JqKGFyciwgb2JqKSB7XG4gIGNvbnN0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICByZXR1cm4gYXJyLnNvbWUoKGFyck9iaikgPT4gb2JqS2V5cy5ldmVyeSgoa2V5KSA9PiBhcnJPYmpba2V5XSA9PT0gb2JqW2tleV0pKTtcbn1cbiIsImltcG9ydCB7IGdldEdhbWVTdGF0ZSB9IGZyb20gXCIuL2dhbWUtbG9vcFwiO1xuaW1wb3J0IEdhbWVib2FyZCwgeyBHQU1FQk9BUkRfSEVJR0hULCBHQU1FQk9BUkRfV0lEVEggfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGFyckluY2x1ZGVzT2JqLCByYW5kb21JbnRlZ2VySW5SYW5nZSB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wdXRlclBsYXllciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiQUlcIik7XG4gICAgdGhpcy5sZWdhbE1vdmVzID0gdGhpcy5fc2V0SW5pdGlhbGxMZWdhbE1vdmVzKCk7XG4gICAgdGhpcy5fcmFuZG9taXplR2FtZWJvYXJkKCk7XG4gIH1cblxuICBfc2V0SW5pdGlhbGxMZWdhbE1vdmVzKCkge1xuICAgIGNvbnN0IGxlZ2FsTW92ZXMgPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEdBTUVCT0FSRF9XSURUSDsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEdBTUVCT0FSRF9IRUlHSFQ7IHkrKykge1xuICAgICAgICBsZWdhbE1vdmVzLnB1c2goeyB4LCB5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVnYWxNb3ZlcztcbiAgfVxuXG4gIF9yYW5kb21pemVHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgZW1wdHlDZWxscyA9IHRoaXMuZ2FtZWJvYXJkLmdldFN0YXRlKCkuZW1wdHlDZWxscztcblxuICAgIGNvbnN0IGdldFJhbmRvbVBsYWNlbWVudENvb3JkaW5hdGVzID0gKHNoaXBMZW5ndGgpID0+IHtcbiAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IFt0cnVlLCBmYWxzZV1bcmFuZG9tSW50ZWdlckluUmFuZ2UoMCwgMSldO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRpbmF0ZXMgPSBbXTtcblxuICAgICAgZm9yIChjb25zdCBjdXJyZW50Q2VsbCBvZiBlbXB0eUNlbGxzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoaXNIb3Jpem9udGFsICYmIGN1cnJlbnRDZWxsLnggPiBHQU1FQk9BUkRfV0lEVEggLSBzaGlwTGVuZ3RoKSB8fFxuICAgICAgICAgICghaXNIb3Jpem9udGFsICYmIGN1cnJlbnRDZWxsLnkgPiBHQU1FQk9BUkRfSEVJR0hUIC0gc2hpcExlbmd0aClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGphY2VudENlbGxzID0gW2N1cnJlbnRDZWxsXTtcbiAgICAgICAgbGV0IG5leHRDZWxsO1xuICAgICAgICBsZXQgcHJldmlvdXNDZWxsID0gY3VycmVudENlbGw7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYWRqYWNlbnRDZWxscy5sZW5ndGggPT09IHNoaXBMZW5ndGgpIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzLnB1c2goYWRqYWNlbnRDZWxscyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0Q2VsbCA9IGlzSG9yaXpvbnRhbFxuICAgICAgICAgICAgPyB7IHg6IHByZXZpb3VzQ2VsbC54ICsgMSwgeTogcHJldmlvdXNDZWxsLnkgfVxuICAgICAgICAgICAgOiB7IHg6IHByZXZpb3VzQ2VsbC54LCB5OiBwcmV2aW91c0NlbGwueSArIDEgfTtcblxuICAgICAgICAgIHByZXZpb3VzQ2VsbCA9IG5leHRDZWxsO1xuXG4gICAgICAgICAgaWYgKGFyckluY2x1ZGVzT2JqKGVtcHR5Q2VsbHMsIG5leHRDZWxsKSkge1xuICAgICAgICAgICAgYWRqYWNlbnRDZWxscy5wdXNoKG5leHRDZWxsKTtcbiAgICAgICAgICB9IGVsc2UgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hvc2VuQ29vcmRpbmF0ZXMgPVxuICAgICAgICBhdmFpbGFibGVDb29yZGluYXRlc1tcbiAgICAgICAgICByYW5kb21JbnRlZ2VySW5SYW5nZSgwLCBhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGggLSAxKVxuICAgICAgICBdO1xuXG4gICAgICBjb25zdCBjb29yZGluYXRlc0ZvckRlbGV0aW9uID0gW107XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaG9zZW5Db29yZGluYXRlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY2VsbE9uVGhlTGVmdCA9IHtcbiAgICAgICAgICB4OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCAtIDEsXG4gICAgICAgICAgeTogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnksXG4gICAgICAgIH07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCA+IDAgJiZcbiAgICAgICAgICAhYXJySW5jbHVkZXNPYmooY2hvc2VuQ29vcmRpbmF0ZXMsIGNlbGxPblRoZUxlZnQpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzRm9yRGVsZXRpb24ucHVzaChjZWxsT25UaGVMZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNlbGxPblRoZVJpZ2h0ID0ge1xuICAgICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54ICsgMSxcbiAgICAgICAgICB5OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54IDwgR0FNRUJPQVJEX1dJRFRIIC0gMSAmJlxuICAgICAgICAgICFhcnJJbmNsdWRlc09iaihjaG9zZW5Db29yZGluYXRlcywgY2VsbE9uVGhlUmlnaHQpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzRm9yRGVsZXRpb24ucHVzaChjZWxsT25UaGVSaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZWxsQmVsb3cgPSB7XG4gICAgICAgICAgeDogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLngsXG4gICAgICAgICAgeTogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnkgLSAxLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnkgPiAwICYmXG4gICAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsQmVsb3cpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzRm9yRGVsZXRpb24ucHVzaChjZWxsQmVsb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2VsbEFib3ZlID0ge1xuICAgICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54LFxuICAgICAgICAgIHk6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55ICsgMSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55IDwgR0FNRUJPQVJEX0hFSUdIVCAtIDEgJiZcbiAgICAgICAgICAhYXJySW5jbHVkZXNPYmooY2hvc2VuQ29vcmRpbmF0ZXMsIGNlbGxBYm92ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXNGb3JEZWxldGlvbi5wdXNoKGNlbGxBYm92ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgWy4uLmNob3NlbkNvb3JkaW5hdGVzLCAuLi5jb29yZGluYXRlc0ZvckRlbGV0aW9uXS5mb3JFYWNoKChjb29yZHMpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRzSW5kZXggPSBlbXB0eUNlbGxzLmZpbmRJbmRleChcbiAgICAgICAgICAoY2VsbCkgPT4gY2VsbC54ID09PSBjb29yZHMueCAmJiBjZWxsLnkgPT09IGNvb3Jkcy55XG4gICAgICAgICk7XG4gICAgICAgIGVtcHR5Q2VsbHMuc3BsaWNlKGNvb3Jkc0luZGV4LCAxKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNob3NlbkNvb3JkaW5hdGVzO1xuICAgIH07XG5cbiAgICBnZXRHYW1lU3RhdGUoKS5hdmFpbGFibGVTaGlwcy5mb3JFYWNoKChzaGlwTGVuZ3RoKSA9PiB7XG4gICAgICBjb25zdCBwbGFjZW1lbnRDb29yZGluYXRlcyA9IGdldFJhbmRvbVBsYWNlbWVudENvb3JkaW5hdGVzKHNoaXBMZW5ndGgpO1xuICAgICAgdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwKHBsYWNlbWVudENvb3JkaW5hdGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFJhbmRvbUF0dGFja0Nvb3JkaW5hdGVzKCkge1xuICAgIGlmICghdGhpcy5sZWdhbE1vdmVzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbW9yZSBjZWxscyBsZWZ0IHRvIGF0dGFja1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21JbmRleCA9IHJhbmRvbUludGVnZXJJblJhbmdlKDAsIHRoaXMubGVnYWxNb3Zlcy5sZW5ndGggLSAxKTtcbiAgICBjb25zdCBhdHRhY2tDb29yZGluYXRlcyA9IHRoaXMubGVnYWxNb3Zlc1tyYW5kb21JbmRleF07XG5cbiAgICAvL3JlbW92ZSB0aGUgYXR0YWNrIGZyb20gdGhlIGxlZ2FsIG1vdmVzLCBzbyB0aGF0IHRoZSBzYW1lIGNvb3JkaW5hdGUgaXNuJ3QgYXR0YWNrZWQgdHdpY2VcbiAgICB0aGlzLmxlZ2FsTW92ZXMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKTtcblxuICAgIHJldHVybiBhdHRhY2tDb29yZGluYXRlcztcbiAgfVxuXG4gIF9vcmlnaW4gPSBudWxsO1xuICBfbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSBudWxsO1xuICBfbGFzdENvb3JkaW5hdGVzQXJndW1lbnQgPSBudWxsO1xuICBfbGFzdERpcmVjdGlvbiA9IG51bGw7XG4gIF9pc1ZlcnRpY2FsID0gZmFsc2U7XG4gIF9pc0hvcml6b250YWwgPSBmYWxzZTtcblxuICBfdmVydGljYWxQYXRoID0geyBiZWxvdzogW10sIGFib3ZlOiBbXSB9O1xuICBfaG9yaXpvbnRhbFBhdGggPSB7IGxlZnQ6IFtdLCByaWdodDogW10gfTtcblxuICBnZXRBZGphY2VudEF0dGFja0Nvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBpc0RpZmZlcmVudFNoaXApIHtcbiAgICBpZiAoIXRoaXMuX29yaWdpbiB8fCBpc0RpZmZlcmVudFNoaXApIHtcbiAgICAgIHRoaXMuX29yaWdpbiA9IGNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1ZlcnRpY2FsID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc0hvcml6b250YWwgPSBmYWxzZTtcblxuICAgICAgLy8gY2xlYXIgYW5kIHBvcHVsYXRlIGhvcml6b250YWwgcGF0aFxuICAgICAgdGhpcy5faG9yaXpvbnRhbFBhdGgubGVmdCA9IFtdO1xuICAgICAgdGhpcy5faG9yaXpvbnRhbFBhdGgucmlnaHQgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSBjb29yZGluYXRlcy54IC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICBjb25zdCBuZXdBZGphY2VudENvb3JkaW5hdGVzID0geyB4OiBpbmRleCwgeTogY29vcmRpbmF0ZXMueSB9O1xuICAgICAgICBpZiAoIWFyckluY2x1ZGVzT2JqKHRoaXMubGVnYWxNb3ZlcywgbmV3QWRqYWNlbnRDb29yZGluYXRlcykpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2hvcml6b250YWxQYXRoLmxlZnQudW5zaGlmdChuZXdBZGphY2VudENvb3JkaW5hdGVzKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaW5kZXggPSBjb29yZGluYXRlcy54ICsgMTsgaW5kZXggPCBHQU1FQk9BUkRfV0lEVEg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmV3QWRqYWNlbnRDb29yZGluYXRlcyA9IHsgeDogaW5kZXgsIHk6IGNvb3JkaW5hdGVzLnkgfTtcbiAgICAgICAgaWYgKCFhcnJJbmNsdWRlc09iaih0aGlzLmxlZ2FsTW92ZXMsIG5ld0FkamFjZW50Q29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsUGF0aC5yaWdodC5wdXNoKG5ld0FkamFjZW50Q29vcmRpbmF0ZXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBjbGVhciBhbmQgcG9wdWxhdGUgdmVydGljYWwgcGF0aFxuICAgICAgdGhpcy5fdmVydGljYWxQYXRoLmJlbG93ID0gW107XG4gICAgICB0aGlzLl92ZXJ0aWNhbFBhdGguYWJvdmUgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSBjb29yZGluYXRlcy55IC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICBjb25zdCBuZXdBZGphY2VudENvb3JkaW5hdGVzID0geyB4OiBjb29yZGluYXRlcy54LCB5OiBpbmRleCB9O1xuICAgICAgICBpZiAoIWFyckluY2x1ZGVzT2JqKHRoaXMubGVnYWxNb3ZlcywgbmV3QWRqYWNlbnRDb29yZGluYXRlcykpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ZlcnRpY2FsUGF0aC5iZWxvdy51bnNoaWZ0KG5ld0FkamFjZW50Q29vcmRpbmF0ZXMpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IGNvb3JkaW5hdGVzLnkgKyAxOyBpbmRleCA8IEdBTUVCT0FSRF9IRUlHSFQ7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmV3QWRqYWNlbnRDb29yZGluYXRlcyA9IHsgeDogY29vcmRpbmF0ZXMueCwgeTogaW5kZXggfTtcbiAgICAgICAgaWYgKCFhcnJJbmNsdWRlc09iaih0aGlzLmxlZ2FsTW92ZXMsIG5ld0FkamFjZW50Q29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFBhdGguYWJvdmUucHVzaChuZXdBZGphY2VudENvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBdHRhY2sgYWxsIGZvdXIgZGlyZWN0aW9ucyB1bnRpbCBhIHRoZXJlJ3MgYSBoaXRcbiAgICBpZiAoY29vcmRpbmF0ZXMueCA9PT0gdGhpcy5fb3JpZ2luLnggJiYgY29vcmRpbmF0ZXMueSA9PT0gdGhpcy5fb3JpZ2luLnkpIHtcbiAgICAgIGlmICghdGhpcy5fbGFzdERpcmVjdGlvbiAmJiB0aGlzLl92ZXJ0aWNhbFBhdGguYmVsb3cubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID0gdGhpcy5fdmVydGljYWxQYXRoLmJlbG93LnNwbGljZSgtMSlbMF07XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPSBcImJlbG93XCI7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBbbnVsbCwgXCJiZWxvd1wiXS5pbmNsdWRlcyh0aGlzLl9sYXN0RGlyZWN0aW9uKSAmJlxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFBhdGguYWJvdmUubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSB0aGlzLl92ZXJ0aWNhbFBhdGguYWJvdmUuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IFwiYWJvdmVcIjtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIFtudWxsLCBcImJlbG93XCIsIFwiYWJvdmVcIl0uaW5jbHVkZXModGhpcy5fbGFzdERpcmVjdGlvbikgJiZcbiAgICAgICAgdGhpcy5faG9yaXpvbnRhbFBhdGgubGVmdC5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IHRoaXMuX2hvcml6b250YWxQYXRoLmxlZnQuc3BsaWNlKC0xKVswXTtcbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSB0aGlzLl9ob3Jpem9udGFsUGF0aC5yaWdodC5zaGlmdCgpO1xuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgfVxuXG4gICAgICAvL3JlbW92ZSB0aGUgYXR0YWNrIGZyb20gdGhlIGxlZ2FsIG1vdmVzLCBzbyB0aGF0IHRoZSBzYW1lIGNvb3JkaW5hdGUgaXNuJ3QgYXR0YWNrZWQgaW4gdGhlIGZ1dHVyZVxuICAgICAgY29uc3QgbGFzdEF0dGFja0luZGV4ID0gdGhpcy5sZWdhbE1vdmVzLmZpbmRJbmRleChcbiAgICAgICAgKGNvb3JkcykgPT5cbiAgICAgICAgICBjb29yZHMueCA9PT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQueCAmJlxuICAgICAgICAgIGNvb3Jkcy55ID09PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZC55XG4gICAgICApO1xuICAgICAgdGhpcy5sZWdhbE1vdmVzLnNwbGljZShsYXN0QXR0YWNrSW5kZXgsIDEpO1xuXG4gICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudCA9IGNvb3JkaW5hdGVzO1xuICAgICAgcmV0dXJuIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkO1xuICAgIH1cblxuICAgIC8vIFRoZSBmaXJzdCB0aW1lIHRoZXJlJ3MgYSBoaXQsIHNlZSB3aGV0aGVyIHRoZSBzaGlwIGlzIHBsYWNlZCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxuICAgIGlmIChcbiAgICAgIChjb29yZGluYXRlcy54ICE9PSB0aGlzLl9vcmlnaW4ueCB8fCBjb29yZGluYXRlcy55ICE9PSB0aGlzLl9vcmlnaW4ueSkgJiZcbiAgICAgICF0aGlzLl9pc1ZlcnRpY2FsICYmXG4gICAgICAhdGhpcy5faXNIb3Jpem9udGFsXG4gICAgKSB7XG4gICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID09PSBcImJlbG93XCIgfHwgdGhpcy5fbGFzdERpcmVjdGlvbiA9PT0gXCJhYm92ZVwiXG4gICAgICAgID8gKHRoaXMuX2lzVmVydGljYWwgPSB0cnVlKVxuICAgICAgICA6ICh0aGlzLl9pc0hvcml6b250YWwgPSB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgY29vcmRpbmF0ZXMgYXJndW1lbnQgaXMgcmVwZWF0ZWQgb3Igd2UgcmVhY2hlZCB0aGUgZW5kIG9mIHRoYXQgc2lkZSwgd2UgY2hhbmdlIHRvIHRoZSBvdGhlciBzaWRlLlxuICAgIGlmIChcbiAgICAgIHRoaXMuX2lzVmVydGljYWwgJiZcbiAgICAgICgoY29vcmRpbmF0ZXMueCA9PT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQueCAmJlxuICAgICAgICBjb29yZGluYXRlcy55ID09PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudC55KSB8fFxuICAgICAgICAhdGhpcy5fdmVydGljYWxQYXRoW3RoaXMuX2xhc3REaXJlY3Rpb25dLmxlbmd0aClcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLl9sYXN0RGlyZWN0aW9uID09PSBcImJlbG93XCIpIHtcbiAgICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSB0aGlzLl92ZXJ0aWNhbFBhdGguYWJvdmUuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IFwiYWJvdmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2xhc3RDb29yZGluYXRlc0F0dGFja2VkID0gdGhpcy5fdmVydGljYWxQYXRoLmJlbG93LnNwbGljZSgtMSlbMF07XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPSBcImJlbG93XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQnV0IGlmIHRoZSBjdXJyZW50IGNvb3JkaW5hdGVzIGFyZSBkaWZmZXJlbnQgZnJvbSB0aGUgbGFzdCBjb29yZGluYXRlcywgdGhhdCBtZWFucyB0aGUgbGFzdEF0dGFjayB3YXMgYSBoaXQsIHNvIHdlIGtlZXAgYXR0YWNraW5nIHRvd2FyZHMgdGhhdCBzaWRlLlxuICAgIGVsc2UgaWYgKFxuICAgICAgdGhpcy5faXNWZXJ0aWNhbCAmJlxuICAgICAgdGhpcy5fdmVydGljYWxQYXRoW3RoaXMuX2xhc3REaXJlY3Rpb25dLmxlbmd0aCAmJlxuICAgICAgY29vcmRpbmF0ZXMueSAhPT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQueVxuICAgICkge1xuICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPVxuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID09PSBcImJlbG93XCJcbiAgICAgICAgICA/IHRoaXMuX3ZlcnRpY2FsUGF0aC5iZWxvdy5zcGxpY2UoLTEpWzBdXG4gICAgICAgICAgOiB0aGlzLl92ZXJ0aWNhbFBhdGguYWJvdmUuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyBBbmQgd2UgZG8gdGhlIHNhbWUgZm9yIHRoZSBvdGhlciBheGlzXG4gICAgaWYgKFxuICAgICAgdGhpcy5faXNIb3Jpem9udGFsICYmXG4gICAgICAoKGNvb3JkaW5hdGVzLnggPT09IHRoaXMuX2xhc3RDb29yZGluYXRlc0FyZ3VtZW50LnggJiZcbiAgICAgICAgY29vcmRpbmF0ZXMueSA9PT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQueSkgfHxcbiAgICAgICAgIXRoaXMuX2hvcml6b250YWxQYXRoW3RoaXMuX2xhc3REaXJlY3Rpb25dLmxlbmd0aClcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLl9sYXN0RGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IHRoaXMuX2hvcml6b250YWxQYXRoLnJpZ2h0LnNoaWZ0KCk7XG4gICAgICAgIHRoaXMuX2xhc3REaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IHRoaXMuX2hvcml6b250YWxQYXRoLmxlZnQuc3BsaWNlKC0xKVswXTtcbiAgICAgICAgdGhpcy5fbGFzdERpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLl9pc0hvcml6b250YWwgJiZcbiAgICAgIHRoaXMuX2hvcml6b250YWxQYXRoW3RoaXMuX2xhc3REaXJlY3Rpb25dLmxlbmd0aCAmJlxuICAgICAgY29vcmRpbmF0ZXMueCAhPT0gdGhpcy5fbGFzdENvb3JkaW5hdGVzQXJndW1lbnQueFxuICAgICkge1xuICAgICAgdGhpcy5fbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPVxuICAgICAgICB0aGlzLl9sYXN0RGlyZWN0aW9uID09PSBcImxlZnRcIlxuICAgICAgICAgID8gdGhpcy5faG9yaXpvbnRhbFBhdGgubGVmdC5zcGxpY2UoLTEpWzBdXG4gICAgICAgICAgOiB0aGlzLl9ob3Jpem9udGFsUGF0aC5yaWdodC5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vcmVtb3ZlIHRoZSBhdHRhY2sgZnJvbSB0aGUgbGVnYWwgbW92ZXMsIHNvIHRoYXQgdGhlIHNhbWUgY29vcmRpbmF0ZSBpc24ndCBhdHRhY2tlZCBpbiB0aGUgZnV0dXJlXG4gICAgY29uc3QgbGFzdEF0dGFja0luZGV4ID0gdGhpcy5sZWdhbE1vdmVzLmZpbmRJbmRleChcbiAgICAgIChjb29yZHMpID0+XG4gICAgICAgIGNvb3Jkcy54ID09PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZC54ICYmXG4gICAgICAgIGNvb3Jkcy55ID09PSB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZC55XG4gICAgKTtcbiAgICB0aGlzLmxlZ2FsTW92ZXMuc3BsaWNlKGxhc3RBdHRhY2tJbmRleCwgMSk7XG5cbiAgICB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBcmd1bWVudCA9IGNvb3JkaW5hdGVzO1xuICAgIHJldHVybiB0aGlzLl9sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKFwiQ29uc3RydWN0b3IgYXJndW1lbnQgbWlzc2luZyFcIik7XG5cbiAgICBpZiAodHlwZW9mIGxlbmd0aCAhPT0gXCJudW1iZXJcIiB8fCBsZW5ndGggPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbnN0cnVjdG9yIGFyZ3VtZW50XCIpO1xuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgY29vcmRpbmF0ZXMgPSBudWxsO1xuICBoaXRzVGFrZW4gPSBbXTtcblxuICBoaXQoY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmhpdHNUYWtlbi5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzVGFrZW4ubGVuZ3RoID09PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0R2FtZVN0YXRlIH0gZnJvbSBcIi4uL2dhbWUtbG9vcFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc2hpcHMtbGF5b3V0LmNzc1wiO1xuaW1wb3J0IHsgZGlzcGxheVNoaXBzTGF5b3V0U2NyZWVuIH0gZnJvbSBcIi4vdXNlci1pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlHYW1lT3ZlclNjcmVlbih3aW5uZXJOYW1lKSB7XG4gIGNvbnN0IGdhbWVPdmVyU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJzY3JlZW5cIik7XG4gIGdhbWVPdmVyU2NyZWVuLmlkID0gXCJnYW1lLW92ZXJcIjtcblxuICBjb25zdCBnYW1lT3ZlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGdhbWVPdmVyU2NyZWVuLmFwcGVuZENoaWxkKGdhbWVPdmVyVGV4dCk7XG4gIGdhbWVPdmVyVGV4dC5pbm5lclRleHQgPSBgR2FtZSBPdmVyLCAke3dpbm5lck5hbWV9IHdvbiFgO1xuXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uc1wiKTtcbiAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIHBsYXlBZ2Fpbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1hcnJvdy1yb3RhdGUtbGVmdFwiKTtcbiAgcGxheUFnYWluLnRpdGxlID0gXCJQTEFZIEFHQUlOXCI7XG4gIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpc3BsYXlTaGlwc0xheW91dFNjcmVlbihnZXRHYW1lU3RhdGUoKS5wbGF5ZXJzW1wicGxheWVyLW9uZVwiXS5uYW1lKTtcbiAgfSk7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQocGxheUFnYWluKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY3JlZW4pO1xufVxuIiwiaW1wb3J0IHsgR0FNRUJPQVJEX0hFSUdIVCwgR0FNRUJPQVJEX1dJRFRIIH0gZnJvbSBcIi4uL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgZ2V0R2FtZVN0YXRlLCBodW1hblBsYXlzVHVybiB9IGZyb20gXCIuLi9nYW1lLWxvb3BcIjtcbmltcG9ydCB7IGFyckluY2x1ZGVzT2JqLCByYW5kb21JbnRlZ2VySW5SYW5nZSB9IGZyb20gXCIuLi9oZWxwZXItZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5R2FtZU92ZXJTY3JlZW4gfSBmcm9tIFwiLi91aS1nYW1lLW92ZXJcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nYW1lYm9hcmQuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTaGlwc1RyYWNrZXIocGxheWVyKSB7XG4gIGNvbnN0IGdhbWVTdGF0ZSA9IGdldEdhbWVTdGF0ZSgpO1xuXG4gIGNvbnN0IGxvbmdlc3RTaGlwTGVuZ3RoID0gTWF0aC5tYXgoLi4uZ2FtZVN0YXRlLmF2YWlsYWJsZVNoaXBzKTtcblxuICBjb25zdCBzaGlwVHJhY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBzaGlwVHJhY2tlci5jbGFzc0xpc3QuYWRkKFwic2hpcHMtdHJhY2tlclwiKTtcbiAgZ2FtZVN0YXRlLmdhbWVib2FyZHNbcGxheWVyXS5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3QgdWlTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgdWlTaGlwLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIHVpU2hpcC5zdHlsZS53aWR0aCA9IGAkeygxMDAgLyBsb25nZXN0U2hpcExlbmd0aCkgKiBzaGlwLmxlbmd0aH0lYDtcbiAgICBpZiAoc2hpcC5pc1N1bmsoKSkgdWlTaGlwLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgIGZvciAoXG4gICAgICBsZXQgc2hpcENlbGxOdW1iZXIgPSAwO1xuICAgICAgc2hpcENlbGxOdW1iZXIgPCBzaGlwLmxlbmd0aDtcbiAgICAgIHNoaXBDZWxsTnVtYmVyKytcbiAgICApIHtcbiAgICAgIGNvbnN0IHVpU2hpcFN1YmRpdmlzaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICB1aVNoaXBTdWJkaXZpc2lvbi5jbGFzc0xpc3QuYWRkKFwic3ViZGl2aXNpb25cIik7XG4gICAgICB1aVNoaXAuYXBwZW5kQ2hpbGQodWlTaGlwU3ViZGl2aXNpb24pO1xuICAgIH1cbiAgICBzaGlwVHJhY2tlci5hcHBlbmRDaGlsZCh1aVNoaXApO1xuICB9KTtcblxuICBjb25zdCBnYW1lYm9hcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLmdhbWVib2FyZC13cmFwcGVyIyR7cGxheWVyfWBcbiAgKTtcbiAgY29uc3QgcHJldmlvdXNUcmFja2VyID0gZ2FtZWJvYXJkV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzLXRyYWNrZXJcIik7XG5cbiAgaWYgKHByZXZpb3VzVHJhY2tlcikge1xuICAgIHByZXZpb3VzVHJhY2tlci5yZXBsYWNlV2l0aChzaGlwVHJhY2tlcik7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyLmluY2x1ZGVzKFwib25lXCIpXG4gICAgICA/IGdhbWVib2FyZFdyYXBwZXIuZmlyc3RDaGlsZC5iZWZvcmUoc2hpcFRyYWNrZXIpXG4gICAgICA6IGdhbWVib2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2hpcFRyYWNrZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkXCIpO1xuXG4gIGZvciAobGV0IGNvbHVtbk51bWJlciA9IDA7IGNvbHVtbk51bWJlciA8IEdBTUVCT0FSRF9XSURUSDsgY29sdW1uTnVtYmVyKyspIHtcbiAgICBjb25zdCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgICBjb2x1bW4uaWQgPSBgY29sdW1uLSR7Y29sdW1uTnVtYmVyfWA7XG4gICAgZ2FtZWJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbik7XG5cbiAgICBmb3IgKGxldCByb3dOdW1iZXIgPSBHQU1FQk9BUkRfSEVJR0hUIC0gMTsgcm93TnVtYmVyID49IDA7IHJvd051bWJlci0tKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgY29uc3QgY2VsbENvb3JkaW5hdGVzID0gYHt4OiAke2NvbHVtbk51bWJlcn0sIHk6ICR7cm93TnVtYmVyfX1gO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkaW5hdGVzXCIsIGNlbGxDb29yZGluYXRlcyk7XG4gICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdhbWVib2FyZDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHZlR2FtZWJvYXJkcygpIHtcbiAgY29uc3QgZ2FtZVN0YXRlID0gZ2V0R2FtZVN0YXRlKCk7XG4gIHVwZGF0ZVB2ZUdhbWVib2FyZChcInBsYXllci10d29cIik7XG4gIHVwZGF0ZVNoaXBzVHJhY2tlcihcInBsYXllci10d29cIik7XG5cbiAgaWYgKGdhbWVTdGF0ZS5pc092ZXIgJiYgZ2FtZVN0YXRlLndpbm5lciA9PT0gXCJwbGF5ZXItb25lXCIpIHtcbiAgICBkaXNwbGF5R2FtZU92ZXJTY3JlZW4oZ2FtZVN0YXRlLnBsYXllcnNbXCJwbGF5ZXItb25lXCJdLm5hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHRoaW5raW5nVGltZSA9IHJhbmRvbUludGVnZXJJblJhbmdlKDYwMCwgMTAwMCk7XG4gIGNvbnN0IHBsYXllclR3b0dhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuZ2FtZWJvYXJkLXdyYXBwZXIjcGxheWVyLXR3byAuZ2FtZWJvYXJkXCJcbiAgKTtcbiAgcGxheWVyVHdvR2FtZWJvYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNhYmxlZFwiKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB1cGRhdGVQdmVHYW1lYm9hcmQoXCJwbGF5ZXItb25lXCIpO1xuICAgIHVwZGF0ZVNoaXBzVHJhY2tlcihcInBsYXllci1vbmVcIik7XG4gICAgcGxheWVyVHdvR2FtZWJvYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNhYmxlZFwiKTtcblxuICAgIGlmIChnYW1lU3RhdGUuaXNPdmVyKSB7XG4gICAgICBkaXNwbGF5R2FtZU92ZXJTY3JlZW4oZ2FtZVN0YXRlLnBsYXllcnNbXCJwbGF5ZXItdHdvXCJdLm5hbWUpO1xuICAgIH1cbiAgfSwgdGhpbmtpbmdUaW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVB2ZUdhbWVib2FyZChwbGF5ZXIpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgZ2FtZWJvYXJkU3RhdGUgPSBnZXRHYW1lU3RhdGUoKS5nYW1lYm9hcmRzW3BsYXllcl07XG4gIGNvbnN0IGlzQWlHYW1lYm9hcmQgPSBwbGF5ZXIuaW5jbHVkZXMoXCJ0d29cIik7XG5cbiAgZm9yIChjb25zdCBzaGlwIG9mIGdhbWVib2FyZFN0YXRlLnNoaXBzKSB7XG4gICAgZm9yIChjb25zdCBjb29yZHMgb2Ygc2hpcC5jb29yZGluYXRlcykge1xuICAgICAgY29uc3QgZ2FtZWJvYXJkQ2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29vcmRpbmF0ZXMgPSBcInt4OiAke2Nvb3Jkcy54fSwgeTogJHtjb29yZHMueX19XCJdYFxuICAgICAgKTtcblxuICAgICAgLy8gVGhlIHNoaXBzIG11c3Qgbm90IGJlIHZpc2libGUgaW4gdGhlIEFJJ3MgZ2FtZWJvYXJkXG4gICAgICBpZiAoIWlzQWlHYW1lYm9hcmQpIGdhbWVib2FyZENlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG5cbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGdhbWVib2FyZENlbGwuY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgICB9IGVsc2UgaWYgKGFyckluY2x1ZGVzT2JqKHNoaXAuaGl0c1Rha2VuLCBjb29yZHMpKSB7XG4gICAgICAgIGdhbWVib2FyZENlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IG1pc3NlZEF0dGFjayBvZiBnYW1lYm9hcmRTdGF0ZS5taXNzZWRBdHRhY2tzKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvb3JkaW5hdGVzID0gXCJ7eDogJHttaXNzZWRBdHRhY2sueH0sIHk6ICR7bWlzc2VkQXR0YWNrLnl9fVwiXWBcbiAgICApO1xuICAgIGdhbWVib2FyZENlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NlZC1hdHRhY2tcIik7XG4gIH1cblxuICBpZiAoaXNBaUdhbWVib2FyZCkge1xuICAgIGNvbnN0IGNlbGxzID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKTtcblxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgYXR0YWNrZXIgPSBwbGF5ZXIgPT09IFwicGxheWVyLW9uZVwiID8gXCJwbGF5ZXItdHdvXCIgOiBcInBsYXllci1vbmVcIjtcbiAgICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIilbNF0pO1xuICAgICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZGluYXRlc1wiKVsxMF0pO1xuICAgICAgICBodW1hblBsYXlzVHVybih7XG4gICAgICAgICAgYXR0YWNrZXIsXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IHsgeCwgeSB9LFxuICAgICAgICB9KTtcblxuICAgICAgICB1cGRhdGVQdmVHYW1lYm9hcmRzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBnYW1lYm9hcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLmdhbWVib2FyZC13cmFwcGVyIyR7cGxheWVyfWBcbiAgKTtcbiAgY29uc3QgcHJldmlvdXNHYW1lYm9hcmQgPSBnYW1lYm9hcmRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkXCIpO1xuXG4gIHByZXZpb3VzR2FtZWJvYXJkXG4gICAgPyBwcmV2aW91c0dhbWVib2FyZC5yZXBsYWNlV2l0aChnYW1lYm9hcmQpXG4gICAgOiBnYW1lYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKGdhbWVib2FyZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21pemVkR2FtZWJvYXJkKCkge1xuICBjb25zdCBnYW1lYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgY29uc3QgZW1wdHlDZWxscyA9IFtdO1xuICBnYW1lYm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjb25zdCB4ID0gTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZGluYXRlc1wiKVs0XSk7XG4gICAgY29uc3QgeSA9IE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29vcmRpbmF0ZXNcIilbMTBdKTtcbiAgICBlbXB0eUNlbGxzLnB1c2goeyB4LCB5IH0pO1xuICB9KTtcblxuICBjb25zdCBnZXRSYW5kb21QbGFjZW1lbnRDb29yZGluYXRlcyA9IChzaGlwTGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gW3RydWUsIGZhbHNlXVtyYW5kb21JbnRlZ2VySW5SYW5nZSgwLCAxKV07XG4gICAgY29uc3QgYXZhaWxhYmxlQ29vcmRpbmF0ZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgY3VycmVudENlbGwgb2YgZW1wdHlDZWxscykge1xuICAgICAgaWYgKFxuICAgICAgICAoaXNIb3Jpem9udGFsICYmIGN1cnJlbnRDZWxsLnggPiBHQU1FQk9BUkRfV0lEVEggLSBzaGlwTGVuZ3RoKSB8fFxuICAgICAgICAoIWlzSG9yaXpvbnRhbCAmJiBjdXJyZW50Q2VsbC55ID4gR0FNRUJPQVJEX0hFSUdIVCAtIHNoaXBMZW5ndGgpXG4gICAgICApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFkamFjZW50Q2VsbHMgPSBbY3VycmVudENlbGxdO1xuICAgICAgbGV0IG5leHRDZWxsO1xuICAgICAgbGV0IHByZXZpb3VzQ2VsbCA9IGN1cnJlbnRDZWxsO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYWRqYWNlbnRDZWxscy5sZW5ndGggPT09IHNoaXBMZW5ndGgpIHtcbiAgICAgICAgICBhdmFpbGFibGVDb29yZGluYXRlcy5wdXNoKGFkamFjZW50Q2VsbHMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dENlbGwgPSBpc0hvcml6b250YWxcbiAgICAgICAgICA/IHsgeDogcHJldmlvdXNDZWxsLnggKyAxLCB5OiBwcmV2aW91c0NlbGwueSB9XG4gICAgICAgICAgOiB7IHg6IHByZXZpb3VzQ2VsbC54LCB5OiBwcmV2aW91c0NlbGwueSArIDEgfTtcblxuICAgICAgICBwcmV2aW91c0NlbGwgPSBuZXh0Q2VsbDtcblxuICAgICAgICBpZiAoYXJySW5jbHVkZXNPYmooZW1wdHlDZWxscywgbmV4dENlbGwpKSB7XG4gICAgICAgICAgYWRqYWNlbnRDZWxscy5wdXNoKG5leHRDZWxsKTtcbiAgICAgICAgfSBlbHNlIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNob3NlbkNvb3JkaW5hdGVzID1cbiAgICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzW1xuICAgICAgICByYW5kb21JbnRlZ2VySW5SYW5nZSgwLCBhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGggLSAxKVxuICAgICAgXTtcblxuICAgIGNvbnN0IGNvb3JkaW5hdGVzRm9yRGVsZXRpb24gPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaG9zZW5Db29yZGluYXRlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNlbGxPblRoZUxlZnQgPSB7XG4gICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54IC0gMSxcbiAgICAgICAgeTogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnksXG4gICAgICB9O1xuICAgICAgaWYgKFxuICAgICAgICBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCA+IDAgJiZcbiAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsT25UaGVMZWZ0KVxuICAgICAgKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzRm9yRGVsZXRpb24ucHVzaChjZWxsT25UaGVMZWZ0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2VsbE9uVGhlUmlnaHQgPSB7XG4gICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54ICsgMSxcbiAgICAgICAgeTogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLnksXG4gICAgICB9O1xuICAgICAgaWYgKFxuICAgICAgICBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueCA8IEdBTUVCT0FSRF9XSURUSCAtIDEgJiZcbiAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsT25UaGVSaWdodClcbiAgICAgICkge1xuICAgICAgICBjb29yZGluYXRlc0ZvckRlbGV0aW9uLnB1c2goY2VsbE9uVGhlUmlnaHQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjZWxsQmVsb3cgPSB7XG4gICAgICAgIHg6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS54LFxuICAgICAgICB5OiBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSAtIDEsXG4gICAgICB9O1xuICAgICAgaWYgKFxuICAgICAgICBjaG9zZW5Db29yZGluYXRlc1tpbmRleF0ueSA+IDAgJiZcbiAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsQmVsb3cpXG4gICAgICApIHtcbiAgICAgICAgY29vcmRpbmF0ZXNGb3JEZWxldGlvbi5wdXNoKGNlbGxCZWxvdyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNlbGxBYm92ZSA9IHtcbiAgICAgICAgeDogY2hvc2VuQ29vcmRpbmF0ZXNbaW5kZXhdLngsXG4gICAgICAgIHk6IGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55ICsgMSxcbiAgICAgIH07XG4gICAgICBpZiAoXG4gICAgICAgIGNob3NlbkNvb3JkaW5hdGVzW2luZGV4XS55IDwgR0FNRUJPQVJEX0hFSUdIVCAtIDEgJiZcbiAgICAgICAgIWFyckluY2x1ZGVzT2JqKGNob3NlbkNvb3JkaW5hdGVzLCBjZWxsQWJvdmUpXG4gICAgICApIHtcbiAgICAgICAgY29vcmRpbmF0ZXNGb3JEZWxldGlvbi5wdXNoKGNlbGxBYm92ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgWy4uLmNob3NlbkNvb3JkaW5hdGVzLCAuLi5jb29yZGluYXRlc0ZvckRlbGV0aW9uXS5mb3JFYWNoKChjb29yZHMpID0+IHtcbiAgICAgIGNvbnN0IGNvb3Jkc0luZGV4ID0gZW1wdHlDZWxscy5maW5kSW5kZXgoXG4gICAgICAgIChjZWxsKSA9PiBjZWxsLnggPT09IGNvb3Jkcy54ICYmIGNlbGwueSA9PT0gY29vcmRzLnlcbiAgICAgICk7XG4gICAgICBlbXB0eUNlbGxzLnNwbGljZShjb29yZHNJbmRleCwgMSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNob3NlbkNvb3JkaW5hdGVzO1xuICB9O1xuXG4gIGxldCBzaGlwc0Nvb3JkaW5hdGVzID0gW107XG5cbiAgZ2V0R2FtZVN0YXRlKCkuYXZhaWxhYmxlU2hpcHMuZm9yRWFjaCgoc2hpcExlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHBsYWNlbWVudENvb3JkaW5hdGVzID0gZ2V0UmFuZG9tUGxhY2VtZW50Q29vcmRpbmF0ZXMoc2hpcExlbmd0aCk7XG4gICAgc2hpcHNDb29yZGluYXRlcy5wdXNoKHBsYWNlbWVudENvb3JkaW5hdGVzKTtcbiAgICBwbGFjZW1lbnRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZHMpID0+IHtcbiAgICAgIGdhbWVib2FyZFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmNlbGxbZGF0YS1jb29yZGluYXRlcz0ne3g6ICR7Y29vcmRzLnh9LCB5OiAke2Nvb3Jkcy55fX0nXWBcbiAgICAgICAgKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGdhbWVib2FyZC5zZXRBdHRyaWJ1dGUoXG4gICAgXCJkYXRhLXNoaXBzLWNvb3JkaW5hdGVzXCIsXG4gICAgSlNPTi5zdHJpbmdpZnkoc2hpcHNDb29yZGluYXRlcylcbiAgKTtcbiAgcmV0dXJuIGdhbWVib2FyZDtcbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3B2ZS1iYXR0bGUtc2NyZWVuLmNzc1wiO1xuXG5pbXBvcnQge1xuICByYW5kb21pemVkR2FtZWJvYXJkLFxuICB1cGRhdGVQdmVHYW1lYm9hcmQsXG4gIHVwZGF0ZVNoaXBzVHJhY2tlcixcbn0gZnJvbSBcIi4vdWktZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGFjZVNoaXBzLCBzdGFydFB2ZUdhbWUgfSBmcm9tIFwiLi4vZ2FtZS1sb29wXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVB2ZUJhdHRsZSgpIHtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3QgYmF0dGxlU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGJhdHRsZVNjcmVlbi5jbGFzc0xpc3QuYWRkKFwic2NyZWVuXCIpO1xuICBiYXR0bGVTY3JlZW4uaWQgPSBcInB2ZS1iYXR0bGVcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhdHRsZVNjcmVlbik7XG5cbiAgY29uc3QgUExBWUVSUyA9IFtcInBsYXllci1vbmVcIiwgXCJwbGF5ZXItdHdvXCJdO1xuXG4gIFBMQVlFUlMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgY29uc3QgZ2FtZWJvYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGdhbWVib2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImdhbWVib2FyZC13cmFwcGVyXCIpO1xuICAgIGdhbWVib2FyZFdyYXBwZXIuaWQgPSBwbGF5ZXI7XG4gICAgYmF0dGxlU2NyZWVuLmFwcGVuZENoaWxkKGdhbWVib2FyZFdyYXBwZXIpO1xuICAgIHVwZGF0ZVB2ZUdhbWVib2FyZChwbGF5ZXIpO1xuICAgIHVwZGF0ZVNoaXBzVHJhY2tlcihwbGF5ZXIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQdmVCYXR0bGVXaXRoU2hpcHMoeyBuYW1lLCBzaGlwc0Nvb3JkaW5hdGVzIH0pIHtcbiAgc3RhcnRQdmVHYW1lKG5hbWUpO1xuICBwbGFjZVNoaXBzKFwicGxheWVyLW9uZVwiLCBzaGlwc0Nvb3JkaW5hdGVzKTtcbiAgZGlzcGxheVB2ZUJhdHRsZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVNoaXBzTGF5b3V0U2NyZWVuKG5hbWUpIHtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3Qgc2hpcHNMYXlvdXRTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgc2hpcHNMYXlvdXRTY3JlZW4uY2xhc3NMaXN0LmFkZChcInNjcmVlblwiKTtcbiAgc2hpcHNMYXlvdXRTY3JlZW4uaWQgPSBcInNoaXBzLWxheW91dFwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcHNMYXlvdXRTY3JlZW4pO1xuXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZUlucHV0LmlkID0gXCJuYW1lXCI7XG4gIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiTmFtZVwiO1xuICBuYW1lSW5wdXQuYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcbiAgaWYgKG5hbWUpIG5hbWVJbnB1dC52YWx1ZSA9IG5hbWU7XG4gIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIGlmICghbmFtZUlucHV0LnZhbHVlICYmIG5hbWVJbnB1dC5jbGFzc05hbWUgIT09IFwiaW52YWxpZFwiKVxuICAgICAgbmFtZUlucHV0LmNsYXNzTmFtZSA9IFwiaW52YWxpZFwiO1xuICAgIGlmIChuYW1lSW5wdXQudmFsdWUgJiYgbmFtZUlucHV0LmNsYXNzTmFtZSAhPT0gXCJ2YWxpZFwiKVxuICAgICAgbmFtZUlucHV0LmNsYXNzTmFtZSA9IFwidmFsaWRcIjtcbiAgfSk7XG4gIHNoaXBzTGF5b3V0U2NyZWVuLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgY29uc3QgZ2FtZWJvYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBnYW1lYm9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmQtd3JhcHBlclwiKTtcbiAgc2hpcHNMYXlvdXRTY3JlZW4uYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkV3JhcHBlcik7XG5cbiAgZ2FtZWJvYXJkV3JhcHBlci5hcHBlbmQocmFuZG9taXplZEdhbWVib2FyZCgpKTtcblxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG4gIGdhbWVib2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmFuZG9taXplQnV0dG9uLmlkID0gXCJyYW5kb21pemVcIjtcbiAgcmFuZG9taXplQnV0dG9uLmlubmVyVGV4dCA9IFwiUmFuZG9taXplXCI7XG4gIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNoaXBzTGF5b3V0U2NyZWVuXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5nYW1lYm9hcmRcIilcbiAgICAgIC5yZXBsYWNlV2l0aChyYW5kb21pemVkR2FtZWJvYXJkKCkpO1xuICB9KTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChyYW5kb21pemVCdXR0b24pO1xuXG4gIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5XCI7XG4gIHBsYXlCdXR0b24uaW5uZXJUZXh0ID0gXCJQbGF5XCI7XG4gIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIW5hbWVJbnB1dC52YWx1ZSkge1xuICAgICAgaWYgKG5hbWVJbnB1dC5jbGFzc05hbWUgIT09IFwiaW52YWxpZFwiKSBuYW1lSW5wdXQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcHNDb29yZGluYXRlcyA9IEpTT04ucGFyc2UoXG4gICAgICBnYW1lYm9hcmRXcmFwcGVyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZFwiKVxuICAgICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1zaGlwcy1jb29yZGluYXRlc1wiKVxuICAgICk7XG5cbiAgICBkaXNwbGF5UHZlQmF0dGxlV2l0aFNoaXBzKHsgbmFtZTogbmFtZUlucHV0LnZhbHVlLCBzaGlwc0Nvb3JkaW5hdGVzIH0pO1xuICB9KTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChwbGF5QnV0dG9uKTtcbn1cblxuZGlzcGxheVNoaXBzTGF5b3V0U2NyZWVuKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy91c2VyLWludGVyZmFjZS91c2VyLWludGVyZmFjZS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==