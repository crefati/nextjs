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
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL25hdmJhci1kcmF3ZXIuanMiXSwibmFtZXMiOlsiTmF2YmFyRHJhd2VyIiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwidG9nZ2xlSGFuZGxlciIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwic3R5bGVzIiwiaGFuZGxlciIsImlzT3BlbiIsImNsb3NlQnV0dG9uIiwiY2xvc2UiLCJtYXNrIiwiZHJhd2VyIiwid3JhcHBlciIsIm5hdmJhciIsIm1lbnVJdGVtcyIsIm1hcCIsImkiLCJwYXRoIiwibGFiZWwiLCJkb25hdGVOb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFNocmluayIsIndpZHRoIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0Iiwib3V0bGluZSIsIm9wYWNpdHkiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiekluZGV4IiwiYm9yZGVyIiwicCIsInBhZGRpbmdUb3AiLCJmbGV4RGlyZWN0aW9uIiwibG9nbyIsIm1sIiwibWIiLCJsaXN0U3R5bGUiLCJtIiwiYm9yZGVyVG9wIiwidCIsImNvbG9ycyIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJyZ2JhIiwiZm9udFdlaWdodCIsIm1pbkhlaWdodCIsIm1hcmdpbkxlZnQiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyQm90dG9tIiwiZm9udFNpemUiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLG9CQUNHQyx3REFBVSxDQUFDQyw0RUFBRCxDQURiO0FBQUEsTUFDakJDLEtBRGlCLGVBQ2pCQSxLQURp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QU5KO0FBT1JDLGVBQVMsRUFBRSxFQVBIO0FBUVJDLGdCQUFVLEVBQUUsQ0FSSjtBQVNSckIsY0FBUSxFQUFFLFVBVEY7QUFVUnNCLGdCQUFVLEVBQUU7QUFWSixLQUpKO0FBZ0JOLHlCQUFxQjtBQUNuQkMsa0JBQVksRUFBRSxzQkFBQ1QsQ0FBRDtBQUFBLG1DQUFvQkEsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLFdBQTdCO0FBQUE7QUFESyxLQWhCZjtBQW1CTixlQUFXO0FBQ1RDLFdBQUssRUFBRTtBQURFO0FBbkJMLEdBOUNLO0FBcUViNUIsV0FBUyxFQUFFO0FBQ1RtQyxZQUFRLEVBQUUsQ0FERDtBQUVUSixhQUFTLEVBQUUsRUFGRjtBQUdUSyxVQUFNLEVBQUU7QUFIQztBQXJFRSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJhNGI0MjUwZjEzMTlhMWJiYjhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBJbWFnZSwgQnV0dG9uLCBNZW51QnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgeyBEcmF3ZXJDb250ZXh0IH0gZnJvbSAnY29udGV4dHMvZHJhd2VyL2RyYXdlci1jb250ZXh0JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnY29tcG9uZW50cy9kcmF3ZXInO1xuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9jbG9zZS5wbmcnO1xuXG5jb25zdCBOYXZiYXJEcmF3ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERyYXdlckNvbnRleHQpO1xuXG4gIC8vIFRvZ2dsZSBkcmF3ZXJcbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVE9HR0xFJyxcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyXG4gICAgICB3aWR0aD1cIjM0MHB4XCJcbiAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgIGRyYXdlckhhbmRsZXI9e1xuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaGFuZGxlcn0+XG4gICAgICAgICAgPE1lbnVCdXR0b24gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICB9XG4gICAgICBvcGVuPXtzdGF0ZT8uaXNPcGVufVxuICAgICAgdG9nZ2xlSGFuZGxlcj17dG9nZ2xlSGFuZGxlcn1cbiAgICAgIGNsb3NlQnV0dG9uPXtcbiAgICAgICAgPGJ1dHRvbiBzeD17c3R5bGVzLmNsb3NlQnV0dG9ufT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtjbG9zZX0gYWx0PVwiY2xvc2VcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIH1cbiAgICAgIG1hc2tTdHlsZT17c3R5bGVzLm1hc2t9XG4gICAgICBkcmF3ZXJTdHlsZT17c3R5bGVzLmRyYXdlcn1cbiAgICAgIGNsb3NlQnRuU3R5bGU9e3N0eWxlcy5jbG9zZX1cbiAgICA+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgXG4gICAgICAgIDxCb3ggYXM9XCJ1bFwiIHN4PXtzdHlsZXMubmF2YmFyfT5cbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgICA8Qm94IGFzPVwibGlcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHN4PXtzdHlsZXMuZG9uYXRlTm93fT5cbiAgICAgICAgICBiaXpAY3JlZmF0aS5jb21cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L0RyYXdlcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZiYXJEcmF3ZXI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGFuZGxlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZmxleFNocmluazogJzAnLFxuICAgIHdpZHRoOiAnMjZweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbiAgZHJhd2VyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgb3V0bGluZTogMCxcbiAgfSxcbiAgbWFzazoge1xuICAgIG9wYWNpdHk6IDAuMixcbiAgfSxcbiAgY2xvc2U6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDM1LFxuICAgIHJpZ2h0OiAzMCxcbiAgICB6SW5kZXg6ICcxJyxcbiAgfSxcbiAgY2xvc2VCdXR0b246IHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyOiAwLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwOiAwLFxuICB9LFxuICB3cmFwcGVyOiB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcGFkZGluZ1RvcDogMzAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIGxvZ286IHtcbiAgICBtbDogMzAsXG4gICAgbWI6IDQ1LFxuICB9LFxuICBuYXZiYXI6IHtcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICBtOiAwLFxuICAgIHA6IDAsXG4gICAgJ2xpID4gYSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJvcmRlclRvcDogKHQpID0+IGAxcHggc29saWQgJHt0LmNvbG9ycy5ib3JkZXJDb2xvcn1gLFxuICAgICAgY29sb3I6IHJnYmEoJyMwMjA3M0UnLCAwLjQpLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBtaW5IZWlnaHQ6IDQ0LFxuICAgICAgbWFyZ2luTGVmdDogNixcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UtaW4tb3V0IDBzJyxcbiAgICB9LFxuICAgICdsaTpsYXN0LWNoaWxkID4gYSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogKHQpID0+IGAxcHggc29saWQgJHt0LmNvbG9ycy5ib3JkZXJDb2xvcn1gLFxuICAgIH0sXG4gICAgJy5hY3RpdmUnOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIH0sXG4gIH0sXG4gIGRvbmF0ZU5vdzoge1xuICAgIGZvbnRTaXplOiAxLFxuICAgIG1pbkhlaWdodDogNDUsXG4gICAgbWFyZ2luOiAnYXV0byAzMHB4IDQwcHgnLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=