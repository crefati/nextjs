webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/subscribe.js":
/*!***********************************!*\
  !*** ./src/sections/subscribe.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_subscription_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/subscription-form */ "./src/components/subscription-form.js");
var _jsxFileName = "C:\\Users\\user\\Desktop\\nex\\src\\sections\\subscribe.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





var Subscribe = function Subscribe() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.section,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: styles.heading,
    title: "Subscribe to get notified about Crefati OFFERS",
    description: "With our web services,  you don't have to worry about your online presence.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_subscription_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: styles.subscriptionForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })));
};

_c = Subscribe;
/* harmony default export */ __webpack_exports__["default"] = (Subscribe);
var styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [9, null, null, null, 10, 13, null],
    pb: [9, null, null, null, 11, 14, null]
  },
  heading: {
    mb: [7, null, null, 8, 9, 10],
    h2: {
      color: '#CF9625',
      fontSize: [6, null, null, 8]
    },
    p: {
      color: '#858B91',
      fontSize: [2, null, null, 3],
      m: ['15px auto 0', null, null, '10px auto 0']
    }
  },
  subscriptionForm: {
    m: ['30px auto 0'],
    maxWidth: [555],
    flexDirection: ['column', null, null, 'row'],
    input: {
      backgroundColor: Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])('white', 0.08),
      border: '0 none',
      color: Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])('#CF9625', 0.8),
      fontFamily: 'body',
      px: [5],
      minHeight: [50, null, null, null, 60],
      boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',

      /* Chrome, Firefox, Opera, Safari 10.1+ */
      '::placeholder': {
        color: Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])('#CF9625', 0.8),
        opacity: 1
        /* Firefox */

      }
    },
    button: {
      fontSize: [1, null, null, 2],
      minHeight: [50, null, null, null, 60],
      ml: [0, null, null, 3],
      mt: [4, null, null, 0]
    }
  }
};

var _c;

$RefreshReg$(_c, "Subscribe");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3N1YnNjcmliZS5qcyJdLCJuYW1lcyI6WyJTdWJzY3JpYmUiLCJzdHlsZXMiLCJzZWN0aW9uIiwiaGVhZGluZyIsInN1YnNjcmlwdGlvbkZvcm0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwdCIsInBiIiwibWIiLCJoMiIsImNvbG9yIiwiZm9udFNpemUiLCJwIiwibSIsIm1heFdpZHRoIiwiZmxleERpcmVjdGlvbiIsImlucHV0IiwicmdiYSIsImJvcmRlciIsImZvbnRGYW1pbHkiLCJweCIsIm1pbkhlaWdodCIsImJveFNoYWRvdyIsIm9wYWNpdHkiLCJidXR0b24iLCJtbCIsIm10Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixTQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFDLFNBQVI7QUFBa0IsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0VBQUQ7QUFDRSxNQUFFLEVBQUVELE1BQU0sQ0FBQ0UsT0FEYjtBQUVFLFNBQUssRUFBQyxnREFGUjtBQUdFLGVBQVcsRUFBQyw2RUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRSxxREFBQyxvRUFBRDtBQUFrQixNQUFFLEVBQUVGLE1BQU0sQ0FBQ0csZ0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGLENBREY7QUFhRCxDQWREOztLQUFNSixTO0FBZ0JTQSx3RUFBZjtBQUVBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxTQUFPLEVBQUU7QUFDUEcsbUJBQWUsRUFBRSxTQURWO0FBRVBDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixFQUF0QixFQUEwQixFQUExQixFQUE4QixJQUE5QixDQUZHO0FBR1BDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixFQUF0QixFQUEwQixFQUExQixFQUE4QixJQUE5QjtBQUhHLEdBREk7QUFNYkosU0FBTyxFQUFFO0FBQ1BLLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixFQUF0QixDQURHO0FBRVBDLE1BQUUsRUFBRTtBQUNGQyxXQUFLLEVBQUUsU0FETDtBQUVGQyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEI7QUFGUixLQUZHO0FBTVBDLEtBQUMsRUFBRTtBQUNERixXQUFLLEVBQUUsU0FETjtBQUVEQyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FGVDtBQUdERSxPQUFDLEVBQUUsQ0FBQyxhQUFELEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLGFBQTVCO0FBSEY7QUFOSSxHQU5JO0FBa0JiVCxrQkFBZ0IsRUFBRTtBQUNoQlMsS0FBQyxFQUFFLENBQUMsYUFBRCxDQURhO0FBRWhCQyxZQUFRLEVBQUUsQ0FBQyxHQUFELENBRk07QUFHaEJDLGlCQUFhLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixLQUF2QixDQUhDO0FBSWhCQyxTQUFLLEVBQUU7QUFDTFgscUJBQWUsRUFBRVkscURBQUksQ0FBQyxPQUFELEVBQVUsSUFBVixDQURoQjtBQUVMQyxZQUFNLEVBQUUsUUFGSDtBQUdMUixXQUFLLEVBQUVPLHFEQUFJLENBQUMsU0FBRCxFQUFZLEdBQVosQ0FITjtBQUlMRSxnQkFBVSxFQUFFLE1BSlA7QUFLTEMsUUFBRSxFQUFFLENBQUMsQ0FBRCxDQUxDO0FBTUxDLGVBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixFQUF2QixDQU5OO0FBT0xDLGVBQVMsRUFBRSxzQ0FQTjs7QUFRTDtBQUNBLHVCQUFpQjtBQUNmWixhQUFLLEVBQUVPLHFEQUFJLENBQUMsU0FBRCxFQUFZLEdBQVosQ0FESTtBQUVmTSxlQUFPLEVBQUU7QUFBRTs7QUFGSTtBQVRaLEtBSlM7QUFrQmhCQyxVQUFNLEVBQUU7QUFDTmIsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBREo7QUFFTlUsZUFBUyxFQUFFLENBQUMsRUFBRCxFQUFLLElBQUwsRUFBVyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCLEVBQXZCLENBRkw7QUFHTkksUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBSEU7QUFJTkMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCO0FBSkU7QUFsQlE7QUFsQkwsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMjFlMjcwYTNhYmVjNDgzN2Q4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uRm9ybSBmcm9tICdjb21wb25lbnRzL3N1YnNjcmlwdGlvbi1mb3JtJztcblxuY29uc3QgU3Vic2NyaWJlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cbiAgICAgICAgICB0aXRsZT1cIlN1YnNjcmliZSB0byBnZXQgbm90aWZpZWQgYWJvdXQgQ3JlZmF0aSBPRkZFUlNcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2l0aCBvdXIgd2ViIHNlcnZpY2VzLCBcblx0XHQgIHlvdSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IHlvdXIgb25saW5lIHByZXNlbmNlLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTdWJzY3JpcHRpb25Gb3JtIHN4PXtzdHlsZXMuc3Vic2NyaXB0aW9uRm9ybX0gLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3Vic2NyaWJlO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlY3Rpb246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGQ0Y3JyxcbiAgICBwdDogWzksIG51bGwsIG51bGwsIG51bGwsIDEwLCAxMywgbnVsbF0sXG4gICAgcGI6IFs5LCBudWxsLCBudWxsLCBudWxsLCAxMSwgMTQsIG51bGxdLFxuICB9LFxuICBoZWFkaW5nOiB7XG4gICAgbWI6IFs3LCBudWxsLCBudWxsLCA4LCA5LCAxMF0sXG4gICAgaDI6IHtcbiAgICAgIGNvbG9yOiAnI0NGOTYyNScsXG4gICAgICBmb250U2l6ZTogWzYsIG51bGwsIG51bGwsIDhdLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgY29sb3I6ICcjODU4QjkxJyxcbiAgICAgIGZvbnRTaXplOiBbMiwgbnVsbCwgbnVsbCwgM10sXG4gICAgICBtOiBbJzE1cHggYXV0byAwJywgbnVsbCwgbnVsbCwgJzEwcHggYXV0byAwJ10sXG4gICAgfSxcbiAgfSxcbiAgc3Vic2NyaXB0aW9uRm9ybToge1xuICAgIG06IFsnMzBweCBhdXRvIDAnXSxcbiAgICBtYXhXaWR0aDogWzU1NV0sXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXG4gICAgaW5wdXQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcmdiYSgnd2hpdGUnLCAwLjA4KSxcbiAgICAgIGJvcmRlcjogJzAgbm9uZScsXG4gICAgICBjb2xvcjogcmdiYSgnI0NGOTYyNScsIDAuOCksXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBweDogWzVdLFxuICAgICAgbWluSGVpZ2h0OiBbNTAsIG51bGwsIG51bGwsIG51bGwsIDYwXSxcbiAgICAgIGJveFNoYWRvdzogJzBweCAxNnB4IDQwcHggcmdiYSg3MiwgNTksIDI2LCAwLjA4KScsXG4gICAgICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICBjb2xvcjogcmdiYSgnI0NGOTYyNScsIDAuOCksXG4gICAgICAgIG9wYWNpdHk6IDEgLyogRmlyZWZveCAqLyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBtaW5IZWlnaHQ6IFs1MCwgbnVsbCwgbnVsbCwgbnVsbCwgNjBdLFxuICAgICAgbWw6IFswLCBudWxsLCBudWxsLCAzXSxcbiAgICAgIG10OiBbNCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9