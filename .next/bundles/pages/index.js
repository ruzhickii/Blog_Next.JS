
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(66);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(562);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _Search = __webpack_require__(565);

var _Search2 = _interopRequireDefault(_Search);

var _Banner = __webpack_require__(558);

var _Banner2 = _interopRequireDefault(_Banner);

var _Search_title = __webpack_require__(566);

var _Search_title2 = _interopRequireDefault(_Search_title);

var _show_more = __webpack_require__(567);

var _show_more2 = _interopRequireDefault(_show_more);

var _link = __webpack_require__(552);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(557);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\pages\\index.js?entry';


var img = {
    width: "100%",
    display: "block"
};

var container = {
    maxWidth: 1400,
    margin: "0 auto"
};

var card_wrapper = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
};

var card = {
    boxShadow: "0 5px 5px rgba(0, 0, 0, 0.31)",
    marginBottom: 30
};

var card_img = {
    maxWidth: 635,
    position: "relative"
};

var article_name = {
    background: "#fbaf5d",
    maxWidth: 200,
    marginLeft: 35,
    position: "absolute",
    bottom: 0,
    textAlign: "center"
};

var title_name = {
    color: "#000",
    padding: "10px 0px 55px 20px",
    fontSize: 35,
    textTransform: "uppercase",
    fontFamily: "Roboto",
    fontWeight: 300
};

var description = {
    margin: 0,
    padding: "5px 0 5px 0",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto"
};

var Index = function Index(props) {
    return _react2.default.createElement(_MyLayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    }, _react2.default.createElement(_Banner2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    }), _react2.default.createElement(_Search_title2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }), _react2.default.createElement('div', { style: container, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, _react2.default.createElement(_Search2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }), _react2.default.createElement('div', { style: card_wrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, props.shows && props.shows.map(function (show) {
        return _react2.default.createElement('div', { style: card, key: show.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 74
            }
        }, _react2.default.createElement('div', { style: card_img, __source: {
                fileName: _jsxFileName,
                lineNumber: 75
            }
        }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 76
            }
        }, _react2.default.createElement('a', { style: description, __source: {
                fileName: _jsxFileName,
                lineNumber: 77
            }
        }, _react2.default.createElement('img', { style: img, src: show.better_featured_image.source_url, __source: {
                fileName: _jsxFileName,
                lineNumber: 78
            }
        }), _react2.default.createElement('div', { style: article_name, __source: {
                fileName: _jsxFileName,
                lineNumber: 79
            }
        }, _react2.default.createElement('p', { style: description, __source: {
                fileName: _jsxFileName,
                lineNumber: 80
            }
        }, show.excerpt.rendered))))), _react2.default.createElement('div', { style: title_name, __source: {
                fileName: _jsxFileName,
                lineNumber: 85
            }
        }, _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 86
            }
        }, show.title.rendered)));
    })), _react2.default.createElement(_show_more2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 106
        }
    })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res, show;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _isomorphicUnfetch2.default)('http://localhost/wordpress/wp-json/wp/v2/posts/');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    show = _context.sent;

                    console.log('DATA', show);
                    console.log('Show data fetched. Count: ' + show.length);

                    return _context.abrupt('return', {
                        shows: show
                    });

                case 9:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Banner.js";

var banner = {
    position: "relative",
    backgroundImage: "url('/static/bg-blog.jpg')",
    backgroundSize: "cover",
    width: "100%",
    height: "700px",
    fontFamily: "'Roboto', sans-serif"
};

var titleBlog = {
    paddingTop: "85px",
    margin: 0,
    color: "#fff",
    fontSize: "60px",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Roboto"
};

var Banner = function Banner(props) {
    return _react2.default.createElement("div", { style: banner, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement("h1", { style: titleBlog, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, "find creative engineering inspiration here"));
};

exports.default = Banner;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Banner.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Banner.js"); } } })();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Navigation_footer = __webpack_require__(563);

var _Navigation_footer2 = _interopRequireDefault(_Navigation_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Footer.js";


var footerStyle = {
    color: "#fff",
    background: "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 20,
    fontFamily: "Roboto"
};

var Footer = function Footer(props) {
    return _react2.default.createElement("div", { style: footerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement(_Navigation_footer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement("span", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, "\xA9 PerceptionBox, Custom Software Development Company. All rights reserved."));
};

exports.default = Footer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Footer.js"); } } })();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Navigation_header = __webpack_require__(564);

var _Navigation_header2 = _interopRequireDefault(_Navigation_header);

var _Logo = __webpack_require__(561);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Header.js';


var headerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 50,
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    background: "#fff",
    borderBottom: "2px solid #041936"
};

var Header = function Header(props) {
    return _react2.default.createElement('div', { style: headerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement(_Logo2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }), _react2.default.createElement(_Navigation_header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Header.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Logo.js";

var logo_wrapper = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
};

var logo_link = {
    display: "block",
    whiteSpace: "nowrap"
};

var Logo = function Logo(props) {
    return _react2.default.createElement("div", { style: logo_wrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement("a", { style: logo_link, href: "#", __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement("img", { src: "/static/logo-black.png", alt: "PERCEPTION BOX", __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    })));
};

exports.default = Logo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Logo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Logo.js"); } } })();

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(560);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(559);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\MyLayout.js';


var layoutStyle = {};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), props.children, _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\MyLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\MyLayout.js"); } } })();

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(552);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Navigation_footer.js";


var blockLinkStyle = {
    margin: 0
};

var ulStyles = {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    margin: "0 0 35px 0"
};

var liStyles = {
    marginLeft: 20
};

var aStyles = {
    textDecoration: "none",
    color: "#fff",
    fontFamily: "Roboto",
    display: "flex",
    alignItems: "center",
    height: "100%",
    padding: 10,
    textTransform: "uppercase"
};

var Navigation = function Navigation() {
    return _react2.default.createElement("div", { style: blockLinkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement("ul", { style: ulStyles, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement("li", { style: liStyles, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement(_link2.default, { href: "/", __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement("a", { style: aStyles, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, "Home"))), _react2.default.createElement("li", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement(_link2.default, { href: "/technologies", __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, _react2.default.createElement("a", { style: aStyles, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, "technologies"))), _react2.default.createElement("li", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement(_link2.default, { href: "#", __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, _react2.default.createElement("a", { style: aStyles, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, "about us"))), _react2.default.createElement("li", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement(_link2.default, { href: "#", __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, _react2.default.createElement("a", { style: aStyles, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, "lets talk!")))));
};

exports.default = Navigation;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Navigation_footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Navigation_footer.js"); } } })();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(552);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Navigation_header.js";


var nav = {
    margin: 0,
    height: "100%"
};

var navigation = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    listStyleType: "none"
};

var navigation_item = {
    position: "relative",
    height: "100%",
    padding: "5px 0",
    margin: "0 3px",
    textAlign: "center"
};

var header_link = {
    textDecoration: "none",
    color: "#4a5269",
    fontFamily: "Roboto",
    display: "flex",
    alignItems: "center",
    height: "100%",
    padding: "10px"
};

var connect_link = {
    background: "#0a2954",
    color: "#fff",
    borderRadius: "5px",
    border: "1px solid transparent",
    transition: "all 0.5s",
    padding: "10px",
    textDecoration: "none",
    fontFamily: "Roboto"
};

var Navigation = function Navigation() {
    return _react2.default.createElement("div", { style: nav, __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, _react2.default.createElement("ul", { style: navigation, __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement("li", { style: navigation_item, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, _react2.default.createElement(_link2.default, { href: "/", __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, _react2.default.createElement("a", { style: header_link, href: "#", __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, "HOME"))), _react2.default.createElement("li", { style: navigation_item, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }, _react2.default.createElement(_link2.default, { href: "/technologies", __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement("a", { style: header_link, href: "#", __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, "TECHNOLOGIES"))), _react2.default.createElement("li", { style: navigation_item, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, _react2.default.createElement(_link2.default, { href: "/", __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, _react2.default.createElement("a", { style: header_link, href: "#", __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, "ABOUT US"))), _react2.default.createElement("li", { style: navigation_item, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }, _react2.default.createElement(_link2.default, { href: "/", __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }, _react2.default.createElement("a", { style: connect_link, href: "#", __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }, "LET'S TALK!")))));
};

exports.default = Navigation;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Navigation_header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Navigation_header.js"); } } })();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Search.js";

var inputs_wrapper = {
    boxShadow: "0 0 5px black",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "60px 0 0 0",
    padding: "55px 0 55px 0"
};

var tag_name_input = {
    maxWidth: 465,
    height: 95,
    textAlign: "center",
    color: "#778094",
    fontFamily: "Roboto",
    fontSize: 45,
    fontWeight: 400,
    textTransform: "uppercase",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.45)"
};

var square_wrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
};

var first = {
    width: 30,
    height: 30,
    backgroundColor: "#fbaf5d",
    margin: "10px 10px 0 0"
};

var second = {
    width: 30,
    height: 30,
    backgroundColor: "#7cc576",
    margin: "10px 10px 0 0"
};

var third = {
    width: 30,
    height: 30,
    backgroundColor: "#5674b9",
    margin: "10px 10px 0 0"
};

var forth = {
    width: 30,
    height: 30,
    backgroundColor: "#f26d7d",
    margin: "10px 10px 0 0"
};

var fifth = {
    width: 30,
    height: 30,
    backgroundColor: "#c69c6d",
    margin: "10px 10px 0 0"
};

var six = {
    width: 30,
    height: 30,
    backgroundColor: "#f06eaa",
    margin: "10px 10px 0 0"
};

var title_name_input = {
    maxWidth: 465,
    height: 95,
    textAlign: "center",
    color: "#778094",
    fontFamily: "Roboto",
    fontSize: 45,
    fontWeight: 400,
    textTransform: "uppercase",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.45)"
};

var Search = function Search(props) {
    return _react2.default.createElement("div", { style: inputs_wrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }, _react2.default.createElement("input", { style: tag_name_input, type: "search", placeholder: "tag name", __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }), _react2.default.createElement("div", { style: square_wrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 88
        }
    }, _react2.default.createElement("div", { style: first, __source: {
            fileName: _jsxFileName,
            lineNumber: 89
        }
    }), _react2.default.createElement("div", { style: second, __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }), _react2.default.createElement("div", { style: third, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }), _react2.default.createElement("div", { style: forth, __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }), _react2.default.createElement("div", { style: fifth, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }), _react2.default.createElement("div", { style: six, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }))), _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 97
        }
    }, _react2.default.createElement("input", { style: title_name_input, type: "search", placeholder: "title name", __source: {
            fileName: _jsxFileName,
            lineNumber: 98
        }
    })));
};

exports.default = Search;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Search.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Search.js"); } } })();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Search_title.js";

var searchTitleBlock = {
    maxWidth: "380px",
    maxHeight: "110px",
    textAlign: "center",
    textTransform: "uppercase",
    position: "absolute",
    top: "756px",
    left: 0,
    right: 0,
    background: "#fff",
    color: "#0a2954",
    margin: "0 auto",
    borderRadius: "5px"
};

var h2 = {
    color: "#5c7493",
    lineHeight: "50px",
    fontSize: "50px",
    fontFamily: "Roboto",
    fontWeight: "400"
};

var image = {
    width: "60px",
    position: "absolute",
    top: "29px",
    right: 0
};

var Search_title = function Search_title(props) {
    return _react2.default.createElement("div", { style: searchTitleBlock, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement("h2", { style: h2, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, "search"), _react2.default.createElement("img", { style: image, src: "/static/icon-search.jpg", alt: "search icon", __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }));
};

exports.default = Search_title;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Search_title.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Search_title.js"); } } })();

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\show_more.js";

var show_more = {
    width: "100%",
    margin: "20px 0 100px 0",
    height: 100,
    fontSize: 49,
    textTransform: "uppercase",
    color: "#46648e",
    textDecoration: "none",
    border: "2px solid #ccc",
    background: "#fff"
};

var Show_more = function Show_more(props) {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement("button", { style: show_more, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, "show more"));
};

exports.default = Show_more;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\show_more.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\show_more.js"); } } })();

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(554);


/***/ })

},[568]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZmYwOGJkZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhbm5lci5qcz9mZjA4YmRlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzP2ZmMDhiZGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/ZmYwOGJkZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28uanM/ZmYwOGJkZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzP2ZmMDhiZGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uX2Zvb3Rlci5qcz9mZjA4YmRlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbl9oZWFkZXIuanM/ZmYwOGJkZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC5qcz9mZjA4YmRlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoX3RpdGxlLmpzP2ZmMDhiZGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaG93X21vcmUuanM/ZmYwOGJkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoJ1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCBTZWFyY2hfdGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hfdGl0bGUnXG5pbXBvcnQgU2hvd19tb3JlIGZyb20gJy4uL2NvbXBvbmVudHMvc2hvd19tb3JlJ1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5cbmNvbnN0IGltZyA9IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxufTtcblxuY29uc3QgY29udGFpbmVyID0ge1xuICAgIG1heFdpZHRoOiAxNDAwLFxuICAgIG1hcmdpbjogXCIwIGF1dG9cIlxufTtcblxuY29uc3QgY2FyZF93cmFwcGVyID0ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiXG59O1xuXG5jb25zdCBjYXJkID0ge1xuICAgIGJveFNoYWRvdzogXCIwIDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMxKVwiLFxuICAgIG1hcmdpbkJvdHRvbTogMzBcbn07XG5cbmNvbnN0IGNhcmRfaW1nID0ge1xuICAgIG1heFdpZHRoOiA2MzUsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxufTtcblxuY29uc3QgYXJ0aWNsZV9uYW1lID0ge1xuICAgIGJhY2tncm91bmQ6IFwiI2ZiYWY1ZFwiLFxuICAgIG1heFdpZHRoOiAyMDAsXG4gICAgbWFyZ2luTGVmdDogMzUsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBib3R0b206IDAsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG59O1xuXG5jb25zdCB0aXRsZV9uYW1lID0ge1xuICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgICBwYWRkaW5nOiBcIjEwcHggMHB4IDU1cHggMjBweFwiLFxuICAgIGZvbnRTaXplOiAzNSxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsXG4gICAgZm9udFdlaWdodDogMzAwXG59O1xuXG5jb25zdCBkZXNjcmlwdGlvbiA9IHtcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogXCI1cHggMCA1cHggMFwiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGZvbnRTaXplOiAyNSxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiXG59O1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxCYW5uZXIgLz5cbiAgICAgICAgPFNlYXJjaF90aXRsZSAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJ9PlxuICAgICAgICAgICAgPFNlYXJjaCAvPlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjYXJkX3dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93cyAmJiBwcm9wcy5zaG93cy5tYXAoKHNob3cpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y2FyZH0ga2V5PXtzaG93LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NhcmRfaW1nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9wLyR7c2hvdy5pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHtzaG93LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17ZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtpbWd9IHNyYz17c2hvdy5iZXR0ZXJfZmVhdHVyZWRfaW1hZ2Uuc291cmNlX3VybH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthcnRpY2xlX25hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Rlc2NyaXB0aW9ufT57c2hvdy5leGNlcnB0LnJlbmRlcmVkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RpdGxlX25hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzaG93LnRpdGxlLnJlbmRlcmVkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7Lyo8ZGl2IHN0eWxlPXtjYXJkV3JhcHBlcn0+Ki99XG4gICAgICAgICAgICAgICAgey8qe3Byb3BzLnNob3dzICYmIHByb3BzLnNob3dzLm1hcCgoc2hvdykgPT4gKCovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGtleT17c2hvdy5pZH0+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8TGluayBhcz17YC9wLyR7c2hvdy5pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHtzaG93LmlkfWB9PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxhPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp7c2hvdy5iZXR0ZXJfZmVhdHVyZWRfaW1hZ2UgJiYgPGltZyBzdHlsZT17aW1nfSBzcmM9e3Nob3cuYmV0dGVyX2ZlYXR1cmVkX2ltYWdlLnNvdXJjZV91cmx9Lz59Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKntzaG93LnRpdGxlLnJlbmRlcmVkfSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp7c2hvdy5leGNlcnB0LnJlbmRlcmVkfSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvYT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvTGluaz4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qKSl9Ki99XG4gICAgICAgICAgICB7Lyo8L2Rpdj4qL31cblxuICAgICAgICAgICAgPFNob3dfbW9yZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0L3dvcmRwcmVzcy93cC1qc29uL3dwL3YyL3Bvc3RzLycpO1xuICAgIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coYERBVEFgLCBzaG93KTtcbiAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke3Nob3cubGVuZ3RofWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd3M6IHNob3dcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiY29uc3QgYmFubmVyID0ge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnL3N0YXRpYy9iZy1ibG9nLmpwZycpXCIsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcIjcwMHB4XCIsXG4gICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiXG59O1xuXG5jb25zdCB0aXRsZUJsb2cgPSB7XG4gICAgcGFkZGluZ1RvcDogXCI4NXB4XCIsXG4gICAgbWFyZ2luOiAwLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBmb250U2l6ZTogXCI2MHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIlxufTtcblxuXG5jb25zdCBCYW5uZXIgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtiYW5uZXJ9PlxuICAgICAgICA8aDEgc3R5bGU9e3RpdGxlQmxvZ30+ZmluZCBjcmVhdGl2ZSBlbmdpbmVlcmluZyBpbnNwaXJhdGlvbiBoZXJlPC9oMT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQmFubmVyLmpzIiwiaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uX2Zvb3RlcidcblxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJhY2tncm91bmQ6IFwiIzAwMFwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiXG59O1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtmb290ZXJTdHlsZX0+XG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgIDxzcGFuPsKpIFBlcmNlcHRpb25Cb3gsIEN1c3RvbSBTb2Z0d2FyZSBEZXZlbG9wbWVudCBDb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbl9oZWFkZXInXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXG5cbmNvbnN0IGhlYWRlclN0eWxlID0ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgekluZGV4OiA1MCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHRvcDogMCxcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgYm9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCAjMDQxOTM2XCJcbn07XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJjb25zdCBsb2dvX3dyYXBwZXIgPSB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59O1xuXG5jb25zdCBsb2dvX2xpbmsgPSB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcbn07XG5cbmNvbnN0IExvZ28gPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtsb2dvX3dyYXBwZXJ9PlxuICAgICAgICA8YSBzdHlsZT17bG9nb19saW5rfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ28tYmxhY2sucG5nXCIgYWx0PVwiUEVSQ0VQVElPTiBCT1hcIiAvPlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvZ28uanMiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcblxuXG5cbmNvbnN0IGxheW91dFN0eWxlID0ge1xuXG59O1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICAgIDxIZWFkZXIgLz5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPEZvb3RlciAvPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgYmxvY2tMaW5rU3R5bGUgPSB7XG4gICAgbWFyZ2luOiAwXG59O1xuXG5jb25zdCB1bFN0eWxlcyA9IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICAgIG1hcmdpbjogXCIwIDAgMzVweCAwXCJcbn07XG5cbmNvbnN0IGxpU3R5bGVzID0ge1xuICAgIG1hcmdpbkxlZnQ6IDIwXG59O1xuXG5jb25zdCBhU3R5bGVzID0ge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgcGFkZGluZzogMTAsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIlxufTtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtibG9ja0xpbmtTdHlsZX0+XG4gICAgICAgIDx1bCBzdHlsZT17dWxTdHlsZXN9PlxuICAgICAgICAgICAgPGxpIHN0eWxlPXtsaVN0eWxlc30+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2FTdHlsZXN9PkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RlY2hub2xvZ2llc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17YVN0eWxlc30+dGVjaG5vbG9naWVzPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2FTdHlsZXN9PmFib3V0IHVzPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2FTdHlsZXN9PmxldHMgdGFsayE8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05hdmlnYXRpb25fZm9vdGVyLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBuYXYgPSB7XG4gICAgbWFyZ2luOiAwLFxuICAgIGhlaWdodDogXCIxMDAlXCJcbn07XG5cbmNvbnN0IG5hdmlnYXRpb24gPSB7XG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgbGlzdFN0eWxlVHlwZTogXCJub25lXCJcbn07XG5cbmNvbnN0IG5hdmlnYXRpb25faXRlbSA9IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgcGFkZGluZzogXCI1cHggMFwiLFxuICAgIG1hcmdpbjogXCIwIDNweFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxufTtcblxuY29uc3QgaGVhZGVyX2xpbmsgPSB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGNvbG9yOiBcIiM0YTUyNjlcIixcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBwYWRkaW5nOiBcIjEwcHhcIixcbn07XG5cbmNvbnN0IGNvbm5lY3RfbGluayA9IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiMwYTI5NTRcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjVzXCIsXG4gICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCJcbn07XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17bmF2fT5cbiAgICAgICAgPHVsIHN0eWxlPXtuYXZpZ2F0aW9ufT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17bmF2aWdhdGlvbl9pdGVtfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17aGVhZGVyX2xpbmt9IGhyZWY9XCIjXCI+SE9NRTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHN0eWxlPXtuYXZpZ2F0aW9uX2l0ZW19PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVjaG5vbG9naWVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtoZWFkZXJfbGlua30gaHJlZj1cIiNcIj5URUNITk9MT0dJRVM8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17bmF2aWdhdGlvbl9pdGVtfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17aGVhZGVyX2xpbmt9IGhyZWY9XCIjXCI+QUJPVVQgVVM8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17bmF2aWdhdGlvbl9pdGVtfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17Y29ubmVjdF9saW5rfSBocmVmPVwiI1wiPkxFVCdTIFRBTEshPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXZpZ2F0aW9uX2hlYWRlci5qcyIsImNvbnN0IGlucHV0c193cmFwcGVyID0ge1xuICAgIGJveFNoYWRvdzogXCIwIDAgNXB4IGJsYWNrXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgbWFyZ2luOiBcIjYwcHggMCAwIDBcIixcbiAgICBwYWRkaW5nOiBcIjU1cHggMCA1NXB4IDBcIlxufTtcblxuY29uc3QgdGFnX25hbWVfaW5wdXQgPSB7XG4gICAgbWF4V2lkdGg6IDQ2NSxcbiAgICBoZWlnaHQ6IDk1LFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBjb2xvcjogXCIjNzc4MDk0XCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICBmb250U2l6ZTogNDUsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NSlcIlxufTtcblxuY29uc3Qgc3F1YXJlX3dyYXBwZXIgPSB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxufTtcblxuY29uc3QgZmlyc3QgPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmYmFmNWRcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCBzZWNvbmQgPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM3Y2M1NzZcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCB0aGlyZCA9IHtcbiAgICB3aWR0aDogMzAsXG4gICAgaGVpZ2h0OiAzMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzU2NzRiOVwiLFxuICAgIG1hcmdpbjogXCIxMHB4IDEwcHggMCAwXCJcbn07XG5cbmNvbnN0IGZvcnRoID0ge1xuICAgIHdpZHRoOiAzMCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjI2ZDdkXCIsXG4gICAgbWFyZ2luOiBcIjEwcHggMTBweCAwIDBcIlxufTtcblxuY29uc3QgZmlmdGggPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNjNjljNmRcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCBzaXggPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMDZlYWFcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCB0aXRsZV9uYW1lX2lucHV0ID0ge1xuICAgIG1heFdpZHRoOiA0NjUsXG4gICAgaGVpZ2h0OiA5NSxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IFwiIzc3ODA5NFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsXG4gICAgZm9udFNpemU6IDQ1LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNDUpXCJcbn07XG5cblxuY29uc3QgU2VhcmNoID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17aW5wdXRzX3dyYXBwZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt0YWdfbmFtZV9pbnB1dH0gdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwidGFnIG5hbWVcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3NxdWFyZV93cmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zmlyc3R9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzZWNvbmR9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlyZH0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2ZvcnRofT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17ZmlmdGh9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzaXh9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17dGl0bGVfbmFtZV9pbnB1dH0gdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwidGl0bGUgbmFtZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWFyY2guanMiLCJjb25zdCBzZWFyY2hUaXRsZUJsb2NrID0ge1xuICAgIG1heFdpZHRoOiBcIjM4MHB4XCIsXG4gICAgbWF4SGVpZ2h0OiBcIjExMHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiNzU2cHhcIixcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgIGNvbG9yOiBcIiMwYTI5NTRcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiXG59O1xuXG5jb25zdCBoMiA9IHtcbiAgICBjb2xvcjogXCIjNWM3NDkzXCIsXG4gICAgbGluZUhlaWdodDogXCI1MHB4XCIsXG4gICAgZm9udFNpemU6IFwiNTBweFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIlxufTtcblxuY29uc3QgaW1hZ2UgPSB7XG4gICAgd2lkdGg6IFwiNjBweFwiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjI5cHhcIixcbiAgICByaWdodDogMFxufTtcblxuY29uc3QgU2VhcmNoX3RpdGxlID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17c2VhcmNoVGl0bGVCbG9ja30+XG4gICAgICAgIDxoMiBzdHlsZT17aDJ9PnNlYXJjaDwvaDI+XG4gICAgICAgIDxpbWcgc3R5bGU9e2ltYWdlfSBzcmM9XCIvc3RhdGljL2ljb24tc2VhcmNoLmpwZ1wiIGFsdD1cInNlYXJjaCBpY29uXCIgLz5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaF90aXRsZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2VhcmNoX3RpdGxlLmpzIiwiY29uc3Qgc2hvd19tb3JlID0ge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBtYXJnaW46IFwiMjBweCAwIDEwMHB4IDBcIixcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICBmb250U2l6ZTogNDksXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBjb2xvcjogXCIjNDY2NDhlXCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGJvcmRlcjogXCIycHggc29saWQgI2NjY1wiLFxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiXG59O1xuXG5jb25zdCBTaG93X21vcmUgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIHN0eWxlPXtzaG93X21vcmV9PnNob3cgbW9yZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd19tb3JlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zaG93X21vcmUuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9CQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpDQTtBQUNBO0FBNkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBVEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFZQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVRBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFDQTtBQVVBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFDQTtBQVdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWEE7QUFDQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVJBO0FBQ0E7QUFVQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        