'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavigationHeader = require('./NavigationHeader');

var _NavigationHeader2 = _interopRequireDefault(_NavigationHeader);

var _LogoHeader = require('./LogoHeader');

var _LogoHeader2 = _interopRequireDefault(_LogoHeader);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Header.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    z-index: 50;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: 100%;\n    background: #fff;\n    border-bottom: 2px solid #041936;\n    font-family: Roboto;\n\n        @media (max-width: 922px) {\n           \n        }\n\n        @media (max-width: 768px) {\n            \n        }\n\n        @media (max-width: 640px) {\n            \n        }\n\n        @media (max-width: 320px) {\n            \n        }\n'], ['\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    z-index: 50;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: 100%;\n    background: #fff;\n    border-bottom: 2px solid #041936;\n    font-family: Roboto;\n\n        @media (max-width: 922px) {\n           \n        }\n\n        @media (max-width: 768px) {\n            \n        }\n\n        @media (max-width: 640px) {\n            \n        }\n\n        @media (max-width: 320px) {\n            \n        }\n']);

var HeaderStyle = _styledComponents2.default.div(_templateObject);

var Header = function Header(props) {
    return _react2.default.createElement(HeaderStyle, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement(_LogoHeader2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }), _react2.default.createElement(_NavigationHeader2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }));
};

exports.default = Header;