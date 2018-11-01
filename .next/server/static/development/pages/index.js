module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Picture.jsx":
/*!********************************!*\
  !*** ./components/Picture.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Chris/stachewatch/components/Picture.jsx";


var PictureWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Picture__PictureWrapper",
  componentId: "fx3r4r-0"
})(["width:calc(100vh - 32px);max-width:600px;height:calc(100vh - 32px);max-height:600px;border-radius:4px;overflow:hidden;display:flex;box-shadow:0 2px 16px -2px rgba(15,15,15,0.32);background:#9f9f9f;background-image:url(", ");background-size:cover;background-position:center;margin-right:80px;@media all and (max-width:860px){width:calc(100vw - 32px);height:calc(100vw - 32px);margin-right:0;margin-bottom:24px;margin-top:24px;}"], function (props) {
  return props.image;
});

var Picture = function Picture(_ref) {
  var image = _ref.image;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PictureWrapper, {
    className: "pictureWrapper",
    image: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Picture);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Picture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Picture */ "./components/Picture.jsx");
var _jsxFileName = "/Users/Chris/stachewatch/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section.withConfig({
  displayName: "pages__PageWrapper",
  componentId: "sc-1wbo52z-0"
})(["width:100vw;min-height:100vh;display:flex;flex-flow:row nowrap;align-items:center;padding:0 80px;box-sizing:border-box;background:#f7f7f7;@media all and (max-width:860px){padding:0 24px;flex-flow:column nowrap;}"]);
var Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.article.withConfig({
  displayName: "pages__Sidebar",
  componentId: "sc-1wbo52z-1"
})(["width:calc(100vh - 32px);max-width:600px;height:calc(100vh - 32px);max-height:600px;display:flex;flex-flow:column nowrap;@media all and (max-width:860px){width:calc(100vw - 32px);height:calc(100vw - 32px);}"]);
var SidebarTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "pages__SidebarTitle",
  componentId: "sc-1wbo52z-2"
})(["font-size:2rem;font-weight:300;color:#0f0f0f;margin:0 0 1rem 0;"]);
var SidebarItems = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "pages__SidebarItems",
  componentId: "sc-1wbo52z-3"
})(["margin:0;padding:0;display:flex;flex-flow:column nowrap;"]);
var SidebarItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "pages__SidebarItem",
  componentId: "sc-1wbo52z-4"
})(["width:100%;max-width:300px;list-style:none;display:inline-flex;flex-flow:column nowrap;justify-content:center;align-items:flex-start;box-sizing:border-box;border-radius:4px;background:#fff;padding:16px 16px 8px 8px;box-shadow:0 2px 16px -2px rgba(15,15,15,0.32);margin-bottom:16px;"]);
var SidebarItemLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "pages__SidebarItemLabel",
  componentId: "sc-1wbo52z-5"
})(["font-size:1rem;font-weight:500;color:#0f0f0f;margin:0 0 4px 8px;"]);
var StyledDropdown = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_select__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "pages__StyledDropdown",
  componentId: "sc-1wbo52z-6"
})(["width:100%;height:40px;border:none;background:#fff;& .dropdown__control{border:transparent;}"]);
var SidebarItemButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "pages__SidebarItemButton",
  componentId: "sc-1wbo52z-7"
})(["height:40px;display:inline-flex;align-items:center;padding:8px;box-sizing:border-box;border-radius:4px;font-size:1rem;color:#9f9f9f;text-decoration:none;cursor:pointer;background-color:#fff;&:hover{background-color:#f7f7f7;}"]);
var AbsolutePicture = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__AbsolutePicture",
  componentId: "sc-1wbo52z-8"
})(["position:absolute;& .pictureWrapper{margin-right:0;}@media all and (max-width:860px){& .pictureWrapper{margin-bottom:0;margin-top:0;}}"]);
var CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i.withConfig({
  displayName: "pages__CloseIcon",
  componentId: "sc-1wbo52z-9"
})(["position:absolute;top:16px;right:16px;color:#fff;background-color:rgba(15,15,15,.064);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;"]);
var comparisons = [{
  label: 'Burt Reynolds',
  value: 'https://img.huffingtonpost.com/asset/56436373290000da004dcbc3.jpeg'
}, {
  label: 'Tom Selleck',
  value: 'https://content.artofmanliness.com/uploads/2009/09/tom-selleck.jpg'
}, {
  label: 'Nick Offerman',
  value: 'https://www.birchbox.com/images/uploads/how_to_grow_a_mustache_nick_offerman.jpg'
}];

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      days: [],
      currentDay: {
        label: moment__WEBPACK_IMPORTED_MODULE_4___default()().format('MMMM Do'),
        value: moment__WEBPACK_IMPORTED_MODULE_4___default()()
      },
      dayDiff: 0,
      isComparing: false
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var start = moment__WEBPACK_IMPORTED_MODULE_4___default()('2018-10-31');
      var end = moment__WEBPACK_IMPORTED_MODULE_4___default()();
      var days = [];
      var day = start;

      while (day <= end) {
        days.push({
          label: day.format('MMMM Do'),
          value: day.toDate()
        });
        day = day.clone().add(1, 'd');
      }

      var dayValue = moment__WEBPACK_IMPORTED_MODULE_4___default.a.duration(end.diff(moment__WEBPACK_IMPORTED_MODULE_4___default()('2018-10-31')));
      var dayDiff = dayValue._data.days;
      console.log(dayValue._data.days);
      console.log(days);
      this.setState({
        days: days,
        dayDiff: dayDiff
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(selectedOption) {
      console.log(selectedOption);
      var selectedDay = selectedOption.value;
      var selectedMoment = moment__WEBPACK_IMPORTED_MODULE_4___default()(selectedDay);
      var dayValue = moment__WEBPACK_IMPORTED_MODULE_4___default.a.duration(selectedMoment.diff(moment__WEBPACK_IMPORTED_MODULE_4___default()('2018-10-31')));
      var dayDiff = dayValue._data.days;
      this.setState({
        currentDay: selectedOption,
        dayDiff: dayDiff
      });
    }
  }, {
    key: "handleCompare",
    value: function handleCompare(selectedOption) {
      console.log(selectedOption);
      this.setState({
        isComparing: true,
        currentComparison: selectedOption
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Stachewatch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Picture__WEBPACK_IMPORTED_MODULE_5__["default"], {
        image: "/static/".concat(moment__WEBPACK_IMPORTED_MODULE_4___default()(this.state.currentDay.value).format('YYYYMMDD'), ".jpg"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sidebar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "stachewatch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarItemLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "Day ", this.state.dayDiff), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDropdown, {
        value: this.state.currentDay,
        onChange: this.handleChange.bind(this),
        options: this.state.days,
        className: "dropdown",
        classNamePrefix: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarItemLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Donate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarItemButton, {
        href: "https://ca.movember.com/donate/details?memberId=13850264",
        target: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "Movember")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarItemLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Compare"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDropdown, {
        value: this.state.currentComparison,
        onChange: this.handleCompare.bind(this),
        options: comparisons,
        placeholder: "None selected",
        className: "dropdown",
        classNamePrefix: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }))), this.state.isComparing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AbsolutePicture, {
        style: {
          position: 'absolute'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CloseIcon, {
        className: "material-icons",
        onClick: function onClick() {
          return _this2.setState({
            isComparing: false,
            currentComparison: ""
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Picture__WEBPACK_IMPORTED_MODULE_5__["default"], {
        image: this.state.currentComparison.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map