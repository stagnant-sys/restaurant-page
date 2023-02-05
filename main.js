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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n margin: 0;\r\n box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nheader {\r\n  color: #efefef;\r\n  background-color: #c70025;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 16px;\r\n  box-shadow: 0 5px 10px #c7002479;\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.logo-container h1 {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 4rem;\r\n  margin: 0;\r\n}\r\n\r\n.header-logo__image {\r\n  height: 5rem;\r\n}\r\n\r\n.catchphrase {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#content {\r\n  min-height: 100%;\r\n  background-color: #f9e6e9;\r\n}\r\n\r\n.main-content {\r\n  padding: 3rem;\r\n  background-color: #fcf2f4;\r\n  height: 100%;\r\n}\r\n\r\n.tabs-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.content-tab {\r\n  cursor: pointer;\r\n  width: 200px;\r\n  color: #aaaaaa;\r\n  padding: 1rem 0;\r\n  text-align: center;\r\n  font-family: \"Potta One\", sans-serif;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70025;\r\n  border-top: none;\r\n  border-radius: 0 0 10px 10px;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.selected {\r\n  background-color: #c70024ca;\r\n  color: white;\r\n}\r\n\r\n#dynamic-content__container {\r\n  margin: 50px 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.infos-container {\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.556);\r\n  border-radius: 25px;\r\n}\r\n\r\n.home-page__title {\r\n  background-color: #c70025;\r\n  color: #efefef;\r\n  font-family: \"Potta One\";\r\n  text-align: center;\r\n  border-radius: 25px 25px 0 0;\r\n  font-size: 2rem;\r\n  padding: 10px;\r\n}\r\n\r\n.restaurant-infos-container {\r\n  padding: 2rem;\r\n  border: 3px solid #c70025;\r\n}\r\n\r\n.restaurant-infos-container div:nth-child(2) {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.restaurant-infos-container div:nth-child(3),\r\n.restaurant-infos-container div:nth-child(4) {\r\n  font-weight: 700;\r\n}\r\n\r\n.home-page__infos {\r\n  font-family: 'Verdana', sans-serif;\r\n  padding: 5px 16px;\r\n  text-align: center;\r\n}\r\n\r\n.order-container {\r\n  background-color: #c70025;\r\n  border-radius: 0 0 25px 25px;\r\n  padding: 16px;\r\n  color: #efefef;\r\n  font-family: 'Verdana', sans-serif;\r\n  text-align: center;\r\n}\r\n\r\n.online-order__container {\r\n  margin-top: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.online-order__container button {\r\n  width: 200px;\r\n  font-family: 'Verdana', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  padding: 5px 0;\r\n  border-radius: 25px;\r\n  border: none;\r\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.582);\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.online-order__container button:hover {\r\n  background-color: #c70024ca;\r\n}\r\n\r\n.online-order__container button:active {\r\n  background-color: white;\r\n  transform: scale(0.9);\r\n}\r\n\r\n.meals-page__content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 16px;\r\n  background-color: #c70025;\r\n  border-radius: 5px;\r\n  width: 550px;\r\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.556);\r\n}\r\n\r\n.meal-container {\r\n  font-family: \"Verdana\", sans-serif;\r\n  width: 100%;\r\n  padding: 16px;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70024a7;\r\n  border-radius: 15px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 30px 1fr 1fr 30px;\r\n  grid-column-gap: 16px;\r\n}\r\n\r\n.meal-container:nth-of-type(even) {\r\n  grid-template-areas:  \"image name\"\r\n                        \"image description\"\r\n                        \"image description\"\r\n                        \"image price\";\r\n}\r\n\r\n.meal-container:nth-of-type(odd) {\r\n  grid-template-areas:  \"name image\"\r\n                        \"description image\"\r\n                        \"description image\"\r\n                        \"price image\";\r\n}\r\n\r\n.meal-image {\r\n  grid-area: image;\r\n  max-width:150px;\r\n  max-height: 150px;\r\n  place-self: center center;\r\n  margin: 10px;\r\n}\r\n\r\n.meal-name {\r\n  grid-area: name;\r\n  font-weight: 700;\r\n}\r\n\r\n.meal-description {\r\n  grid-area: description;\r\n}\r\n\r\n.meal-price {\r\n  grid-area: price;\r\n  justify-self: right;\r\n  font-weight: 700;\r\n  margin-top: 1rem;\r\n}\r\n\r\nfooter {\r\n  height: 10vh;\r\n  width: 100%;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  font-family: 'Verdana', sans-serif;\r\n  font-size: 0.8rem;\r\n  color: #efefef;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 40rem) {\r\n  .logo-container {\r\n    flex-direction: column;\r\n    gap: 16px;\r\n    align-items: center;\r\n  }\r\n\r\n  .logo-container h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .catchphrase {\r\n    text-align: center;\r\n  }\r\n\r\n  #dynamic-content__container {\r\n    margin: 50px 10px;\r\n  }\r\n\r\n  .meals-page__content-wrapper {\r\n    width: 90%;\r\n  }\r\n\r\n  .meal-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .meal-price {\r\n    align-self: end;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');\r\n\r\n* {\r\n margin: 0;\r\n box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nheader {\r\n  color: #efefef;\r\n  background-color: #c70025;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 16px;\r\n  box-shadow: 0 5px 10px #c7002479;\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.logo-container h1 {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 4rem;\r\n  margin: 0;\r\n}\r\n\r\n.header-logo__image {\r\n  height: 5rem;\r\n}\r\n\r\n.catchphrase {\r\n  font-family: \"Potta One\", sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#content {\r\n  min-height: 100%;\r\n  background-color: #f9e6e9;\r\n}\r\n\r\n.main-content {\r\n  padding: 3rem;\r\n  background-color: #fcf2f4;\r\n  height: 100%;\r\n}\r\n\r\n.tabs-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.content-tab {\r\n  cursor: pointer;\r\n  width: 200px;\r\n  color: #aaaaaa;\r\n  padding: 1rem 0;\r\n  text-align: center;\r\n  font-family: \"Potta One\", sans-serif;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70025;\r\n  border-top: none;\r\n  border-radius: 0 0 10px 10px;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.selected {\r\n  background-color: #c70024ca;\r\n  color: white;\r\n}\r\n\r\n#dynamic-content__container {\r\n  margin: 50px 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.infos-container {\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.556);\r\n  border-radius: 25px;\r\n}\r\n\r\n.home-page__title {\r\n  background-color: #c70025;\r\n  color: #efefef;\r\n  font-family: \"Potta One\";\r\n  text-align: center;\r\n  border-radius: 25px 25px 0 0;\r\n  font-size: 2rem;\r\n  padding: 10px;\r\n}\r\n\r\n.restaurant-infos-container {\r\n  padding: 2rem;\r\n  border: 3px solid #c70025;\r\n}\r\n\r\n.restaurant-infos-container div:nth-child(2) {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.restaurant-infos-container div:nth-child(3),\r\n.restaurant-infos-container div:nth-child(4) {\r\n  font-weight: 700;\r\n}\r\n\r\n.home-page__infos {\r\n  font-family: 'Verdana', sans-serif;\r\n  padding: 5px 16px;\r\n  text-align: center;\r\n}\r\n\r\n.order-container {\r\n  background-color: #c70025;\r\n  border-radius: 0 0 25px 25px;\r\n  padding: 16px;\r\n  color: #efefef;\r\n  font-family: 'Verdana', sans-serif;\r\n  text-align: center;\r\n}\r\n\r\n.online-order__container {\r\n  margin-top: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.online-order__container button {\r\n  width: 200px;\r\n  font-family: 'Verdana', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  padding: 5px 0;\r\n  border-radius: 25px;\r\n  border: none;\r\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.582);\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.online-order__container button:hover {\r\n  background-color: #c70024ca;\r\n}\r\n\r\n.online-order__container button:active {\r\n  background-color: white;\r\n  transform: scale(0.9);\r\n}\r\n\r\n.meals-page__content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 16px;\r\n  background-color: #c70025;\r\n  border-radius: 5px;\r\n  width: 550px;\r\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.556);\r\n}\r\n\r\n.meal-container {\r\n  font-family: \"Verdana\", sans-serif;\r\n  width: 100%;\r\n  padding: 16px;\r\n  background-color: #efefef;\r\n  border: 5px solid #c70024a7;\r\n  border-radius: 15px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 30px 1fr 1fr 30px;\r\n  grid-column-gap: 16px;\r\n}\r\n\r\n.meal-container:nth-of-type(even) {\r\n  grid-template-areas:  \"image name\"\r\n                        \"image description\"\r\n                        \"image description\"\r\n                        \"image price\";\r\n}\r\n\r\n.meal-container:nth-of-type(odd) {\r\n  grid-template-areas:  \"name image\"\r\n                        \"description image\"\r\n                        \"description image\"\r\n                        \"price image\";\r\n}\r\n\r\n.meal-image {\r\n  grid-area: image;\r\n  max-width:150px;\r\n  max-height: 150px;\r\n  place-self: center center;\r\n  margin: 10px;\r\n}\r\n\r\n.meal-name {\r\n  grid-area: name;\r\n  font-weight: 700;\r\n}\r\n\r\n.meal-description {\r\n  grid-area: description;\r\n}\r\n\r\n.meal-price {\r\n  grid-area: price;\r\n  justify-self: right;\r\n  font-weight: 700;\r\n  margin-top: 1rem;\r\n}\r\n\r\nfooter {\r\n  height: 10vh;\r\n  width: 100%;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  font-family: 'Verdana', sans-serif;\r\n  font-size: 0.8rem;\r\n  color: #efefef;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 40rem) {\r\n  .logo-container {\r\n    flex-direction: column;\r\n    gap: 16px;\r\n    align-items: center;\r\n  }\r\n\r\n  .logo-container h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .catchphrase {\r\n    text-align: center;\r\n  }\r\n\r\n  #dynamic-content__container {\r\n    margin: 50px 10px;\r\n  }\r\n\r\n  .meals-page__content-wrapper {\r\n    width: 90%;\r\n  }\r\n\r\n  .meal-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .meal-price {\r\n    align-self: end;\r\n  }\r\n}"],"sourceRoot":""}]);
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
  infos_container.classList.add('infos-container');
  div.appendChild(infos_container);
  const title = document.createElement('div');
  title.classList.add('home-page__title');
  title.textContent = 'Welcome to Go! Sushis';
  infos_container.appendChild(title);

  const restaurant_infos = document.createElement('div');
  restaurant_infos.classList.add('restaurant-infos-container');
  infos_container.appendChild(restaurant_infos);
  const infos = document.createElement('div');
  infos.classList.add('home-page__infos');
  infos.textContent = 'We serve the best sushis this side of the ocean!';
  restaurant_infos.appendChild(infos);
  const infos_selling = document.createElement('div');
  infos_selling.classList.add('home-page__infos');
  infos_selling.textContent = 'Come visit us or give us a call to order your sushis and get them fresh in less than an hour.';
  restaurant_infos.appendChild(infos_selling);
  const infos_adress = document.createElement('div');
  infos_adress.textContent = '1274 Golf Club Rd, Las Cruces NY88011';
  infos_adress.classList.add('home-page__infos');
  restaurant_infos.appendChild(infos_adress);
  const infos_telephone = document.createElement('div');
  infos_telephone.classList.add('home-page__infos');
  infos_telephone.textContent = '(575) 521-1826';
  restaurant_infos.appendChild(infos_telephone);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxPQUFPLEtBQUssT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFL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QSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzVEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dGO0FBQ3ZEO0FBQ2U7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUFhLEtBQUs7QUFDbEIsdURBQVc7QUFDWCx1RUFBMkI7QUFDM0IseURBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBZ0I7QUFDbEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4REFBaUI7QUFDbkIsRUFBRSx1REFBVTtBQUNaLEVBQUUsdURBQVU7QUFDWixFQUFFLHVEQUFVO0FBQ1osRUFBRSx1REFBVTtBQUNaLEVBQUUsdURBQVU7QUFDWixFQUFFLHVEQUFVO0FBQ1osRUFBRSx1REFBVTtBQUNaLEVBQUUsdURBQVU7QUFDWixFQUFFLHVEQUFVO0FBQ1osQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLXRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVhbHMtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvdHRhK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gbWFyZ2luOiAwO1xcclxcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzAwMjU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4ICNjNzAwMjQ3OTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIgaDEge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxvZ29fX2ltYWdlIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGNocGhyYXNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG90dGEgT25lXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZTZlOTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjJmNDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGFiIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNjNzAwMjU7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MDAyNGNhO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jZHluYW1pYy1jb250ZW50X19jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiA1MHB4IDIwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb3MtY29udGFpbmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjU1Nik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1wYWdlX190aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvdHRhIE9uZVxcXCI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhdXJhbnQtaW5mb3MtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjYzcwMDI1O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGF1cmFudC1pbmZvcy1jb250YWluZXIgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGF1cmFudC1pbmZvcy1jb250YWluZXIgZGl2Om50aC1jaGlsZCgzKSxcXHJcXG4ucmVzdGF1cmFudC1pbmZvcy1jb250YWluZXIgZGl2Om50aC1jaGlsZCg0KSB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1wYWdlX19pbmZvcyB7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNXB4IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MDAyNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyNXB4IDI1cHg7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub25saW5lLW9yZGVyX19jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9ubGluZS1vcmRlcl9fY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjU4Mik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLm9ubGluZS1vcmRlcl9fY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI0Y2E7XFxyXFxufVxcclxcblxcclxcbi5vbmxpbmUtb3JkZXJfX2NvbnRhaW5lciBidXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtcGFnZV9fY29udGVudC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDU1MHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41NTYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJWZXJkYW5hXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjYzcwMDI0YTc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnIgMWZyIDMwcHg7XFxyXFxuICBncmlkLWNvbHVtbi1nYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXFxcImltYWdlIG5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImltYWdlIGRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJpbWFnZSBkZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiaW1hZ2UgcHJpY2VcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXFxcIm5hbWUgaW1hZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRlc2NyaXB0aW9uIGltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJkZXNjcmlwdGlvbiBpbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwicHJpY2UgaW1hZ2VcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWFnZSB7XFxyXFxuICBncmlkLWFyZWE6IGltYWdlO1xcclxcbiAgbWF4LXdpZHRoOjE1MHB4O1xcclxcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1uYW1lIHtcXHJcXG4gIGdyaWQtYXJlYTogbmFtZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXByaWNlIHtcXHJcXG4gIGdyaWQtYXJlYTogcHJpY2U7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwcmVtKSB7XFxyXFxuICAubG9nby1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nby1jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2F0Y2hwaHJhc2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZHluYW1pYy1jb250ZW50X19jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDUwcHggMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFscy1wYWdlX19jb250ZW50LXdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lYWwtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFsLXByaWNlIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0NBQ0MsU0FBUztDQUNULHNCQUFzQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUNBQXFDO0VBQ3JDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFOzs7cUNBR21DO0FBQ3JDOztBQUVBO0VBQ0U7OztxQ0FHbUM7QUFDckM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvdHRhK09uZSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gbWFyZ2luOiAwO1xcclxcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzAwMjU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4ICNjNzAwMjQ3OTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIgaDEge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxvZ29fX2ltYWdlIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGNocGhyYXNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG90dGEgT25lXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZTZlOTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjJmNDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGFiIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3R0YSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNjNzAwMjU7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MDAyNGNhO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jZHluYW1pYy1jb250ZW50X19jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiA1MHB4IDIwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb3MtY29udGFpbmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjU1Nik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1wYWdlX190aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvdHRhIE9uZVxcXCI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhdXJhbnQtaW5mb3MtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjYzcwMDI1O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGF1cmFudC1pbmZvcy1jb250YWluZXIgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGF1cmFudC1pbmZvcy1jb250YWluZXIgZGl2Om50aC1jaGlsZCgzKSxcXHJcXG4ucmVzdGF1cmFudC1pbmZvcy1jb250YWluZXIgZGl2Om50aC1jaGlsZCg0KSB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1wYWdlX19pbmZvcyB7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNXB4IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MDAyNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyNXB4IDI1cHg7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgY29sb3I6ICNlZmVmZWY7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub25saW5lLW9yZGVyX19jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9ubGluZS1vcmRlcl9fY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjU4Mik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLm9ubGluZS1vcmRlcl9fY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI0Y2E7XFxyXFxufVxcclxcblxcclxcbi5vbmxpbmUtb3JkZXJfX2NvbnRhaW5lciBidXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtcGFnZV9fY29udGVudC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcwMDI1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDU1MHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41NTYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJWZXJkYW5hXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjYzcwMDI0YTc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnIgMWZyIDMwcHg7XFxyXFxuICBncmlkLWNvbHVtbi1nYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXFxcImltYWdlIG5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImltYWdlIGRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJpbWFnZSBkZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiaW1hZ2UgcHJpY2VcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXFxcIm5hbWUgaW1hZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRlc2NyaXB0aW9uIGltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJkZXNjcmlwdGlvbiBpbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwicHJpY2UgaW1hZ2VcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWFnZSB7XFxyXFxuICBncmlkLWFyZWE6IGltYWdlO1xcclxcbiAgbWF4LXdpZHRoOjE1MHB4O1xcclxcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1uYW1lIHtcXHJcXG4gIGdyaWQtYXJlYTogbmFtZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXByaWNlIHtcXHJcXG4gIGdyaWQtYXJlYTogcHJpY2U7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogI2VmZWZlZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwcmVtKSB7XFxyXFxuICAubG9nby1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nby1jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2F0Y2hwaHJhc2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZHluYW1pYy1jb250ZW50X19jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDUwcHggMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFscy1wYWdlX19jb250ZW50LXdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lYWwtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFsLXByaWNlIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBDT05URU5UX0RJViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbmNvbnN0IGR5bmFtaWNDb250ZW50Q29udGFpbmVyPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHluYW1pYy1jb250ZW50X19jb250YWluZXInKTtcclxuY29uc3QgSE9NRV9UQUJfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtdGFiX19idXR0b24nKTtcclxuY29uc3QgTUVBTFNfVEFCX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFscy10YWJfX2J1dHRvbicpO1xyXG5cclxuY29uc3QgaG9tZV90YWJfY29udGVudCA9IChkaXYpID0+IHtcclxuICBjb25zdCBpbmZvc19jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbmZvc19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5mb3MtY29udGFpbmVyJyk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKGluZm9zX2NvbnRhaW5lcik7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdob21lLXBhZ2VfX3RpdGxlJyk7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBHbyEgU3VzaGlzJztcclxuICBpbmZvc19jb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICBjb25zdCByZXN0YXVyYW50X2luZm9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVzdGF1cmFudF9pbmZvcy5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LWluZm9zLWNvbnRhaW5lcicpO1xyXG4gIGluZm9zX2NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50X2luZm9zKTtcclxuICBjb25zdCBpbmZvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluZm9zLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZV9faW5mb3MnKTtcclxuICBpbmZvcy50ZXh0Q29udGVudCA9ICdXZSBzZXJ2ZSB0aGUgYmVzdCBzdXNoaXMgdGhpcyBzaWRlIG9mIHRoZSBvY2VhbiEnO1xyXG4gIHJlc3RhdXJhbnRfaW5mb3MuYXBwZW5kQ2hpbGQoaW5mb3MpO1xyXG4gIGNvbnN0IGluZm9zX3NlbGxpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbmZvc19zZWxsaW5nLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZV9faW5mb3MnKTtcclxuICBpbmZvc19zZWxsaW5nLnRleHRDb250ZW50ID0gJ0NvbWUgdmlzaXQgdXMgb3IgZ2l2ZSB1cyBhIGNhbGwgdG8gb3JkZXIgeW91ciBzdXNoaXMgYW5kIGdldCB0aGVtIGZyZXNoIGluIGxlc3MgdGhhbiBhbiBob3VyLic7XHJcbiAgcmVzdGF1cmFudF9pbmZvcy5hcHBlbmRDaGlsZChpbmZvc19zZWxsaW5nKTtcclxuICBjb25zdCBpbmZvc19hZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbmZvc19hZHJlc3MudGV4dENvbnRlbnQgPSAnMTI3NCBHb2xmIENsdWIgUmQsIExhcyBDcnVjZXMgTlk4ODAxMSc7XHJcbiAgaW5mb3NfYWRyZXNzLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZV9faW5mb3MnKTtcclxuICByZXN0YXVyYW50X2luZm9zLmFwcGVuZENoaWxkKGluZm9zX2FkcmVzcyk7XHJcbiAgY29uc3QgaW5mb3NfdGVsZXBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5mb3NfdGVsZXBob25lLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZV9faW5mb3MnKTtcclxuICBpbmZvc190ZWxlcGhvbmUudGV4dENvbnRlbnQgPSAnKDU3NSkgNTIxLTE4MjYnO1xyXG4gIHJlc3RhdXJhbnRfaW5mb3MuYXBwZW5kQ2hpbGQoaW5mb3NfdGVsZXBob25lKTtcclxuXHJcbiAgY29uc3Qgb3JkZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3JkZXJfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWNvbnRhaW5lcicpO1xyXG4gIGluZm9zX2NvbnRhaW5lci5hcHBlbmRDaGlsZChvcmRlcl9jb250YWluZXIpO1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVzZXJ2YXRpb24udGV4dENvbnRlbnQgPSAnTWFrZSBhIHJlc2VydmF0aW9uOic7XHJcbiAgb3JkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uKTtcclxuICBjb25zdCByZXNlcnZhdGlvbl90ZWxlcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByZXNlcnZhdGlvbl90ZWxlcGhvbmUudGV4dENvbnRlbnQgPSAnR2l2ZSB1cyBhIGNhbGw6ICg1NzUpIDUyMS0xODI2IG9yIHNlbmQgdXMgYW4gZW1haWw6IGdvc3VzaGlzQG1ha2ltYWlsLmNvbSc7XHJcbiAgcmVzZXJ2YXRpb24uYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25fdGVsZXBob25lKTtcclxuICBjb25zdCBvbmxpbmVfb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvbmxpbmVfb3JkZXIuY2xhc3NMaXN0LmFkZCgnb25saW5lLW9yZGVyX19jb250YWluZXInKTtcclxuICBvbmxpbmVfb3JkZXIudGV4dENvbnRlbnQgPSAnWW91IGNhbiBhbHNvIG9yZGVyIGZyb20gb3VyIHdlYnNpdGU6JztcclxuICBvcmRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQob25saW5lX29yZGVyKTtcclxuICBjb25zdCBvcmRlcl9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBvcmRlcl9idXR0b24udGV4dENvbnRlbnQgPSAnT1JERVIgTk9XJztcclxuICBvbmxpbmVfb3JkZXIuYXBwZW5kQ2hpbGQob3JkZXJfYnV0dG9uKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgeyBob21lX3RhYl9jb250ZW50IH07IiwiY29uc3QgQ09OVEVOVF9ESVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5jb25zdCBkeW5hbWljQ29udGVudENvbnRhaW5lcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR5bmFtaWMtY29udGVudF9fY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBtZWFsc190YWJfY29udGVudCA9IChkaXYpID0+IHtcclxuICBjb25zdCBtZWFsc19wYWdlX2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZWFsc19wYWdlX2NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVhbHMtcGFnZV9fY29udGVudC13cmFwcGVyJyk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKG1lYWxzX3BhZ2VfY29udGVudCk7XHJcbn07XHJcblxyXG5sZXQgY3JlYXRlTWVhbCA9IChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlKSA9PiB7XHJcbiAgY29uc3QgbWVhbHNfcGFnZV9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzLXBhZ2VfX2NvbnRlbnQtd3JhcHBlcicpO1xyXG4gIGNvbnN0IG1lYWxfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVhbC1jb250YWluZXInKTtcclxuICBtZWFsc19wYWdlX2NvbnRlbnQuYXBwZW5kQ2hpbGQobWVhbF9jb250YWluZXIpO1xyXG5cclxuICBjb25zdCBtZWFsX2ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbWVhbF9pbWFnZS5jbGFzc0xpc3QuYWRkKCdtZWFsLWltYWdlJyk7XHJcbiAgbWVhbF9pbWFnZS5zcmMgPSBpbWFnZTtcclxuICBtZWFsX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsX2ltYWdlKTtcclxuXHJcbiAgY29uc3QgbWVhbF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbF9uYW1lLmNsYXNzTGlzdC5hZGQoJ21lYWwtbmFtZScpO1xyXG4gIG1lYWxfbmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgbWVhbF9jb250YWluZXIuYXBwZW5kQ2hpbGQobWVhbF9uYW1lKTtcclxuXHJcbiAgY29uc3QgbWVhbF9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbF9kZXNjLmNsYXNzTGlzdC5hZGQoJ21lYWwtZGVzY3JpcHRpb24nKTtcclxuICBtZWFsX2Rlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICBtZWFsX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsX2Rlc2MpO1xyXG5cclxuICBjb25zdCBtZWFsX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVhbF9wcmljZS5jbGFzc0xpc3QuYWRkKCdtZWFsLXByaWNlJyk7XHJcbiAgbWVhbF9wcmljZS50ZXh0Q29udGVudCA9ICckICcgKyBwcmljZTtcclxuICBtZWFsX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsX3ByaWNlKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IG1lYWxzX3RhYl9jb250ZW50LCBjcmVhdGVNZWFsIH07IiwiY29uc3QgQ09OVEVOVF9ESVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuY29uc3QgaGVhZGVyRE9NTG9hZCA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgQ09OVEVOVF9ESVYuYXBwZW5kQ2hpbGQoaGVhZGVyX2NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGxvZ29fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG9nb19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1jb250YWluZXInKTtcclxuICBoZWFkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29fY29udGFpbmVyKTtcclxuICBjb25zdCB0ZXh0X2xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIHRleHRfbG9nby50ZXh0Q29udGVudD0nR+KspCEgU3VzaGlzJztcclxuICBsb2dvX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0X2xvZ28pO1xyXG4gIGNvbnN0IGltYWdlX2xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWFnZV9sb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvX19pbWFnZScpO1xyXG4gIGltYWdlX2xvZ28uc3JjID0gJy4vaW1hZ2VzL2xvZ28uc3ZnJztcclxuICBsb2dvX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZV9sb2dvKTtcclxuXHJcbiAgY29uc3QgY2F0Y2hwaHJhc2VfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2F0Y2hwaHJhc2VfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhdGNocGhyYXNlJyk7XHJcbiAgY2F0Y2hwaHJhc2VfY29udGFpbmVyLnRleHRDb250ZW50PWBGYXN0ZXIgdGhhbiB5b3UgY2FuIHNheSAn56uc5a6u44Gu5LmZ5aer44Gu5YWD57WQ44Gu5Y+W44KK5aSW44GXJyFgO1xyXG4gIGhlYWRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0Y2hwaHJhc2VfY29udGFpbmVyKTtcclxufTtcclxuXHJcbmNvbnN0IHRhYnNET01Mb2FkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRhYnNfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFic19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFicy1jb250YWluZXInKTtcclxuICBDT05URU5UX0RJVi5hcHBlbmRDaGlsZCh0YWJzX2NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGhvbWVfdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG9tZV90YWIuY2xhc3NMaXN0LmFkZCgnY29udGVudC10YWInKTtcclxuICBob21lX3RhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtdGFiX19idXR0b24nKTtcclxuICBob21lX3RhYi50ZXh0Q29udGVudCA9ICdPdXIgcmVzdGF1cmFudCc7XHJcbiAgdGFic19jb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZV90YWIpO1xyXG5cclxuICBjb25zdCBtZWFsc190YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZWFsc190YWIuY2xhc3NMaXN0LmFkZCgnY29udGVudC10YWInKTtcclxuICBtZWFsc190YWIuc2V0QXR0cmlidXRlKCdpZCcsICdtZWFscy10YWJfX2J1dHRvbicpO1xyXG4gIG1lYWxzX3RhYi50ZXh0Q29udGVudCA9ICdPdXIgbWVhbHMnO1xyXG4gIHRhYnNfY29udGFpbmVyLmFwcGVuZENoaWxkKG1lYWxzX3RhYik7XHJcbn07XHJcblxyXG5jb25zdCBkeW5hbWljQ29udGVudENvbnRhaW5lckxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZHluYW1pY0NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkeW5hbWljQ29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R5bmFtaWMtY29udGVudF9fY29udGFpbmVyJyk7XHJcbiAgQ09OVEVOVF9ESVYuYXBwZW5kQ2hpbGQoZHluYW1pY0NvbnRlbnRDb250YWluZXIpO1xyXG59O1xyXG5cclxuY29uc3QgZm9vdGVyRE9NTG9hZCA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBDT05URU5UX0RJVi5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG4gIGNvbnN0IGZvb3Rlcl9pbmZvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvb3Rlcl9pbmZvcy5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGVudCcpO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJfaW5mb3MpO1xyXG4gIGNvbnN0IGZvb3Rlcl9jb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmb290ZXJfY29weXJpZ2h0LnRleHRDb250ZW50ID0gJ0FsbCBpbWFnZXMgYXJlIGNvbWluZyBmcm9tIHRoZSBjYXJkIGdhbWUgXCJTdXNoaSBHbyFcIi4gTG9nbyBpbGx1c3RyYXRpb24gYnkgdW5EcmF3LiBGYXZpY29uIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uJztcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyX2NvcHlyaWdodCk7XHJcbiAgY29uc3QgZm9vdGVyX2NvcHlyaWdodF9iaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmb290ZXJfY29weXJpZ2h0X2Jpcy50ZXh0Q29udGVudCA9ICdcXHUwMEE5MjAyMyBzdGFnbmFudC1zeXMnO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJfY29weXJpZ2h0X2Jpcyk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBoZWFkZXJET01Mb2FkLCB0YWJzRE9NTG9hZCwgZHluYW1pY0NvbnRlbnRDb250YWluZXJMb2FkLCBmb290ZXJET01Mb2FkIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGhlYWRlckRPTUxvYWQsIHRhYnNET01Mb2FkLCBkeW5hbWljQ29udGVudENvbnRhaW5lckxvYWQsIGZvb3RlckRPTUxvYWQgfSBmcm9tICcuL3BhZ2UtbG9hZCc7XHJcbmltcG9ydCB7IGhvbWVfdGFiX2NvbnRlbnQgfSBmcm9tICcuL2hvbWUtdGFiJztcclxuaW1wb3J0IHsgbWVhbHNfdGFiX2NvbnRlbnQsIGNyZWF0ZU1lYWwgfSBmcm9tICcuL21lYWxzLXBhZ2UnO1xyXG5cclxuY29uc3QgQ09OVEVOVF9ESVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5jb25zdCBpbWFnZV9wYXRoID0gJy4vaW1hZ2VzL21lYWxzLyc7XHJcbmNvbnN0IGxvcmVtX2lwc3VtID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLic7XHJcblxyXG5oZWFkZXJET01Mb2FkKCk7ICAvLyBMb2FkIHN0YXRpYyBjb250ZW50IG9mIHRoZSBwYWdlXHJcbnRhYnNET01Mb2FkKCk7XHJcbmR5bmFtaWNDb250ZW50Q29udGFpbmVyTG9hZCgpO1xyXG5mb290ZXJET01Mb2FkKCk7XHJcbmNvbnN0IEhPTUVfVEFCX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXRhYl9fYnV0dG9uJyk7XHJcbmNvbnN0IE1FQUxTX1RBQl9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbHMtdGFiX19idXR0b24nKTtcclxuY29uc3QgZHluYW1pY0NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy1jb250ZW50X19jb250YWluZXInKTtcclxuXHJcbi8vIExvYWQgaG9tZSB0YWIgb24gc3RhcnR1cFxyXG5ob21lX3RhYl9jb250ZW50KGR5bmFtaWNDb250ZW50Q29udGFpbmVyKTtcclxuSE9NRV9UQUJfQlVUVE9OLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcblxyXG4vLyBDcmVhdGUgZHluYW1pYyBjb250ZW50IHdoZW4gYSB0YWIgaXMgY2xpY2tlZFxyXG5IT01FX1RBQl9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgSE9NRV9UQUJfQlVUVE9OLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgTUVBTFNfVEFCX0JVVFRPTi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gIGR5bmFtaWNDb250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgaG9tZV90YWJfY29udGVudChkeW5hbWljQ29udGVudENvbnRhaW5lcik7XHJcbn0pO1xyXG5NRUFMU19UQUJfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIE1FQUxTX1RBQl9CVVRUT04uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICBIT01FX1RBQl9CVVRUT04uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICBkeW5hbWljQ29udGVudENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIG1lYWxzX3RhYl9jb250ZW50KGR5bmFtaWNDb250ZW50Q29udGFpbmVyKTtcclxuICBjcmVhdGVNZWFsKCdHeW96YScsICdPdXIgZmluZXN0IHN0ZWFtZWQgZHVtcGxpbmcgZmlsbGVkIHdpdGggYSBtaW5jZWQgcG9yayBzdHVmZmluZy4nLCA0LCBpbWFnZV9wYXRoICsgJ2R1bXBsaW5nLnBuZycpO1xyXG4gIGNyZWF0ZU1lYWwoJ01ha2knLCAnSnVpY3kgcmljZSByb2xsZWQgaW4gc2Vhd2VlZCwgY29tcGxldGUgd2l0aCB5b3VyIGNob2ljZSBvZiBmaWxsaW5nIChjcmFiLCB0dW5hLCBzYWxtb24sIHZlZ2V0YWJsZXMpLicsIDUsIGltYWdlX3BhdGggKyAnbWFraS5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdFZ2cgTmlnaXJpJywgJ0EgZGVsaWNpb3VzIG5pZ2lyaSB0b3BwZWQgd2l0aCBhIHNsaWNlIG9mIG9tZWxldHRlLicsIDMsIGltYWdlX3BhdGggKyAnbmlnaXJpLWVnZy5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdTYWxtb24gTmlnaXJpJywgJ0FuIGV4cXVpc2l0ZSBuaWdpcmkgdG9wcGVkIHdpdGggc2FsbW9uIHNhc2hpbWkuJywgNCwgaW1hZ2VfcGF0aCArICduaWdpcmktc2FsbW9uLnBuZycpO1xyXG4gIGNyZWF0ZU1lYWwoJ1NxdWlkIE5pZ2lyaScsICdBIGx1c2Npb3VzIG5pZ2lyaSB0b3BwZWQgd2l0aCBmcmVzaCBzcXVpZC4nLCAzLCBpbWFnZV9wYXRoICsgJ25pZ2lyaS1zcXVpZC5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdTYXNoaW1pJywgJ0EgeXVtbXkgc2VsZWN0aW9uIG9mIG91ciBiZXN0IHNhc2hpbWlzIChib25pdG8sIHNhbG1vbiwgYmx1ZWZpbiB0dW5hKS4nLCA5LCBpbWFnZV9wYXRoICsnc2FzaGltaS5wbmcnKTtcclxuICBjcmVhdGVNZWFsKCdTaHJpbXAgdGVtcHVyYScsICdMaWdodGx5IGJhdHRlcmVkIGFuZCBkZWVwIGZyaWVkIHNocmltcHMuJywgNywgaW1hZ2VfcGF0aCArICd0ZW1wdXJhLnBuZycpO1xyXG4gIGNyZWF0ZU1lYWwoJ1dhc2FiaScsICdHZXQgeW91ciB0b25ndWUgbGl0IHVwIHdpdGggb3VyIGF1dGhlbnRpYyB3YXNhYmkgcGFzdGUsIHJlYWR5IHRvIGFjY29tcGFueSBhbnkgb2Ygb3VyIG1lYWxzLicsIDEsIGltYWdlX3BhdGggKyAnd2FzYWJpLnBuZycpO1xyXG4gIGNyZWF0ZU1lYWwoJ1B1ZGRpbmcnLCAnRW5kIHlvdXIgbWVhbCBvbiBhIHN3ZWV0IG5vdGUgd2l0aCBvdXIgZGVsaWNpb3VzIHB1ZGRpbmcuJywgNSwgaW1hZ2VfcGF0aCArICdwdWRkaW5nLnBuZycpO1xyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==