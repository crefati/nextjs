webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/navbar-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/navbar-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/drawer/drawer-context */ "./src/contexts/drawer/drawer-context.js");
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var assets_images_icons_close_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/images/icons/close.png */ "./src/assets/images/icons/close.png");
/* harmony import */ var assets_images_icons_close_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_close_png__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\nex\\src\\components\\header\\navbar-drawer.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */










var NavbarDrawer = function NavbarDrawer() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch; // Toggle drawer


  var toggleHandler = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
    dispatch({
      type: 'TOGGLE'
    });
  }, [dispatch]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: "340px",
    placement: "right",
    drawerHandler: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      sx: styles.handler,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["MenuButton"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    })),
    open: state === null || state === void 0 ? void 0 : state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
      sx: styles.closeButton,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Image"], {
      src: assets_images_icons_close_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      alt: "close",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    })),
    maskStyle: styles.mask,
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
    style: "margin: 20px;",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 35
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 38
    }
  }, "Crefati"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    as: "ul",
    sx: styles.navbar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (_ref, i) {
    var path = _ref.path,
        label = _ref.label;
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      as: "li",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      activeClass: "active",
      to: path,
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, label));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "primary",
    sx: styles.donateNow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "biz@crefati.com")));
};

_s(NavbarDrawer, "OqcrJSEs/Z0UdNNMJwJDY0ChobM=");

_c = NavbarDrawer;
/* harmony default export */ __webpack_exports__["default"] = (NavbarDrawer);
var styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    cursor: 'pointer',
    '@media screen and (min-width: 1024px)': {
      display: 'none'
    }
  },
  drawer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    outline: 0
  },
  mask: {
    opacity: 0.2
  },
  close: {
    position: 'absolute',
    top: 35,
    right: 30,
    zIndex: '1'
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    p: 0
  },
  wrapper: {
    height: '100%',
    paddingTop: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {
    ml: 30,
    mb: 45
  },
  navbar: {
    listStyle: 'none',
    m: 0,
    p: 0,
    'li > a': {
      backgroundColor: 'transparent',
      borderTop: function borderTop(t) {
        return "1px solid ".concat(t.colors.borderColor);
      },
      color: Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])('#02073E', 0.4),
      display: 'flex',
      alignItems: 'center',
      fontWeight: 500,
      minHeight: 44,
      marginLeft: 6,
      position: 'relative',
      transition: 'all 0.3s ease-in-out 0s'
    },
    'li:last-child > a': {
      borderBottom: function borderBottom(t) {
        return "1px solid ".concat(t.colors.borderColor);
      }
    },
    '.active': {
      color: 'primary'
    }
  },
  donateNow: {
    fontSize: 1,
    minHeight: 45,
    margin: 'auto 30px 40px'
  }
};

var _c;

$RefreshReg$(_c, "NavbarDrawer");

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL25hdmJhci1kcmF3ZXIuanMiXSwibmFtZXMiOlsiTmF2YmFyRHJhd2VyIiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwidG9nZ2xlSGFuZGxlciIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwic3R5bGVzIiwiaGFuZGxlciIsImlzT3BlbiIsImNsb3NlQnV0dG9uIiwiY2xvc2UiLCJtYXNrIiwiZHJhd2VyIiwid3JhcHBlciIsIm5hdmJhciIsIm1lbnVJdGVtcyIsIm1hcCIsImkiLCJwYXRoIiwibGFiZWwiLCJkb25hdGVOb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFNocmluayIsIndpZHRoIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0Iiwib3V0bGluZSIsIm9wYWNpdHkiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiekluZGV4IiwiYm9yZGVyIiwicCIsInBhZGRpbmdUb3AiLCJmbGV4RGlyZWN0aW9uIiwibG9nbyIsIm1sIiwibWIiLCJsaXN0U3R5bGUiLCJtIiwiYm9yZGVyVG9wIiwidCIsImNvbG9ycyIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJyZ2JhIiwiZm9udFdlaWdodCIsIm1pbkhlaWdodCIsIm1hcmdpbkxlZnQiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyQm90dG9tIiwiZm9udFNpemUiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLG9CQUNHQyx3REFBVSxDQUFDQyw0RUFBRCxDQURiO0FBQUEsTUFDakJDLEtBRGlCLGVBQ2pCQSxLQURp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bUNBQW9CQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsV0FBN0I7QUFBQSxPQUZIO0FBR1JDLFdBQUssRUFBRUMscURBQUksQ0FBQyxTQUFELEVBQVksR0FBWixDQUhIO0FBSVI1QixhQUFPLEVBQUUsTUFKRDtBQUtSQyxnQkFBVSxFQUFFLFFBTEo7QUFNUjRCLGdCQUFVLEVBQUUsR0FOSjtBQU9SQyxlQUFTLEVBQUUsRUFQSDtBQVFSQyxnQkFBVSxFQUFFLENBUko7QUFTUnJCLGNBQVEsRUFBRSxVQVRGO0FBVVJzQixnQkFBVSxFQUFFO0FBVkosS0FKSjtBQWdCTix5QkFBcUI7QUFDbkJDLGtCQUFZLEVBQUUsc0JBQUNULENBQUQ7QUFBQSxtQ0FBb0JBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxXQUE3QjtBQUFBO0FBREssS0FoQmY7QUFtQk4sZUFBVztBQUNUQyxXQUFLLEVBQUU7QUFERTtBQW5CTCxHQTlDSztBQXFFYjVCLFdBQVMsRUFBRTtBQUNUbUMsWUFBUSxFQUFFLENBREQ7QUFFVEosYUFBUyxFQUFFLEVBRkY7QUFHVEssVUFBTSxFQUFFO0FBSEM7QUFyRUUsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xODY5MDQyMGFkZTJiMWE5N2ZhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgSW1hZ2UsIEJ1dHRvbiwgTWVudUJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXItY29udGV4dCc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ2NvbXBvbmVudHMvZHJhd2VyJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xuaW1wb3J0IGNsb3NlIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2xvc2UucG5nJztcblxuY29uc3QgTmF2YmFyRHJhd2VyID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEcmF3ZXJDb250ZXh0KTtcblxuICAvLyBUb2dnbGUgZHJhd2VyXG4gIGNvbnN0IHRvZ2dsZUhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1RPR0dMRScsXG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPERyYXdlclxuICAgICAgd2lkdGg9XCIzNDBweFwiXG4gICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICBkcmF3ZXJIYW5kbGVyPXtcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmhhbmRsZXJ9PlxuICAgICAgICAgIDxNZW51QnV0dG9uIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgfVxuICAgICAgb3Blbj17c3RhdGU/LmlzT3Blbn1cbiAgICAgIHRvZ2dsZUhhbmRsZXI9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICBjbG9zZUJ1dHRvbj17XG4gICAgICAgIDxidXR0b24gc3g9e3N0eWxlcy5jbG9zZUJ1dHRvbn0+XG4gICAgICAgICAgPEltYWdlIHNyYz17Y2xvc2V9IGFsdD1cImNsb3NlXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICB9XG4gICAgICBtYXNrU3R5bGU9e3N0eWxlcy5tYXNrfVxuICAgICAgZHJhd2VyU3R5bGU9e3N0eWxlcy5kcmF3ZXJ9XG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XG4gICAgPlxuICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICA8aDQgc3R5bGU9XCJtYXJnaW46IDIwcHg7XCI+PGI+PGk+Q3JlZmF0aTwvaT48L2I+PC9oND5cbiAgICAgICAgPEJveCBhcz1cInVsXCIgc3g9e3N0eWxlcy5uYXZiYXJ9PlxuICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcbiAgICAgICAgICAgIDxCb3ggYXM9XCJsaVwiIGtleT17aX0+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgIHRvPXtwYXRofVxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc3g9e3N0eWxlcy5kb25hdGVOb3d9PlxuICAgICAgICAgIGJpekBjcmVmYXRpLmNvbVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE5hdmJhckRyYXdlcjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoYW5kbGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4U2hyaW5rOiAnMCcsXG4gICAgd2lkdGg6ICcyNnB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICBkcmF3ZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBvdXRsaW5lOiAwLFxuICB9LFxuICBtYXNrOiB7XG4gICAgb3BhY2l0eTogMC4yLFxuICB9LFxuICBjbG9zZToge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMzUsXG4gICAgcmlnaHQ6IDMwLFxuICAgIHpJbmRleDogJzEnLFxuICB9LFxuICBjbG9zZUJ1dHRvbjoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6IDAsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHA6IDAsXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwYWRkaW5nVG9wOiAzMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgbG9nbzoge1xuICAgIG1sOiAzMCxcbiAgICBtYjogNDUsXG4gIH0sXG4gIG5hdmJhcjoge1xuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIG06IDAsXG4gICAgcDogMCxcbiAgICAnbGkgPiBhJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm9yZGVyVG9wOiAodCkgPT4gYDFweCBzb2xpZCAke3QuY29sb3JzLmJvcmRlckNvbG9yfWAsXG4gICAgICBjb2xvcjogcmdiYSgnIzAyMDczRScsIDAuNCksXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIG1pbkhlaWdodDogNDQsXG4gICAgICBtYXJnaW5MZWZ0OiA2LFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHMnLFxuICAgIH0sXG4gICAgJ2xpOmxhc3QtY2hpbGQgPiBhJzoge1xuICAgICAgYm9yZGVyQm90dG9tOiAodCkgPT4gYDFweCBzb2xpZCAke3QuY29sb3JzLmJvcmRlckNvbG9yfWAsXG4gICAgfSxcbiAgICAnLmFjdGl2ZSc6IHtcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgfSxcbiAgfSxcbiAgZG9uYXRlTm93OiB7XG4gICAgZm9udFNpemU6IDEsXG4gICAgbWluSGVpZ2h0OiA0NSxcbiAgICBtYXJnaW46ICdhdXRvIDMwcHggNDBweCcsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==