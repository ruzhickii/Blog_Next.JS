"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Navigation_footer = require("./Navigation_footer");

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