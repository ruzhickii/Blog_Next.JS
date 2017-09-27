'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavigationFooter = require('./NavigationFooter');

var _NavigationFooter2 = _interopRequireDefault(_NavigationFooter);

var _LogoFooter = require('./LogoFooter');

var _LogoFooter2 = _interopRequireDefault(_LogoFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\components\\Footer.js';


var footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    background: '#000',
    fontFamily: 'Roboto',
    padding: '0 0 25px 0'
};

var Footer = function Footer(props) {
    return _react2.default.createElement('div', { style: footerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement(_LogoFooter2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement(_NavigationFooter2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }));
};

exports.default = Footer;