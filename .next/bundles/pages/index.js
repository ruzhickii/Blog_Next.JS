
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

var _assign = __webpack_require__(93);

var _assign2 = _interopRequireDefault(_assign);

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

var colors = {
    backend: "#fbaf5d",
    software: "#5674b9",
    mobile: "#f26d7d",
    consulting: "#c69c6d",
    company: "#f06eaa",
    frontend: '#7cc576'
};

function getCategory(categories, id) {
    var category = categories.find(function (item) {
        return item.id === id;
    });

    return category ? category.slug : null;
}

function getColor(slug) {
    var style = (0, _assign2.default)({}, article_name);
    style.background = colors[slug];
    console.log(style, "ARTICLE NAME", slug);
    return style;
}

var Index = function Index(props) {
    return _react2.default.createElement(_MyLayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }, _react2.default.createElement(_Banner2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }), _react2.default.createElement(_Search_title2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }), _react2.default.createElement('div', { style: container, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }, _react2.default.createElement(_Search2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }), _react2.default.createElement(_reactMasonryComponent2.default, { options: masonryOptions, __source: {
            fileName: _jsxFileName,
            lineNumber: 95
        }
    }, props.shows && props.shows.map(function (show) {
        return _react2.default.createElement('div', { className: 'card', style: card, key: show.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 97
            }
        }, _react2.default.createElement('div', { className: 'card_img', style: card_img, __source: {
                fileName: _jsxFileName,
                lineNumber: 98
            }
        }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 99
            }
        }, _react2.default.createElement('a', { style: description, __source: {
                fileName: _jsxFileName,
                lineNumber: 100
            }
        }, _react2.default.createElement('img', { style: img, src: show.better_featured_image.source_url, __source: {
                fileName: _jsxFileName,
                lineNumber: 101
            }
        }), _react2.default.createElement('div', { className: 'title', style: getColor(getCategory(props.categories, show.categories[0])), dangerouslySetInnerHTML: { __html: show.excerpt.rendered }, __source: {
                fileName: _jsxFileName,
                lineNumber: 102
            }
        })))), _react2.default.createElement('div', { style: title_name, __source: {
                fileName: _jsxFileName,
                lineNumber: 106
            }
        }, _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 107
            }
        }, show.title.rendered)));
    })), _react2.default.createElement(_show_more2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 112
        }
    })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res, show, resCat, category;
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
                    _context.next = 8;
                    return (0, _isomorphicUnfetch2.default)('http://localhost/wordpress/wp-json/wp/v2/categories/');

                case 8:
                    resCat = _context.sent;
                    _context.next = 11;
                    return resCat.json();

                case 11:
                    category = _context.sent;

                    //console.log(`DATA`, show);
                    console.log('Show data fetched. Count: ' + show.length);

                    console.log('DATA', category);

                    return _context.abrupt('return', {
                        shows: show,
                        categories: category
                    });

                case 15:
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
    fontFamily: "'Lato', sans-serif"
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

var _Logo_footer = __webpack_require__(595);

var _Logo_footer2 = _interopRequireDefault(_Logo_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Footer.js';


var footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    background: "#000",
    fontFamily: "Roboto",
    padding: "0 0 25px 0"
};

var Footer = function Footer(props) {
    return _react2.default.createElement('div', { style: footerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement(_Logo_footer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement(_Navigation_footer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }));
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

var _Logo_header = __webpack_require__(586);

var _Logo_header2 = _interopRequireDefault(_Logo_header);

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
    borderBottom: "2px solid #041936",
    fontFamily: "Roboto"
};

var Header = function Header(props) {
    return _react2.default.createElement('div', { style: headerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement(_Logo_header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }), _react2.default.createElement(_Navigation_header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
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

var _jsxFileName = "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Logo_header.js";

// const logo_wrapper = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
// };

var logo_link = {
    display: "block",
    whiteSpace: "nowrap"
};

var Logo = function Logo(props) {
    return _react2.default.createElement("div", {
        __source: {
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Logo_header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Logo_header.js"); } } })();

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
    margin: 0,
    padding: "0 60px 0 0px"
};

var ulStyles = {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    margin: "0 0 20px 0",
    justifyContent: "flex-end"
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

var copyright = {
    color: "#fff"
};

var Navigation = function Navigation() {
    return _react2.default.createElement("div", { style: blockLinkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement("ul", { style: ulStyles, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement("li", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, _react2.default.createElement(_link2.default, { href: "/about_us", __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement("a", { style: aStyles, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, "about us"))), _react2.default.createElement("li", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, _react2.default.createElement(_link2.default, { href: "/technologies", __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement("a", { style: aStyles, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, "technologies")))), _react2.default.createElement("span", { style: copyright, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, "\xA9 PerceptionBox, Custom Software Development Company. All rights reserved."));
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
    color: "#86888c",
    margin: "0 auto",
    borderRadius: "5px"
};

var h2 = {
    color: "#5c7493",
    lineHeight: "45px",
    fontSize: "40px",
    fontFamily: "Open Sans, sans-serif",
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
    color: "#5d5f64",
    textDecoration: "none",
    border: "2px solid #ccc",
    background: "#fff",
    padding: "15px 0 15px 0",
    cursor: "pointer",
    fontFamily: "Open Sans, sans-serif"
};

var Show_more = function Show_more(props) {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement("div", { style: show_more, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, "show more"));
};

exports.default = Show_more;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\show_more.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\show_more.js"); } } })();

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(558);


/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Logo_footer.js";

var logo = {
    padding: "25px 0 0 60px"
};

var logo_link = {
    display: "block",
    whiteSpace: "nowrap"
};

var Logo = function Logo(props) {
    return _react2.default.createElement("div", { style: logo, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement("a", { style: logo_link, href: "#", __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement("img", { src: "/static/logo_footer.jpg", alt: "PERCEPTION BOX", __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    })));
};

exports.default = Logo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Logo_footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Logo_footer.js"); } } })();

/***/ })

},[594]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/N2IxMThmNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jhbm5lci5qcz83YjExOGY0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzPzdiMTE4ZjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/N2IxMThmNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ29faGVhZGVyLmpzPzdiMTE4ZjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcz83YjExOGY0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbl9mb290ZXIuanM/NzNiNzg5YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25faGVhZGVyLmpzPzczYjc4OWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2guanM/NzNiNzg5YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaF90aXRsZS5qcz83M2I3ODliIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hvd19tb3JlLmpzPzczYjc4OWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dvX2Zvb3Rlci5qcz83M2I3ODliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2gnXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJ1xuaW1wb3J0IFNlYXJjaF90aXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaF90aXRsZSdcbmltcG9ydCBTaG93X21vcmUgZnJvbSAnLi4vY29tcG9uZW50cy9zaG93X21vcmUnXG5cbmltcG9ydCBNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cblxuY29uc3QgaW1nID0ge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG59O1xuXG5jb25zdCBjb250YWluZXIgPSB7XG4gICAgbWF4V2lkdGg6IDE0MDAsXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiXG59O1xuXG5jb25zdCBjYXJkID0ge1xuICAgIGJveFNoYWRvdzogXCIwIDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMxKVwiLFxuICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgd2lkdGg6IDY4NVxufTtcblxuY29uc3QgY2FyZF9pbWcgPSB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbn07XG5cbmNvbnN0IGFydGljbGVfbmFtZSA9IHtcbiAgICB3aWR0aDogMjAwLFxuICAgIG1hcmdpbkxlZnQ6IDM1LFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgYm90dG9tOiAwLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbn07XG5cbmNvbnN0IHRpdGxlX25hbWUgPSB7XG4gICAgY29sb3I6IFwiIzAwMFwiLFxuICAgIHBhZGRpbmc6IFwiMTBweCAwcHggNTVweCAyMHB4XCIsXG4gICAgZm9udFNpemU6IDM1LFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICBmb250V2VpZ2h0OiAzMDBcbn07XG5cbmNvbnN0IGRlc2NyaXB0aW9uID0ge1xuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiBcIjVweCAwIDVweCAwXCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgZm9udFNpemU6IDI1LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCJcbn07XG5cbmNvbnN0IG1hc29ucnlPcHRpb25zID0ge1xuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMCxcbiAgICBndXR0ZXI6IDMwXG59O1xuXG5jb25zdCBjb2xvcnMgPSB7XG4gICAgYmFja2VuZDogXCIjZmJhZjVkXCIsXG4gICAgc29mdHdhcmU6IFwiIzU2NzRiOVwiLFxuICAgIG1vYmlsZTogXCIjZjI2ZDdkXCIsXG4gICAgY29uc3VsdGluZzogXCIjYzY5YzZkXCIsXG4gICAgY29tcGFueTogXCIjZjA2ZWFhXCIsXG4gICAgZnJvbnRlbmQ6ICcjN2NjNTc2J1xufTtcblxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnkoY2F0ZWdvcmllcywgaWQpIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IGlkO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNhdGVnb3J5ID8gY2F0ZWdvcnkuc2x1ZyA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldENvbG9yKHNsdWcpIHtcbiAgICBjb25zdCBzdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIGFydGljbGVfbmFtZSk7XG4gICAgc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yc1tzbHVnXTtcbiAgICBjb25zb2xlLmxvZyhzdHlsZSwgXCJBUlRJQ0xFIE5BTUVcIiwgc2x1Zyk7XG4gICAgcmV0dXJuIHN0eWxlO1xufVxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuXG4gICAgPExheW91dD5cbiAgICAgICAgPEJhbm5lciAvPlxuICAgICAgICA8U2VhcmNoX3RpdGxlIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgICAgICAgICAgPE1hc29ucnkgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd3MgJiYgcHJvcHMuc2hvd3MubWFwKChzaG93KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17Y2FyZH0ga2V5PXtzaG93LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfaW1nXCIgc3R5bGU9e2NhcmRfaW1nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtkZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17aW1nfSBzcmM9e3Nob3cuYmV0dGVyX2ZlYXR1cmVkX2ltYWdlLnNvdXJjZV91cmx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e2dldENvbG9yKGdldENhdGVnb3J5KHByb3BzLmNhdGVnb3JpZXMsIHNob3cuY2F0ZWdvcmllc1swXSkpfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNob3cuZXhjZXJwdC5yZW5kZXJlZCB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aXRsZV9uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Nob3cudGl0bGUucmVuZGVyZWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvTWFzb25yeT5cbiAgICAgICAgICAgIDxTaG93X21vcmUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC93b3JkcHJlc3Mvd3AtanNvbi93cC92Mi9wb3N0cy8nKTtcbiAgICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnN0IHJlc0NhdCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0L3dvcmRwcmVzcy93cC1qc29uL3dwL3YyL2NhdGVnb3JpZXMvJyk7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCByZXNDYXQuanNvbigpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhgREFUQWAsIHNob3cpO1xuICAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7c2hvdy5sZW5ndGh9YCk7XG5cbiAgICBjb25zb2xlLmxvZygnREFUQScsIGNhdGVnb3J5KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3dzOiBzaG93LFxuICAgICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yeSxcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiY29uc3QgYmFubmVyID0ge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnL3N0YXRpYy9iZy1ibG9nLmpwZycpXCIsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcIjcwMHB4XCIsXG4gICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiXG59O1xuXG5jb25zdCB0aXRsZUJsb2cgPSB7XG4gICAgcGFkZGluZ1RvcDogXCI4NXB4XCIsXG4gICAgbWFyZ2luOiAwLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBmb250U2l6ZTogXCI2MHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgZm9udEZhbWlseTogXCInTGF0bycsIHNhbnMtc2VyaWZcIlxufTtcblxuXG5jb25zdCBCYW5uZXIgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtiYW5uZXJ9PlxuICAgICAgICA8aDEgc3R5bGU9e3RpdGxlQmxvZ30+ZmluZCBjcmVhdGl2ZSBlbmdpbmVlcmluZyBpbnNwaXJhdGlvbiBoZXJlPC9oMT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQmFubmVyLmpzIiwiaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uX2Zvb3RlcidcbmltcG9ydCBMb2dvIGZyb20gJy4vTG9nb19mb290ZXInXG5cbmNvbnN0IGZvb3RlclN0eWxlID0ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiMwMDBcIixcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiLFxuICAgIHBhZGRpbmc6IFwiMCAwIDI1cHggMFwiXG59O1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtmb290ZXJTdHlsZX0+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgPC9kaXY+XG5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJpbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb25faGVhZGVyJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvX2hlYWRlcidcblxuY29uc3QgaGVhZGVyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICB6SW5kZXg6IDUwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICBib3JkZXJCb3R0b206IFwiMnB4IHNvbGlkICMwNDE5MzZcIixcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiXG59O1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiLy8gY29uc3QgbG9nb193cmFwcGVyID0ge1xuLy8gICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuLy8gICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbi8vICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuLy8gfTtcblxuY29uc3QgbG9nb19saW5rID0ge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG59O1xuXG5jb25zdCBMb2dvID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGEgc3R5bGU9e2xvZ29fbGlua30gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvLWJsYWNrLnBuZ1wiIGFsdD1cIlBFUkNFUFRJT04gQk9YXCIgLz5cbiAgICAgICAgPC9hPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nb1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2dvX2hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZGVyIC8+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxGb290ZXIgLz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IGJsb2NrTGlua1N0eWxlID0ge1xuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiBcIjAgNjBweCAwIDBweFwiXG59O1xuXG5jb25zdCB1bFN0eWxlcyA9IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICAgIG1hcmdpbjogXCIwIDAgMjBweCAwXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIlxufTtcblxuY29uc3QgbGlTdHlsZXMgPSB7XG4gICAgbWFyZ2luTGVmdDogMjBcbn07XG5cbmNvbnN0IGFTdHlsZXMgPSB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBwYWRkaW5nOiAxMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiXG59O1xuXG5jb25zdCBjb3B5cmlnaHQgPSB7XG4gIGNvbG9yOiBcIiNmZmZcIlxufTtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXtibG9ja0xpbmtTdHlsZX0+XG4gICAgICAgIDx1bCBzdHlsZT17dWxTdHlsZXN9PlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRfdXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2FTdHlsZXN9PmFib3V0IHVzPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZWNobm9sb2dpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2FTdHlsZXN9PnRlY2hub2xvZ2llczwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3BhbiBzdHlsZT17Y29weXJpZ2h0fT7CqSBQZXJjZXB0aW9uQm94LCBDdXN0b20gU29mdHdhcmUgRGV2ZWxvcG1lbnQgQ29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3NwYW4+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXZpZ2F0aW9uX2Zvb3Rlci5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbmF2ID0ge1xuICAgIG1hcmdpbjogMCxcbiAgICBoZWlnaHQ6IFwiMTAwJVwiXG59O1xuXG5jb25zdCBuYXZpZ2F0aW9uID0ge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiXG59O1xuXG5jb25zdCBuYXZpZ2F0aW9uX2l0ZW0gPSB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIHBhZGRpbmc6IFwiNXB4IDBcIixcbiAgICBtYXJnaW46IFwiMCAzcHhcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbn07XG5cbmNvbnN0IGhlYWRlcl9saW5rID0ge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCIjNGE1MjY5XCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgcGFkZGluZzogXCIxMHB4XCIsXG59O1xuXG5jb25zdCBjb25uZWN0X2xpbmsgPSB7XG4gICAgYmFja2dyb3VuZDogXCIjMGEyOTU0XCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC41c1wiLFxuICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiXG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e25hdn0+XG4gICAgICAgIDx1bCBzdHlsZT17bmF2aWdhdGlvbn0+XG4gICAgICAgICAgICA8bGkgc3R5bGU9e25hdmlnYXRpb25faXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2hlYWRlcl9saW5rfSBocmVmPVwiI1wiPkhPTUU8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17bmF2aWdhdGlvbl9pdGVtfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RlY2hub2xvZ2llc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17aGVhZGVyX2xpbmt9IGhyZWY9XCIjXCI+VEVDSE5PTE9HSUVTPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgc3R5bGU9e25hdmlnYXRpb25faXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dF91c1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17aGVhZGVyX2xpbmt9IGhyZWY9XCIjXCI+QUJPVVQgVVM8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZT17bmF2aWdhdGlvbl9pdGVtfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xldHNfdGFsa1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17Y29ubmVjdF9saW5rfSBocmVmPVwiI1wiPkxFVCdTIFRBTEshPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXZpZ2F0aW9uX2hlYWRlci5qcyIsImNvbnN0IGlucHV0c193cmFwcGVyID0ge1xuICAgIGJveFNoYWRvdzogXCIwIDAgNXB4IGJsYWNrXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgbWFyZ2luOiBcIjYwcHggMCAwIDBcIixcbiAgICBwYWRkaW5nOiBcIjU1cHggMCA1NXB4IDBcIlxufTtcblxuY29uc3QgdGFnX25hbWVfaW5wdXQgPSB7XG4gICAgbWF4V2lkdGg6IDQ2NSxcbiAgICBoZWlnaHQ6IDk1LFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBjb2xvcjogXCIjNzc4MDk0XCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICBmb250U2l6ZTogNDUsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NSlcIlxufTtcblxuY29uc3Qgc3F1YXJlX3dyYXBwZXIgPSB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxufTtcblxuY29uc3QgZmlyc3QgPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmYmFmNWRcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCBzZWNvbmQgPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM3Y2M1NzZcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCB0aGlyZCA9IHtcbiAgICB3aWR0aDogMzAsXG4gICAgaGVpZ2h0OiAzMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzU2NzRiOVwiLFxuICAgIG1hcmdpbjogXCIxMHB4IDEwcHggMCAwXCJcbn07XG5cbmNvbnN0IGZvcnRoID0ge1xuICAgIHdpZHRoOiAzMCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjI2ZDdkXCIsXG4gICAgbWFyZ2luOiBcIjEwcHggMTBweCAwIDBcIlxufTtcblxuY29uc3QgZmlmdGggPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNjNjljNmRcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCBzaXggPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMDZlYWFcIixcbiAgICBtYXJnaW46IFwiMTBweCAxMHB4IDAgMFwiXG59O1xuXG5jb25zdCB0aXRsZV9uYW1lX2lucHV0ID0ge1xuICAgIG1heFdpZHRoOiA0NjUsXG4gICAgaGVpZ2h0OiA5NSxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IFwiIzc3ODA5NFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsXG4gICAgZm9udFNpemU6IDQ1LFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNDUpXCJcbn07XG5cblxuY29uc3QgU2VhcmNoID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17aW5wdXRzX3dyYXBwZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt0YWdfbmFtZV9pbnB1dH0gdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwidGFnIG5hbWVcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3NxdWFyZV93cmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zmlyc3R9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzZWNvbmR9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlyZH0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2ZvcnRofT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17ZmlmdGh9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzaXh9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17dGl0bGVfbmFtZV9pbnB1dH0gdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwidGl0bGUgbmFtZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWFyY2guanMiLCJjb25zdCBzZWFyY2hUaXRsZUJsb2NrID0ge1xuICAgIG1heFdpZHRoOiBcIjM4MHB4XCIsXG4gICAgbWF4SGVpZ2h0OiBcIjExMHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiNzU2cHhcIixcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgIGNvbG9yOiBcIiM4Njg4OGNcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiXG59O1xuXG5jb25zdCBoMiA9IHtcbiAgICBjb2xvcjogXCIjNWM3NDkzXCIsXG4gICAgbGluZUhlaWdodDogXCI0NXB4XCIsXG4gICAgZm9udFNpemU6IFwiNDBweFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiT3BlbiBTYW5zLCBzYW5zLXNlcmlmXCIsXG4gICAgZm9udFdlaWdodDogXCI0MDBcIlxufTtcblxuY29uc3QgaW1hZ2UgPSB7XG4gICAgd2lkdGg6IFwiNjBweFwiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjI5cHhcIixcbiAgICByaWdodDogMFxufTtcblxuY29uc3QgU2VhcmNoX3RpdGxlID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17c2VhcmNoVGl0bGVCbG9ja30+XG4gICAgICAgIDxoMiBzdHlsZT17aDJ9PnNlYXJjaDwvaDI+XG4gICAgICAgIDxpbWcgc3R5bGU9e2ltYWdlfSBzcmM9XCIvc3RhdGljL2ljb24tc2VhcmNoLmpwZ1wiIGFsdD1cInNlYXJjaCBpY29uXCIgLz5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaF90aXRsZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2VhcmNoX3RpdGxlLmpzIiwiY29uc3Qgc2hvd19tb3JlID0ge1xuICAgIG1hcmdpbjogXCIyMHB4IDAgMTAwcHggMFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogNDksXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBjb2xvcjogXCIjNWQ1ZjY0XCIsXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGJvcmRlcjogXCIycHggc29saWQgI2NjY1wiLFxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgIHBhZGRpbmc6IFwiMTVweCAwIDE1cHggMFwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgZm9udEZhbWlseTogXCJPcGVuIFNhbnMsIHNhbnMtc2VyaWZcIlxufTtcblxuY29uc3QgU2hvd19tb3JlID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17c2hvd19tb3JlfT5zaG93IG1vcmU8L2Rpdj5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dfbW9yZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2hvd19tb3JlLmpzIiwiY29uc3QgbG9nbyA9IHtcbiAgICBwYWRkaW5nOiBcIjI1cHggMCAwIDYwcHhcIlxufTtcblxuY29uc3QgbG9nb19saW5rID0ge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG59O1xuXG5jb25zdCBMb2dvID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17bG9nb30+XG4gICAgICAgIDxhIHN0eWxlPXtsb2dvX2xpbmt9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nb19mb290ZXIuanBnXCIgYWx0PVwiUEVSQ0VQVElPTiBCT1hcIiAvPlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvZ29fZm9vdGVyLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUVBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCQTtBQUNBO0FBNEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFBQTtBQURBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWtCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVJBO0FBQ0E7QUFVQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVJBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVhBO0FBQ0E7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        