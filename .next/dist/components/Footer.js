'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavigationFooter = require('./NavigationFooter');

var _NavigationFooter2 = _interopRequireDefault(_NavigationFooter);

var _LogoFooter = require('./LogoFooter');

var _LogoFooter2 = _interopRequireDefault(_LogoFooter);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Footer.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n        background: #000;\n        font-family: Roboto;\n'], ['\n        background: #000;\n        font-family: Roboto;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 0 0 25px 0;\n\n        @media (max-width: 635px) and (min-width: 320px) {\n            flex-direction: column;\n        }\n'], ['\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 0 0 25px 0;\n\n        @media (max-width: 635px) and (min-width: 320px) {\n            flex-direction: column;\n        }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    text-align: right;\n    color: #fff;\n    padding: 0 64px 40px 0;\n\n        \n        @media (max-width: 920px) and (min-width: 786px) {\n            padding: 0 26px 40px 0;\n            text-align: right;\n        }\n\n        @media (max-width: 780px) and (min-width: 640px) {\n            text-align: right;\n            padding: 0 56px 25px 0;\n        }\n\n        @media (max-width: 635px) and (min-width: 320px) {\n            max-width: 255px;\n            margin: 0 auto;\n            padding: 0;\n            text-align: center;\n        }\n'], ['\n    text-align: right;\n    color: #fff;\n    padding: 0 64px 40px 0;\n\n        \n        @media (max-width: 920px) and (min-width: 786px) {\n            padding: 0 26px 40px 0;\n            text-align: right;\n        }\n\n        @media (max-width: 780px) and (min-width: 640px) {\n            text-align: right;\n            padding: 0 56px 25px 0;\n        }\n\n        @media (max-width: 635px) and (min-width: 320px) {\n            max-width: 255px;\n            margin: 0 auto;\n            padding: 0;\n            text-align: center;\n        }\n']);

var FooterStyle = _styledComponents2.default.div(_templateObject);

var Wrapper = _styledComponents2.default.div(_templateObject2);

var Copyright = _styledComponents2.default.div(_templateObject3);

var Footer = function Footer(props) {
    return _react2.default.createElement(FooterStyle, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement(Wrapper, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, _react2.default.createElement(_LogoFooter2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }), _react2.default.createElement(_NavigationFooter2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    })), _react2.default.createElement(Copyright, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, '\xA9 PerceptionBox, Custom Software Development Company. All rights reserved.'));
};

exports.default = Footer;