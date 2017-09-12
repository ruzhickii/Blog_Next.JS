"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/mnt/c/Users/ruzhi/WebstormProjects/Blog_Next.JS/components/Navigation_header.js";


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