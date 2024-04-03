/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --light-background: linear-gradient(135deg, rgb(0, 208, 255), rgb(89, 219, 248), rgb(174, 234, 248));
  --dark-background: linear-gradient(135deg, rgb(0, 19, 96), rgb(20, 34, 89), rgb(36, 47, 91));
  --button-bg: #2e2e2e;
  --header-height: 85px;
  --dropshadow: -2px -3px 2px rgb(234, 234, 234), 2px 3px 2px rgb(113, 113, 113);
  --boxshadow: 3px 4px 2px rgb(113, 113, 113);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100%;
  width: 100%;
  background: var(--light-background);
  color: #505050;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
}

body.dark {
  background: var(--dark-background);
  color: #fff;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

section {
  display: grid;
  grid-auto-rows: auto;
  border: 1px solid black;
  border-radius: 20px;
  height: 300px;
  width: 90vw;
  margin: 1rem;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  input {
    border: none;
    border-radius: 15px;
    height: 25px;
    width: 200px;
    padding: 3px 10px;
    margin-right: 15px;
  }

  button {
    color: #4d4d4d;
    font-size: 1.2rem;
    border: none;
    background: transparent;
    cursor: pointer;
  }
}

#current-weather-section {
  display: flex;
  border: none;
  height: 50vh;

  & .current-weather-info > * {
    display: flex;
    justify-content: center;
    color: inherit;
    margin-top: 10px;
  }

  & .current-weather-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    & .location {
      font-size: 1.5rem;

      i {
        margin-left: 10px;
      }
    }

    & .last-update {
      font-style: italic;
      font-size: .9rem;
      color: #ffffff;
    }

    & .temp {
      font-size: 8rem;
      width: 100%;
      padding-top: 15px;
    }

    & .condition {
      font-size: 2rem;
    }
  }

  
  .weather-image {
    display: flex;
    /* border: 1px solid red; */
    width: 100px;

    & img {
      margin: auto;
      width: 10rem;
    }
  }
}

#forecast-section {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(113, 113, 113, 0.491);
  box-shadow: var(--boxshadow);
  height: auto;
  width: 100%;
  max-width: 90vw;
  padding: 15px;

  h2 {
    color: inherit;
    text-align: center;
  }

  .forecast-container {
    display: flex;
    width: 100%;
    height: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 25px 30px;

    #dayCard {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}

/* For Chrome, Safari, and Opera */
.forecast-container ::-webkit-scrollbar-thumb {
  background-color: #0081c2; /* Color of the scrollbar thumb */
}

/* For Firefox */
.forecast-container {
  scroll-margin: 15px;
  scrollbar-width: 25px;
  scrollbar-color: #0081c2 transparent; /* Color of the scrollbar thumb and track */
}

.forecast-container > div {
  flex: 0 0 auto;
  width: 300px;
  height: 230px;
  box-shadow: var(--dropshadow);
  border-radius: 15px;
  margin: 0 10px;
  padding: 30px 40px;
}

@media screen and (max-width: 1024px) {
  .forecast-container {
    padding: 25px;
  }

  .forecast-container > div {
    width: 180px;
    padding: 20px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAGA;EACE,oGAAoG;EACpG,4FAA4F;EAC5F,oBAAoB;EACpB,qBAAqB;EACrB,8EAA8E;EAC9E,2CAA2C;AAC7C;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,cAAc;EACd,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;;EAEf;IACE,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,cAAc;IACd,iBAAiB;IACjB,YAAY;IACZ,uBAAuB;IACvB,eAAe;EACjB;AACF;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;;EAEZ;IACE,aAAa;IACb,uBAAuB;IACvB,cAAc;IACd,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;;IAEX;MACE,iBAAiB;;MAEjB;QACE,iBAAiB;MACnB;IACF;;IAEA;MACE,kBAAkB;MAClB,gBAAgB;MAChB,cAAc;IAChB;;IAEA;MACE,eAAe;MACf,WAAW;MACX,iBAAiB;IACnB;;IAEA;MACE,eAAe;IACjB;EACF;;;EAGA;IACE,aAAa;IACb,2BAA2B;IAC3B,YAAY;;IAEZ;MACE,YAAY;MACZ,YAAY;IACd;EACF;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,4CAA4C;EAC5C,4BAA4B;EAC5B,YAAY;EACZ,WAAW;EACX,eAAe;EACf,aAAa;;EAEb;IACE,cAAc;IACd,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;;IAElB;MACE,aAAa;MACb,sBAAsB;MACtB,uBAAuB;MACvB,mBAAmB;IACrB;EACF;AACF;;AAEA,kCAAkC;AAClC;EACE,yBAAyB,EAAE,iCAAiC;AAC9D;;AAEA,gBAAgB;AAChB;EACE,mBAAmB;EACnB,qBAAqB;EACrB,oCAAoC,EAAE,2CAA2C;AACnF;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n\n:root {\n  --light-background: linear-gradient(135deg, rgb(0, 208, 255), rgb(89, 219, 248), rgb(174, 234, 248));\n  --dark-background: linear-gradient(135deg, rgb(0, 19, 96), rgb(20, 34, 89), rgb(36, 47, 91));\n  --button-bg: #2e2e2e;\n  --header-height: 85px;\n  --dropshadow: -2px -3px 2px rgb(234, 234, 234), 2px 3px 2px rgb(113, 113, 113);\n  --boxshadow: 3px 4px 2px rgb(113, 113, 113);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100%;\n  width: 100%;\n  background: var(--light-background);\n  color: #505050;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 200;\n}\n\nbody.dark {\n  background: var(--dark-background);\n  color: #fff;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 2rem 0;\n}\n\nsection {\n  display: grid;\n  grid-auto-rows: auto;\n  border: 1px solid black;\n  border-radius: 20px;\n  height: 300px;\n  width: 90vw;\n  margin: 1rem;\n}\n\nform {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 0;\n\n  input {\n    border: none;\n    border-radius: 15px;\n    height: 25px;\n    width: 200px;\n    padding: 3px 10px;\n    margin-right: 15px;\n  }\n\n  button {\n    color: #4d4d4d;\n    font-size: 1.2rem;\n    border: none;\n    background: transparent;\n    cursor: pointer;\n  }\n}\n\n#current-weather-section {\n  display: flex;\n  border: none;\n  height: 50vh;\n\n  & .current-weather-info > * {\n    display: flex;\n    justify-content: center;\n    color: inherit;\n    margin-top: 10px;\n  }\n\n  & .current-weather-info {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n\n    & .location {\n      font-size: 1.5rem;\n\n      i {\n        margin-left: 10px;\n      }\n    }\n\n    & .last-update {\n      font-style: italic;\n      font-size: .9rem;\n      color: #ffffff;\n    }\n\n    & .temp {\n      font-size: 8rem;\n      width: 100%;\n      padding-top: 15px;\n    }\n\n    & .condition {\n      font-size: 2rem;\n    }\n  }\n\n  \n  .weather-image {\n    display: flex;\n    /* border: 1px solid red; */\n    width: 100px;\n\n    & img {\n      margin: auto;\n      width: 10rem;\n    }\n  }\n}\n\n#forecast-section {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(113, 113, 113, 0.491);\n  box-shadow: var(--boxshadow);\n  height: auto;\n  width: 100%;\n  max-width: 90vw;\n  padding: 15px;\n\n  h2 {\n    color: inherit;\n    text-align: center;\n  }\n\n  .forecast-container {\n    display: flex;\n    width: 100%;\n    height: auto;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    padding: 25px 30px;\n\n    #dayCard {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n}\n\n/* For Chrome, Safari, and Opera */\n.forecast-container ::-webkit-scrollbar-thumb {\n  background-color: #0081c2; /* Color of the scrollbar thumb */\n}\n\n/* For Firefox */\n.forecast-container {\n  scroll-margin: 15px;\n  scrollbar-width: 25px;\n  scrollbar-color: #0081c2 transparent; /* Color of the scrollbar thumb and track */\n}\n\n.forecast-container > div {\n  flex: 0 0 auto;\n  width: 300px;\n  height: 230px;\n  box-shadow: var(--dropshadow);\n  border-radius: 15px;\n  margin: 0 10px;\n  padding: 30px 40px;\n}\n\n@media screen and (max-width: 1024px) {\n  .forecast-container {\n    padding: 25px;\n  }\n\n  .forecast-container > div {\n    width: 180px;\n    padding: 20px;\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/getCurrentWeather.js":
/*!******************************************!*\
  !*** ./src/modules/getCurrentWeather.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCurrentWeather)
/* harmony export */ });
/* harmony import */ var _getWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherData */ "./src/modules/getWeatherData.js");
/* harmony import */ var _assets_Overcast_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Overcast.png */ "./src/assets/Overcast.png");



async function getCurrentWeather() {
  const temp = document.querySelector('.temp');
  const feelsLikeTemp = document.querySelector('.feelslike');
  const condition = document.querySelector('.condition');
  const weatherIcon = document.querySelector('.weather-image');
  const lastUpdate = document.querySelector('.last-update')
  const timeOfDay = new Date().getHours();
  console.log(timeOfDay);

  if (timeOfDay > 18) {
    document.body.classList.add('dark');
  }

  try {
    const data = await (0,_getWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const currentWeather = data.current;
    console.log(currentWeather);

    const updateDate = currentWeather.last_updated;
    console.log(updateDate)
    lastUpdate.textContent = `Last update : ${updateDate}`;

    const weatherTemp = currentWeather.temp_c;
    console.log(`${weatherTemp}°`);
    temp.textContent = `${weatherTemp}°`;

    const feelsLike = currentWeather.feelslike_c;
    feelsLikeTemp.textContent = `Feels like ${feelsLike}°`;
    console.log(`Feels like ${feelsLike} Celsius`);

    const weatherCondition = currentWeather.condition.text;
    console.log(weatherCondition);
    condition.textContent = weatherCondition;

    const weatherConditionIcon = currentWeather.condition.icon;
    weatherIcon.innerHTML = `<img src=${weatherConditionIcon}>`;

  } catch (err) {
    console.error('Something went wrong:', err);
  }

}



/***/ }),

/***/ "./src/modules/getForecast.js":
/*!************************************!*\
  !*** ./src/modules/getForecast.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getForecast)
/* harmony export */ });
/* harmony import */ var _getWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherData */ "./src/modules/getWeatherData.js");


async function getForecast() {
  try {
    const data = await (0,_getWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const forecastSection = document.getElementById("forecast-section");
    const forecastContainer = document.querySelector(".forecast-container");
    forecastContainer.innerHTML = '';

    const sevenDayForecast = data.forecast.forecastday;
    console.log(sevenDayForecast);

    sevenDayForecast.forEach((weatherData) => {
      console.log(
        `Date: ${weatherData.date}, Condition: ${weatherData.day.condition.text}, Average Temp: ${weatherData.day.avgtemp_c} C, Min-max Temp ${weatherData.day.mintemp_c} C - ${weatherData.day.maxtemp_c} C`
      );
      const dayCard = document.createElement("div");
      const forecastDate = document.createElement("span");
      const forecastIcon = document.createElement("span");
      const forecastMinmax = document.createElement("span");
      const forecastCondition = document.createElement("span");

      dayCard.setAttribute('id', 'dayCard')

      forecastDate.textContent = `${weatherData.date}`;
      forecastIcon.innerHTML = `<img src='${weatherData.day.condition.icon}'>`;
      forecastMinmax.textContent = `${weatherData.day.mintemp_c} - ${weatherData.day.maxtemp_c}`;
      forecastCondition.textContent = `${weatherData.day.condition.text}`;

      dayCard.append(
        forecastDate,
        forecastIcon,
        forecastMinmax,
        forecastCondition
      );
      forecastContainer.append(dayCard);
    });
    forecastSection.append(forecastContainer);
  } catch (err) {
    console.error("Something went wrong:", err);
  }
}


/***/ }),

/***/ "./src/modules/getLocation.js":
/*!************************************!*\
  !*** ./src/modules/getLocation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLocation)
/* harmony export */ });
/* harmony import */ var _getWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherData */ "./src/modules/getWeatherData.js");


async function getLocation() {
  const location = document.querySelector('.location');

  try {
    const data = await (0,_getWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const locationData = data.location;

    location.innerHTML = `${locationData.name}, ${locationData.country} <i class="fa-solid fa-location-dot"></i>`;

    console.log(locationData.name, locationData.country);
  } catch (err) {
    console.error('Something went wrong:', err);
  }
}


/***/ }),

/***/ "./src/modules/getWeatherData.js":
/*!***************************************!*\
  !*** ./src/modules/getWeatherData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _getCurrentWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentWeather.js */ "./src/modules/getCurrentWeather.js");
/* harmony import */ var _getForecast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getForecast.js */ "./src/modules/getForecast.js");
/* harmony import */ var _getLocation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLocation.js */ "./src/modules/getLocation.js");




const AUTH_KEY = "2641f2cfbf204f7fa2921301242703";

let location = "manila";

async function getWeatherData() {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${AUTH_KEY}&q=${location}&days=7&aqi=no&alerts=no`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error("Something went wrong", err);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const searchLocation = document.getElementById("search-location-btn");

  searchLocation.addEventListener("click", async function (event) {
    event.preventDefault();

    const locationInput = document.getElementById("location-input");
    const locationValue = locationInput.value.trim(); // Get the value entered by the user
    location = locationValue;
    console.log(locationValue);

    try {
      await getWeatherData();
      await (0,_getCurrentWeather_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
      await (0,_getLocation_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
      await (0,_getForecast_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    } catch (error) {
      console.error(error);
    }
  });
});


/***/ }),

/***/ "./src/assets/Overcast.png":
/*!*********************************!*\
  !*** ./src/assets/Overcast.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32e9960dd15a21dd60ac.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_getWeatherData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getWeatherData.js */ "./src/modules/getWeatherData.js");
/* harmony import */ var _modules_getLocation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getLocation.js */ "./src/modules/getLocation.js");
/* harmony import */ var _modules_getCurrentWeather_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getCurrentWeather.js */ "./src/modules/getCurrentWeather.js");
/* harmony import */ var _modules_getForecast_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/getForecast.js */ "./src/modules/getForecast.js");







// Initialize the application
// getWeatherData();
(0,_modules_getLocation_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_getCurrentWeather_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_getForecast_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxpRUFBaUI7QUFDN0IsWUFBWSwyREFBVztBQUN2QixZQUFZLDJEQUFXO0FBQ3ZCLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNtQztBQUNOO0FBQ1k7QUFDWjs7O0FBR25EO0FBQ0E7QUFDQSxtRUFBVztBQUNYLHlFQUFpQjtBQUNqQixtRUFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2dldEN1cnJlbnRXZWF0aGVyLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2dldEZvcmVjYXN0LmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy8uL3NyYy9tb2R1bGVzL2dldFdlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL1dlYXRoZXIgNGthcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vV2VhdGhlciA0a2FzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9XZWF0aGVyIDRrYXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1saWdodC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMCwgMjA4LCAyNTUpLCByZ2IoODksIDIxOSwgMjQ4KSwgcmdiKDE3NCwgMjM0LCAyNDgpKTtcbiAgLS1kYXJrLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigwLCAxOSwgOTYpLCByZ2IoMjAsIDM0LCA4OSksIHJnYigzNiwgNDcsIDkxKSk7XG4gIC0tYnV0dG9uLWJnOiAjMmUyZTJlO1xuICAtLWhlYWRlci1oZWlnaHQ6IDg1cHg7XG4gIC0tZHJvcHNoYWRvdzogLTJweCAtM3B4IDJweCByZ2IoMjM0LCAyMzQsIDIzNCksIDJweCAzcHggMnB4IHJnYigxMTMsIDExMywgMTEzKTtcbiAgLS1ib3hzaGFkb3c6IDNweCA0cHggMnB4IHJnYigxMTMsIDExMywgMTEzKTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xuICBjb2xvcjogIzUwNTA1MDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG5ib2R5LmRhcmsge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI2FwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDkwdnc7XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG5cbiAgaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBjb2xvcjogIzRkNGQ0ZDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbiNjdXJyZW50LXdlYXRoZXItc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiA1MHZoO1xuXG4gICYgLmN1cnJlbnQtd2VhdGhlci1pbmZvID4gKiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgJiAuY3VycmVudC13ZWF0aGVyLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJiAubG9jYXRpb24ge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG5cbiAgICAgIGkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmIC5sYXN0LXVwZGF0ZSB7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgJiAudGVtcCB7XG4gICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIH1cblxuICAgICYgLmNvbmRpdGlvbiB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICB9XG5cbiAgXG4gIC53ZWF0aGVyLWltYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICB3aWR0aDogMTAwcHg7XG5cbiAgICAmIGltZyB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB3aWR0aDogMTByZW07XG4gICAgfVxuICB9XG59XG5cbiNmb3JlY2FzdC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTMsIDExMywgMTEzLCAwLjQ5MSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveHNoYWRvdyk7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTB2dztcbiAgcGFkZGluZzogMTVweDtcblxuICBoMiB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZvcmVjYXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XG5cbiAgICAjZGF5Q2FyZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cbi5mb3JlY2FzdC1jb250YWluZXIgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgxYzI7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cbn1cblxuLyogRm9yIEZpcmVmb3ggKi9cbi5mb3JlY2FzdC1jb250YWluZXIge1xuICBzY3JvbGwtbWFyZ2luOiAxNXB4O1xuICBzY3JvbGxiYXItd2lkdGg6IDI1cHg7XG4gIHNjcm9sbGJhci1jb2xvcjogIzAwODFjMiB0cmFuc3BhcmVudDsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiBhbmQgdHJhY2sgKi9cbn1cblxuLmZvcmVjYXN0LWNvbnRhaW5lciA+IGRpdiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmZvcmVjYXN0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuXG4gIC5mb3JlY2FzdC1jb250YWluZXIgPiBkaXYge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLG9HQUFvRztFQUNwRyw0RkFBNEY7RUFDNUYsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw4RUFBOEU7RUFDOUUsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7O0VBRWY7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7O0VBRVo7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVzs7SUFFWDtNQUNFLGlCQUFpQjs7TUFFakI7UUFDRSxpQkFBaUI7TUFDbkI7SUFDRjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGVBQWU7TUFDZixXQUFXO01BQ1gsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGOzs7RUFHQTtJQUNFLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsWUFBWTs7SUFFWjtNQUNFLFlBQVk7TUFDWixZQUFZO0lBQ2Q7RUFDRjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7RUFDNUMsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7O0VBRWI7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0lBRWxCO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsbUJBQW1CO0lBQ3JCO0VBQ0Y7QUFDRjs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSx5QkFBeUIsRUFBRSxpQ0FBaUM7QUFDOUQ7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixvQ0FBb0MsRUFBRSwyQ0FBMkM7QUFDbkY7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG46cm9vdCB7XFxuICAtLWxpZ2h0LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigwLCAyMDgsIDI1NSksIHJnYig4OSwgMjE5LCAyNDgpLCByZ2IoMTc0LCAyMzQsIDI0OCkpO1xcbiAgLS1kYXJrLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigwLCAxOSwgOTYpLCByZ2IoMjAsIDM0LCA4OSksIHJnYigzNiwgNDcsIDkxKSk7XFxuICAtLWJ1dHRvbi1iZzogIzJlMmUyZTtcXG4gIC0taGVhZGVyLWhlaWdodDogODVweDtcXG4gIC0tZHJvcHNoYWRvdzogLTJweCAtM3B4IDJweCByZ2IoMjM0LCAyMzQsIDIzNCksIDJweCAzcHggMnB4IHJnYigxMTMsIDExMywgMTEzKTtcXG4gIC0tYm94c2hhZG93OiAzcHggNHB4IDJweCByZ2IoMTEzLCAxMTMsIDExMyk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiAjNTA1MDUwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbmJvZHkuZGFyayB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNhcHAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDkwdnc7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG5cXG4gIGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogNTB2aDtcXG5cXG4gICYgLmN1cnJlbnQtd2VhdGhlci1pbmZvID4gKiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gIH1cXG5cXG4gICYgLmN1cnJlbnQtd2VhdGhlci1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAmIC5sb2NhdGlvbiB7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxuICAgICAgaSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiAubGFzdC11cGRhdGUge1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB9XFxuXFxuICAgICYgLnRlbXAge1xcbiAgICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgfVxcblxcbiAgICAmIC5jb25kaXRpb24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgXFxuICAud2VhdGhlci1pbWFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgd2lkdGg6IDEwMHB4O1xcblxcbiAgICAmIGltZyB7XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jZm9yZWNhc3Qtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTEzLCAxMTMsIDExMywgMC40OTEpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94c2hhZG93KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgcGFkZGluZzogMTVweDtcXG5cXG4gIGgyIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMjVweCAzMHB4O1xcblxcbiAgICAjZGF5Q2FyZCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cXG4uZm9yZWNhc3QtY29udGFpbmVyIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODFjMjsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiAqL1xcbn1cXG5cXG4vKiBGb3IgRmlyZWZveCAqL1xcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgc2Nyb2xsLW1hcmdpbjogMTVweDtcXG4gIHNjcm9sbGJhci13aWR0aDogMjVweDtcXG4gIHNjcm9sbGJhci1jb2xvcjogIzAwODFjMiB0cmFuc3BhcmVudDsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiBhbmQgdHJhY2sgKi9cXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciA+IGRpdiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjMwcHg7XFxuICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIHBhZGRpbmc6IDMwcHggNDBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gIH1cXG5cXG4gIC5mb3JlY2FzdC1jb250YWluZXIgPiBkaXYge1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL2dldFdlYXRoZXJEYXRhJztcbmltcG9ydCBPdmVyY2FzdCBmcm9tICcuLi9hc3NldHMvT3ZlcmNhc3QucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIoKSB7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICBjb25zdCBmZWVsc0xpa2VUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzbGlrZScpO1xuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uJyk7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW1hZ2UnKTtcbiAgY29uc3QgbGFzdFVwZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LXVwZGF0ZScpXG4gIGNvbnN0IHRpbWVPZkRheSA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgY29uc29sZS5sb2codGltZU9mRGF5KTtcblxuICBpZiAodGltZU9mRGF5ID4gMTgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKCk7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkYXRhLmN1cnJlbnQ7XG4gICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXIpO1xuXG4gICAgY29uc3QgdXBkYXRlRGF0ZSA9IGN1cnJlbnRXZWF0aGVyLmxhc3RfdXBkYXRlZDtcbiAgICBjb25zb2xlLmxvZyh1cGRhdGVEYXRlKVxuICAgIGxhc3RVcGRhdGUudGV4dENvbnRlbnQgPSBgTGFzdCB1cGRhdGUgOiAke3VwZGF0ZURhdGV9YDtcblxuICAgIGNvbnN0IHdlYXRoZXJUZW1wID0gY3VycmVudFdlYXRoZXIudGVtcF9jO1xuICAgIGNvbnNvbGUubG9nKGAke3dlYXRoZXJUZW1wfcKwYCk7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJUZW1wfcKwYDtcblxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGN1cnJlbnRXZWF0aGVyLmZlZWxzbGlrZV9jO1xuICAgIGZlZWxzTGlrZVRlbXAudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke2ZlZWxzTGlrZX3CsGA7XG4gICAgY29uc29sZS5sb2coYEZlZWxzIGxpa2UgJHtmZWVsc0xpa2V9IENlbHNpdXNgKTtcblxuICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBjdXJyZW50V2VhdGhlci5jb25kaXRpb24udGV4dDtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyQ29uZGl0aW9uKTtcbiAgICBjb25kaXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyQ29uZGl0aW9uO1xuXG4gICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbkljb24gPSBjdXJyZW50V2VhdGhlci5jb25kaXRpb24uaWNvbjtcbiAgICB3ZWF0aGVySWNvbi5pbm5lckhUTUwgPSBgPGltZyBzcmM9JHt3ZWF0aGVyQ29uZGl0aW9uSWNvbn0+YDtcblxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZzonLCBlcnIpO1xuICB9XG5cbn1cblxuIiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gXCIuL2dldFdlYXRoZXJEYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSgpO1xuICAgIGNvbnN0IGZvcmVjYXN0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3Qtc2VjdGlvblwiKTtcbiAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3QtY29udGFpbmVyXCIpO1xuICAgIGZvcmVjYXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3Qgc2V2ZW5EYXlGb3JlY2FzdCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgY29uc29sZS5sb2coc2V2ZW5EYXlGb3JlY2FzdCk7XG5cbiAgICBzZXZlbkRheUZvcmVjYXN0LmZvckVhY2goKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYERhdGU6ICR7d2VhdGhlckRhdGEuZGF0ZX0sIENvbmRpdGlvbjogJHt3ZWF0aGVyRGF0YS5kYXkuY29uZGl0aW9uLnRleHR9LCBBdmVyYWdlIFRlbXA6ICR7d2VhdGhlckRhdGEuZGF5LmF2Z3RlbXBfY30gQywgTWluLW1heCBUZW1wICR7d2VhdGhlckRhdGEuZGF5Lm1pbnRlbXBfY30gQyAtICR7d2VhdGhlckRhdGEuZGF5Lm1heHRlbXBfY30gQ2BcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGZvcmVjYXN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3QgZm9yZWNhc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjb25zdCBmb3JlY2FzdE1pbm1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3QgZm9yZWNhc3RDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgZGF5Q2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RheUNhcmQnKVxuXG4gICAgICBmb3JlY2FzdERhdGUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5kYXRlfWA7XG4gICAgICBmb3JlY2FzdEljb24uaW5uZXJIVE1MID0gYDxpbWcgc3JjPScke3dlYXRoZXJEYXRhLmRheS5jb25kaXRpb24uaWNvbn0nPmA7XG4gICAgICBmb3JlY2FzdE1pbm1heC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmRheS5taW50ZW1wX2N9IC0gJHt3ZWF0aGVyRGF0YS5kYXkubWF4dGVtcF9jfWA7XG4gICAgICBmb3JlY2FzdENvbmRpdGlvbi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmRheS5jb25kaXRpb24udGV4dH1gO1xuXG4gICAgICBkYXlDYXJkLmFwcGVuZChcbiAgICAgICAgZm9yZWNhc3REYXRlLFxuICAgICAgICBmb3JlY2FzdEljb24sXG4gICAgICAgIGZvcmVjYXN0TWlubWF4LFxuICAgICAgICBmb3JlY2FzdENvbmRpdGlvblxuICAgICAgKTtcbiAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZChkYXlDYXJkKTtcbiAgICB9KTtcbiAgICBmb3JlY2FzdFNlY3Rpb24uYXBwZW5kKGZvcmVjYXN0Q29udGFpbmVyKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nOlwiLCBlcnIpO1xuICB9XG59XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi9nZXRXZWF0aGVyRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKCk7XG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0gZGF0YS5sb2NhdGlvbjtcblxuICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IGAke2xvY2F0aW9uRGF0YS5uYW1lfSwgJHtsb2NhdGlvbkRhdGEuY291bnRyeX0gPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1sb2NhdGlvbi1kb3RcIj48L2k+YDtcblxuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uRGF0YS5uYW1lLCBsb2NhdGlvbkRhdGEuY291bnRyeSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nOicsIGVycik7XG4gIH1cbn1cbiIsImltcG9ydCBnZXRDdXJyZW50V2VhdGhlciBmcm9tIFwiLi9nZXRDdXJyZW50V2VhdGhlci5qc1wiO1xuaW1wb3J0IGdldEZvcmVjYXN0IGZyb20gXCIuL2dldEZvcmVjYXN0LmpzXCI7XG5pbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb24uanNcIjtcblxuY29uc3QgQVVUSF9LRVkgPSBcIjI2NDFmMmNmYmYyMDRmN2ZhMjkyMTMwMTI0MjcwM1wiO1xuXG5sZXQgbG9jYXRpb24gPSBcIm1hbmlsYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVVUSF9LRVl9JnE9JHtsb2NhdGlvbn0mZGF5cz03JmFxaT1ubyZhbGVydHM9bm9gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiLCBlcnIpO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2VhcmNoTG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1sb2NhdGlvbi1idG5cIik7XG5cbiAgc2VhcmNoTG9jYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1pbnB1dFwiKTtcbiAgICBjb25zdCBsb2NhdGlvblZhbHVlID0gbG9jYXRpb25JbnB1dC52YWx1ZS50cmltKCk7IC8vIEdldCB0aGUgdmFsdWUgZW50ZXJlZCBieSB0aGUgdXNlclxuICAgIGxvY2F0aW9uID0gbG9jYXRpb25WYWx1ZTtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvblZhbHVlKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRXZWF0aGVyRGF0YSgpO1xuICAgICAgYXdhaXQgZ2V0Q3VycmVudFdlYXRoZXIoKTtcbiAgICAgIGF3YWl0IGdldExvY2F0aW9uKCk7XG4gICAgICBhd2FpdCBnZXRGb3JlY2FzdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSBcIi4vbW9kdWxlcy9nZXRXZWF0aGVyRGF0YS5qc1wiO1xuaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL21vZHVsZXMvZ2V0TG9jYXRpb24uanNcIjtcbmltcG9ydCBnZXRDdXJyZW50V2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL2dldEN1cnJlbnRXZWF0aGVyLmpzXCI7XG5pbXBvcnQgZ2V0Rm9yZWNhc3QgZnJvbSBcIi4vbW9kdWxlcy9nZXRGb3JlY2FzdC5qc1wiO1xuXG5cbi8vIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4vLyBnZXRXZWF0aGVyRGF0YSgpO1xuZ2V0TG9jYXRpb24oKTtcbmdldEN1cnJlbnRXZWF0aGVyKCk7XG5nZXRGb3JlY2FzdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9