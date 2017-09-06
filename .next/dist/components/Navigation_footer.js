"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next\\dist\\lib\\link.js");

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