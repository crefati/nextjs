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
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Crefati"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzTW9iaWxlTWVudSIsImlzU3RpY2t5Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNsb3NlTWVudSIsInN0eWxlcyIsImhlYWRlcldyYXBwZXIiLCJoZWFkZXJJbm5lciIsIm5hdmJhciIsIm5hdkxpc3QiLCJtZW51SXRlbXMiLCJtYXAiLCJpIiwicGF0aCIsImxhYmVsIiwiYnV0dG9uR3JvdXAiLCJnZXRTdGFydGVkIiwiYmFja2dyb3VuZENvbG9yIiwiaGVhZGVyIiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJweSIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibG9nbyIsIm1yIiwiZmxleEdyb3ciLCJsaSIsImEiLCJjdXJzb3IiLCJsaXN0U3R5bGUiLCJwIiwiZm9udFdlaWdodCIsInBhZGRpbmciLCJtYXJnaW4iLCJjb2xvciIsIm1pbkhlaWdodCIsIm1sIiwibG9naW4iLCJmb250U2l6ZSIsInRvcCIsInRyYW5zZm9ybSIsImJvcmRlciIsImZvbnRGYW1pbHkiLCJvdXRsaW5lIiwiaW1nIiwibWF4V2lkdGgiLCJtZW51QnV0dG9uIiwiY2xvc2VCdXR0b24iLCJoZWlnaHQiLCJ3aWR0aCIsInN0cm9rZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDO0FBQ2pDQyxnQkFBWSxFQUFFLEtBRG1CO0FBRWpDQyxZQUFRLEVBQUU7QUFGdUIsR0FBRCxDQURIO0FBQUEsTUFDeEJDLEtB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QUNWaEMsWUFBUSxFQUFFLFVBREE7QUFFVkUsU0FBSyxFQUFFLE1BRkc7QUFHVmMsS0FBQyxFQUFFO0FBSE8sR0F2RkM7QUE0RmJpQixhQUFXLEVBQUU7QUFDWEMsVUFBTSxFQUFFLE1BREc7QUFFWGhCLFdBQU8sRUFBRSxHQUZFO0FBR1hHLGFBQVMsRUFBRSxNQUhBO0FBSVhjLFNBQUssRUFBRSxNQUpJO0FBS1huQyxZQUFRLEVBQUUsVUFMQztBQU1YRSxTQUFLLEVBQUUsT0FOSTtBQU9YUixRQUFJLEVBQUU7QUFDSjBDLFlBQU0sRUFBRTtBQURKO0FBUEs7QUE1RkEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMzRjMmFlN2M3NThjNjFlOGIzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBGbGV4LCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXItcHJvdmlkZXInO1xuaW1wb3J0IE5hdmJhckRyYXdlciBmcm9tICcuL25hdmJhci1kcmF3ZXInO1xuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xuaW1wb3J0IGxvY2sgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9sb2NrLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgaXNNb2JpbGVNZW51OiBmYWxzZSxcbiAgICBpc1N0aWNreTogZmFsc2UsXG4gIH0pO1xuICBjb25zdCBoYW5kbGVDbG9zZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBpc01vYmlsZU1lbnU6IGZhbHNlLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERyYXdlclByb3ZpZGVyPlxuICAgICAgPEJveCBzeD17c3R5bGVzLmhlYWRlcldyYXBwZXJ9PlxuICAgICAgICA8U3RpY2t5IGVuYWJsZWQ9e3RydWV9IHRvcD17MH0gYWN0aXZlQ2xhc3M9XCJpcy1zdGlja3lcIiBpbm5lclo9ezEwMH0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgYXM9XCJoZWFkZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cImxheW91dC5oZWFkZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGF0ZS5pc01vYmlsZU1lbnUgPyAnaXMtbW9iaWxlLW1lbnUnIDogJyd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmhlYWRlcklubmVyfT5cbiAgICAgICAgICAgICAgICA8aDQ+Q3JlZmF0aTwvaDQ+XG4gICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgIGFzPVwibmF2XCJcbiAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMubmF2YmFyfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGF0ZS5pc01vYmlsZU1lbnUgPyAnbmF2YmFyIGFjdGl2ZScgOiAnbmF2YmFyJ31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGFzPVwidWxcIlxuICAgICAgICAgICAgICAgICAgICBzeD17c3R5bGVzLm5hdkxpc3R9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhdGUuaXNNb2JpbGVNZW51ID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU1lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiIHN4PXtzdHlsZXMuZ2V0U3RhcnRlZH0+XG4gICAgICAgICAgICAgICAgICAgIGJpekBjcmVmYXRpLmNvbVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDxOYXZiYXJEcmF3ZXIgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9TdGlja3k+XG4gICAgICA8L0JveD5cbiAgICA8L0RyYXdlclByb3ZpZGVyPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlYWRlcldyYXBwZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgaGVhZGVyOiB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHB5OiBbNF0sXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHMnLFxuICAgICAgJyYuaXMtbW9iaWxlLW1lbnUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnLmlzLXN0aWNreSc6IHtcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHB5OiBbJzEzcHgnXSxcbiAgICAgICAgYm94U2hhZG93OiAnMCA2cHggMTNweCByZ2JhKDM4LDc4LDExOCwwLjEpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgaGVhZGVySW5uZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAvLyBwb3NpdGlvbjogWydyZWxhdGl2ZScsIG51bGwsIG51bGwsICdzdGF0aWMnXSxcbiAgfSxcbiAgbG9nbzoge1xuICAgIG1yOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMzAsIDEyXSxcbiAgfSxcbiAgbmF2YmFyOiB7XG4gICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2ZsZXgnXSxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4R3JvdzogMSxcbiAgICAvLyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbGk6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgYToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UtaW4tb3V0IDBzJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbmF2TGlzdDoge1xuICAgIGRpc3BsYXk6IFsnZmxleCddLFxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIHA6IDAsXG4gICAgJy5uYXYtaXRlbSc6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIG1hcmdpbjogW251bGwsIG51bGwsIG51bGwsIG51bGwsICcwIDE1cHgnXSxcbiAgICB9LFxuICAgICcuYWN0aXZlJzoge1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICB9LFxuICB9LFxuICBnZXRTdGFydGVkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRjBENycsXG4gICAgY29sb3I6ICcjRTZBNzQwJyxcbiAgICBwOiBbJzAgMTZweCddLFxuICAgIG1pbkhlaWdodDogNDUsXG4gICAgbWw6IFs2XSxcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCAnZmxleCddLFxuICB9LFxuICBsb2dpbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBwb3NpdGlvbjogWydhYnNvbHV0ZScsIG51bGwsIG51bGwsIG51bGwsICdzdGF0aWMnXSxcbiAgICBjb2xvcjogJ3RleHQnLFxuICAgIGZvbnRTaXplOiBbMl0sXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIHRvcDogJzUwJScsXG4gICAgcDogMCxcbiAgICB0cmFuc2Zvcm06IFsndHJhbnNsYXRlWSgtNTAlKScsIG51bGwsIG51bGwsIG51bGwsICdub25lJ10sXG4gICAgcmlnaHQ6IDc5LFxuICAgIGJvcmRlcjogMCxcbiAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG91dGxpbmU6IDAsXG4gICAgaW1nOiB7XG4gICAgICBtYXhXaWR0aDogMTQsXG4gICAgICBtcjogMixcbiAgICB9LFxuICB9LFxuICBtZW51QnV0dG9uOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcmlnaHQ6ICctNnB4JyxcbiAgICBwOiAwLFxuICB9LFxuICBjbG9zZUJ1dHRvbjoge1xuICAgIGhlaWdodDogJzMycHgnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICBtaW5IZWlnaHQ6ICdhdXRvJyxcbiAgICB3aWR0aDogJzMycHgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHJpZ2h0OiAnLTEwcHgnLFxuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogJ3RleHQnLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==