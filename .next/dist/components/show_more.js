"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

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