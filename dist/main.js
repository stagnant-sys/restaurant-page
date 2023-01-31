/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Potta+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n margin: 0;\r\n box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nheader {\r\n  color: #efefef;\r\n  background-color: #c70025;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 16px;\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.logo-container h1 {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 4rem;\r\n  margin: 0;\r\n}\r\n\r\n.header-logo__image {\r\n  height: 5rem;\r\n}\r\n\r\n.catchphrase {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#content {\r\n  height: 100%;\r\n}\r\n\r\n.main-content {\r\n  padding: 3rem;\r\n  background-color: #fcf2f4;\r\n  height: 100%;\r\n}\r\n\r\n.tabs-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.content-tab {\r\n  cursor: pointer;\r\n  width: 200px;\r\n  color: #aaaaaa;\r\n  padding: 1rem 0;\r\n  text-align: center;\r\n  font-family: \"Potta One\", sans-serif;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70025;\r\n  border-top: none;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.selected {\r\n  background-color: #c70024ca;\r\n  color: white;\r\n}\r\n\r\n#dynamic-content__container {\r\n  margin: 50px 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.home-page__title {\r\n  background-color: #c70025;\r\n  color: #efefef;\r\n  font-family: \"Potta One\";\r\n  text-align: center;\r\n  border-radius: 25px 25px 0 0;\r\n  font-size: 2rem;\r\n  padding: 10px;\r\n}\r\n\r\n.home-page__infos {\r\n  font-family: 'Verdana', sans-serif;\r\n  border-left: 5px solid #c70025;\r\n  border-right: 5px solid #c70025;\r\n  padding: 5px 16px;\r\n  text-align: center;\r\n}\r\n\r\n.order-container {\r\n  background-color: #c70025;\r\n  border-radius: 0 0 25px 25px;\r\n  padding: 16px;\r\n  color: #efefef;\r\n  font-family: 'Verdana', sans-serif;\r\n  text-align: center;\r\n}\r\n\r\n.online-order__container {\r\n  margin-top: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.online-order__container button {\r\n  width: 200px;\r\n  font-family: 'Verdana', sans-serif;\r\n  padding: 5px 0;\r\n}\r\n\r\n.meals-page__content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 16px;\r\n  background-color: #c70025;\r\n}\r\n\r\n\r\n.meal-container {\r\n  font-family: \"Verdana\", sans-serif;\r\n  width: fit-content;\r\n  height: 200px;\r\n  padding: 16px;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70024a7;\r\n  border-radius: 15px;\r\n  display: grid;\r\n  grid-template-columns: 150px 200px;\r\n  grid-template-rows: repeat(4, 1fr);\r\n  grid-column-gap: 16px;\r\n}\r\n\r\n.meal-container:nth-of-type(even) {\r\n  grid-template-areas:  \"image name\"\r\n                        \"image description\"\r\n                        \"image description\"\r\n                        \"image price\";\r\n}\r\n\r\n.meal-container:nth-of-type(odd) {\r\n  grid-template-areas:  \"name image\"\r\n                        \"description image\"\r\n                        \"description image\"\r\n                        \"price image\";\r\n}\r\n\r\n.meal-image {\r\n  grid-area: image;\r\n  max-width:150px;\r\n  max-height: 150px;\r\n  place-self: center center;\r\n  margin: 10px;\r\n}\r\n\r\n.meal-name {\r\n  grid-area: name;\r\n  font-weight: 700;\r\n}\r\n\r\n.meal-description {\r\n  grid-area: description;\r\n}\r\n\r\n.meal-price {\r\n  grid-area: price;\r\n  justify-self: right;\r\n  font-weight: 700;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;CACC,SAAS;CACT,sBAAsB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,oCAAoC;EACpC,eAAe;EACf,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,oCAAoC;EACpC,yBAAyB;EACzB,yBAAyB;EACzB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,wBAAwB;EACxB,kBAAkB;EAClB,4BAA4B;EAC5B,eAAe;EACf,aAAa;AACf;;AAEA;EACE,kCAAkC;EAClC,8BAA8B;EAC9B,+BAA+B;EAC/B,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,aAAa;EACb,cAAc;EACd,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,yBAAyB;AAC3B;;;AAGA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,yBAAyB;EACzB,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,kCAAkC;EAClC,kCAAkC;EAClC,qBAAqB;AACvB;;AAEA;EACE;;;qCAGmC;AACrC;;AAEA;EACE;;;qCAGmC;AACrC;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');\r\n\r\n* {\r\n margin: 0;\r\n box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nheader {\r\n  color: #efefef;\r\n  background-color: #c70025;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 16px;\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.logo-container h1 {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 4rem;\r\n  margin: 0;\r\n}\r\n\r\n.header-logo__image {\r\n  height: 5rem;\r\n}\r\n\r\n.catchphrase {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#content {\r\n  height: 100%;\r\n}\r\n\r\n.main-content {\r\n  padding: 3rem;\r\n  background-color: #fcf2f4;\r\n  height: 100%;\r\n}\r\n\r\n.tabs-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.content-tab {\r\n  cursor: pointer;\r\n  width: 200px;\r\n  color: #aaaaaa;\r\n  padding: 1rem 0;\r\n  text-align: center;\r\n  font-family: \"Potta One\", sans-serif;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70025;\r\n  border-top: none;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.selected {\r\n  background-color: #c70024ca;\r\n  color: white;\r\n}\r\n\r\n#dynamic-content__container {\r\n  margin: 50px 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.home-page__title {\r\n  background-color: #c70025;\r\n  color: #efefef;\r\n  font-family: \"Potta One\";\r\n  text-align: center;\r\n  border-radius: 25px 25px 0 0;\r\n  font-size: 2rem;\r\n  padding: 10px;\r\n}\r\n\r\n.home-page__infos {\r\n  font-family: 'Verdana', sans-serif;\r\n  border-left: 5px solid #c70025;\r\n  border-right: 5px solid #c70025;\r\n  padding: 5px 16px;\r\n  text-align: center;\r\n}\r\n\r\n.order-container {\r\n  background-color: #c70025;\r\n  border-radius: 0 0 25px 25px;\r\n  padding: 16px;\r\n  color: #efefef;\r\n  font-family: 'Verdana', sans-serif;\r\n  text-align: center;\r\n}\r\n\r\n.online-order__container {\r\n  margin-top: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.online-order__container button {\r\n  width: 200px;\r\n  font-family: 'Verdana', sans-serif;\r\n  padding: 5px 0;\r\n}\r\n\r\n.meals-page__content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 16px;\r\n  background-color: #c70025;\r\n}\r\n\r\n\r\n.meal-container {\r\n  font-family: \"Verdana\", sans-serif;\r\n  width: fit-content;\r\n  height: 200px;\r\n  padding: 16px;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70024a7;\r\n  border-radius: 15px;\r\n  display: grid;\r\n  grid-template-columns: 150px 200px;\r\n  grid-template-rows: repeat(4, 1fr);\r\n  grid-column-gap: 16px;\r\n}\r\n\r\n.meal-container:nth-of-type(even) {\r\n  grid-template-areas:  \"image name\"\r\n                        \"image description\"\r\n                        \"image description\"\r\n                        \"image price\";\r\n}\r\n\r\n.meal-container:nth-of-type(odd) {\r\n  grid-template-areas:  \"name image\"\r\n                        \"description image\"\r\n                        \"description image\"\r\n                        \"price image\";\r\n}\r\n\r\n.meal-image {\r\n  grid-area: image;\r\n  max-width:150px;\r\n  max-height: 150px;\r\n  place-self: center center;\r\n  margin: 10px;\r\n}\r\n\r\n.meal-name {\r\n  grid-area: name;\r\n  font-weight: 700;\r\n}\r\n\r\n.meal-description {\r\n  grid-area: description;\r\n}\r\n\r\n.meal-price {\r\n  grid-area: price;\r\n  justify-self: right;\r\n  font-weight: 700;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/createElements.js":
/*!*******************************!*\
  !*** ./src/createElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBodyElement": () => (/* binding */ createBodyElement)
/* harmony export */ });
let createBodyElement = (elementType, elementClass, elementContent, parentElement) => {
  let newElement = document.createElement(elementType);
  newElement.classList.add(elementClass);
  newElement.textContent = elementContent;
  parentElement.appendChild(newElement);
};



/***/ }),

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home_tab_content": () => (/* binding */ home_tab_content)
/* harmony export */ });
const CONTENT_DIV = document.getElementById('content');
const dynamicContentContainer= document.querySelector('.dynamic-content__container');
const HOME_TAB_BUTTON = document.getElementById('home-tab__button');
const MEALS_TAB_BUTTON = document.getElementById('meals-tab__button');

const home_tab_content = (div) => {
  const infos_container = document.createElement('div');
  div.appendChild(infos_container);
  const title = document.createElement('div');
  title.classList.add('home-page__title');
  title.textContent = 'Welcome to Go! Sushis';
  infos_container.appendChild(title);
  const infos = document.createElement('div');
  infos.classList.add('home-page__infos');
  infos.textContent = 'We serve the best sushis this side of the ocean!';
  const infos_selling = document.createElement('div');
  infos_selling.classList.add('home-page__infos');
  infos_selling.textContent = 'Come visit us or give us a call to order your sushis and get them fresh in less than an hour.';
  infos_container.appendChild(infos);
  infos_container.appendChild(infos_selling);
  const infos_adress = document.createElement('div');
  infos_adress.textContent = '1274 Golf Club Rd, Las Cruces NY88011';
  infos_adress.classList.add('home-page__infos');
  div.appendChild(infos_adress);
  const infos_telephone = document.createElement('div');
  infos_telephone.classList.add('home-page__infos');
  infos_telephone.textContent = '(575) 521-1826';
  div.appendChild(infos_telephone);

  const order_container = document.createElement('div');
  order_container.classList.add('order-container');
  div.appendChild(order_container);
  const reservation = document.createElement('div');
  reservation.textContent = 'Make a reservation:';
  order_container.appendChild(reservation);
  const reservation_telephone = document.createElement('div');
  reservation_telephone.textContent = 'Give us a call: (575) 521-1826 or send us an email: gosushis@makimail.com';
  reservation.appendChild(reservation_telephone);
  const online_order = document.createElement('div');
  online_order.classList.add('online-order__container');
  online_order.textContent = 'You can also order from our website:';
  order_container.appendChild(online_order);
  const order_button = document.createElement('button');
  order_button.textContent = 'ORDER NOW';
  online_order.appendChild(order_button);

};



/***/ }),

/***/ "./src/meals-page.js":
/*!***************************!*\
  !*** ./src/meals-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMeal": () => (/* binding */ createMeal),
/* harmony export */   "meals_tab_content": () => (/* binding */ meals_tab_content)
/* harmony export */ });
const CONTENT_DIV = document.getElementById('content');
const dynamicContentContainer= document.querySelector('.dynamic-content__container');

const meals_tab_content = (div) => {
  const meals_page_content = document.createElement('div');
  meals_page_content.classList.add('meals-page__content-wrapper');
  div.appendChild(meals_page_content);
};

let createMeal = (name, description, price, image) => {
  const meals_page_content = document.querySelector('.meals-page__content-wrapper');
  const meal_container = document.createElement('div');
  meal_container.classList.add('meal-container');
  meals_page_content.appendChild(meal_container);

  const meal_image = document.createElement('img');
  meal_image.classList.add('meal-image');
  meal_image.src = image;
  meal_container.appendChild(meal_image);

  const meal_name = document.createElement('div');
  meal_name.classList.add('meal-name');
  meal_name.textContent = name;
  meal_container.appendChild(meal_name);

  const meal_desc = document.createElement('div');
  meal_desc.classList.add('meal-description');
  meal_desc.textContent = description;
  meal_container.appendChild(meal_desc);

  const meal_price = document.createElement('div');
  meal_price.classList.add('meal-price');
  meal_price.textContent = price + ' €';
  meal_container.appendChild(meal_price);
};



/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dynamicContentContainerLoad": () => (/* binding */ dynamicContentContainerLoad),
/* harmony export */   "headerDOMLoad": () => (/* binding */ headerDOMLoad),
/* harmony export */   "tabsDOMLoad": () => (/* binding */ tabsDOMLoad)
/* harmony export */ });
const CONTENT_DIV = document.getElementById('content');

const headerDOMLoad = () => {
  const header_container = document.createElement('header');
  CONTENT_DIV.appendChild(header_container);

  const logo_container = document.createElement('div');
  logo_container.classList.add('logo-container');
  header_container.appendChild(logo_container);
  const text_logo = document.createElement('h1');
  text_logo.textContent='G⬤! Sushis';
  logo_container.appendChild(text_logo);
  const image_logo = document.createElement('img');
  image_logo.classList.add('header-logo__image');
  image_logo.src = '../src/images/logo.svg';
  logo_container.appendChild(image_logo);

  const catchphrase_container = document.createElement('div');
  catchphrase_container.classList.add('catchphrase');
  catchphrase_container.textContent=`Faster than you can say '竜宮の乙姫の元結の取り外し'!`;
  header_container.appendChild(catchphrase_container);
};

const tabsDOMLoad = () => {
  const tabs_container = document.createElement('div');
  tabs_container.classList.add('tabs-container');
  CONTENT_DIV.appendChild(tabs_container);

  const home_tab = document.createElement('div');
  home_tab.classList.add('content-tab');
  home_tab.setAttribute('id', 'home-tab__button');
  home_tab.textContent = 'Our restaurant';
  tabs_container.appendChild(home_tab);

  const meals_tab = document.createElement('div');
  meals_tab.classList.add('content-tab');
  meals_tab.setAttribute('id', 'meals-tab__button');
  meals_tab.textContent = 'Our meals';
  tabs_container.appendChild(meals_tab);
};

const dynamicContentContainerLoad = () => {
  const dynamicContentContainer = document.createElement('div');
  dynamicContentContainer.setAttribute('id', 'dynamic-content__container');
  CONTENT_DIV.appendChild(dynamicContentContainer);
};



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElements */ "./src/createElements.js");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-tab */ "./src/home-tab.js");
/* harmony import */ var _meals_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meals-page */ "./src/meals-page.js");






const CONTENT_DIV = document.getElementById('content');


(0,_page_load__WEBPACK_IMPORTED_MODULE_2__.headerDOMLoad)();  // Load static content of the page
(0,_page_load__WEBPACK_IMPORTED_MODULE_2__.tabsDOMLoad)();
(0,_page_load__WEBPACK_IMPORTED_MODULE_2__.dynamicContentContainerLoad)();
const HOME_TAB_BUTTON = document.getElementById('home-tab__button');
const MEALS_TAB_BUTTON = document.getElementById('meals-tab__button');
const dynamicContentContainer = document.getElementById('dynamic-content__container');

// Load home tab on startup
(0,_home_tab__WEBPACK_IMPORTED_MODULE_3__.home_tab_content)(dynamicContentContainer);
HOME_TAB_BUTTON.classList.add('selected');

// Create dynamic content when a tab is clicked
HOME_TAB_BUTTON.addEventListener('click', () => {
  HOME_TAB_BUTTON.classList.add('selected');
  MEALS_TAB_BUTTON.classList.remove('selected');
  dynamicContentContainer.textContent = '';
  (0,_home_tab__WEBPACK_IMPORTED_MODULE_3__.home_tab_content)(dynamicContentContainer);
});
MEALS_TAB_BUTTON.addEventListener('click', () => {
  MEALS_TAB_BUTTON.classList.add('selected');
  HOME_TAB_BUTTON.classList.remove('selected');
  dynamicContentContainer.textContent = '';
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_4__.meals_tab_content)(dynamicContentContainer);
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_4__.createMeal)('Maki', 'De savoureux makis', 5, '../src/images/meals/maki.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_4__.createMeal)('Dumpling', 'Savourous dumplings', 4, '../src/images/meals/dumpling.png');
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dDO0FBQ2lDO0FBQ3hDO0FBQ2U7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBYSxLQUFLO0FBQ2xCLHVEQUFXO0FBQ1gsdUVBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFnQjtBQUNsQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUFpQjtBQUNuQixFQUFFLHVEQUFVO0FBQ1osRUFBRSx1REFBVTtBQUNaLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUtdGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZWFscy1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG90dGErT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiBtYXJnaW46IDA7XFxyXFxuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGNvbG9yOiAjZWZlZmVmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MDAyNTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWNvbnRhaW5lciBoMSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvdHRhIE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbG9nb19faW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0Y2hwaHJhc2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjJmNDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGFiIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNjNzAwMjU7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzAwMjRjYTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2R5bmFtaWMtY29udGVudF9fY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogNTBweCAyMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1wYWdlX190aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvdHRhIE9uZVxcXCI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtcGFnZV9faW5mb3Mge1xcclxcbiAgZm9udC1mYW1pbHk6ICdWZXJkYW5hJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2M3MDAyNTtcXHJcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNjNzAwMjU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI1cHggMjVweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vbmxpbmUtb3JkZXJfX2NvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub25saW5lLW9yZGVyX19jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzLXBhZ2VfX2NvbnRlbnQtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MDAyNTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1lYWwtY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVmVyZGFuYVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjYzcwMDI0YTc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMjAwcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbikge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogIFxcXCJpbWFnZSBuYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJpbWFnZSBkZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiaW1hZ2UgZGVzY3JpcHRpb25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImltYWdlIHByaWNlXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCkge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogIFxcXCJuYW1lIGltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJkZXNjcmlwdGlvbiBpbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiZGVzY3JpcHRpb24gaW1hZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInByaWNlIGltYWdlXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW1hZ2Uge1xcclxcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcXHJcXG4gIG1heC13aWR0aDoxNTBweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyIGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtbmFtZSB7XFxyXFxuICBncmlkLWFyZWE6IG5hbWU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXNjcmlwdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wcmljZSB7XFxyXFxuICBncmlkLWFyZWE6IHByaWNlO1xcclxcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Q0FDQyxTQUFTO0NBQ1Qsc0JBQXNCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0NBQWtDO0VBQ2xDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFOzs7cUNBR21DO0FBQ3JDOztBQUVBO0VBQ0U7OztxQ0FHbUM7QUFDckM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvdHRhK09uZSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gbWFyZ2luOiAwO1xcclxcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzAwMjU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIgaDEge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxvZ29fX2ltYWdlIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGNocGhyYXNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG90dGEgT25lXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2YyZjQ7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50YWJzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXRhYiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG90dGEgT25lXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjYzcwMDI1O1xcclxcbiAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI0Y2E7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNkeW5hbWljLWNvbnRlbnRfX2NvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDUwcHggMjAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtcGFnZV9fdGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MDAyNTtcXHJcXG4gIGNvbG9yOiAjZWZlZmVmO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXBhZ2VfX2luZm9zIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XFxyXFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjNzAwMjU7XFxyXFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjYzcwMDI1O1xcclxcbiAgcGFkZGluZzogNXB4IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MDAyNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyNXB4IDI1cHg7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub25saW5lLW9yZGVyX19jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9ubGluZS1vcmRlcl9fY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5tZWFscy1wYWdlX19jb250ZW50LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzAwMjU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lciB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlZlcmRhbmFcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgI2M3MDAyNGE3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDIwMHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIGdyaWQtY29sdW1uLWdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICBcXFwiaW1hZ2UgbmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiaW1hZ2UgZGVzY3JpcHRpb25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImltYWdlIGRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJpbWFnZSBwcmljZVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICBcXFwibmFtZSBpbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiZGVzY3JpcHRpb24gaW1hZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRlc2NyaXB0aW9uIGltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJwcmljZSBpbWFnZVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltYWdlIHtcXHJcXG4gIGdyaWQtYXJlYTogaW1hZ2U7XFxyXFxuICBtYXgtd2lkdGg6MTUwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlciBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLW5hbWUge1xcclxcbiAgZ3JpZC1hcmVhOiBuYW1lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGVzY3JpcHRpb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcHJpY2Uge1xcclxcbiAgZ3JpZC1hcmVhOiBwcmljZTtcXHJcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgY3JlYXRlQm9keUVsZW1lbnQgPSAoZWxlbWVudFR5cGUsIGVsZW1lbnRDbGFzcywgZWxlbWVudENvbnRlbnQsIHBhcmVudEVsZW1lbnQpID0+IHtcclxuICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xyXG4gIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtZW50Q2xhc3MpO1xyXG4gIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50Q29udGVudDtcclxuICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlQm9keUVsZW1lbnQgfTsiLCJjb25zdCBDT05URU5UX0RJViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbmNvbnN0IGR5bmFtaWNDb250ZW50Q29udGFpbmVyPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHluYW1pYy1jb250ZW50X19jb250YWluZXInKTtcclxuY29uc3QgSE9NRV9UQUJfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtdGFiX19idXR0b24nKTtcclxuY29uc3QgTUVBTFNfVEFCX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFscy10YWJfX2J1dHRvbicpO1xyXG5cclxuY29uc3QgaG9tZV90YWJfY29udGVudCA9IChkaXYpID0+IHtcclxuICBjb25zdCBpbmZvc19jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuYXBwZW5kQ2hpbGQoaW5mb3NfY29udGFpbmVyKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZV9fdGl0bGUnKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIEdvISBTdXNoaXMnO1xyXG4gIGluZm9zX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgY29uc3QgaW5mb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbmZvcy5jbGFzc0xpc3QuYWRkKCdob21lLXBhZ2VfX2luZm9zJyk7XHJcbiAgaW5mb3MudGV4dENvbnRlbnQgPSAnV2Ugc2VydmUgdGhlIGJlc3Qgc3VzaGlzIHRoaXMgc2lkZSBvZiB0aGUgb2NlYW4hJztcclxuICBjb25zdCBpbmZvc19zZWxsaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5mb3Nfc2VsbGluZy5jbGFzc0xpc3QuYWRkKCdob21lLXBhZ2VfX2luZm9zJyk7XHJcbiAgaW5mb3Nfc2VsbGluZy50ZXh0Q29udGVudCA9ICdDb21lIHZpc2l0IHVzIG9yIGdpdmUgdXMgYSBjYWxsIHRvIG9yZGVyIHlvdXIgc3VzaGlzIGFuZCBnZXQgdGhlbSBmcmVzaCBpbiBsZXNzIHRoYW4gYW4gaG91ci4nO1xyXG4gIGluZm9zX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvcyk7XHJcbiAgaW5mb3NfY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9zX3NlbGxpbmcpO1xyXG4gIGNvbnN0IGluZm9zX2FkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluZm9zX2FkcmVzcy50ZXh0Q29udGVudCA9ICcxMjc0IEdvbGYgQ2x1YiBSZCwgTGFzIENydWNlcyBOWTg4MDExJztcclxuICBpbmZvc19hZHJlc3MuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlX19pbmZvcycpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChpbmZvc19hZHJlc3MpO1xyXG4gIGNvbnN0IGluZm9zX3RlbGVwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluZm9zX3RlbGVwaG9uZS5jbGFzc0xpc3QuYWRkKCdob21lLXBhZ2VfX2luZm9zJyk7XHJcbiAgaW5mb3NfdGVsZXBob25lLnRleHRDb250ZW50ID0gJyg1NzUpIDUyMS0xODI2JztcclxuICBkaXYuYXBwZW5kQ2hpbGQoaW5mb3NfdGVsZXBob25lKTtcclxuXHJcbiAgY29uc3Qgb3JkZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3JkZXJfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWNvbnRhaW5lcicpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChvcmRlcl9jb250YWluZXIpO1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVzZXJ2YXRpb24udGV4dENvbnRlbnQgPSAnTWFrZSBhIHJlc2VydmF0aW9uOic7XHJcbiAgb3JkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uKTtcclxuICBjb25zdCByZXNlcnZhdGlvbl90ZWxlcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByZXNlcnZhdGlvbl90ZWxlcGhvbmUudGV4dENvbnRlbnQgPSAnR2l2ZSB1cyBhIGNhbGw6ICg1NzUpIDUyMS0xODI2IG9yIHNlbmQgdXMgYW4gZW1haWw6IGdvc3VzaGlzQG1ha2ltYWlsLmNvbSc7XHJcbiAgcmVzZXJ2YXRpb24uYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25fdGVsZXBob25lKTtcclxuICBjb25zdCBvbmxpbmVfb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvbmxpbmVfb3JkZXIuY2xhc3NMaXN0LmFkZCgnb25saW5lLW9yZGVyX19jb250YWluZXInKTtcclxuICBvbmxpbmVfb3JkZXIudGV4dENvbnRlbnQgPSAnWW91IGNhbiBhbHNvIG9yZGVyIGZyb20gb3VyIHdlYnNpdGU6JztcclxuICBvcmRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQob25saW5lX29yZGVyKTtcclxuICBjb25zdCBvcmRlcl9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBvcmRlcl9idXR0b24udGV4dENvbnRlbnQgPSAnT1JERVIgTk9XJztcclxuICBvbmxpbmVfb3JkZXIuYXBwZW5kQ2hpbGQob3JkZXJfYnV0dG9uKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgeyBob21lX3RhYl9jb250ZW50IH07IiwiY29uc3QgQ09OVEVOVF9ESVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5jb25zdCBkeW5hbWljQ29udGVudENvbnRhaW5lcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR5bmFtaWMtY29udGVudF9fY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBtZWFsc190YWJfY29udGVudCA9IChkaXYpID0+IHtcclxuICBjb25zdCBtZWFsc19wYWdlX2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZWFsc19wYWdlX2NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVhbHMtcGFnZV9fY29udGVudC13cmFwcGVyJyk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKG1lYWxzX3BhZ2VfY29udGVudCk7XHJcbn07XHJcblxyXG5sZXQgY3JlYXRlTWVhbCA9IChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlKSA9PiB7XHJcbiAgY29uc3QgbWVhbHNfcGFnZV9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzLXBhZ2VfX2NvbnRlbnQtd3JhcHBlcicpO1xyXG4gIGNvbnN0IG1lYWxfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVhbC1jb250YWluZXInKTtcclxuICBtZWFsc19wYWdlX2NvbnRlbnQuYXBwZW5kQ2hpbGQobWVhbF9jb250YWluZXIpO1xyXG5cclxuICBjb25zdCBtZWFsX2ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbWVhbF9pbWFnZS5jbGFzc0xpc3QuYWRkKCdtZWFsLWltYWdlJyk7XHJcbiAgbWVhbF9pbWFnZS5zcmMgPSBpbWFnZTtcclxuICBtZWFsX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsX2ltYWdlKTtcclxuXHJcbiAgY29uc3QgbWVhbF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbF9uYW1lLmNsYXNzTGlzdC5hZGQoJ21lYWwtbmFtZScpO1xyXG4gIG1lYWxfbmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgbWVhbF9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVhbF9uYW1lKTtcclxuXHJcbiAgY29uc3QgbWVhbF9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbF9kZXNjLmNsYXNzTGlzdC5hZGQoJ21lYWwtZGVzY3JpcHRpb24nKTtcclxuICBtZWFsX2Rlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICBtZWFsX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsX2Rlc2MpO1xyXG5cclxuICBjb25zdCBtZWFsX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbF9wcmljZS5jbGFzc0xpc3QuYWRkKCdtZWFsLXByaWNlJyk7XHJcbiAgbWVhbF9wcmljZS50ZXh0Q29udGVudCA9IHByaWNlICsgJyDigqwnO1xyXG4gIG1lYWxfY29udGFpbmVyLmFwcGVuZENoaWxkKG1lYWxfcHJpY2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbWVhbHNfdGFiX2NvbnRlbnQsIGNyZWF0ZU1lYWwgfTsiLCJjb25zdCBDT05URU5UX0RJViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG5jb25zdCBoZWFkZXJET01Mb2FkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlcl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICBDT05URU5UX0RJVi5hcHBlbmRDaGlsZChoZWFkZXJfY29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgbG9nb19jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsb2dvX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xyXG4gIGhlYWRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb19jb250YWluZXIpO1xyXG4gIGNvbnN0IHRleHRfbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgdGV4dF9sb2dvLnRleHRDb250ZW50PSdH4qykISBTdXNoaXMnO1xyXG4gIGxvZ29fY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRfbG9nbyk7XHJcbiAgY29uc3QgaW1hZ2VfbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltYWdlX2xvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ29fX2ltYWdlJyk7XHJcbiAgaW1hZ2VfbG9nby5zcmMgPSAnLi4vc3JjL2ltYWdlcy9sb2dvLnN2Zyc7XHJcbiAgbG9nb19jb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VfbG9nbyk7XHJcblxyXG4gIGNvbnN0IGNhdGNocGhyYXNlX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhdGNocGhyYXNlX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXRjaHBocmFzZScpO1xyXG4gIGNhdGNocGhyYXNlX2NvbnRhaW5lci50ZXh0Q29udGVudD1gRmFzdGVyIHRoYW4geW91IGNhbiBzYXkgJ+ernOWuruOBruS5meWnq+OBruWFg+e1kOOBruWPluOCiuWkluOBlychYDtcclxuICBoZWFkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGNocGhyYXNlX2NvbnRhaW5lcik7XHJcbn07XHJcblxyXG5jb25zdCB0YWJzRE9NTG9hZCA9ICgpID0+IHtcclxuICBjb25zdCB0YWJzX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRhYnNfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYnMtY29udGFpbmVyJyk7XHJcbiAgQ09OVEVOVF9ESVYuYXBwZW5kQ2hpbGQodGFic19jb250YWluZXIpO1xyXG5cclxuICBjb25zdCBob21lX3RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvbWVfdGFiLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGFiJyk7XHJcbiAgaG9tZV90YWIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLXRhYl9fYnV0dG9uJyk7XHJcbiAgaG9tZV90YWIudGV4dENvbnRlbnQgPSAnT3VyIHJlc3RhdXJhbnQnO1xyXG4gIHRhYnNfY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVfdGFiKTtcclxuXHJcbiAgY29uc3QgbWVhbHNfdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbHNfdGFiLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGFiJyk7XHJcbiAgbWVhbHNfdGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVhbHMtdGFiX19idXR0b24nKTtcclxuICBtZWFsc190YWIudGV4dENvbnRlbnQgPSAnT3VyIG1lYWxzJztcclxuICB0YWJzX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsc190YWIpO1xyXG59O1xyXG5cclxuY29uc3QgZHluYW1pY0NvbnRlbnRDb250YWluZXJMb2FkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGR5bmFtaWNDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZHluYW1pY0NvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdkeW5hbWljLWNvbnRlbnRfX2NvbnRhaW5lcicpO1xyXG4gIENPTlRFTlRfRElWLmFwcGVuZENoaWxkKGR5bmFtaWNDb250ZW50Q29udGFpbmVyKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGhlYWRlckRPTUxvYWQsIHRhYnNET01Mb2FkLCBkeW5hbWljQ29udGVudENvbnRhaW5lckxvYWQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlQm9keUVsZW1lbnQgfSBmcm9tICcuL2NyZWF0ZUVsZW1lbnRzJztcclxuaW1wb3J0IHsgaGVhZGVyRE9NTG9hZCwgdGFic0RPTUxvYWQsIGR5bmFtaWNDb250ZW50Q29udGFpbmVyTG9hZCB9IGZyb20gJy4vcGFnZS1sb2FkJztcclxuaW1wb3J0IHsgaG9tZV90YWJfY29udGVudCB9IGZyb20gJy4vaG9tZS10YWInO1xyXG5pbXBvcnQgeyBtZWFsc190YWJfY29udGVudCwgY3JlYXRlTWVhbCB9IGZyb20gJy4vbWVhbHMtcGFnZSc7XHJcblxyXG5jb25zdCBDT05URU5UX0RJViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG5cclxuaGVhZGVyRE9NTG9hZCgpOyAgLy8gTG9hZCBzdGF0aWMgY29udGVudCBvZiB0aGUgcGFnZVxyXG50YWJzRE9NTG9hZCgpO1xyXG5keW5hbWljQ29udGVudENvbnRhaW5lckxvYWQoKTtcclxuY29uc3QgSE9NRV9UQUJfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtdGFiX19idXR0b24nKTtcclxuY29uc3QgTUVBTFNfVEFCX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFscy10YWJfX2J1dHRvbicpO1xyXG5jb25zdCBkeW5hbWljQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkeW5hbWljLWNvbnRlbnRfX2NvbnRhaW5lcicpO1xyXG5cclxuLy8gTG9hZCBob21lIHRhYiBvbiBzdGFydHVwXHJcbmhvbWVfdGFiX2NvbnRlbnQoZHluYW1pY0NvbnRlbnRDb250YWluZXIpO1xyXG5IT01FX1RBQl9CVVRUT04uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuXHJcbi8vIENyZWF0ZSBkeW5hbWljIGNvbnRlbnQgd2hlbiBhIHRhYiBpcyBjbGlja2VkXHJcbkhPTUVfVEFCX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBIT01FX1RBQl9CVVRUT04uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICBNRUFMU19UQUJfQlVUVE9OLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgZHluYW1pY0NvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBob21lX3RhYl9jb250ZW50KGR5bmFtaWNDb250ZW50Q29udGFpbmVyKTtcclxufSk7XHJcbk1FQUxTX1RBQl9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgTUVBTFNfVEFCX0JVVFRPTi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gIEhPTUVfVEFCX0JVVFRPTi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gIGR5bmFtaWNDb250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgbWVhbHNfdGFiX2NvbnRlbnQoZHluYW1pY0NvbnRlbnRDb250YWluZXIpO1xyXG4gIGNyZWF0ZU1lYWwoJ01ha2knLCAnRGUgc2F2b3VyZXV4IG1ha2lzJywgNSwgJy4uL3NyYy9pbWFnZXMvbWVhbHMvbWFraS5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdEdW1wbGluZycsICdTYXZvdXJvdXMgZHVtcGxpbmdzJywgNCwgJy4uL3NyYy9pbWFnZXMvbWVhbHMvZHVtcGxpbmcucG5nJyk7XHJcbn0pO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9