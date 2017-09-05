
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 558:
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

var _MyLayout = __webpack_require__(587);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _Search = __webpack_require__(590);

var _Search2 = _interopRequireDefault(_Search);

var _Banner = __webpack_require__(583);

var _Banner2 = _interopRequireDefault(_Banner);

var _Search_title = __webpack_require__(591);

var _Search_title2 = _interopRequireDefault(_Search_title);

var _show_more = __webpack_require__(592);

var _show_more2 = _interopRequireDefault(_show_more);

var _reactMasonryComponent = __webpack_require__(593);

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

var _link = __webpack_require__(554);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(576);

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

var card = {
    boxShadow: "0 5px 5px rgba(0, 0, 0, 0.31)",
    marginBottom: 30,
    width: 685
};

var card_img = {
    position: "relative"
};

var article_name = {
    width: 200,
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

var masonryOptions = {
    transitionDuration: 0,
    gutter: 30
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
    }), _react2.default.createElement(_reactMasonryComponent2.default, { options: masonryOptions, __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, props.shows && props.shows.map(function (show) {
        return _react2.default.createElement('div', { className: 'card', style: card, key: show.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 73
            }
        }, _react2.default.createElement('div', { className: 'card_img', style: card_img, __source: {
                fileName: _jsxFileName,
                lineNumber: 74
            }
        }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 75
            }
        }, _react2.default.createElement('a', { style: description, __source: {
                fileName: _jsxFileName,
                lineNumber: 76
            }
        }, _react2.default.createElement('img', { style: img, src: show.better_featured_image.source_url, __source: {
                fileName: _jsxFileName,
                lineNumber: 77
            }
        }), _react2.default.createElement('div', { className: 'title', style: article_name, dangerouslySetInnerHTML: { __html: show.excerpt.rendered }, __source: {
                fileName: _jsxFileName,
                lineNumber: 78
            }
        })))), _react2.default.createElement('div', { style: title_name, __source: {
                fileName: _jsxFileName,
                lineNumber: 82
            }
        }, _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 83
            }
        }, show.title.rendered)));
    })), _react2.default.createElement(_show_more2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 88
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

/***/ 583:
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

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Navigation_footer = __webpack_require__(588);

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

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Navigation_header = __webpack_require__(589);

var _Navigation_header2 = _interopRequireDefault(_Navigation_header);

var _Logo = __webpack_require__(586);

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

/***/ 586:
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

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(585);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(584);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\MyLayout.js';


var Layout = function Layout(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), props.children, _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\MyLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\MyLayout.js"); } } })();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(554);

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
    }, _react2.default.createElement(_link2.default, { href: "/about_us", __source: {
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
    }, _react2.default.createElement(_link2.default, { href: "/lets_talk", __source: {
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

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(554);

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
    }, _react2.default.createElement(_link2.default, { href: "/about_us", __source: {
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
    }, _react2.default.createElement(_link2.default, { href: "/lets_talk", __source: {
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

/***/ 590:
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

/***/ 591:
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

/***/ 592:
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
    margin: "20px 0 100px 0",
    textAlign: "center",
    fontSize: 49,
    textTransform: "uppercase",
    color: "#46648e",
    textDecoration: "none",
    border: "2px solid #ccc",
    background: "#fff",
    padding: "15px 0 15px 0",
    cursor: "pointer"
};

var Show_more = function Show_more(props) {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement("div", { style: show_more, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, "show more"));
};

exports.default = Show_more;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\show_more.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\show_more.js"); } } })();

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(558);


/***/ })

},[594]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/M2RjYWE5YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhbm5lci5qcz8zZGNhYTliIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzPzNkY2FhOWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/M2RjYWE5YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28uanM/M2RjYWE5YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzPzNkY2FhOWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uX2Zvb3Rlci5qcz8zZGNhYTliIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbl9oZWFkZXIuanM/M2RjYWE5YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC5qcz8zZGNhYTliIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoX3RpdGxlLmpzPzNkY2FhOWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaG93X21vcmUuanM/M2RjYWE5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoJ1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCBTZWFyY2hfdGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hfdGl0bGUnXG5pbXBvcnQgU2hvd19tb3JlIGZyb20gJy4uL2NvbXBvbmVudHMvc2hvd19tb3JlJ1xuXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5cbmNvbnN0IGltZyA9IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxufTtcblxuY29uc3QgY29udGFpbmVyID0ge1xuICAgIG1heFdpZHRoOiAxNDAwLFxuICAgIG1hcmdpbjogXCIwIGF1dG9cIlxufTtcblxuY29uc3QgY2FyZCA9IHtcbiAgICBib3hTaGFkb3c6IFwiMCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zMSlcIixcbiAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgIHdpZHRoOiA2ODVcbn07XG5cbmNvbnN0IGNhcmRfaW1nID0ge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG59O1xuXG5jb25zdCBhcnRpY2xlX25hbWUgPSB7XG4gICAgd2lkdGg6IDIwMCxcbiAgICBtYXJnaW5MZWZ0OiAzNSxcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIGJvdHRvbTogMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG59O1xuXG5jb25zdCB0aXRsZV9uYW1lID0ge1xuICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgICBwYWRkaW5nOiBcIjEwcHggMHB4IDU1cHggMjBweFwiLFxuICAgIGZvbnRTaXplOiAzNSxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsXG4gICAgZm9udFdlaWdodDogMzAwXG59O1xuXG5jb25zdCBkZXNjcmlwdGlvbiA9IHtcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogXCI1cHggMCA1cHggMFwiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGZvbnRTaXplOiAyNSxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiXG59O1xuXG5jb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHtcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IDAsXG4gICAgZ3V0dGVyOiAzMFxufTtcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcblxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxCYW5uZXIgLz5cbiAgICAgICAgPFNlYXJjaF90aXRsZSAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJ9PlxuICAgICAgICAgICAgPFNlYXJjaCAvPlxuICAgICAgICAgICAgICAgIDxNYXNvbnJ5IG9wdGlvbnM9e21hc29ucnlPcHRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dzICYmIHByb3BzLnNob3dzLm1hcCgoc2hvdykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e2NhcmR9IGtleT17c2hvdy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX2ltZ1wiIHN0eWxlPXtjYXJkX2ltZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17ZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e2ltZ30gc3JjPXtzaG93LmJldHRlcl9mZWF0dXJlZF9pbWFnZS5zb3VyY2VfdXJsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXthcnRpY2xlX25hbWV9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2hvdy5leGNlcnB0LnJlbmRlcmVkIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RpdGxlX25hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2hvdy50aXRsZS5yZW5kZXJlZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9NYXNvbnJ5PlxuICAgICAgICAgICAgPFNob3dfbW9yZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0L3dvcmRwcmVzcy93cC1qc29uL3dwL3YyL3Bvc3RzLycpO1xuICAgIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coYERBVEFgLCBzaG93KTtcbiAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke3Nob3cubGVuZ3RofWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd3M6IHNob3dcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiY29uc3QgYmFubmVyID0ge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnL3N0YXRpYy9iZy1ibG9nLmpwZycpXCIsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcIjcwMHB4XCIsXG4gICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiXG59O1xuXG5jb25zdCB0aXRsZUJsb2cgPSB7XG4gICAgcGFkZGluZ1RvcDogXCI4NXB4XCIsXG4gICAgbWFyZ2luOiAwLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBmb250U2l6ZTogXCI2MHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIlxufTtcblxuXG5jb25zdCBCYW5uZXIgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtiYW5uZXJ9PlxuICAgICAgICA8aDEgc3R5bGU9e3RpdGxlQmxvZ30+ZmluZCBjcmVhdGl2ZSBlbmdpbmVlcmluZyBpbnNwaXJhdGlvbiBoZXJlPC9oMT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQmFubmVyLmpzIiwiaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uX2Zvb3RlcidcblxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJhY2tncm91bmQ6IFwiIzAwMFwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiXG59O1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtmb290ZXJTdHlsZX0+XG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgIDxzcGFuPsKpIFBlcmNlcHRpb25Cb3gsIEN1c3RvbSBTb2Z0d2FyZSBEZXZlbG9wbWVudCBDb21wYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbl9oZWFkZXInXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXG5cbmNvbnN0IGhlYWRlclN0eWxlID0ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgekluZGV4OiA1MCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHRvcDogMCxcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgYm9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCAjMDQxOTM2XCJcbn07XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJjb25zdCBsb2dvX3dyYXBwZXIgPSB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59O1xuXG5jb25zdCBsb2dvX2xpbmsgPSB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcbn07XG5cbmNvbnN0IExvZ28gPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtsb2dvX3dyYXBwZXJ9PlxuICAgICAgICA8YSBzdHlsZT17bG9nb19saW5rfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ28tYmxhY2sucG5nXCIgYWx0PVwiUEVSQ0VQVElPTiBCT1hcIiAvPlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvZ28uanMiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWRlciAvPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8Rm9vdGVyIC8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL015TGF5b3V0LmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBibG9ja0xpbmtTdHlsZSA9IHtcbiAgICBtYXJnaW46IDBcbn07XG5cbmNvbnN0IHVsU3R5bGVzID0ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgbGlzdFN0eWxlVHlwZTogXCJub25lXCIsXG4gICAgbWFyZ2luOiBcIjAgMCAzNXB4IDBcIlxufTtcblxuY29uc3QgbGlTdHlsZXMgPSB7XG4gICAgbWFyZ2luTGVmdDogMjBcbn07XG5cbmNvbnN0IGFTdHlsZXMgPSB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBwYWRkaW5nOiAxMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiXG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e2Jsb2NrTGlua1N0eWxlfT5cbiAgICAgICAgPHVsIHN0eWxlPXt1bFN0eWxlc30+XG4gICAgICAgICAgICA8bGkgc3R5bGU9e2xpU3R5bGVzfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17YVN0eWxlc30+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVjaG5vbG9naWVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXthU3R5bGVzfT50ZWNobm9sb2dpZXM8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0X3VzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXthU3R5bGVzfT5hYm91dCB1czwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGV0c190YWxrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXthU3R5bGVzfT5sZXRzIHRhbGshPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXZpZ2F0aW9uX2Zvb3Rlci5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbmF2ID0ge1xuICAgIG1hcmdpbjogMCxcbiAgICBoZWlnaHQ6IFwiMTAwJVwiXG59O1xuXG5jb25zdCBuYXZpZ2F0aW9uID0ge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiXG59O1xuXG5jb25zdCBuYXZpZ2F0aW9uX2l0ZW0gPSB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIHBhZGRpbmc6IFwiNXB4IDBcIixcbiAgICBtYXJnaW46IFwiMCAzcHhcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbn07XG5cbmNvbnN0IGhlYWRlcl9saW5rID0ge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCIjNGE1MjY5XCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgcGFkZGluZzogXCIxMHB4XCIsXG59O1xuXG5jb25zdCBjb25uZWN0X2xpbmsgPSB7XG4gICAgYmFja2dyb3VuZDogXCIjMGEyOTU0XCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC41c1wiLFxuICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiXG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e25hdn0+XG4gICAgICAgIDx1bCBzdHlsZT17bmF2aWdhdGlvbn0+XG4gICAgICAgICAgICA8bGkgc3R5bGU9e25hdmlnYXRpb25faXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2hlYWRlcl9saW5rfSBocmVmPVwiI1wiPkhPTUU8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17bmF2aWdhdGlvbl9pdGVtfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RlY2hub2xvZ2llc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17aGVhZGVyX2xpbmt9IGhyZWY9XCIjXCI+VEVDSE5PTE9HSUVTPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgc3R5bGU9e25hdmlnYXRpb25faXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dF91c1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17aGVhZGVyX2xpbmt9IGhyZWY9XCIjXCI+QUJPVVQgVVM8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17bmF2aWdhdGlvbl9pdGVtfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xldHNfdGFsa1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17Y29ubmVjdF9saW5rfSBocmVmPVwiI1wiPkxFVCdTIFRBTEshPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXZpZ2F0aW9uX2hlYWRlci5qcyIsImNvbnN0IGlucHV0c193cmFwcGVyID0ge1xuICAgIGJveFNoYWRvdzogXCIwIDAgNXB4IGJsYWNrXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgbWFyZ2luOiBcIjYwcHggMCAwIDBcIixcbiAgICBwYWRkaW5nOiBcIjU1cHggMCA1NXB4IDBcIlxufTtcblxuY29uc3QgdGFnX25hbWVfaW5wdXQgPSB7XG4gICAgbWF4V2lkdGg6IDQ2NSxcbiAgICBoZWlnaHQ6IDk1LFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBjb2xvcjogXCIjNzc4MDk0XCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICBmb250U2l6ZTogNDUsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NSlcIlxufTtcblxuY29uc3Qgc3F1YXJlX3dyYXBwZXIgPSB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxufTtcblxuY29uc3QgZmlyc3QgPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmYmFmNWRcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCBzZWNvbmQgPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM3Y2M1NzZcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCB0aGlyZCA9IHtcbiAgICB3aWR0aDogMzAsXG4gICAgaGVpZ2h0OiAzMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzU2NzRiOVwiLFxuICAgIG1hcmdpbjogXCIxMHB4IDEwcHggMCAwXCJcbn07XG5cbmNvbnN0IGZvcnRoID0ge1xuICAgIHdpZHRoOiAzMCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjI2ZDdkXCIsXG4gICAgbWFyZ2luOiBcIjEwcHggMTBweCAwIDBcIlxufTtcblxuY29uc3QgZmlmdGggPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNjNjljNmRcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCBzaXggPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMDZlYWFcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCB0aXRsZV9uYW1lX2lucHV0ID0ge1xuICAgIG1heFdpZHRoOiA0NjUsXG4gICAgaGVpZ2h0OiA5NSxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IFwiIzc3ODA5NFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsXG4gICAgZm9udFNpemU6IDQ1LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNDUpXCJcbn07XG5cblxuY29uc3QgU2VhcmNoID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17aW5wdXRzX3dyYXBwZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt0YWdfbmFtZV9pbnB1dH0gdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwidGFnIG5hbWVcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3NxdWFyZV93cmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zmlyc3R9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzZWNvbmR9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlyZH0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2ZvcnRofT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17ZmlmdGh9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzaXh9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17dGl0bGVfbmFtZV9pbnB1dH0gdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwidGl0bGUgbmFtZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWFyY2guanMiLCJjb25zdCBzZWFyY2hUaXRsZUJsb2NrID0ge1xuICAgIG1heFdpZHRoOiBcIjM4MHB4XCIsXG4gICAgbWF4SGVpZ2h0OiBcIjExMHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiNzU2cHhcIixcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgIGNvbG9yOiBcIiMwYTI5NTRcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiXG59O1xuXG5jb25zdCBoMiA9IHtcbiAgICBjb2xvcjogXCIjNWM3NDkzXCIsXG4gICAgbGluZUhlaWdodDogXCI1MHB4XCIsXG4gICAgZm9udFNpemU6IFwiNTBweFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIlxufTtcblxuY29uc3QgaW1hZ2UgPSB7XG4gICAgd2lkdGg6IFwiNjBweFwiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjI5cHhcIixcbiAgICByaWdodDogMFxufTtcblxuY29uc3QgU2VhcmNoX3RpdGxlID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17c2VhcmNoVGl0bGVCbG9ja30+XG4gICAgICAgIDxoMiBzdHlsZT17aDJ9PnNlYXJjaDwvaDI+XG4gICAgICAgIDxpbWcgc3R5bGU9e2ltYWdlfSBzcmM9XCIvc3RhdGljL2ljb24tc2VhcmNoLmpwZ1wiIGFsdD1cInNlYXJjaCBpY29uXCIgLz5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaF90aXRsZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2VhcmNoX3RpdGxlLmpzIiwiY29uc3Qgc2hvd19tb3JlID0ge1xuICAgIG1hcmdpbjogXCIyMHB4IDAgMTAwcHggMFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogNDksXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBjb2xvcjogXCIjNDY2NDhlXCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGJvcmRlcjogXCIycHggc29saWQgI2NjY1wiLFxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgIHBhZGRpbmc6IFwiMTVweCAwIDE1cHggMFwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbn07XG5cbmNvbnN0IFNob3dfbW9yZSA9IChwcm9wcykgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3Nob3dfbW9yZX0+c2hvdyBtb3JlPC9kaXY+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTaG93X21vcmVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3Nob3dfbW9yZS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUVBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkE7QUFDQTtBQTRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQVRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFDQTtBQVVBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFDQTtBQVdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWEE7QUFDQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        