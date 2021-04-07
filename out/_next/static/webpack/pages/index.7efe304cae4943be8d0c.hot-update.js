webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var C_Users_user_Desktop_nex_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stickynode */ "./node_modules/react-stickynode/index.js");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/drawer/drawer-provider */ "./src/contexts/drawer/drawer-provider.js");
/* harmony import */ var _navbar_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar-drawer */ "./src/components/header/navbar-drawer.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var assets_images_icons_lock_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/images/icons/lock.png */ "./src/assets/images/icons/lock.png");
/* harmony import */ var assets_images_icons_lock_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_lock_png__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\nex\\src\\components\\header\\header.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_nex_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @jsx jsx */










function Header() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    isMobileMenu: false,
    isSticky: false
  }),
      state = _useState[0],
      setState = _useState[1];

  var handleCloseMenu = function handleCloseMenu() {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      isMobileMenu: false
    }));
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_4__["DrawerProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.headerWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    enabled: true,
    top: 0,
    activeClass: "is-sticky",
    innerZ: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "header",
    variant: "layout.header",
    className: state.isMobileMenu ? 'is-mobile-menu' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.headerInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    as: "nav",
    sx: styles.navbar,
    className: state.isMobileMenu ? 'navbar active' : 'navbar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "ul",
    sx: styles.navList,
    className: state.isMobileMenu ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (_ref, i) {
    var path = _ref.path,
        label = _ref.label;
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 23
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      path: path,
      label: label,
      onClick: handleCloseMenu,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }));
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "text",
    sx: styles.getStarted,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, "biz@crefati.com")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_navbar_drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  })))))));
}

_s(Header, "cNVhs0R196Prxvcg0VG+b389a8c=");

_c = Header;
var styles = {
  headerWrapper: {
    backgroundColor: 'transparent',
    header: {
      position: 'fixed',
      left: 0,
      right: 0,
      py: [4],
      transition: 'all 0.3s ease-in-out 0s',
      '&.is-mobile-menu': {
        backgroundColor: 'white'
      }
    },
    '.is-sticky': {
      header: {
        backgroundColor: 'white',
        py: ['13px'],
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)'
      }
    }
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between' // position: ['relative', null, null, 'static'],

  },
  logo: {
    mr: [null, null, null, null, 30, 12]
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 1,
    // justifyContent: 'center',
    li: {
      display: 'flex',
      alignItems: 'center',
      a: {
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out 0s'
      }
    }
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    flexGrow: 1,
    p: 0,
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 400,
      padding: 0,
      margin: [null, null, null, null, '0 15px']
    },
    '.active': {
      color: 'primary'
    }
  },
  getStarted: {
    backgroundColor: '#FFF0D7',
    color: '#E6A740',
    p: ['0 16px'],
    minHeight: 45,
    ml: [6],
    display: ['none', null, null, null, 'flex']
  },
  login: {
    backgroundColor: 'transparent',
    position: ['absolute', null, null, null, 'static'],
    color: 'text',
    fontSize: [2],
    fontWeight: 500,
    top: '50%',
    p: 0,
    transform: ['translateY(-50%)', null, null, null, 'none'],
    right: 79,
    border: 0,
    fontFamily: 'body',
    display: 'flex',
    alignItems: 'center',
    outline: 0,
    img: {
      maxWidth: 14,
      mr: 2
    }
  },
  menuButton: {
    position: 'relative',
    right: '-6px',
    p: 0
  },
  closeButton: {
    height: '32px',
    padding: '0',
    minHeight: 'auto',
    width: '32px',
    position: 'relative',
    right: '-10px',
    path: {
      stroke: 'text'
    }
  }
};

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzTW9iaWxlTWVudSIsImlzU3RpY2t5Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNsb3NlTWVudSIsInN0eWxlcyIsImhlYWRlcldyYXBwZXIiLCJoZWFkZXJJbm5lciIsIm5hdmJhciIsIm5hdkxpc3QiLCJtZW51SXRlbXMiLCJtYXAiLCJpIiwicGF0aCIsImxhYmVsIiwiYnV0dG9uR3JvdXAiLCJnZXRTdGFydGVkIiwiYmFja2dyb3VuZENvbG9yIiwiaGVhZGVyIiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJweSIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibG9nbyIsIm1yIiwiZmxleEdyb3ciLCJsaSIsImEiLCJjdXJzb3IiLCJsaXN0U3R5bGUiLCJwIiwiZm9udFdlaWdodCIsInBhZGRpbmciLCJtYXJnaW4iLCJjb2xvciIsIm1pbkhlaWdodCIsIm1sIiwibG9naW4iLCJmb250U2l6ZSIsInRvcCIsInRyYW5zZm9ybSIsImJvcmRlciIsImZvbnRGYW1pbHkiLCJvdXRsaW5lIiwiaW1nIiwibWF4V2lkdGgiLCJtZW51QnV0dG9uIiwiY2xvc2VCdXR0b24iLCJoZWlnaHQiLCJ3aWR0aCIsInN0cm9rZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDO0FBQ2pDQyxnQkFBWSxFQUFFLEtBRG1CO0FBRWpDQyxZQUFRLEVBQUU7QUFGdUIsR0FBRCxDQURIO0FBQUEsTUFDeEJDLEtB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VmMsS0FBQyxFQUFFO0FBSE8sR0F2RkM7QUE0RmJpQixhQUFXLEVBQUU7QUFDWEMsVUFBTSxFQUFFLE1BREc7QUFFWGhCLFdBQU8sRUFBRSxHQUZFO0FBR1hHLGFBQVMsRUFBRSxNQUhBO0FBSVhjLFNBQUssRUFBRSxNQUpJO0FBS1huQyxZQUFRLEVBQUUsVUFMQztBQU1YRSxTQUFLLEVBQUUsT0FOSTtBQU9YUixRQUFJLEVBQUU7QUFDSjBDLFlBQU0sRUFBRTtBQURKO0FBUEs7QUE1RkEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZWZlMzA0Y2FlNDk0M2JlOGQwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBGbGV4LCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXItcHJvdmlkZXInO1xuaW1wb3J0IE5hdmJhckRyYXdlciBmcm9tICcuL25hdmJhci1kcmF3ZXInO1xuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xuaW1wb3J0IGxvY2sgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9sb2NrLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgaXNNb2JpbGVNZW51OiBmYWxzZSxcbiAgICBpc1N0aWNreTogZmFsc2UsXG4gIH0pO1xuICBjb25zdCBoYW5kbGVDbG9zZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBpc01vYmlsZU1lbnU6IGZhbHNlLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERyYXdlclByb3ZpZGVyPlxuICAgICAgPEJveCBzeD17c3R5bGVzLmhlYWRlcldyYXBwZXJ9PlxuICAgICAgICA8U3RpY2t5IGVuYWJsZWQ9e3RydWV9IHRvcD17MH0gYWN0aXZlQ2xhc3M9XCJpcy1zdGlja3lcIiBpbm5lclo9ezEwMH0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgYXM9XCJoZWFkZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cImxheW91dC5oZWFkZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGF0ZS5pc01vYmlsZU1lbnUgPyAnaXMtbW9iaWxlLW1lbnUnIDogJyd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmhlYWRlcklubmVyfT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgYXM9XCJuYXZcIlxuICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5uYXZiYXJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXRlLmlzTW9iaWxlTWVudSA/ICduYXZiYXIgYWN0aXZlJyA6ICduYXZiYXInfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJ1bFwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMubmF2TGlzdH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGF0ZS5pc01vYmlsZU1lbnUgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTWVudX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5idXR0b25Hcm91cH0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgc3g9e3N0eWxlcy5nZXRTdGFydGVkfT5cbiAgICAgICAgICAgICAgICAgICAgYml6QGNyZWZhdGkuY29tXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPE5hdmJhckRyYXdlciAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1N0aWNreT5cbiAgICAgIDwvQm94PlxuICAgIDwvRHJhd2VyUHJvdmlkZXI+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyV3JhcHBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBoZWFkZXI6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgcHk6IFs0XSxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLWluLW91dCAwcycsXG4gICAgICAnJi5pcy1tb2JpbGUtbWVudSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcuaXMtc3RpY2t5Jzoge1xuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgcHk6IFsnMTNweCddLFxuICAgICAgICBib3hTaGFkb3c6ICcwIDZweCAxM3B4IHJnYmEoMzgsNzgsMTE4LDAuMSknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBoZWFkZXJJbm5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIC8vIHBvc2l0aW9uOiBbJ3JlbGF0aXZlJywgbnVsbCwgbnVsbCwgJ3N0YXRpYyddLFxuICB9LFxuICBsb2dvOiB7XG4gICAgbXI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAzMCwgMTJdLFxuICB9LFxuICBuYXZiYXI6IHtcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCAnZmxleCddLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIC8vIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBsaToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBhOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHMnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBuYXZMaXN0OiB7XG4gICAgZGlzcGxheTogWydmbGV4J10sXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgcDogMCxcbiAgICAnLm5hdi1pdGVtJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgbWFyZ2luOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMTVweCddLFxuICAgIH0sXG4gICAgJy5hY3RpdmUnOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIH0sXG4gIH0sXG4gIGdldFN0YXJ0ZWQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGMEQ3JyxcbiAgICBjb2xvcjogJyNFNkE3NDAnLFxuICAgIHA6IFsnMCAxNnB4J10sXG4gICAgbWluSGVpZ2h0OiA0NSxcbiAgICBtbDogWzZdLFxuICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsICdmbGV4J10sXG4gIH0sXG4gIGxvZ2luOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIHBvc2l0aW9uOiBbJ2Fic29sdXRlJywgbnVsbCwgbnVsbCwgbnVsbCwgJ3N0YXRpYyddLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgZm9udFNpemU6IFsyXSxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBwOiAwLFxuICAgIHRyYW5zZm9ybTogWyd0cmFuc2xhdGVZKC01MCUpJywgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnXSxcbiAgICByaWdodDogNzksXG4gICAgYm9yZGVyOiAwLFxuICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgb3V0bGluZTogMCxcbiAgICBpbWc6IHtcbiAgICAgIG1heFdpZHRoOiAxNCxcbiAgICAgIG1yOiAyLFxuICAgIH0sXG4gIH0sXG4gIG1lbnVCdXR0b246IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICByaWdodDogJy02cHgnLFxuICAgIHA6IDAsXG4gIH0sXG4gIGNsb3NlQnV0dG9uOiB7XG4gICAgaGVpZ2h0OiAnMzJweCcsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIG1pbkhlaWdodDogJ2F1dG8nLFxuICAgIHdpZHRoOiAnMzJweCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcmlnaHQ6ICctMTBweCcsXG4gICAgcGF0aDoge1xuICAgICAgc3Ryb2tlOiAndGV4dCcsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9