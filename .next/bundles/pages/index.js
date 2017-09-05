
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
    background: "#fbaf5d",
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
            lineNumber: 67
        }
    }, _react2.default.createElement(_Banner2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }), _react2.default.createElement(_Search_title2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }), _react2.default.createElement('div', { style: container, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }, _react2.default.createElement(_Search2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }), _react2.default.createElement(_reactMasonryComponent2.default, { className: 'masonry', options: masonryOptions, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }, props.shows && props.shows.map(function (show) {
        return _react2.default.createElement('div', { className: 'card', style: card, key: show.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 75
            }
        }, _react2.default.createElement('div', { className: 'card-img', style: card_img, __source: {
                fileName: _jsxFileName,
                lineNumber: 76
            }
        }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 77
            }
        }, _react2.default.createElement('a', { style: description, __source: {
                fileName: _jsxFileName,
                lineNumber: 78
            }
        }, _react2.default.createElement('img', { style: img, src: show.better_featured_image.source_url, __source: {
                fileName: _jsxFileName,
                lineNumber: 79
            }
        }), _react2.default.createElement('div', { className: 'title', style: article_name, dangerouslySetInnerHTML: { __html: show.excerpt.rendered }, __source: {
                fileName: _jsxFileName,
                lineNumber: 80
            }
        })))), _react2.default.createElement('div', { style: title_name, __source: {
                fileName: _jsxFileName,
                lineNumber: 84
            }
        }, _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 85
            }
        }, show.title.rendered)));
    })), _react2.default.createElement(_show_more2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 91
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/M2VhMmQxNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhbm5lci5qcz8zZWEyZDE2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzPzNlYTJkMTYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/M2VhMmQxNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28uanM/M2VhMmQxNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzPzNlYTJkMTYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uX2Zvb3Rlci5qcz8zZWEyZDE2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbl9oZWFkZXIuanM/M2VhMmQxNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC5qcz8zZWEyZDE2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoX3RpdGxlLmpzPzNlYTJkMTYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaG93X21vcmUuanM/M2VhMmQxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoJ1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCBTZWFyY2hfdGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hfdGl0bGUnXG5pbXBvcnQgU2hvd19tb3JlIGZyb20gJy4uL2NvbXBvbmVudHMvc2hvd19tb3JlJ1xuaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5cbmNvbnN0IGltZyA9IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxufTtcblxuY29uc3QgY29udGFpbmVyID0ge1xuICAgIG1heFdpZHRoOiAxNDAwLFxuICAgIG1hcmdpbjogXCIwIGF1dG9cIlxufTtcblxuY29uc3QgY2FyZCA9IHtcbiAgICBib3hTaGFkb3c6IFwiMCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zMSlcIixcbiAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgIHdpZHRoOiA2ODVcbn07XG5cbmNvbnN0IGNhcmRfaW1nID0ge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbn07XG5cbmNvbnN0IGFydGljbGVfbmFtZSA9IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiNmYmFmNWRcIixcbiAgICB3aWR0aDogMjAwLFxuICAgIG1hcmdpbkxlZnQ6IDM1LFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgYm90dG9tOiAwLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbn07XG5cbmNvbnN0IHRpdGxlX25hbWUgPSB7XG4gICAgY29sb3I6IFwiIzAwMFwiLFxuICAgIHBhZGRpbmc6IFwiMTBweCAwcHggNTVweCAyMHB4XCIsXG4gICAgZm9udFNpemU6IDM1LFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICBmb250V2VpZ2h0OiAzMDBcbn07XG5cbmNvbnN0IGRlc2NyaXB0aW9uID0ge1xuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiBcIjVweCAwIDVweCAwXCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgZm9udFNpemU6IDI1LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCJcbn07XG5cbmNvbnN0IG1hc29ucnlPcHRpb25zID0ge1xuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMCxcbiAgICBndXR0ZXI6IDMwXG59O1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuXG4gICAgPExheW91dD5cbiAgICAgICAgPEJhbm5lciAvPlxuICAgICAgICA8U2VhcmNoX3RpdGxlIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8U2VhcmNoIC8+XG5cbiAgICAgICAgICAgICAgICA8TWFzb25yeSBjbGFzc05hbWU9XCJtYXNvbnJ5XCIgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd3MgJiYgcHJvcHMuc2hvd3MubWFwKChzaG93KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17Y2FyZH0ga2V5PXtzaG93LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1nXCIgc3R5bGU9e2NhcmRfaW1nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtkZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17aW1nfSBzcmM9e3Nob3cuYmV0dGVyX2ZlYXR1cmVkX2ltYWdlLnNvdXJjZV91cmx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e2FydGljbGVfbmFtZX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzaG93LmV4Y2VycHQucmVuZGVyZWQgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGl0bGVfbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzaG93LnRpdGxlLnJlbmRlcmVkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L01hc29ucnk+XG5cbiAgICAgICAgICAgIDxTaG93X21vcmUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC93b3JkcHJlc3Mvd3AtanNvbi93cC92Mi9wb3N0cy8nKTtcbiAgICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGBEQVRBYCwgc2hvdyk7XG4gICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtzaG93Lmxlbmd0aH1gKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3dzOiBzaG93XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImNvbnN0IGJhbm5lciA9IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJy9zdGF0aWMvYmctYmxvZy5qcGcnKVwiLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogXCI3MDBweFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIlxufTtcblxuY29uc3QgdGl0bGVCbG9nID0ge1xuICAgIHBhZGRpbmdUb3A6IFwiODVweFwiLFxuICAgIG1hcmdpbjogMCxcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgZm9udFNpemU6IFwiNjBweFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCJcbn07XG5cblxuY29uc3QgQmFubmVyID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17YmFubmVyfT5cbiAgICAgICAgPGgxIHN0eWxlPXt0aXRsZUJsb2d9PmZpbmQgY3JlYXRpdmUgZW5naW5lZXJpbmcgaW5zcGlyYXRpb24gaGVyZTwvaDE+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Jhbm5lci5qcyIsImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbl9mb290ZXInXG5cbmNvbnN0IGZvb3RlclN0eWxlID0ge1xuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiMwMDBcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1lbmRcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgcGFkZGluZzogMjAsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIlxufTtcblxuY29uc3QgRm9vdGVyID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17Zm9vdGVyU3R5bGV9PlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICA8c3Bhbj7CqSBQZXJjZXB0aW9uQm94LCBDdXN0b20gU29mdHdhcmUgRGV2ZWxvcG1lbnQgQ29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3NwYW4+XG4gICAgPC9kaXY+XG5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJpbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb25faGVhZGVyJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJ1xuXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHpJbmRleDogNTAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICB0b3A6IDAsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgIGJvcmRlckJvdHRvbTogXCIycHggc29saWQgIzA0MTkzNlwiXG59O1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiY29uc3QgbG9nb193cmFwcGVyID0ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufTtcblxuY29uc3QgbG9nb19saW5rID0ge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG59O1xuXG5jb25zdCBMb2dvID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17bG9nb193cmFwcGVyfT5cbiAgICAgICAgPGEgc3R5bGU9e2xvZ29fbGlua30gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvLWJsYWNrLnBuZ1wiIGFsdD1cIlBFUkNFUFRJT04gQk9YXCIgLz5cbiAgICAgICAgPC9hPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nb1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2dvLmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXG5cblxuXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcblxufTtcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cbiAgICA8SGVhZGVyIC8+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxGb290ZXIgLz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IGJsb2NrTGlua1N0eWxlID0ge1xuICAgIG1hcmdpbjogMFxufTtcblxuY29uc3QgdWxTdHlsZXMgPSB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICBsaXN0U3R5bGVUeXBlOiBcIm5vbmVcIixcbiAgICBtYXJnaW46IFwiMCAwIDM1cHggMFwiXG59O1xuXG5jb25zdCBsaVN0eWxlcyA9IHtcbiAgICBtYXJnaW5MZWZ0OiAyMFxufTtcblxuY29uc3QgYVN0eWxlcyA9IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJcbn07XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17YmxvY2tMaW5rU3R5bGV9PlxuICAgICAgICA8dWwgc3R5bGU9e3VsU3R5bGVzfT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17bGlTdHlsZXN9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXthU3R5bGVzfT5Ib21lPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZWNobm9sb2dpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2FTdHlsZXN9PnRlY2hub2xvZ2llczwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXthU3R5bGVzfT5hYm91dCB1czwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXthU3R5bGVzfT5sZXRzIHRhbGshPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXZpZ2F0aW9uX2Zvb3Rlci5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbmF2ID0ge1xuICAgIG1hcmdpbjogMCxcbiAgICBoZWlnaHQ6IFwiMTAwJVwiXG59O1xuXG5jb25zdCBuYXZpZ2F0aW9uID0ge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiXG59O1xuXG5jb25zdCBuYXZpZ2F0aW9uX2l0ZW0gPSB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIHBhZGRpbmc6IFwiNXB4IDBcIixcbiAgICBtYXJnaW46IFwiMCAzcHhcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbn07XG5cbmNvbnN0IGhlYWRlcl9saW5rID0ge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCIjNGE1MjY5XCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgcGFkZGluZzogXCIxMHB4XCIsXG59O1xuXG5jb25zdCBjb25uZWN0X2xpbmsgPSB7XG4gICAgYmFja2dyb3VuZDogXCIjMGEyOTU0XCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC41c1wiLFxuICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiXG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e25hdn0+XG4gICAgICAgIDx1bCBzdHlsZT17bmF2aWdhdGlvbn0+XG4gICAgICAgICAgICA8bGkgc3R5bGU9e25hdmlnYXRpb25faXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2hlYWRlcl9saW5rfSBocmVmPVwiI1wiPkhPTUU8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17bmF2aWdhdGlvbl9pdGVtfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RlY2hub2xvZ2llc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17aGVhZGVyX2xpbmt9IGhyZWY9XCIjXCI+VEVDSE5PTE9HSUVTPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgc3R5bGU9e25hdmlnYXRpb25faXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2hlYWRlcl9saW5rfSBocmVmPVwiI1wiPkFCT1VUIFVTPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgc3R5bGU9e25hdmlnYXRpb25faXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2Nvbm5lY3RfbGlua30gaHJlZj1cIiNcIj5MRVQnUyBUQUxLITwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmF2aWdhdGlvbl9oZWFkZXIuanMiLCJjb25zdCBpbnB1dHNfd3JhcHBlciA9IHtcbiAgICBib3hTaGFkb3c6IFwiMCAwIDVweCBibGFja1wiLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIG1hcmdpbjogXCI2MHB4IDAgMCAwXCIsXG4gICAgcGFkZGluZzogXCI1NXB4IDAgNTVweCAwXCJcbn07XG5cbmNvbnN0IHRhZ19uYW1lX2lucHV0ID0ge1xuICAgIG1heFdpZHRoOiA0NjUsXG4gICAgaGVpZ2h0OiA5NSxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IFwiIzc3ODA5NFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsXG4gICAgZm9udFNpemU6IDQ1LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNDUpXCJcbn07XG5cbmNvbnN0IHNxdWFyZV93cmFwcGVyID0ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbn07XG5cbmNvbnN0IGZpcnN0ID0ge1xuICAgIHdpZHRoOiAzMCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmJhZjVkXCIsXG4gICAgbWFyZ2luOiBcIjEwcHggMTBweCAwIDBcIlxufTtcblxuY29uc3Qgc2Vjb25kID0ge1xuICAgIHdpZHRoOiAzMCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjN2NjNTc2XCIsXG4gICAgbWFyZ2luOiBcIjEwcHggMTBweCAwIDBcIlxufTtcblxuY29uc3QgdGhpcmQgPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1Njc0YjlcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCBmb3J0aCA9IHtcbiAgICB3aWR0aDogMzAsXG4gICAgaGVpZ2h0OiAzMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyNmQ3ZFwiLFxuICAgIG1hcmdpbjogXCIxMHB4IDEwcHggMCAwXCJcbn07XG5cbmNvbnN0IGZpZnRoID0ge1xuICAgIHdpZHRoOiAzMCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjYzY5YzZkXCIsXG4gICAgbWFyZ2luOiBcIjEwcHggMTBweCAwIDBcIlxufTtcblxuY29uc3Qgc2l4ID0ge1xuICAgIHdpZHRoOiAzMCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjA2ZWFhXCIsXG4gICAgbWFyZ2luOiBcIjEwcHggMTBweCAwIDBcIlxufTtcblxuY29uc3QgdGl0bGVfbmFtZV9pbnB1dCA9IHtcbiAgICBtYXhXaWR0aDogNDY1LFxuICAgIGhlaWdodDogOTUsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiBcIiM3NzgwOTRcIixcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiLFxuICAgIGZvbnRTaXplOiA0NSxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBib3hTaGFkb3c6IFwiaW5zZXQgMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KVwiXG59O1xuXG5cbmNvbnN0IFNlYXJjaCA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgc3R5bGU9e2lucHV0c193cmFwcGVyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17dGFnX25hbWVfaW5wdXR9IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cInRhZyBuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzcXVhcmVfd3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2ZpcnN0fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c2Vjb25kfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcmR9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtmb3J0aH0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2ZpZnRofT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c2l4fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3RpdGxlX25hbWVfaW5wdXR9IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cInRpdGxlIG5hbWVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwiY29uc3Qgc2VhcmNoVGl0bGVCbG9jayA9IHtcbiAgICBtYXhXaWR0aDogXCIzODBweFwiLFxuICAgIG1heEhlaWdodDogXCIxMTBweFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjc1NnB4XCIsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICBjb2xvcjogXCIjMGEyOTU0XCIsXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIlxufTtcblxuY29uc3QgaDIgPSB7XG4gICAgY29sb3I6IFwiIzVjNzQ5M1wiLFxuICAgIGxpbmVIZWlnaHQ6IFwiNTBweFwiLFxuICAgIGZvbnRTaXplOiBcIjUwcHhcIixcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCJcbn07XG5cbmNvbnN0IGltYWdlID0ge1xuICAgIHdpZHRoOiBcIjYwcHhcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCIyOXB4XCIsXG4gICAgcmlnaHQ6IDBcbn07XG5cbmNvbnN0IFNlYXJjaF90aXRsZSA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3NlYXJjaFRpdGxlQmxvY2t9PlxuICAgICAgICA8aDIgc3R5bGU9e2gyfT5zZWFyY2g8L2gyPlxuICAgICAgICA8aW1nIHN0eWxlPXtpbWFnZX0gc3JjPVwiL3N0YXRpYy9pY29uLXNlYXJjaC5qcGdcIiBhbHQ9XCJzZWFyY2ggaWNvblwiIC8+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hfdGl0bGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NlYXJjaF90aXRsZS5qcyIsImNvbnN0IHNob3dfbW9yZSA9IHtcbiAgICBtYXJnaW46IFwiMjBweCAwIDEwMHB4IDBcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6IDQ5LFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgY29sb3I6IFwiIzQ2NjQ4ZVwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNjY2NcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICBwYWRkaW5nOiBcIjE1cHggMCAxNXB4IDBcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiXG59O1xuXG5jb25zdCBTaG93X21vcmUgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzaG93X21vcmV9PnNob3cgbW9yZTwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd19tb3JlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zaG93X21vcmUuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUExQkE7QUFDQTtBQThCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQVRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVJBO0FBQ0E7QUFVQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVJBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVhBO0FBQ0E7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVRBO0FBQ0E7QUFXQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        