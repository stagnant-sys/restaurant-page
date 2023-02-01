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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n margin: 0;\r\n box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nheader {\r\n  color: #efefef;\r\n  background-color: #c70025;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 16px;\r\n  box-shadow: 0 5px 10px #c7002479;\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.logo-container h1 {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 4rem;\r\n  margin: 0;\r\n}\r\n\r\n.header-logo__image {\r\n  height: 5rem;\r\n}\r\n\r\n.catchphrase {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#content {\r\n  min-height: 100%;\r\n  background-color: #f9e6e9;\r\n}\r\n\r\n.main-content {\r\n  padding: 3rem;\r\n  background-color: #fcf2f4;\r\n  height: 100%;\r\n}\r\n\r\n.tabs-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.content-tab {\r\n  cursor: pointer;\r\n  width: 200px;\r\n  color: #aaaaaa;\r\n  padding: 1rem 0;\r\n  text-align: center;\r\n  font-family: \"Potta One\", sans-serif;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70025;\r\n  border-top: none;\r\n  border-radius: 0 0 10px 10px;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.selected {\r\n  background-color: #c70024ca;\r\n  color: white;\r\n}\r\n\r\n#dynamic-content__container {\r\n  margin: 50px 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.home-page__title {\r\n  background-color: #c70025;\r\n  color: #efefef;\r\n  font-family: \"Potta One\";\r\n  text-align: center;\r\n  border-radius: 25px 25px 0 0;\r\n  font-size: 2rem;\r\n  padding: 10px;\r\n}\r\n\r\n.home-page__infos {\r\n  font-family: 'Verdana', sans-serif;\r\n  border-left: 5px solid #c70025;\r\n  border-right: 5px solid #c70025;\r\n  padding: 5px 16px;\r\n  text-align: center;\r\n}\r\n\r\n.order-container {\r\n  background-color: #c70025;\r\n  border-radius: 0 0 25px 25px;\r\n  padding: 16px;\r\n  color: #efefef;\r\n  font-family: 'Verdana', sans-serif;\r\n  text-align: center;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.556);\r\n}\r\n\r\n.online-order__container {\r\n  margin-top: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.online-order__container button {\r\n  width: 200px;\r\n  font-family: 'Verdana', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  padding: 5px 0;\r\n  border-radius: 25px;\r\n  border: none;\r\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.582);\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.online-order__container button:hover {\r\n  background-color: #c70024ca;\r\n}\r\n\r\n.online-order__container button:active {\r\n  background-color: white;\r\n  transform: scale(0.9);\r\n}\r\n\r\n.meals-page__content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 16px;\r\n  background-color: #c70025;\r\n  border-radius: 5px;\r\n  width: 550px;\r\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.556);\r\n}\r\n\r\n.meal-container {\r\n  font-family: \"Verdana\", sans-serif;\r\n  width: 100%;\r\n  padding: 16px;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70024a7;\r\n  border-radius: 15px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 30px 1fr 1fr 30px;\r\n  grid-column-gap: 16px;\r\n}\r\n\r\n.meal-container:nth-of-type(even) {\r\n  grid-template-areas:  \"image name\"\r\n                        \"image description\"\r\n                        \"image description\"\r\n                        \"image price\";\r\n}\r\n\r\n.meal-container:nth-of-type(odd) {\r\n  grid-template-areas:  \"name image\"\r\n                        \"description image\"\r\n                        \"description image\"\r\n                        \"price image\";\r\n}\r\n\r\n.meal-image {\r\n  grid-area: image;\r\n  max-width:150px;\r\n  max-height: 150px;\r\n  place-self: center center;\r\n  margin: 10px;\r\n}\r\n\r\n.meal-name {\r\n  grid-area: name;\r\n  font-weight: 700;\r\n}\r\n\r\n.meal-description {\r\n  grid-area: description;\r\n}\r\n\r\n.meal-price {\r\n  grid-area: price;\r\n  justify-self: right;\r\n  font-weight: 700;\r\n}\r\n\r\nfooter {\r\n  height: 10vh;\r\n  width: 100%;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  font-family: 'Verdana', sans-serif;\r\n  font-size: 0.8rem;\r\n  color: #efefef;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 40rem) {\r\n  .logo-container {\r\n    flex-direction: column;\r\n    gap: 16px;\r\n    align-items: center;\r\n  }\r\n\r\n  .logo-container h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .catchphrase {\r\n    text-align: center;\r\n  }\r\n\r\n  #dynamic-content__container {\r\n    margin: 50px 10px;\r\n  }\r\n\r\n  .meals-page__content-wrapper {\r\n    width: 90%;\r\n  }\r\n\r\n  .meal-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .meal-price {\r\n    align-self: end;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');\r\n\r\n* {\r\n margin: 0;\r\n box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nheader {\r\n  color: #efefef;\r\n  background-color: #c70025;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 16px;\r\n  box-shadow: 0 5px 10px #c7002479;\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.logo-container h1 {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 4rem;\r\n  margin: 0;\r\n}\r\n\r\n.header-logo__image {\r\n  height: 5rem;\r\n}\r\n\r\n.catchphrase {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#content {\r\n  min-height: 100%;\r\n  background-color: #f9e6e9;\r\n}\r\n\r\n.main-content {\r\n  padding: 3rem;\r\n  background-color: #fcf2f4;\r\n  height: 100%;\r\n}\r\n\r\n.tabs-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.content-tab {\r\n  cursor: pointer;\r\n  width: 200px;\r\n  color: #aaaaaa;\r\n  padding: 1rem 0;\r\n  text-align: center;\r\n  font-family: \"Potta One\", sans-serif;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70025;\r\n  border-top: none;\r\n  border-radius: 0 0 10px 10px;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.selected {\r\n  background-color: #c70024ca;\r\n  color: white;\r\n}\r\n\r\n#dynamic-content__container {\r\n  margin: 50px 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.home-page__title {\r\n  background-color: #c70025;\r\n  color: #efefef;\r\n  font-family: \"Potta One\";\r\n  text-align: center;\r\n  border-radius: 25px 25px 0 0;\r\n  font-size: 2rem;\r\n  padding: 10px;\r\n}\r\n\r\n.home-page__infos {\r\n  font-family: 'Verdana', sans-serif;\r\n  border-left: 5px solid #c70025;\r\n  border-right: 5px solid #c70025;\r\n  padding: 5px 16px;\r\n  text-align: center;\r\n}\r\n\r\n.order-container {\r\n  background-color: #c70025;\r\n  border-radius: 0 0 25px 25px;\r\n  padding: 16px;\r\n  color: #efefef;\r\n  font-family: 'Verdana', sans-serif;\r\n  text-align: center;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.556);\r\n}\r\n\r\n.online-order__container {\r\n  margin-top: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.online-order__container button {\r\n  width: 200px;\r\n  font-family: 'Verdana', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  padding: 5px 0;\r\n  border-radius: 25px;\r\n  border: none;\r\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.582);\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.online-order__container button:hover {\r\n  background-color: #c70024ca;\r\n}\r\n\r\n.online-order__container button:active {\r\n  background-color: white;\r\n  transform: scale(0.9);\r\n}\r\n\r\n.meals-page__content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 16px;\r\n  background-color: #c70025;\r\n  border-radius: 5px;\r\n  width: 550px;\r\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.556);\r\n}\r\n\r\n.meal-container {\r\n  font-family: \"Verdana\", sans-serif;\r\n  width: 100%;\r\n  padding: 16px;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70024a7;\r\n  border-radius: 15px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 30px 1fr 1fr 30px;\r\n  grid-column-gap: 16px;\r\n}\r\n\r\n.meal-container:nth-of-type(even) {\r\n  grid-template-areas:  \"image name\"\r\n                        \"image description\"\r\n                        \"image description\"\r\n                        \"image price\";\r\n}\r\n\r\n.meal-container:nth-of-type(odd) {\r\n  grid-template-areas:  \"name image\"\r\n                        \"description image\"\r\n                        \"description image\"\r\n                        \"price image\";\r\n}\r\n\r\n.meal-image {\r\n  grid-area: image;\r\n  max-width:150px;\r\n  max-height: 150px;\r\n  place-self: center center;\r\n  margin: 10px;\r\n}\r\n\r\n.meal-name {\r\n  grid-area: name;\r\n  font-weight: 700;\r\n}\r\n\r\n.meal-description {\r\n  grid-area: description;\r\n}\r\n\r\n.meal-price {\r\n  grid-area: price;\r\n  justify-self: right;\r\n  font-weight: 700;\r\n}\r\n\r\nfooter {\r\n  height: 10vh;\r\n  width: 100%;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  font-family: 'Verdana', sans-serif;\r\n  font-size: 0.8rem;\r\n  color: #efefef;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 40rem) {\r\n  .logo-container {\r\n    flex-direction: column;\r\n    gap: 16px;\r\n    align-items: center;\r\n  }\r\n\r\n  .logo-container h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .catchphrase {\r\n    text-align: center;\r\n  }\r\n\r\n  #dynamic-content__container {\r\n    margin: 50px 10px;\r\n  }\r\n\r\n  .meals-page__content-wrapper {\r\n    width: 90%;\r\n  }\r\n\r\n  .meal-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .meal-price {\r\n    align-self: end;\r\n  }\r\n}"],"sourceRoot":""}]);
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
  infos_container.appendChild(infos_adress);
  const infos_telephone = document.createElement('div');
  infos_telephone.classList.add('home-page__infos');
  infos_telephone.textContent = '(575) 521-1826';
  infos_container.appendChild(infos_telephone);

  const order_container = document.createElement('div');
  order_container.classList.add('order-container');
  infos_container.appendChild(order_container);
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
  meal_price.textContent = '$ ' + price;
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
/* harmony export */   "footerDOMLoad": () => (/* binding */ footerDOMLoad),
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
  image_logo.src = './images/logo.svg';
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

const footerDOMLoad = () => {
  const footer = document.createElement('footer');
  CONTENT_DIV.appendChild(footer);
  const footer_infos = document.createElement('div');
  footer_infos.classList.add('footer-content');
  footer.appendChild(footer_infos);
  const footer_copyright = document.createElement('div');
  footer_copyright.textContent = 'All images are coming from the card game "Sushi Go!". Logo illustration by unDraw.';
  footer.appendChild(footer_copyright);
  const footer_copyright_bis = document.createElement('div');
  footer_copyright_bis.textContent = '\u00A92023 stagnant-sys';
  footer.appendChild(footer_copyright_bis);
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
const image_path = './images/meals/';
const lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

(0,_page_load__WEBPACK_IMPORTED_MODULE_2__.headerDOMLoad)();  // Load static content of the page
(0,_page_load__WEBPACK_IMPORTED_MODULE_2__.tabsDOMLoad)();
(0,_page_load__WEBPACK_IMPORTED_MODULE_2__.dynamicContentContainerLoad)();
(0,_page_load__WEBPACK_IMPORTED_MODULE_2__.footerDOMLoad)();
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
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_4__.createMeal)('Dumpling', lorem_ipsum, 4, image_path + 'dumpling.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_4__.createMeal)('Maki', lorem_ipsum, 5, image_path + 'maki.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_4__.createMeal)('Egg Nigiri', lorem_ipsum, 3, image_path + 'nigiri-egg.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_4__.createMeal)('Salmon Nigiri', lorem_ipsum, 3, image_path + 'nigiri-salmon.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_4__.createMeal)('Squid Nigiri', lorem_ipsum, 3, image_path + 'nigiri-squid.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_4__.createMeal)('Sashimi', lorem_ipsum, 9, image_path +'sashimi.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_4__.createMeal)('Tempura', lorem_ipsum, 7, image_path + 'tempura.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_4__.createMeal)('Wasabi', lorem_ipsum, 1, image_path + 'wasabi.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_4__.createMeal)('Pudding', lorem_ipsum, 5, image_path + 'pudding.png');
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sT0FBTyxLQUFLLE9BQU8sT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0dBQXdHLFdBQVcsZUFBZSw0QkFBNEIsS0FBSyxjQUFjLG1CQUFtQixLQUFL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QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzVEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnQztBQUNnRDtBQUN2RDtBQUNlO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBYSxLQUFLO0FBQ2xCLHVEQUFXO0FBQ1gsdUVBQTJCO0FBQzNCLHlEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQWdCO0FBQ2xCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOERBQWlCO0FBQ25CLEVBQUUsdURBQVU7QUFDWixFQUFFLHVEQUFVO0FBQ1osRUFBRSx1REFBVTtBQUNaLEVBQUUsdURBQVU7QUFDWixFQUFFLHVEQUFVO0FBQ1osRUFBRSx1REFBVTtBQUNaLEVBQUUsdURBQVU7QUFDWixFQUFFLHVEQUFVO0FBQ1osRUFBRSx1REFBVTtBQUNaLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUtdGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZWFscy1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG90dGErT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiBtYXJnaW46IDA7XFxyXFxuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGNvbG9yOiAjZWZlZmVmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MDAyNTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggI2M3MDAyNDc5O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWNvbnRhaW5lciBoMSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvdHRhIE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbG9nb19faW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0Y2hwaHJhc2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjllNmU5O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmMmY0O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFicy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC10YWIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgY29sb3I6ICNhYWFhYWE7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvdHRhIE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgI2M3MDAyNTtcXHJcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI0Y2E7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNkeW5hbWljLWNvbnRlbnRfX2NvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDUwcHggMjAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXBhZ2VfX3RpdGxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzAwMjU7XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG90dGEgT25lXFxcIjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1wYWdlX19pbmZvcyB7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYzcwMDI1O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2M3MDAyNTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzAwMjU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMjVweCAyNXB4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGNvbG9yOiAjZWZlZmVmO1xcclxcbiAgZm9udC1mYW1pbHk6ICdWZXJkYW5hJywgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjU1Nik7XFxyXFxufVxcclxcblxcclxcbi5vbmxpbmUtb3JkZXJfX2NvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub25saW5lLW9yZGVyX19jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNTgyKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ub25saW5lLW9yZGVyX19jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzAwMjRjYTtcXHJcXG59XFxyXFxuXFxyXFxuLm9ubGluZS1vcmRlcl9fY29udGFpbmVyIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5tZWFscy1wYWdlX19jb250ZW50LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzAwMjU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB3aWR0aDogNTUwcHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjU1Nik7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lciB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlZlcmRhbmFcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNjNzAwMjRhNztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDFmciAxZnIgMzBweDtcXHJcXG4gIGdyaWQtY29sdW1uLWdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICBcXFwiaW1hZ2UgbmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiaW1hZ2UgZGVzY3JpcHRpb25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImltYWdlIGRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJpbWFnZSBwcmljZVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICBcXFwibmFtZSBpbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiZGVzY3JpcHRpb24gaW1hZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRlc2NyaXB0aW9uIGltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJwcmljZSBpbWFnZVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltYWdlIHtcXHJcXG4gIGdyaWQtYXJlYTogaW1hZ2U7XFxyXFxuICBtYXgtd2lkdGg6MTUwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlciBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLW5hbWUge1xcclxcbiAgZ3JpZC1hcmVhOiBuYW1lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGVzY3JpcHRpb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcHJpY2Uge1xcclxcbiAgZ3JpZC1hcmVhOiBwcmljZTtcXHJcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdWZXJkYW5hJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MHJlbSkge1xcclxcbiAgLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28tY29udGFpbmVyIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhdGNocGhyYXNlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2R5bmFtaWMtY29udGVudF9fY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVhbHMtcGFnZV9fY29udGVudC13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFsLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVhbC1wcmljZSB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtDQUNDLFNBQVM7Q0FDVCxzQkFBc0I7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osNENBQTRDO0VBQzVDLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTs7O3FDQUdtQztBQUNyQzs7QUFFQTtFQUNFOzs7cUNBR21DO0FBQ3JDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvdHRhK09uZSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gbWFyZ2luOiAwO1xcclxcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzAwMjU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4ICNjNzAwMjQ3OTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIgaDEge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxvZ29fX2ltYWdlIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGNocGhyYXNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG90dGEgT25lXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZTZlOTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjJmNDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGFiIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNjNzAwMjU7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MDAyNGNhO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jZHluYW1pYy1jb250ZW50X19jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiA1MHB4IDIwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1wYWdlX190aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvdHRhIE9uZVxcXCI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtcGFnZV9faW5mb3Mge1xcclxcbiAgZm9udC1mYW1pbHk6ICdWZXJkYW5hJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2M3MDAyNTtcXHJcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNjNzAwMjU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI1cHggMjVweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41NTYpO1xcclxcbn1cXHJcXG5cXHJcXG4ub25saW5lLW9yZGVyX19jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9ubGluZS1vcmRlcl9fY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjU4Mik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLm9ubGluZS1vcmRlcl9fY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI0Y2E7XFxyXFxufVxcclxcblxcclxcbi5vbmxpbmUtb3JkZXJfX2NvbnRhaW5lciBidXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtcGFnZV9fY29udGVudC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDU1MHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41NTYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJWZXJkYW5hXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjYzcwMDI0YTc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnIgMWZyIDMwcHg7XFxyXFxuICBncmlkLWNvbHVtbi1nYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXFxcImltYWdlIG5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImltYWdlIGRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJpbWFnZSBkZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiaW1hZ2UgcHJpY2VcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXFxcIm5hbWUgaW1hZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRlc2NyaXB0aW9uIGltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJkZXNjcmlwdGlvbiBpbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwicHJpY2UgaW1hZ2VcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWFnZSB7XFxyXFxuICBncmlkLWFyZWE6IGltYWdlO1xcclxcbiAgbWF4LXdpZHRoOjE1MHB4O1xcclxcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1uYW1lIHtcXHJcXG4gIGdyaWQtYXJlYTogbmFtZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXByaWNlIHtcXHJcXG4gIGdyaWQtYXJlYTogcHJpY2U7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGNvbG9yOiAjZWZlZmVmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDByZW0pIHtcXHJcXG4gIC5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvLWNvbnRhaW5lciBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXRjaHBocmFzZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkeW5hbWljLWNvbnRlbnRfX2NvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogNTBweCAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lYWxzLXBhZ2VfX2NvbnRlbnQtd3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVhbC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lYWwtcHJpY2Uge1xcclxcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCBjcmVhdGVCb2R5RWxlbWVudCA9IChlbGVtZW50VHlwZSwgZWxlbWVudENsYXNzLCBlbGVtZW50Q29udGVudCwgcGFyZW50RWxlbWVudCkgPT4ge1xyXG4gIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XHJcbiAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnRDbGFzcyk7XHJcbiAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRDb250ZW50O1xyXG4gIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVCb2R5RWxlbWVudCB9OyIsImNvbnN0IENPTlRFTlRfRElWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuY29uc3QgZHluYW1pY0NvbnRlbnRDb250YWluZXI9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5keW5hbWljLWNvbnRlbnRfX2NvbnRhaW5lcicpO1xyXG5jb25zdCBIT01FX1RBQl9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS10YWJfX2J1dHRvbicpO1xyXG5jb25zdCBNRUFMU19UQUJfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWxzLXRhYl9fYnV0dG9uJyk7XHJcblxyXG5jb25zdCBob21lX3RhYl9jb250ZW50ID0gKGRpdikgPT4ge1xyXG4gIGNvbnN0IGluZm9zX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChpbmZvc19jb250YWluZXIpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlX190aXRsZScpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gR28hIFN1c2hpcyc7XHJcbiAgaW5mb3NfY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgY29uc3QgaW5mb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbmZvcy5jbGFzc0xpc3QuYWRkKCdob21lLXBhZ2VfX2luZm9zJyk7XHJcbiAgaW5mb3MudGV4dENvbnRlbnQgPSAnV2Ugc2VydmUgdGhlIGJlc3Qgc3VzaGlzIHRoaXMgc2lkZSBvZiB0aGUgb2NlYW4hJztcclxuICBjb25zdCBpbmZvc19zZWxsaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5mb3Nfc2VsbGluZy5jbGFzc0xpc3QuYWRkKCdob21lLXBhZ2VfX2luZm9zJyk7XHJcbiAgaW5mb3Nfc2VsbGluZy50ZXh0Q29udGVudCA9ICdDb21lIHZpc2l0IHVzIG9yIGdpdmUgdXMgYSBjYWxsIHRvIG9yZGVyIHlvdXIgc3VzaGlzIGFuZCBnZXQgdGhlbSBmcmVzaCBpbiBsZXNzIHRoYW4gYW4gaG91ci4nO1xyXG4gIGluZm9zX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvcyk7XHJcbiAgaW5mb3NfY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9zX3NlbGxpbmcpO1xyXG4gIGNvbnN0IGluZm9zX2FkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluZm9zX2FkcmVzcy50ZXh0Q29udGVudCA9ICcxMjc0IEdvbGYgQ2x1YiBSZCwgTGFzIENydWNlcyBOWTg4MDExJztcclxuICBpbmZvc19hZHJlc3MuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlX19pbmZvcycpO1xyXG4gIGluZm9zX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvc19hZHJlc3MpO1xyXG4gIGNvbnN0IGluZm9zX3RlbGVwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluZm9zX3RlbGVwaG9uZS5jbGFzc0xpc3QuYWRkKCdob21lLXBhZ2VfX2luZm9zJyk7XHJcbiAgaW5mb3NfdGVsZXBob25lLnRleHRDb250ZW50ID0gJyg1NzUpIDUyMS0xODI2JztcclxuICBpbmZvc19jb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb3NfdGVsZXBob25lKTtcclxuXHJcbiAgY29uc3Qgb3JkZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3JkZXJfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWNvbnRhaW5lcicpO1xyXG4gIGluZm9zX2NvbnRhaW5lci5hcHBlbmRDaGlsZChvcmRlcl9jb250YWluZXIpO1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVzZXJ2YXRpb24udGV4dENvbnRlbnQgPSAnTWFrZSBhIHJlc2VydmF0aW9uOic7XHJcbiAgb3JkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uKTtcclxuICBjb25zdCByZXNlcnZhdGlvbl90ZWxlcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByZXNlcnZhdGlvbl90ZWxlcGhvbmUudGV4dENvbnRlbnQgPSAnR2l2ZSB1cyBhIGNhbGw6ICg1NzUpIDUyMS0xODI2IG9yIHNlbmQgdXMgYW4gZW1haWw6IGdvc3VzaGlzQG1ha2ltYWlsLmNvbSc7XHJcbiAgcmVzZXJ2YXRpb24uYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25fdGVsZXBob25lKTtcclxuICBjb25zdCBvbmxpbmVfb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvbmxpbmVfb3JkZXIuY2xhc3NMaXN0LmFkZCgnb25saW5lLW9yZGVyX19jb250YWluZXInKTtcclxuICBvbmxpbmVfb3JkZXIudGV4dENvbnRlbnQgPSAnWW91IGNhbiBhbHNvIG9yZGVyIGZyb20gb3VyIHdlYnNpdGU6JztcclxuICBvcmRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQob25saW5lX29yZGVyKTtcclxuICBjb25zdCBvcmRlcl9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBvcmRlcl9idXR0b24udGV4dENvbnRlbnQgPSAnT1JERVIgTk9XJztcclxuICBvbmxpbmVfb3JkZXIuYXBwZW5kQ2hpbGQob3JkZXJfYnV0dG9uKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgeyBob21lX3RhYl9jb250ZW50IH07IiwiY29uc3QgQ09OVEVOVF9ESVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5jb25zdCBkeW5hbWljQ29udGVudENvbnRhaW5lcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR5bmFtaWMtY29udGVudF9fY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBtZWFsc190YWJfY29udGVudCA9IChkaXYpID0+IHtcclxuICBjb25zdCBtZWFsc19wYWdlX2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZWFsc19wYWdlX2NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVhbHMtcGFnZV9fY29udGVudC13cmFwcGVyJyk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKG1lYWxzX3BhZ2VfY29udGVudCk7XHJcbn07XHJcblxyXG5sZXQgY3JlYXRlTWVhbCA9IChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlKSA9PiB7XHJcbiAgY29uc3QgbWVhbHNfcGFnZV9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzLXBhZ2VfX2NvbnRlbnQtd3JhcHBlcicpO1xyXG4gIGNvbnN0IG1lYWxfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVhbC1jb250YWluZXInKTtcclxuICBtZWFsc19wYWdlX2NvbnRlbnQuYXBwZW5kQ2hpbGQobWVhbF9jb250YWluZXIpO1xyXG5cclxuICBjb25zdCBtZWFsX2ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbWVhbF9pbWFnZS5jbGFzc0xpc3QuYWRkKCdtZWFsLWltYWdlJyk7XHJcbiAgbWVhbF9pbWFnZS5zcmMgPSBpbWFnZTtcclxuICBtZWFsX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsX2ltYWdlKTtcclxuXHJcbiAgY29uc3QgbWVhbF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbF9uYW1lLmNsYXNzTGlzdC5hZGQoJ21lYWwtbmFtZScpO1xyXG4gIG1lYWxfbmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgbWVhbF9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVhbF9uYW1lKTtcclxuXHJcbiAgY29uc3QgbWVhbF9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbF9kZXNjLmNsYXNzTGlzdC5hZGQoJ21lYWwtZGVzY3JpcHRpb24nKTtcclxuICBtZWFsX2Rlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICBtZWFsX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsX2Rlc2MpO1xyXG5cclxuICBjb25zdCBtZWFsX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbF9wcmljZS5jbGFzc0xpc3QuYWRkKCdtZWFsLXByaWNlJyk7XHJcbiAgbWVhbF9wcmljZS50ZXh0Q29udGVudCA9ICckICcgKyBwcmljZTtcclxuICBtZWFsX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsX3ByaWNlKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IG1lYWxzX3RhYl9jb250ZW50LCBjcmVhdGVNZWFsIH07IiwiY29uc3QgQ09OVEVOVF9ESVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuY29uc3QgaGVhZGVyRE9NTG9hZCA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgQ09OVEVOVF9ESVYuYXBwZW5kQ2hpbGQoaGVhZGVyX2NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGxvZ29fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG9nb19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1jb250YWluZXInKTtcclxuICBoZWFkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29fY29udGFpbmVyKTtcclxuICBjb25zdCB0ZXh0X2xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIHRleHRfbG9nby50ZXh0Q29udGVudD0nR+KspCEgU3VzaGlzJztcclxuICBsb2dvX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0X2xvZ28pO1xyXG4gIGNvbnN0IGltYWdlX2xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWFnZV9sb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvX19pbWFnZScpO1xyXG4gIGltYWdlX2xvZ28uc3JjID0gJy4vaW1hZ2VzL2xvZ28uc3ZnJztcclxuICBsb2dvX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZV9sb2dvKTtcclxuXHJcbiAgY29uc3QgY2F0Y2hwaHJhc2VfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2F0Y2hwaHJhc2VfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhdGNocGhyYXNlJyk7XHJcbiAgY2F0Y2hwaHJhc2VfY29udGFpbmVyLnRleHRDb250ZW50PWBGYXN0ZXIgdGhhbiB5b3UgY2FuIHNheSAn56uc5a6u44Gu5LmZ5aer44Gu5YWD57WQ44Gu5Y+W44KK5aSW44GXJyFgO1xyXG4gIGhlYWRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0Y2hwaHJhc2VfY29udGFpbmVyKTtcclxufTtcclxuXHJcbmNvbnN0IHRhYnNET01Mb2FkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRhYnNfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFic19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFicy1jb250YWluZXInKTtcclxuICBDT05URU5UX0RJVi5hcHBlbmRDaGlsZCh0YWJzX2NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGhvbWVfdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG9tZV90YWIuY2xhc3NMaXN0LmFkZCgnY29udGVudC10YWInKTtcclxuICBob21lX3RhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtdGFiX19idXR0b24nKTtcclxuICBob21lX3RhYi50ZXh0Q29udGVudCA9ICdPdXIgcmVzdGF1cmFudCc7XHJcbiAgdGFic19jb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZV90YWIpO1xyXG5cclxuICBjb25zdCBtZWFsc190YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZWFsc190YWIuY2xhc3NMaXN0LmFkZCgnY29udGVudC10YWInKTtcclxuICBtZWFsc190YWIuc2V0QXR0cmlidXRlKCdpZCcsICdtZWFscy10YWJfX2J1dHRvbicpO1xyXG4gIG1lYWxzX3RhYi50ZXh0Q29udGVudCA9ICdPdXIgbWVhbHMnO1xyXG4gIHRhYnNfY29udGFpbmVyLmFwcGVuZENoaWxkKG1lYWxzX3RhYik7XHJcbn07XHJcblxyXG5jb25zdCBkeW5hbWljQ29udGVudENvbnRhaW5lckxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZHluYW1pY0NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkeW5hbWljQ29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R5bmFtaWMtY29udGVudF9fY29udGFpbmVyJyk7XHJcbiAgQ09OVEVOVF9ESVYuYXBwZW5kQ2hpbGQoZHluYW1pY0NvbnRlbnRDb250YWluZXIpO1xyXG59O1xyXG5cclxuY29uc3QgZm9vdGVyRE9NTG9hZCA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBDT05URU5UX0RJVi5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG4gIGNvbnN0IGZvb3Rlcl9pbmZvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvb3Rlcl9pbmZvcy5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGVudCcpO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJfaW5mb3MpO1xyXG4gIGNvbnN0IGZvb3Rlcl9jb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmb290ZXJfY29weXJpZ2h0LnRleHRDb250ZW50ID0gJ0FsbCBpbWFnZXMgYXJlIGNvbWluZyBmcm9tIHRoZSBjYXJkIGdhbWUgXCJTdXNoaSBHbyFcIi4gTG9nbyBpbGx1c3RyYXRpb24gYnkgdW5EcmF3Lic7XHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlcl9jb3B5cmlnaHQpO1xyXG4gIGNvbnN0IGZvb3Rlcl9jb3B5cmlnaHRfYmlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9vdGVyX2NvcHlyaWdodF9iaXMudGV4dENvbnRlbnQgPSAnXFx1MDBBOTIwMjMgc3RhZ25hbnQtc3lzJztcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyX2NvcHlyaWdodF9iaXMpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgaGVhZGVyRE9NTG9hZCwgdGFic0RPTUxvYWQsIGR5bmFtaWNDb250ZW50Q29udGFpbmVyTG9hZCwgZm9vdGVyRE9NTG9hZCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVCb2R5RWxlbWVudCB9IGZyb20gJy4vY3JlYXRlRWxlbWVudHMnO1xyXG5pbXBvcnQgeyBoZWFkZXJET01Mb2FkLCB0YWJzRE9NTG9hZCwgZHluYW1pY0NvbnRlbnRDb250YWluZXJMb2FkLCBmb290ZXJET01Mb2FkIH0gZnJvbSAnLi9wYWdlLWxvYWQnO1xyXG5pbXBvcnQgeyBob21lX3RhYl9jb250ZW50IH0gZnJvbSAnLi9ob21lLXRhYic7XHJcbmltcG9ydCB7IG1lYWxzX3RhYl9jb250ZW50LCBjcmVhdGVNZWFsIH0gZnJvbSAnLi9tZWFscy1wYWdlJztcclxuXHJcbmNvbnN0IENPTlRFTlRfRElWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuY29uc3QgaW1hZ2VfcGF0aCA9ICcuL2ltYWdlcy9tZWFscy8nO1xyXG5jb25zdCBsb3JlbV9pcHN1bSA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4nO1xyXG5cclxuaGVhZGVyRE9NTG9hZCgpOyAgLy8gTG9hZCBzdGF0aWMgY29udGVudCBvZiB0aGUgcGFnZVxyXG50YWJzRE9NTG9hZCgpO1xyXG5keW5hbWljQ29udGVudENvbnRhaW5lckxvYWQoKTtcclxuZm9vdGVyRE9NTG9hZCgpO1xyXG5jb25zdCBIT01FX1RBQl9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS10YWJfX2J1dHRvbicpO1xyXG5jb25zdCBNRUFMU19UQUJfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWxzLXRhYl9fYnV0dG9uJyk7XHJcbmNvbnN0IGR5bmFtaWNDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R5bmFtaWMtY29udGVudF9fY29udGFpbmVyJyk7XHJcblxyXG4vLyBMb2FkIGhvbWUgdGFiIG9uIHN0YXJ0dXBcclxuaG9tZV90YWJfY29udGVudChkeW5hbWljQ29udGVudENvbnRhaW5lcik7XHJcbkhPTUVfVEFCX0JVVFRPTi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG5cclxuLy8gQ3JlYXRlIGR5bmFtaWMgY29udGVudCB3aGVuIGEgdGFiIGlzIGNsaWNrZWRcclxuSE9NRV9UQUJfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIEhPTUVfVEFCX0JVVFRPTi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gIE1FQUxTX1RBQl9CVVRUT04uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICBkeW5hbWljQ29udGVudENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGhvbWVfdGFiX2NvbnRlbnQoZHluYW1pY0NvbnRlbnRDb250YWluZXIpO1xyXG59KTtcclxuTUVBTFNfVEFCX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBNRUFMU19UQUJfQlVUVE9OLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgSE9NRV9UQUJfQlVUVE9OLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgZHluYW1pY0NvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBtZWFsc190YWJfY29udGVudChkeW5hbWljQ29udGVudENvbnRhaW5lcik7XHJcbiAgY3JlYXRlTWVhbCgnRHVtcGxpbmcnLCBsb3JlbV9pcHN1bSwgNCwgaW1hZ2VfcGF0aCArICdkdW1wbGluZy5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdNYWtpJywgbG9yZW1faXBzdW0sIDUsIGltYWdlX3BhdGggKyAnbWFraS5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdFZ2cgTmlnaXJpJywgbG9yZW1faXBzdW0sIDMsIGltYWdlX3BhdGggKyAnbmlnaXJpLWVnZy5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdTYWxtb24gTmlnaXJpJywgbG9yZW1faXBzdW0sIDMsIGltYWdlX3BhdGggKyAnbmlnaXJpLXNhbG1vbi5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdTcXVpZCBOaWdpcmknLCBsb3JlbV9pcHN1bSwgMywgaW1hZ2VfcGF0aCArICduaWdpcmktc3F1aWQucG5nJyk7XHJcbiAgY3JlYXRlTWVhbCgnU2FzaGltaScsIGxvcmVtX2lwc3VtLCA5LCBpbWFnZV9wYXRoICsnc2FzaGltaS5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdUZW1wdXJhJywgbG9yZW1faXBzdW0sIDcsIGltYWdlX3BhdGggKyAndGVtcHVyYS5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdXYXNhYmknLCBsb3JlbV9pcHN1bSwgMSwgaW1hZ2VfcGF0aCArICd3YXNhYmkucG5nJyk7XHJcbiAgY3JlYXRlTWVhbCgnUHVkZGluZycsIGxvcmVtX2lwc3VtLCA1LCBpbWFnZV9wYXRoICsgJ3B1ZGRpbmcucG5nJyk7XHJcbn0pO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9