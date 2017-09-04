"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

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