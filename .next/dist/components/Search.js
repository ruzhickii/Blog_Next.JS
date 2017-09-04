"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

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