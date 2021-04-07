(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./src/components/cards/testimonial.js":
/*!*********************************************!*\
  !*** ./src/components/cards/testimonial.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
var _jsxFileName = "C:\\Users\\user\\Desktop\\nex\\src\\components\\cards\\testimonial.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */



var Testimonial = function Testimonial(_ref) {
  var data = _ref.data;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonial,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    sx: styles.quote,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, data.text), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.author,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "figure",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: data.avatar,
    alt: data.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, data.name), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: data.username,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, data.username))));
};

_c = Testimonial;
/* harmony default export */ __webpack_exports__["default"] = (Testimonial);
var styles = {
  testimonial: {
    backgroundColor: 'white',
    borderRadius: 5,
    p: '25px 35px 30px',
    transition: 'all 0.3s ease 0s',
    ':hover': {
      boxShadow: '0px 13px 40px rgba(75, 102, 135, 0.1)'
    },
    '+ div': {
      mt: [4]
    }
  },
  quote: {
    lineHeight: 1.88,
    color: 'text'
  },
  author: {
    mt: [6],
    figure: {
      mr: [3]
    },
    h3: {
      fontSize: '17px',
      lineHeight: 1.3,
      color: 'text'
    },
    a: {
      fontWeight: 500,
      fontSize: [1],
      lineHeight: 2.14,
      color: 'link',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }
};

var _c;

$RefreshReg$(_c, "Testimonial");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvdGVzdGltb25pYWwuanMiXSwibmFtZXMiOlsiVGVzdGltb25pYWwiLCJkYXRhIiwic3R5bGVzIiwidGVzdGltb25pYWwiLCJxdW90ZSIsInRleHQiLCJhdXRob3IiLCJhdmF0YXIiLCJuYW1lIiwidXNlcm5hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsIm10IiwibGluZUhlaWdodCIsImNvbG9yIiwiZmlndXJlIiwibXIiLCJoMyIsImZvbnRTaXplIiwiYSIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDaEMsU0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0UsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QkgsSUFBSSxDQUFDSSxJQUE3QixDQURGLEVBRUUscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVILE1BQU0sQ0FBQ0ksTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFDLFFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLHdEQUFEO0FBQU8sT0FBRyxFQUFFTCxJQUFJLENBQUNNLE1BQWpCO0FBQXlCLE9BQUcsRUFBRU4sSUFBSSxDQUFDTyxJQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLHFEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxnREFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0JQLElBQUksQ0FBQ08sSUFBdkIsQ0FERixFQUVFLHFEQUFDLDZDQUFEO0FBQU0sUUFBSSxFQUFFUCxJQUFJLENBQUNRLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJSLElBQUksQ0FBQ1EsUUFBakMsQ0FGRixDQUpGLENBRkYsQ0FERjtBQWNELENBZkQ7O0tBQU1ULFc7QUFpQlNBLDBFQUFmO0FBRUEsSUFBTUUsTUFBTSxHQUFHO0FBQ2JDLGFBQVcsRUFBRTtBQUNYTyxtQkFBZSxFQUFFLE9BRE47QUFFWEMsZ0JBQVksRUFBRSxDQUZIO0FBR1hDLEtBQUMsRUFBRSxnQkFIUTtBQUlYQyxjQUFVLEVBQUUsa0JBSkQ7QUFLWCxjQUFVO0FBQ1JDLGVBQVMsRUFBRTtBQURILEtBTEM7QUFRWCxhQUFTO0FBQ1BDLFFBQUUsRUFBRSxDQUFDLENBQUQ7QUFERztBQVJFLEdBREE7QUFhYlgsT0FBSyxFQUFFO0FBQ0xZLGNBQVUsRUFBRSxJQURQO0FBRUxDLFNBQUssRUFBRTtBQUZGLEdBYk07QUFpQmJYLFFBQU0sRUFBRTtBQUNOUyxNQUFFLEVBQUUsQ0FBQyxDQUFELENBREU7QUFFTkcsVUFBTSxFQUFFO0FBQ05DLFFBQUUsRUFBRSxDQUFDLENBQUQ7QUFERSxLQUZGO0FBS05DLE1BQUUsRUFBRTtBQUNGQyxjQUFRLEVBQUUsTUFEUjtBQUVGTCxnQkFBVSxFQUFFLEdBRlY7QUFHRkMsV0FBSyxFQUFFO0FBSEwsS0FMRTtBQVVOSyxLQUFDLEVBQUU7QUFDREMsZ0JBQVUsRUFBRSxHQURYO0FBRURGLGNBQVEsRUFBRSxDQUFDLENBQUQsQ0FGVDtBQUdETCxnQkFBVSxFQUFFLElBSFg7QUFJREMsV0FBSyxFQUFFLE1BSk47QUFLRE8sWUFBTSxFQUFFLFNBTFA7QUFNREMsb0JBQWMsRUFBRTtBQU5mO0FBVkc7QUFqQkssQ0FBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBGbGV4LCBIZWFkaW5nLCBMaW5rIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xuXG5jb25zdCBUZXN0aW1vbmlhbCA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy50ZXN0aW1vbmlhbH0+XG4gICAgICA8ZGl2IHN4PXtzdHlsZXMucXVvdGV9PntkYXRhLnRleHR9PC9kaXY+XG4gICAgICA8RmxleCBzeD17c3R5bGVzLmF1dGhvcn0+XG4gICAgICAgIDxCb3ggYXM9XCJmaWd1cmVcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhLmF2YXRhcn0gYWx0PXtkYXRhLm5hbWV9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57ZGF0YS5uYW1lfTwvSGVhZGluZz5cbiAgICAgICAgICA8TGluayBocmVmPXtkYXRhLnVzZXJuYW1lfT57ZGF0YS51c2VybmFtZX08L0xpbms+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9GbGV4PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWw7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgdGVzdGltb25pYWw6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIHA6ICcyNXB4IDM1cHggMzBweCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UgMHMnLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwcHggMTNweCA0MHB4IHJnYmEoNzUsIDEwMiwgMTM1LCAwLjEpJyxcbiAgICB9LFxuICAgICcrIGRpdic6IHtcbiAgICAgIG10OiBbNF0sXG4gICAgfSxcbiAgfSxcbiAgcXVvdGU6IHtcbiAgICBsaW5lSGVpZ2h0OiAxLjg4LFxuICAgIGNvbG9yOiAndGV4dCcsXG4gIH0sXG4gIGF1dGhvcjoge1xuICAgIG10OiBbNl0sXG4gICAgZmlndXJlOiB7XG4gICAgICBtcjogWzNdLFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIGZvbnRTaXplOiAnMTdweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjMsXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgZm9udFNpemU6IFsxXSxcbiAgICAgIGxpbmVIZWlnaHQ6IDIuMTQsXG4gICAgICBjb2xvcjogJ2xpbmsnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==