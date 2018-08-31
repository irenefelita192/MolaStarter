require("source-map-support").install();
exports.ids = ["history"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/History.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".History-root-15s6b {\n    overflow: hidden;\n    width: 1190px;\n}\n\n.History-historyWrapper-Sd99w {\n    overflow-y: auto;\n    width: 1220px;\n    margin: 185px auto 0;\n    height: calc(100vh - 185px);\n}\n\n.History-container-1FDxX {\n    display: inline-block;\n    width: 50%;\n    margin-bottom: 40px;\n}\n\n.History-movieDetailWrapper-2Ro_N {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 20px;\n    color: #FFFFFF;\n    width: calc(100% - 305px);\n}\n\n.History-movieImageWrapper-3wUYt {\n    position: relative;\n    display: inline-block;\n    width: 265px;\n    cursor: pointer;\n}\n\n.History-movieImageWrapper-3wUYt > img {\n    width: 100%;\n}\n\n.History-movieDurationBar-3klp7 {\n   position: absolute;\n   bottom: 15px;\n   width: calc(100% - 40px);\n   height: 4px;\n   background-color: #C1C1C1;\n   margin: 0 20px;\n}\n\n.History-moviePlayedBar-2PoUG {\n    position: absolute;\n    background-color: #E10B14;\n    height: 100%;\n}\n\n.History-movieTitle-Wn2nZ {\n    font-size: 18px;\n    font-weight: bold;\n    padding-bottom: 4px;\n}\n\n.History-movieChapter-1dSMW {\n    font-size: 16px;\n    padding-bottom: 4px;\n}\n\n.History-movieDuration-1kVCm {\n    font-size: 20px;\n    padding-bottom: 4px;\n}\n\n@media screen and (max-width: 1200px) {\n    .History-root-15s6b {\n        width: 960px;\n    }\n\n    .History-historyWrapper-Sd99w {\n        width: 1000px;\n    }\n\n    .History-movieImageWrapper-3wUYt {\n        width: 240px;\n    }\n\n    .History-movieTitle-Wn2nZ {\n        font-size: 16px;\n    }\n    \n    .History-movieChapter-1dSMW {\n        font-size: 14px;\n    }\n    \n    .History-movieDuration-1kVCm {\n        font-size: 18px;\n    }\n}", "", {"version":3,"sources":["/Users/irene/Documents/Work/MolaStarter/src/routes/history/components/History.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,cAAc;CACjB;;AAED;IACI,iBAAiB;IACjB,cAAc;IACd,qBAAqB;IACrB,4BAA4B;CAC/B;;AAED;IACI,sBAAsB;IACtB,WAAW;IACX,oBAAoB;CACvB;;AAED;IACI,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,0BAA0B;CAC7B;;AAED;IACI,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,gBAAgB;CACnB;;AAED;IACI,YAAY;CACf;;AAED;GACG,mBAAmB;GACnB,aAAa;GACb,yBAAyB;GACzB,YAAY;GACZ,0BAA0B;GAC1B,eAAe;CACjB;;AAED;IACI,mBAAmB;IACnB,0BAA0B;IAC1B,aAAa;CAChB;;AAED;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;CACvB;;AAED;IACI,gBAAgB;IAChB,oBAAoB;CACvB;;AAED;IACI,gBAAgB;IAChB,oBAAoB;CACvB;;AAED;IACI;QACI,aAAa;KAChB;;IAED;QACI,cAAc;KACjB;;IAED;QACI,aAAa;KAChB;;IAED;QACI,gBAAgB;KACnB;;IAED;QACI,gBAAgB;KACnB;;IAED;QACI,gBAAgB;KACnB;CACJ","file":"History.css","sourcesContent":[".root {\n    overflow: hidden;\n    width: 1190px;\n}\n\n.historyWrapper {\n    overflow-y: auto;\n    width: 1220px;\n    margin: 185px auto 0;\n    height: calc(100vh - 185px);\n}\n\n.container {\n    display: inline-block;\n    width: 50%;\n    margin-bottom: 40px;\n}\n\n.movieDetailWrapper {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 20px;\n    color: #FFFFFF;\n    width: calc(100% - 305px);\n}\n\n.movieImageWrapper {\n    position: relative;\n    display: inline-block;\n    width: 265px;\n    cursor: pointer;\n}\n\n.movieImageWrapper > img {\n    width: 100%;\n}\n\n.movieDurationBar {\n   position: absolute;\n   bottom: 15px;\n   width: calc(100% - 40px);\n   height: 4px;\n   background-color: #C1C1C1;\n   margin: 0 20px;\n}\n\n.moviePlayedBar {\n    position: absolute;\n    background-color: #E10B14;\n    height: 100%;\n}\n\n.movieTitle {\n    font-size: 18px;\n    font-weight: bold;\n    padding-bottom: 4px;\n}\n\n.movieChapter {\n    font-size: 16px;\n    padding-bottom: 4px;\n}\n\n.movieDuration {\n    font-size: 20px;\n    padding-bottom: 4px;\n}\n\n@media screen and (max-width: 1200px) {\n    .root {\n        width: 960px;\n    }\n\n    .historyWrapper {\n        width: 1000px;\n    }\n\n    .movieImageWrapper {\n        width: 240px;\n    }\n\n    .movieTitle {\n        font-size: 16px;\n    }\n    \n    .movieChapter {\n        font-size: 14px;\n    }\n    \n    .movieDuration {\n        font-size: 18px;\n    }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "History-root-15s6b",
	"historyWrapper": "History-historyWrapper-Sd99w",
	"container": "History-container-1FDxX",
	"movieDetailWrapper": "History-movieDetailWrapper-2Ro_N",
	"movieImageWrapper": "History-movieImageWrapper-3wUYt",
	"movieDurationBar": "History-movieDurationBar-3klp7",
	"moviePlayedBar": "History-moviePlayedBar-2PoUG",
	"movieTitle": "History-movieTitle-Wn2nZ",
	"movieChapter": "History-movieChapter-1dSMW",
	"movieDuration": "History-movieDuration-1kVCm"
};

/***/ }),

/***/ "./src/routes/history/components/History.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/History.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/History.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
        content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/History.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/history/components/History.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _History_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/history/components/History.css");
/* harmony import */ var _History_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_History_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/irene/Documents/Work/MolaStarter/src/routes/history/components/History.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var History =
/*#__PURE__*/
function (_React$Component) {
  _inherits(History, _React$Component);

  function History() {
    _classCallCheck(this, History);

    return _possibleConstructorReturn(this, _getPrototypeOf(History).apply(this, arguments));
  }

  _createClass(History, [{
    key: "render",
    value: function render() {
      var movies = this.props.movies;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.historyWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, movies.map(function (movie, index) {
        var playedDuration = movie.playedDuration / movie.totalDuration * 100;
        var barStyle = {
          width: "".concat(playedDuration, "%")
        };
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieImageWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: movie.img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieDurationBar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.moviePlayedBar,
          style: barStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieDetailWrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, movie.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieChapter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, "Chapter: ", movie.chapter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.movieDuration,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, movie.totalDuration, " min.")));
      })));
    }
  }]);

  return History;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(History, "propTypes", {
  // movie: PropTypes.shape({
  //     img: PropTypes.string,
  //     title: PropTypes.string,
  //     chapter: PropTypes.string,
  //     totalDuration: PropTypes.number,
  // }),
  movies: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_History_css__WEBPACK_IMPORTED_MODULE_3___default.a)(History));

/***/ }),

/***/ "./src/routes/history/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _components_History__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/history/components/History.js");
var _jsxFileName = "/Users/irene/Documents/Work/MolaStarter/src/routes/history/index.js";



var title = 'History';

function action() {
  var dummyHistory = [{
    id: 1,
    title: 'Hannibal Lecter - Season 3',
    chapter: 'Thirty three',
    playedDuration: 30,
    totalDuration: 49,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 2,
    title: 'The Greatest Showman',
    chapter: 'One',
    playedDuration: 20,
    totalDuration: 100,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 3,
    title: 'Hannibal Lecter - Season 3',
    chapter: 'Thirty three',
    playedDuration: 30,
    totalDuration: 49,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 4,
    title: 'The Greatest Showman',
    chapter: 'One',
    playedDuration: 20,
    totalDuration: 100,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 5,
    title: 'Hannibal Lecter - Season 3',
    chapter: 'Thirty three',
    playedDuration: 30,
    totalDuration: 49,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 6,
    title: 'The Greatest Showman',
    chapter: 'One',
    playedDuration: 20,
    totalDuration: 100,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 7,
    title: 'Hannibal Lecter - Season 3',
    chapter: 'Thirty three',
    playedDuration: 30,
    totalDuration: 49,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 8,
    title: 'The Greatest Showman',
    chapter: 'One',
    playedDuration: 20,
    totalDuration: 100,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 9,
    title: 'Hannibal Lecter - Season 3',
    chapter: 'Thirty three',
    playedDuration: 30,
    totalDuration: 49,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 10,
    title: 'The Greatest Showman',
    chapter: 'One',
    playedDuration: 20,
    totalDuration: 100,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 11,
    title: 'Hannibal Lecter - Season 3',
    chapter: 'Thirty three',
    playedDuration: 30,
    totalDuration: 49,
    img: 'https://via.placeholder.com/331x207'
  }, {
    id: 12,
    title: 'The Greatest Showman',
    chapter: 'One',
    playedDuration: 20,
    totalDuration: 100,
    img: 'https://via.placeholder.com/331x207'
  }];
  return {
    chunks: ['history'],
    title: title,
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_History__WEBPACK_IMPORTED_MODULE_2__["default"], {
      movies: dummyHistory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2hpc3RvcnkuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhU3RhcnRlci9zcmMvcm91dGVzL2hpc3RvcnkvY29tcG9uZW50cy9IaXN0b3J5LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2hpc3RvcnkvY29tcG9uZW50cy9IaXN0b3J5LmNzcz8xZWJkIiwiL1VzZXJzL2lyZW5lL0RvY3VtZW50cy9Xb3JrL01vbGFTdGFydGVyL3NyYy9yb3V0ZXMvaGlzdG9yeS9jb21wb25lbnRzL0hpc3RvcnkuanMiLCIvVXNlcnMvaXJlbmUvRG9jdW1lbnRzL1dvcmsvTW9sYVN0YXJ0ZXIvc3JjL3JvdXRlcy9oaXN0b3J5L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuSGlzdG9yeS1yb290LTE1czZiIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDExOTBweDtcXG59XFxuXFxuLkhpc3RvcnktaGlzdG9yeVdyYXBwZXItU2Q5OXcge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogMTIyMHB4O1xcbiAgICBtYXJnaW46IDE4NXB4IGF1dG8gMDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTg1cHgpO1xcbn1cXG5cXG4uSGlzdG9yeS1jb250YWluZXItMUZEeFgge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllRGV0YWlsV3JhcHBlci0yUm9fTiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzA1cHgpO1xcbn1cXG5cXG4uSGlzdG9yeS1tb3ZpZUltYWdlV3JhcHBlci0zd1VZdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjY1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVJbWFnZVdyYXBwZXItM3dVWXQgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVEdXJhdGlvbkJhci0za2xwNyB7XFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGJvdHRvbTogMTVweDtcXG4gICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XFxuICAgaGVpZ2h0OiA0cHg7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogI0MxQzFDMTtcXG4gICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVQbGF5ZWRCYXItMlBvVUcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMTBCMTQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVUaXRsZS1XbjJuWiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllQ2hhcHRlci0xZFNNVyB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVEdXJhdGlvbi0xa1ZDbSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgIC5IaXN0b3J5LXJvb3QtMTVzNmIge1xcbiAgICAgICAgd2lkdGg6IDk2MHB4O1xcbiAgICB9XFxuXFxuICAgIC5IaXN0b3J5LWhpc3RvcnlXcmFwcGVyLVNkOTl3IHtcXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIH1cXG5cXG4gICAgLkhpc3RvcnktbW92aWVJbWFnZVdyYXBwZXItM3dVWXQge1xcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICB9XFxuXFxuICAgIC5IaXN0b3J5LW1vdmllVGl0bGUtV24ybloge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuSGlzdG9yeS1tb3ZpZUNoYXB0ZXItMWRTTVcge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuSGlzdG9yeS1tb3ZpZUR1cmF0aW9uLTFrVkNtIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2lyZW5lL0RvY3VtZW50cy9Xb3JrL01vbGFTdGFydGVyL3NyYy9yb3V0ZXMvaGlzdG9yeS9jb21wb25lbnRzL0hpc3RvcnkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw0QkFBNEI7Q0FDL0I7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWU7SUFDZiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7R0FDRyxtQkFBbUI7R0FDbkIsYUFBYTtHQUNiLHlCQUF5QjtHQUN6QixZQUFZO0dBQ1osMEJBQTBCO0dBQzFCLGVBQWU7Q0FDakI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0k7UUFDSSxhQUFhO0tBQ2hCOztJQUVEO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLGFBQWE7S0FDaEI7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7Q0FDSlwiLFwiZmlsZVwiOlwiSGlzdG9yeS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTE5MHB4O1xcbn1cXG5cXG4uaGlzdG9yeVdyYXBwZXIge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogMTIyMHB4O1xcbiAgICBtYXJnaW46IDE4NXB4IGF1dG8gMDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTg1cHgpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4ubW92aWVEZXRhaWxXcmFwcGVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDVweCk7XFxufVxcblxcbi5tb3ZpZUltYWdlV3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjY1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vdmllSW1hZ2VXcmFwcGVyID4gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb3ZpZUR1cmF0aW9uQmFyIHtcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgYm90dG9tOiAxNXB4O1xcbiAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gICBoZWlnaHQ6IDRweDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzFDMUMxO1xcbiAgIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG4ubW92aWVQbGF5ZWRCYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMTBCMTQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1vdmllVGl0bGUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4ubW92aWVDaGFwdGVyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4ubW92aWVEdXJhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgIC5yb290IHtcXG4gICAgICAgIHdpZHRoOiA5NjBweDtcXG4gICAgfVxcblxcbiAgICAuaGlzdG9yeVdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcXG4gICAgfVxcblxcbiAgICAubW92aWVJbWFnZVdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICB9XFxuXFxuICAgIC5tb3ZpZVRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1vdmllQ2hhcHRlciB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tb3ZpZUR1cmF0aW9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkhpc3Rvcnktcm9vdC0xNXM2YlwiLFxuXHRcImhpc3RvcnlXcmFwcGVyXCI6IFwiSGlzdG9yeS1oaXN0b3J5V3JhcHBlci1TZDk5d1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhpc3RvcnktY29udGFpbmVyLTFGRHhYXCIsXG5cdFwibW92aWVEZXRhaWxXcmFwcGVyXCI6IFwiSGlzdG9yeS1tb3ZpZURldGFpbFdyYXBwZXItMlJvX05cIixcblx0XCJtb3ZpZUltYWdlV3JhcHBlclwiOiBcIkhpc3RvcnktbW92aWVJbWFnZVdyYXBwZXItM3dVWXRcIixcblx0XCJtb3ZpZUR1cmF0aW9uQmFyXCI6IFwiSGlzdG9yeS1tb3ZpZUR1cmF0aW9uQmFyLTNrbHA3XCIsXG5cdFwibW92aWVQbGF5ZWRCYXJcIjogXCJIaXN0b3J5LW1vdmllUGxheWVkQmFyLTJQb1VHXCIsXG5cdFwibW92aWVUaXRsZVwiOiBcIkhpc3RvcnktbW92aWVUaXRsZS1XbjJuWlwiLFxuXHRcIm1vdmllQ2hhcHRlclwiOiBcIkhpc3RvcnktbW92aWVDaGFwdGVyLTFkU01XXCIsXG5cdFwibW92aWVEdXJhdGlvblwiOiBcIkhpc3RvcnktbW92aWVEdXJhdGlvbi0xa1ZDbVwiXG59OyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSGlzdG9yeS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSGlzdG9yeS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9IaXN0b3J5LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9IaXN0b3J5LmNzcyc7XG5cbmNsYXNzIEhpc3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIG1vdmllOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIC8vICAgICBpbWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vICAgICBjaGFwdGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vICAgICB0b3RhbER1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIH0pLFxuICAgIG1vdmllczogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1vdmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhpc3RvcnlXcmFwcGVyfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtb3ZpZXMubWFwKCAobW92aWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllZER1cmF0aW9uID0gbW92aWUucGxheWVkRHVyYXRpb24gLyBtb3ZpZS50b3RhbER1cmF0aW9uICogMTAwO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtwbGF5ZWREdXJhdGlvbn0lYFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cy5tb3ZpZUltYWdlV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttb3ZpZS5pbWd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVEdXJhdGlvbkJhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MubW92aWVQbGF5ZWRCYXJ9IHN0eWxlPXtiYXJTdHlsZX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVEZXRhaWxXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW92aWVUaXRsZX0+e21vdmllLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb3ZpZUNoYXB0ZXJ9PkNoYXB0ZXI6IHttb3ZpZS5jaGFwdGVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb3ZpZUR1cmF0aW9ufT57bW92aWUudG90YWxEdXJhdGlvbn0gbWluLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoSGlzdG9yeSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvSGlzdG9yeSc7XG5cbmNvbnN0IHRpdGxlID0gJ0hpc3RvcnknO1xuXG5mdW5jdGlvbiBhY3Rpb24oKSB7XG4gICAgY29uc3QgZHVtbXlIaXN0b3J5ID0gW1xuICAgICAgICB7IGlkOjEsIHRpdGxlOiAnSGFubmliYWwgTGVjdGVyIC0gU2Vhc29uIDMnLCBjaGFwdGVyOiAnVGhpcnR5IHRocmVlJywgcGxheWVkRHVyYXRpb246IDMwLCB0b3RhbER1cmF0aW9uOiA0OSwgaW1nOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMzMXgyMDcnfSxcbiAgICAgICAgeyBpZDoyLCB0aXRsZTogJ1RoZSBHcmVhdGVzdCBTaG93bWFuJywgY2hhcHRlcjogJ09uZScsIHBsYXllZER1cmF0aW9uOiAyMCwgdG90YWxEdXJhdGlvbjogMTAwLCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgICAgICB7IGlkOjMsIHRpdGxlOiAnSGFubmliYWwgTGVjdGVyIC0gU2Vhc29uIDMnLCBjaGFwdGVyOiAnVGhpcnR5IHRocmVlJywgcGxheWVkRHVyYXRpb246IDMwLCB0b3RhbER1cmF0aW9uOiA0OSwgaW1nOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMzMXgyMDcnfSxcbiAgICAgICAgeyBpZDo0LCB0aXRsZTogJ1RoZSBHcmVhdGVzdCBTaG93bWFuJywgY2hhcHRlcjogJ09uZScsIHBsYXllZER1cmF0aW9uOiAyMCwgdG90YWxEdXJhdGlvbjogMTAwLCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgICAgICB7IGlkOjUsIHRpdGxlOiAnSGFubmliYWwgTGVjdGVyIC0gU2Vhc29uIDMnLCBjaGFwdGVyOiAnVGhpcnR5IHRocmVlJywgcGxheWVkRHVyYXRpb246IDMwLCB0b3RhbER1cmF0aW9uOiA0OSwgaW1nOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMzMXgyMDcnfSxcbiAgICAgICAgeyBpZDo2LCB0aXRsZTogJ1RoZSBHcmVhdGVzdCBTaG93bWFuJywgY2hhcHRlcjogJ09uZScsIHBsYXllZER1cmF0aW9uOiAyMCwgdG90YWxEdXJhdGlvbjogMTAwLCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgICAgICB7IGlkOjcsIHRpdGxlOiAnSGFubmliYWwgTGVjdGVyIC0gU2Vhc29uIDMnLCBjaGFwdGVyOiAnVGhpcnR5IHRocmVlJywgcGxheWVkRHVyYXRpb246IDMwLCB0b3RhbER1cmF0aW9uOiA0OSwgaW1nOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMzMXgyMDcnfSxcbiAgICAgICAgeyBpZDo4LCB0aXRsZTogJ1RoZSBHcmVhdGVzdCBTaG93bWFuJywgY2hhcHRlcjogJ09uZScsIHBsYXllZER1cmF0aW9uOiAyMCwgdG90YWxEdXJhdGlvbjogMTAwLCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgICAgICB7IGlkOjksIHRpdGxlOiAnSGFubmliYWwgTGVjdGVyIC0gU2Vhc29uIDMnLCBjaGFwdGVyOiAnVGhpcnR5IHRocmVlJywgcGxheWVkRHVyYXRpb246IDMwLCB0b3RhbER1cmF0aW9uOiA0OSwgaW1nOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMzMXgyMDcnfSxcbiAgICAgICAgeyBpZDoxMCwgdGl0bGU6ICdUaGUgR3JlYXRlc3QgU2hvd21hbicsIGNoYXB0ZXI6ICdPbmUnLCBwbGF5ZWREdXJhdGlvbjogMjAsIHRvdGFsRHVyYXRpb246IDEwMCwgaW1nOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMzMXgyMDcnfSxcbiAgICAgICAgeyBpZDoxMSwgdGl0bGU6ICdIYW5uaWJhbCBMZWN0ZXIgLSBTZWFzb24gMycsIGNoYXB0ZXI6ICdUaGlydHkgdGhyZWUnLCBwbGF5ZWREdXJhdGlvbjogMzAsIHRvdGFsRHVyYXRpb246IDQ5LCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgICAgICB7IGlkOjEyLCB0aXRsZTogJ1RoZSBHcmVhdGVzdCBTaG93bWFuJywgY2hhcHRlcjogJ09uZScsIHBsYXllZER1cmF0aW9uOiAyMCwgdG90YWxEdXJhdGlvbjogMTAwLCBpbWc6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzMxeDIwNyd9LFxuICAgIF1cblxuICByZXR1cm4ge1xuICAgIGNodW5rczogWydoaXN0b3J5J10sXG4gICAgdGl0bGUsXG4gICAgY29tcG9uZW50OiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGlzdG9yeSBtb3ZpZXM9e2R1bW15SGlzdG9yeX0vPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFNQTs7OztBQTNDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUE0Q0E7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBU0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=