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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n margin: 0;\r\n box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nheader {\r\n  color: #efefef;\r\n  background-color: #c70025;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 16px;\r\n  box-shadow: 0 5px 10px #c7002479;\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.logo-container h1 {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 4rem;\r\n  margin: 0;\r\n}\r\n\r\n.header-logo__image {\r\n  height: 5rem;\r\n}\r\n\r\n.catchphrase {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#content {\r\n  min-height: 100%;\r\n  background-color: #f9e6e9;\r\n}\r\n\r\n.main-content {\r\n  padding: 3rem;\r\n  background-color: #fcf2f4;\r\n  height: 100%;\r\n}\r\n\r\n.tabs-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.content-tab {\r\n  cursor: pointer;\r\n  width: 200px;\r\n  color: #aaaaaa;\r\n  padding: 1rem 0;\r\n  text-align: center;\r\n  font-family: \"Potta One\", sans-serif;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70025;\r\n  border-top: none;\r\n  border-radius: 0 0 10px 10px;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.selected {\r\n  background-color: #c70024ca;\r\n  color: white;\r\n}\r\n\r\n#dynamic-content__container {\r\n  margin: 50px 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.home-page__title {\r\n  background-color: #c70025;\r\n  color: #efefef;\r\n  font-family: \"Potta One\";\r\n  text-align: center;\r\n  border-radius: 25px 25px 0 0;\r\n  font-size: 2rem;\r\n  padding: 10px;\r\n}\r\n\r\n.home-page__infos {\r\n  font-family: 'Verdana', sans-serif;\r\n  border-left: 5px solid #c70025;\r\n  border-right: 5px solid #c70025;\r\n  padding: 5px 16px;\r\n  text-align: center;\r\n}\r\n\r\n.order-container {\r\n  background-color: #c70025;\r\n  border-radius: 0 0 25px 25px;\r\n  padding: 16px;\r\n  color: #efefef;\r\n  font-family: 'Verdana', sans-serif;\r\n  text-align: center;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.556);\r\n}\r\n\r\n.online-order__container {\r\n  margin-top: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.online-order__container button {\r\n  width: 200px;\r\n  font-family: 'Verdana', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  padding: 5px 0;\r\n  border-radius: 25px;\r\n  border: none;\r\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.582);\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.online-order__container button:hover {\r\n  background-color: #c70024ca;\r\n}\r\n\r\n.online-order__container button:active {\r\n  background-color: white;\r\n  transform: scale(0.9);\r\n}\r\n\r\n.meals-page__content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 16px;\r\n  background-color: #c70025;\r\n  border-radius: 5px;\r\n  width: 550px;\r\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.556);\r\n}\r\n\r\n.meal-container {\r\n  font-family: \"Verdana\", sans-serif;\r\n  width: 100%;\r\n  padding: 16px;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70024a7;\r\n  border-radius: 15px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 30px 1fr 1fr 30px;\r\n  grid-column-gap: 16px;\r\n}\r\n\r\n.meal-container:nth-of-type(even) {\r\n  grid-template-areas:  \"image name\"\r\n                        \"image description\"\r\n                        \"image description\"\r\n                        \"image price\";\r\n}\r\n\r\n.meal-container:nth-of-type(odd) {\r\n  grid-template-areas:  \"name image\"\r\n                        \"description image\"\r\n                        \"description image\"\r\n                        \"price image\";\r\n}\r\n\r\n.meal-image {\r\n  grid-area: image;\r\n  max-width:150px;\r\n  max-height: 150px;\r\n  place-self: center center;\r\n  margin: 10px;\r\n}\r\n\r\n.meal-name {\r\n  grid-area: name;\r\n  font-weight: 700;\r\n}\r\n\r\n.meal-description {\r\n  grid-area: description;\r\n}\r\n\r\n.meal-price {\r\n  grid-area: price;\r\n  justify-self: right;\r\n  font-weight: 700;\r\n  margin-top: 1rem;\r\n}\r\n\r\nfooter {\r\n  height: 10vh;\r\n  width: 100%;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  font-family: 'Verdana', sans-serif;\r\n  font-size: 0.8rem;\r\n  color: #efefef;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 40rem) {\r\n  .logo-container {\r\n    flex-direction: column;\r\n    gap: 16px;\r\n    align-items: center;\r\n  }\r\n\r\n  .logo-container h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .catchphrase {\r\n    text-align: center;\r\n  }\r\n\r\n  #dynamic-content__container {\r\n    margin: 50px 10px;\r\n  }\r\n\r\n  .meals-page__content-wrapper {\r\n    width: 90%;\r\n  }\r\n\r\n  .meal-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .meal-price {\r\n    align-self: end;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');\r\n\r\n* {\r\n margin: 0;\r\n box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nheader {\r\n  color: #efefef;\r\n  background-color: #c70025;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 16px;\r\n  box-shadow: 0 5px 10px #c7002479;\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.logo-container h1 {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 4rem;\r\n  margin: 0;\r\n}\r\n\r\n.header-logo__image {\r\n  height: 5rem;\r\n}\r\n\r\n.catchphrase {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#content {\r\n  min-height: 100%;\r\n  background-color: #f9e6e9;\r\n}\r\n\r\n.main-content {\r\n  padding: 3rem;\r\n  background-color: #fcf2f4;\r\n  height: 100%;\r\n}\r\n\r\n.tabs-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.content-tab {\r\n  cursor: pointer;\r\n  width: 200px;\r\n  color: #aaaaaa;\r\n  padding: 1rem 0;\r\n  text-align: center;\r\n  font-family: \"Potta One\", sans-serif;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70025;\r\n  border-top: none;\r\n  border-radius: 0 0 10px 10px;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.selected {\r\n  background-color: #c70024ca;\r\n  color: white;\r\n}\r\n\r\n#dynamic-content__container {\r\n  margin: 50px 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.home-page__title {\r\n  background-color: #c70025;\r\n  color: #efefef;\r\n  font-family: \"Potta One\";\r\n  text-align: center;\r\n  border-radius: 25px 25px 0 0;\r\n  font-size: 2rem;\r\n  padding: 10px;\r\n}\r\n\r\n.home-page__infos {\r\n  font-family: 'Verdana', sans-serif;\r\n  border-left: 5px solid #c70025;\r\n  border-right: 5px solid #c70025;\r\n  padding: 5px 16px;\r\n  text-align: center;\r\n}\r\n\r\n.order-container {\r\n  background-color: #c70025;\r\n  border-radius: 0 0 25px 25px;\r\n  padding: 16px;\r\n  color: #efefef;\r\n  font-family: 'Verdana', sans-serif;\r\n  text-align: center;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.556);\r\n}\r\n\r\n.online-order__container {\r\n  margin-top: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.online-order__container button {\r\n  width: 200px;\r\n  font-family: 'Verdana', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  padding: 5px 0;\r\n  border-radius: 25px;\r\n  border: none;\r\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.582);\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.online-order__container button:hover {\r\n  background-color: #c70024ca;\r\n}\r\n\r\n.online-order__container button:active {\r\n  background-color: white;\r\n  transform: scale(0.9);\r\n}\r\n\r\n.meals-page__content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 16px;\r\n  background-color: #c70025;\r\n  border-radius: 5px;\r\n  width: 550px;\r\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.556);\r\n}\r\n\r\n.meal-container {\r\n  font-family: \"Verdana\", sans-serif;\r\n  width: 100%;\r\n  padding: 16px;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70024a7;\r\n  border-radius: 15px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 30px 1fr 1fr 30px;\r\n  grid-column-gap: 16px;\r\n}\r\n\r\n.meal-container:nth-of-type(even) {\r\n  grid-template-areas:  \"image name\"\r\n                        \"image description\"\r\n                        \"image description\"\r\n                        \"image price\";\r\n}\r\n\r\n.meal-container:nth-of-type(odd) {\r\n  grid-template-areas:  \"name image\"\r\n                        \"description image\"\r\n                        \"description image\"\r\n                        \"price image\";\r\n}\r\n\r\n.meal-image {\r\n  grid-area: image;\r\n  max-width:150px;\r\n  max-height: 150px;\r\n  place-self: center center;\r\n  margin: 10px;\r\n}\r\n\r\n.meal-name {\r\n  grid-area: name;\r\n  font-weight: 700;\r\n}\r\n\r\n.meal-description {\r\n  grid-area: description;\r\n}\r\n\r\n.meal-price {\r\n  grid-area: price;\r\n  justify-self: right;\r\n  font-weight: 700;\r\n  margin-top: 1rem;\r\n}\r\n\r\nfooter {\r\n  height: 10vh;\r\n  width: 100%;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  font-family: 'Verdana', sans-serif;\r\n  font-size: 0.8rem;\r\n  color: #efefef;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 40rem) {\r\n  .logo-container {\r\n    flex-direction: column;\r\n    gap: 16px;\r\n    align-items: center;\r\n  }\r\n\r\n  .logo-container h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .catchphrase {\r\n    text-align: center;\r\n  }\r\n\r\n  #dynamic-content__container {\r\n    margin: 50px 10px;\r\n  }\r\n\r\n  .meals-page__content-wrapper {\r\n    width: 90%;\r\n  }\r\n\r\n  .meal-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .meal-price {\r\n    align-self: end;\r\n  }\r\n}"],"sourceRoot":""}]);
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
  footer_copyright.textContent = 'All images are coming from the card game "Sushi Go!". Logo illustration by unDraw. Favicon created by Freepik - Flaticon';
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
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-tab */ "./src/home-tab.js");
/* harmony import */ var _meals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meals-page */ "./src/meals-page.js");





const CONTENT_DIV = document.getElementById('content');
const image_path = './images/meals/';
const lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.headerDOMLoad)();  // Load static content of the page
(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.tabsDOMLoad)();
(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.dynamicContentContainerLoad)();
(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.footerDOMLoad)();
const HOME_TAB_BUTTON = document.getElementById('home-tab__button');
const MEALS_TAB_BUTTON = document.getElementById('meals-tab__button');
const dynamicContentContainer = document.getElementById('dynamic-content__container');

// Load home tab on startup
(0,_home_tab__WEBPACK_IMPORTED_MODULE_2__.home_tab_content)(dynamicContentContainer);
HOME_TAB_BUTTON.classList.add('selected');

// Create dynamic content when a tab is clicked
HOME_TAB_BUTTON.addEventListener('click', () => {
  HOME_TAB_BUTTON.classList.add('selected');
  MEALS_TAB_BUTTON.classList.remove('selected');
  dynamicContentContainer.textContent = '';
  (0,_home_tab__WEBPACK_IMPORTED_MODULE_2__.home_tab_content)(dynamicContentContainer);
});
MEALS_TAB_BUTTON.addEventListener('click', () => {
  MEALS_TAB_BUTTON.classList.add('selected');
  HOME_TAB_BUTTON.classList.remove('selected');
  dynamicContentContainer.textContent = '';
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_3__.meals_tab_content)(dynamicContentContainer);
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_3__.createMeal)('Gyoza', 'Our finest steamed dumpling filled with a minced pork stuffing.', 4, image_path + 'dumpling.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_3__.createMeal)('Maki', 'Juicy rice rolled in seaweed, complete with your choice of filling (crab, tuna, salmon, vegetables).', 5, image_path + 'maki.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_3__.createMeal)('Egg Nigiri', 'A delicious nigiri topped with a slice of omelette.', 3, image_path + 'nigiri-egg.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_3__.createMeal)('Salmon Nigiri', 'An exquisite nigiri topped with salmon sashimi.', 4, image_path + 'nigiri-salmon.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_3__.createMeal)('Squid Nigiri', 'A luscious nigiri topped with fresh squid.', 3, image_path + 'nigiri-squid.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_3__.createMeal)('Sashimi', 'A yummy selection of our best sashimis (bonito, salmon, bluefin tuna).', 9, image_path +'sashimi.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_3__.createMeal)('Shrimp tempura', 'Lightly battered and deep fried shrimps.', 7, image_path + 'tempura.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_3__.createMeal)('Wasabi', 'Get your tongue lit up with our authentic wasabi paste, ready to accompany any of our meals.', 1, image_path + 'wasabi.png');
  (0,_meals_page__WEBPACK_IMPORTED_MODULE_3__.createMeal)('Pudding', 'End your meal on a sweet note with our delicious pudding.', 5, image_path + 'pudding.png');
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLE9BQU8sS0FBSyxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0dBQXdHLFdBQVcsZUFBZSw0QkFBNEIsS0FBSyxjQUFj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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzVEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dGO0FBQ3ZEO0FBQ2U7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUFhLEtBQUs7QUFDbEIsdURBQVc7QUFDWCx1RUFBMkI7QUFDM0IseURBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBZ0I7QUFDbEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4REFBaUI7QUFDbkIsRUFBRSx1REFBVTtBQUNaLEVBQUUsdURBQVU7QUFDWixFQUFFLHVEQUFVO0FBQ1osRUFBRSx1REFBVTtBQUNaLEVBQUUsdURBQVU7QUFDWixFQUFFLHVEQUFVO0FBQ1osRUFBRSx1REFBVTtBQUNaLEVBQUUsdURBQVU7QUFDWixFQUFFLHVEQUFVO0FBQ1osQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLXRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVhbHMtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvdHRhK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gbWFyZ2luOiAwO1xcclxcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzAwMjU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4ICNjNzAwMjQ3OTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIgaDEge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxvZ29fX2ltYWdlIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGNocGhyYXNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG90dGEgT25lXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZTZlOTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjJmNDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGFiIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNjNzAwMjU7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MDAyNGNhO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jZHluYW1pYy1jb250ZW50X19jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiA1MHB4IDIwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1wYWdlX190aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvdHRhIE9uZVxcXCI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtcGFnZV9faW5mb3Mge1xcclxcbiAgZm9udC1mYW1pbHk6ICdWZXJkYW5hJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2M3MDAyNTtcXHJcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNjNzAwMjU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI1cHggMjVweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41NTYpO1xcclxcbn1cXHJcXG5cXHJcXG4ub25saW5lLW9yZGVyX19jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9ubGluZS1vcmRlcl9fY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjU4Mik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLm9ubGluZS1vcmRlcl9fY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI0Y2E7XFxyXFxufVxcclxcblxcclxcbi5vbmxpbmUtb3JkZXJfX2NvbnRhaW5lciBidXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtcGFnZV9fY29udGVudC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDU1MHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41NTYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJWZXJkYW5hXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjYzcwMDI0YTc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnIgMWZyIDMwcHg7XFxyXFxuICBncmlkLWNvbHVtbi1nYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXFxcImltYWdlIG5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImltYWdlIGRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJpbWFnZSBkZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiaW1hZ2UgcHJpY2VcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXFxcIm5hbWUgaW1hZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRlc2NyaXB0aW9uIGltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJkZXNjcmlwdGlvbiBpbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwicHJpY2UgaW1hZ2VcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWFnZSB7XFxyXFxuICBncmlkLWFyZWE6IGltYWdlO1xcclxcbiAgbWF4LXdpZHRoOjE1MHB4O1xcclxcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1uYW1lIHtcXHJcXG4gIGdyaWQtYXJlYTogbmFtZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXByaWNlIHtcXHJcXG4gIGdyaWQtYXJlYTogcHJpY2U7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwcmVtKSB7XFxyXFxuICAubG9nby1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nby1jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2F0Y2hwaHJhc2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZHluYW1pYy1jb250ZW50X19jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDUwcHggMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFscy1wYWdlX19jb250ZW50LXdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lYWwtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFsLXByaWNlIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0NBQ0MsU0FBUztDQUNULHNCQUFzQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUNBQXFDO0VBQ3JDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFOzs7cUNBR21DO0FBQ3JDOztBQUVBO0VBQ0U7OztxQ0FHbUM7QUFDckM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvdHRhK09uZSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gbWFyZ2luOiAwO1xcclxcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzAwMjU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4ICNjNzAwMjQ3OTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIgaDEge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxvZ29fX2ltYWdlIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGNocGhyYXNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG90dGEgT25lXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZTZlOTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjJmNDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGFiIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNjNzAwMjU7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MDAyNGNhO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jZHluYW1pYy1jb250ZW50X19jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiA1MHB4IDIwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1wYWdlX190aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvdHRhIE9uZVxcXCI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtcGFnZV9faW5mb3Mge1xcclxcbiAgZm9udC1mYW1pbHk6ICdWZXJkYW5hJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2M3MDAyNTtcXHJcXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNjNzAwMjU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI1cHggMjVweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41NTYpO1xcclxcbn1cXHJcXG5cXHJcXG4ub25saW5lLW9yZGVyX19jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9ubGluZS1vcmRlcl9fY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjU4Mik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLm9ubGluZS1vcmRlcl9fY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI0Y2E7XFxyXFxufVxcclxcblxcclxcbi5vbmxpbmUtb3JkZXJfX2NvbnRhaW5lciBidXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtcGFnZV9fY29udGVudC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDU1MHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41NTYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJWZXJkYW5hXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjYzcwMDI0YTc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnIgMWZyIDMwcHg7XFxyXFxuICBncmlkLWNvbHVtbi1nYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXFxcImltYWdlIG5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImltYWdlIGRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJpbWFnZSBkZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiaW1hZ2UgcHJpY2VcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXFxcIm5hbWUgaW1hZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRlc2NyaXB0aW9uIGltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJkZXNjcmlwdGlvbiBpbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwicHJpY2UgaW1hZ2VcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWFnZSB7XFxyXFxuICBncmlkLWFyZWE6IGltYWdlO1xcclxcbiAgbWF4LXdpZHRoOjE1MHB4O1xcclxcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1uYW1lIHtcXHJcXG4gIGdyaWQtYXJlYTogbmFtZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXByaWNlIHtcXHJcXG4gIGdyaWQtYXJlYTogcHJpY2U7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwcmVtKSB7XFxyXFxuICAubG9nby1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nby1jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2F0Y2hwaHJhc2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZHluYW1pYy1jb250ZW50X19jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDUwcHggMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFscy1wYWdlX19jb250ZW50LXdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lYWwtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFsLXByaWNlIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBDT05URU5UX0RJViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbmNvbnN0IGR5bmFtaWNDb250ZW50Q29udGFpbmVyPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHluYW1pYy1jb250ZW50X19jb250YWluZXInKTtcclxuY29uc3QgSE9NRV9UQUJfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtdGFiX19idXR0b24nKTtcclxuY29uc3QgTUVBTFNfVEFCX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFscy10YWJfX2J1dHRvbicpO1xyXG5cclxuY29uc3QgaG9tZV90YWJfY29udGVudCA9IChkaXYpID0+IHtcclxuICBjb25zdCBpbmZvc19jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuYXBwZW5kQ2hpbGQoaW5mb3NfY29udGFpbmVyKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZV9fdGl0bGUnKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIEdvISBTdXNoaXMnO1xyXG4gIGluZm9zX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gIGNvbnN0IGluZm9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5mb3MuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlX19pbmZvcycpO1xyXG4gIGluZm9zLnRleHRDb250ZW50ID0gJ1dlIHNlcnZlIHRoZSBiZXN0IHN1c2hpcyB0aGlzIHNpZGUgb2YgdGhlIG9jZWFuISc7XHJcbiAgY29uc3QgaW5mb3Nfc2VsbGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluZm9zX3NlbGxpbmcuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlX19pbmZvcycpO1xyXG4gIGluZm9zX3NlbGxpbmcudGV4dENvbnRlbnQgPSAnQ29tZSB2aXNpdCB1cyBvciBnaXZlIHVzIGEgY2FsbCB0byBvcmRlciB5b3VyIHN1c2hpcyBhbmQgZ2V0IHRoZW0gZnJlc2ggaW4gbGVzcyB0aGFuIGFuIGhvdXIuJztcclxuICBpbmZvc19jb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb3MpO1xyXG4gIGluZm9zX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvc19zZWxsaW5nKTtcclxuICBjb25zdCBpbmZvc19hZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbmZvc19hZHJlc3MudGV4dENvbnRlbnQgPSAnMTI3NCBHb2xmIENsdWIgUmQsIExhcyBDcnVjZXMgTlk4ODAxMSc7XHJcbiAgaW5mb3NfYWRyZXNzLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZV9faW5mb3MnKTtcclxuICBpbmZvc19jb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb3NfYWRyZXNzKTtcclxuICBjb25zdCBpbmZvc190ZWxlcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbmZvc190ZWxlcGhvbmUuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlX19pbmZvcycpO1xyXG4gIGluZm9zX3RlbGVwaG9uZS50ZXh0Q29udGVudCA9ICcoNTc1KSA1MjEtMTgyNic7XHJcbiAgaW5mb3NfY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9zX3RlbGVwaG9uZSk7XHJcblxyXG4gIGNvbnN0IG9yZGVyX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG9yZGVyX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcmRlci1jb250YWluZXInKTtcclxuICBpbmZvc19jb250YWluZXIuYXBwZW5kQ2hpbGQob3JkZXJfY29udGFpbmVyKTtcclxuICBjb25zdCByZXNlcnZhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJlc2VydmF0aW9uLnRleHRDb250ZW50ID0gJ01ha2UgYSByZXNlcnZhdGlvbjonO1xyXG4gIG9yZGVyX2NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbik7XHJcbiAgY29uc3QgcmVzZXJ2YXRpb25fdGVsZXBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVzZXJ2YXRpb25fdGVsZXBob25lLnRleHRDb250ZW50ID0gJ0dpdmUgdXMgYSBjYWxsOiAoNTc1KSA1MjEtMTgyNiBvciBzZW5kIHVzIGFuIGVtYWlsOiBnb3N1c2hpc0BtYWtpbWFpbC5jb20nO1xyXG4gIHJlc2VydmF0aW9uLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uX3RlbGVwaG9uZSk7XHJcbiAgY29uc3Qgb25saW5lX29yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb25saW5lX29yZGVyLmNsYXNzTGlzdC5hZGQoJ29ubGluZS1vcmRlcl9fY29udGFpbmVyJyk7XHJcbiAgb25saW5lX29yZGVyLnRleHRDb250ZW50ID0gJ1lvdSBjYW4gYWxzbyBvcmRlciBmcm9tIG91ciB3ZWJzaXRlOic7XHJcbiAgb3JkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKG9ubGluZV9vcmRlcik7XHJcbiAgY29uc3Qgb3JkZXJfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgb3JkZXJfYnV0dG9uLnRleHRDb250ZW50ID0gJ09SREVSIE5PVyc7XHJcbiAgb25saW5lX29yZGVyLmFwcGVuZENoaWxkKG9yZGVyX2J1dHRvbik7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgaG9tZV90YWJfY29udGVudCB9OyIsImNvbnN0IENPTlRFTlRfRElWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuY29uc3QgZHluYW1pY0NvbnRlbnRDb250YWluZXI9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5keW5hbWljLWNvbnRlbnRfX2NvbnRhaW5lcicpO1xyXG5cclxuY29uc3QgbWVhbHNfdGFiX2NvbnRlbnQgPSAoZGl2KSA9PiB7XHJcbiAgY29uc3QgbWVhbHNfcGFnZV9jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbHNfcGFnZV9jb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lYWxzLXBhZ2VfX2NvbnRlbnQtd3JhcHBlcicpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChtZWFsc19wYWdlX2NvbnRlbnQpO1xyXG59O1xyXG5cclxubGV0IGNyZWF0ZU1lYWwgPSAobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpbWFnZSkgPT4ge1xyXG4gIGNvbnN0IG1lYWxzX3BhZ2VfY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFscy1wYWdlX19jb250ZW50LXdyYXBwZXInKTtcclxuICBjb25zdCBtZWFsX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lYWxfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lYWwtY29udGFpbmVyJyk7XHJcbiAgbWVhbHNfcGFnZV9jb250ZW50LmFwcGVuZENoaWxkKG1lYWxfY29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgbWVhbF9pbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIG1lYWxfaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVhbC1pbWFnZScpO1xyXG4gIG1lYWxfaW1hZ2Uuc3JjID0gaW1hZ2U7XHJcbiAgbWVhbF9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVhbF9pbWFnZSk7XHJcblxyXG4gIGNvbnN0IG1lYWxfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lYWxfbmFtZS5jbGFzc0xpc3QuYWRkKCdtZWFsLW5hbWUnKTtcclxuICBtZWFsX25hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gIG1lYWxfY29udGFpbmVyLmFwcGVuZENoaWxkKG1lYWxfbmFtZSk7XHJcblxyXG4gIGNvbnN0IG1lYWxfZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lYWxfZGVzYy5jbGFzc0xpc3QuYWRkKCdtZWFsLWRlc2NyaXB0aW9uJyk7XHJcbiAgbWVhbF9kZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgbWVhbF9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVhbF9kZXNjKTtcclxuXHJcbiAgY29uc3QgbWVhbF9wcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lYWxfcHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVhbC1wcmljZScpO1xyXG4gIG1lYWxfcHJpY2UudGV4dENvbnRlbnQgPSAnJCAnICsgcHJpY2U7XHJcbiAgbWVhbF9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVhbF9wcmljZSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBtZWFsc190YWJfY29udGVudCwgY3JlYXRlTWVhbCB9OyIsImNvbnN0IENPTlRFTlRfRElWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbmNvbnN0IGhlYWRlckRPTUxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIENPTlRFTlRfRElWLmFwcGVuZENoaWxkKGhlYWRlcl9jb250YWluZXIpO1xyXG5cclxuICBjb25zdCBsb2dvX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxvZ29fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvZ28tY29udGFpbmVyJyk7XHJcbiAgaGVhZGVyX2NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvX2NvbnRhaW5lcik7XHJcbiAgY29uc3QgdGV4dF9sb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICB0ZXh0X2xvZ28udGV4dENvbnRlbnQ9J0firKQhIFN1c2hpcyc7XHJcbiAgbG9nb19jb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dF9sb2dvKTtcclxuICBjb25zdCBpbWFnZV9sb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1hZ2VfbG9nby5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nb19faW1hZ2UnKTtcclxuICBpbWFnZV9sb2dvLnNyYyA9ICcuL2ltYWdlcy9sb2dvLnN2Zyc7XHJcbiAgbG9nb19jb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VfbG9nbyk7XHJcblxyXG4gIGNvbnN0IGNhdGNocGhyYXNlX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhdGNocGhyYXNlX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXRjaHBocmFzZScpO1xyXG4gIGNhdGNocGhyYXNlX2NvbnRhaW5lci50ZXh0Q29udGVudD1gRmFzdGVyIHRoYW4geW91IGNhbiBzYXkgJ+ernOWuruOBruS5meWnq+OBruWFg+e1kOOBruWPluOCiuWkluOBlychYDtcclxuICBoZWFkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGNocGhyYXNlX2NvbnRhaW5lcik7XHJcbn07XHJcblxyXG5jb25zdCB0YWJzRE9NTG9hZCA9ICgpID0+IHtcclxuICBjb25zdCB0YWJzX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRhYnNfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYnMtY29udGFpbmVyJyk7XHJcbiAgQ09OVEVOVF9ESVYuYXBwZW5kQ2hpbGQodGFic19jb250YWluZXIpO1xyXG5cclxuICBjb25zdCBob21lX3RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvbWVfdGFiLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGFiJyk7XHJcbiAgaG9tZV90YWIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLXRhYl9fYnV0dG9uJyk7XHJcbiAgaG9tZV90YWIudGV4dENvbnRlbnQgPSAnT3VyIHJlc3RhdXJhbnQnO1xyXG4gIHRhYnNfY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVfdGFiKTtcclxuXHJcbiAgY29uc3QgbWVhbHNfdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbHNfdGFiLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGFiJyk7XHJcbiAgbWVhbHNfdGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVhbHMtdGFiX19idXR0b24nKTtcclxuICBtZWFsc190YWIudGV4dENvbnRlbnQgPSAnT3VyIG1lYWxzJztcclxuICB0YWJzX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsc190YWIpO1xyXG59O1xyXG5cclxuY29uc3QgZHluYW1pY0NvbnRlbnRDb250YWluZXJMb2FkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGR5bmFtaWNDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZHluYW1pY0NvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdkeW5hbWljLWNvbnRlbnRfX2NvbnRhaW5lcicpO1xyXG4gIENPTlRFTlRfRElWLmFwcGVuZENoaWxkKGR5bmFtaWNDb250ZW50Q29udGFpbmVyKTtcclxufTtcclxuXHJcbmNvbnN0IGZvb3RlckRPTUxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgQ09OVEVOVF9ESVYuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuICBjb25zdCBmb290ZXJfaW5mb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmb290ZXJfaW5mb3MuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRlbnQnKTtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyX2luZm9zKTtcclxuICBjb25zdCBmb290ZXJfY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9vdGVyX2NvcHlyaWdodC50ZXh0Q29udGVudCA9ICdBbGwgaW1hZ2VzIGFyZSBjb21pbmcgZnJvbSB0aGUgY2FyZCBnYW1lIFwiU3VzaGkgR28hXCIuIExvZ28gaWxsdXN0cmF0aW9uIGJ5IHVuRHJhdy4gRmF2aWNvbiBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvbic7XHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlcl9jb3B5cmlnaHQpO1xyXG4gIGNvbnN0IGZvb3Rlcl9jb3B5cmlnaHRfYmlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9vdGVyX2NvcHlyaWdodF9iaXMudGV4dENvbnRlbnQgPSAnXFx1MDBBOTIwMjMgc3RhZ25hbnQtc3lzJztcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyX2NvcHlyaWdodF9iaXMpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgaGVhZGVyRE9NTG9hZCwgdGFic0RPTUxvYWQsIGR5bmFtaWNDb250ZW50Q29udGFpbmVyTG9hZCwgZm9vdGVyRE9NTG9hZCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBoZWFkZXJET01Mb2FkLCB0YWJzRE9NTG9hZCwgZHluYW1pY0NvbnRlbnRDb250YWluZXJMb2FkLCBmb290ZXJET01Mb2FkIH0gZnJvbSAnLi9wYWdlLWxvYWQnO1xyXG5pbXBvcnQgeyBob21lX3RhYl9jb250ZW50IH0gZnJvbSAnLi9ob21lLXRhYic7XHJcbmltcG9ydCB7IG1lYWxzX3RhYl9jb250ZW50LCBjcmVhdGVNZWFsIH0gZnJvbSAnLi9tZWFscy1wYWdlJztcclxuXHJcbmNvbnN0IENPTlRFTlRfRElWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuY29uc3QgaW1hZ2VfcGF0aCA9ICcuL2ltYWdlcy9tZWFscy8nO1xyXG5jb25zdCBsb3JlbV9pcHN1bSA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4nO1xyXG5cclxuaGVhZGVyRE9NTG9hZCgpOyAgLy8gTG9hZCBzdGF0aWMgY29udGVudCBvZiB0aGUgcGFnZVxyXG50YWJzRE9NTG9hZCgpO1xyXG5keW5hbWljQ29udGVudENvbnRhaW5lckxvYWQoKTtcclxuZm9vdGVyRE9NTG9hZCgpO1xyXG5jb25zdCBIT01FX1RBQl9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS10YWJfX2J1dHRvbicpO1xyXG5jb25zdCBNRUFMU19UQUJfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWxzLXRhYl9fYnV0dG9uJyk7XHJcbmNvbnN0IGR5bmFtaWNDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R5bmFtaWMtY29udGVudF9fY29udGFpbmVyJyk7XHJcblxyXG4vLyBMb2FkIGhvbWUgdGFiIG9uIHN0YXJ0dXBcclxuaG9tZV90YWJfY29udGVudChkeW5hbWljQ29udGVudENvbnRhaW5lcik7XHJcbkhPTUVfVEFCX0JVVFRPTi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG5cclxuLy8gQ3JlYXRlIGR5bmFtaWMgY29udGVudCB3aGVuIGEgdGFiIGlzIGNsaWNrZWRcclxuSE9NRV9UQUJfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIEhPTUVfVEFCX0JVVFRPTi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gIE1FQUxTX1RBQl9CVVRUT04uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICBkeW5hbWljQ29udGVudENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGhvbWVfdGFiX2NvbnRlbnQoZHluYW1pY0NvbnRlbnRDb250YWluZXIpO1xyXG59KTtcclxuTUVBTFNfVEFCX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBNRUFMU19UQUJfQlVUVE9OLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgSE9NRV9UQUJfQlVUVE9OLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgZHluYW1pY0NvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBtZWFsc190YWJfY29udGVudChkeW5hbWljQ29udGVudENvbnRhaW5lcik7XHJcbiAgY3JlYXRlTWVhbCgnR3lvemEnLCAnT3VyIGZpbmVzdCBzdGVhbWVkIGR1bXBsaW5nIGZpbGxlZCB3aXRoIGEgbWluY2VkIHBvcmsgc3R1ZmZpbmcuJywgNCwgaW1hZ2VfcGF0aCArICdkdW1wbGluZy5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdNYWtpJywgJ0p1aWN5IHJpY2Ugcm9sbGVkIGluIHNlYXdlZWQsIGNvbXBsZXRlIHdpdGggeW91ciBjaG9pY2Ugb2YgZmlsbGluZyAoY3JhYiwgdHVuYSwgc2FsbW9uLCB2ZWdldGFibGVzKS4nLCA1LCBpbWFnZV9wYXRoICsgJ21ha2kucG5nJyk7XHJcbiAgY3JlYXRlTWVhbCgnRWdnIE5pZ2lyaScsICdBIGRlbGljaW91cyBuaWdpcmkgdG9wcGVkIHdpdGggYSBzbGljZSBvZiBvbWVsZXR0ZS4nLCAzLCBpbWFnZV9wYXRoICsgJ25pZ2lyaS1lZ2cucG5nJyk7XHJcbiAgY3JlYXRlTWVhbCgnU2FsbW9uIE5pZ2lyaScsICdBbiBleHF1aXNpdGUgbmlnaXJpIHRvcHBlZCB3aXRoIHNhbG1vbiBzYXNoaW1pLicsIDQsIGltYWdlX3BhdGggKyAnbmlnaXJpLXNhbG1vbi5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdTcXVpZCBOaWdpcmknLCAnQSBsdXNjaW91cyBuaWdpcmkgdG9wcGVkIHdpdGggZnJlc2ggc3F1aWQuJywgMywgaW1hZ2VfcGF0aCArICduaWdpcmktc3F1aWQucG5nJyk7XHJcbiAgY3JlYXRlTWVhbCgnU2FzaGltaScsICdBIHl1bW15IHNlbGVjdGlvbiBvZiBvdXIgYmVzdCBzYXNoaW1pcyAoYm9uaXRvLCBzYWxtb24sIGJsdWVmaW4gdHVuYSkuJywgOSwgaW1hZ2VfcGF0aCArJ3Nhc2hpbWkucG5nJyk7XHJcbiAgY3JlYXRlTWVhbCgnU2hyaW1wIHRlbXB1cmEnLCAnTGlnaHRseSBiYXR0ZXJlZCBhbmQgZGVlcCBmcmllZCBzaHJpbXBzLicsIDcsIGltYWdlX3BhdGggKyAndGVtcHVyYS5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdXYXNhYmknLCAnR2V0IHlvdXIgdG9uZ3VlIGxpdCB1cCB3aXRoIG91ciBhdXRoZW50aWMgd2FzYWJpIHBhc3RlLCByZWFkeSB0byBhY2NvbXBhbnkgYW55IG9mIG91ciBtZWFscy4nLCAxLCBpbWFnZV9wYXRoICsgJ3dhc2FiaS5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdQdWRkaW5nJywgJ0VuZCB5b3VyIG1lYWwgb24gYSBzd2VldCBub3RlIHdpdGggb3VyIGRlbGljaW91cyBwdWRkaW5nLicsIDUsIGltYWdlX3BhdGggKyAncHVkZGluZy5wbmcnKTtcclxufSk7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=