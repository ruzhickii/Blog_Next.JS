"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

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