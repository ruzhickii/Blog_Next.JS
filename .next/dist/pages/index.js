'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _Search = require('../components/Search');

var _Search2 = _interopRequireDefault(_Search);

var _Banner = require('../components/Banner');

var _Banner2 = _interopRequireDefault(_Banner);

var _Search_title = require('../components/Search_title');

var _Search_title2 = _interopRequireDefault(_Search_title);

var _show_more = require('../components/show_more');

var _show_more2 = _interopRequireDefault(_show_more);

var _reactMasonryComponent = require('react-masonry-component');

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ruzhi\\WebstormProjects\\Blog_Next.JS\\pages\\index.js?entry';


var img = {
    width: "100%",
    display: "block"
};

var container = {
    maxWidth: 1400,
    margin: "0 auto"
};

var card = {
    boxShadow: "0 5px 5px rgba(0, 0, 0, 0.31)",
    marginBottom: 30,
    width: 685
};

var card_img = {
    position: "relative"
};

var article_name = {
    background: "#fbaf5d",
    width: 200,
    marginLeft: 35,
    position: "absolute",
    bottom: 0,
    textAlign: "center"
};

var title_name = {
    color: "#000",
    padding: "10px 0px 55px 20px",
    fontSize: 35,
    textTransform: "uppercase",
    fontFamily: "Roboto",
    fontWeight: 300
};

var description = {
    margin: 0,
    padding: "5px 0 5px 0",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto"
};

var masonryOptions = {
    transitionDuration: 0,
    gutter: 30
};

var Index = function Index(props) {
    return _react2.default.createElement(_MyLayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    }, _react2.default.createElement(_Banner2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }), _react2.default.createElement(_Search_title2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }), _react2.default.createElement('div', { style: container, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }, _react2.default.createElement(_Search2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }), _react2.default.createElement(_reactMasonryComponent2.default, { className: 'masonry', options: masonryOptions, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }, props.shows && props.shows.map(function (show) {
        return _react2.default.createElement('div', { className: 'card', style: card, key: show.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 75
            }
        }, _react2.default.createElement('div', { className: 'card-img', style: card_img, __source: {
                fileName: _jsxFileName,
                lineNumber: 76
            }
        }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 77
            }
        }, _react2.default.createElement('a', { style: description, __source: {
                fileName: _jsxFileName,
                lineNumber: 78
            }
        }, _react2.default.createElement('img', { style: img, src: show.better_featured_image.source_url, __source: {
                fileName: _jsxFileName,
                lineNumber: 79
            }
        }), _react2.default.createElement('div', { className: 'title', style: article_name, dangerouslySetInnerHTML: { __html: show.excerpt.rendered }, __source: {
                fileName: _jsxFileName,
                lineNumber: 80
            }
        })))), _react2.default.createElement('div', { style: title_name, __source: {
                fileName: _jsxFileName,
                lineNumber: 84
            }
        }, _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 85
            }
        }, show.title.rendered)));
    })), _react2.default.createElement(_show_more2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res, show;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _isomorphicUnfetch2.default)('http://localhost/wordpress/wp-json/wp/v2/posts/');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    show = _context.sent;

                    console.log('DATA', show);
                    console.log('Show data fetched. Count: ' + show.length);

                    return _context.abrupt('return', {
                        shows: show
                    });

                case 9:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;