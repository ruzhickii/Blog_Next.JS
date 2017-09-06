'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navigation_footer = require('./Navigation_footer');

var _Navigation_footer2 = _interopRequireDefault(_Navigation_footer);

var _Logo_footer = require('./Logo_footer');

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