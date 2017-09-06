'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navigation_header = require('./Navigation_header');

var _Navigation_header2 = _interopRequireDefault(_Navigation_header);

var _Logo_header = require('./Logo_header');

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