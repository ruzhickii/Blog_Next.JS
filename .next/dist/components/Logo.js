"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

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