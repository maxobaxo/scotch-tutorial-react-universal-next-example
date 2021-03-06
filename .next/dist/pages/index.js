'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxobaxo/Desktop/universal-next/pages/index.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'League Table'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), _react2.default.createElement('div', { className: 'pure-g', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('div', { className: 'pure-u-1-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('div', { className: 'pure-u-1-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Barclays Premier League'), _react2.default.createElement('table', { className: 'pure-table', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('thead', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'Position'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Team'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'P'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'GL'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'W'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'D'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'L'))), _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, this.props.data.standing.map(function (standing, i) {
        var oddOrNot = i % 2 == 1 ? "pure-table-odd" : "";
        return _react2.default.createElement('tr', { key: i, className: oddOrNot, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, _react2.default.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, standing.position), _react2.default.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, _react2.default.createElement('img', { className: 'pure-img logo', src: standing.crestURI, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        })), _react2.default.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, standing.points), _react2.default.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, standing.goals), _react2.default.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, standing.wins), _react2.default.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, standing.draws), _react2.default.createElement('td', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, standing.losses));
      })))), _react2.default.createElement('div', { className: 'pure-u-1-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })));
    }
  }], [{
    key: 'getInitialProps',

    // async operation with getInitialProps
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

              case 2:
                res = _context.sent;
                return _context.abrupt('return', { data: res.data });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsImF4aW9zIiwicHJvcHMiLCJkYXRhIiwic3RhbmRpbmciLCJtYXAiLCJpIiwib2RkT3JOb3QiLCJwb3NpdGlvbiIsImNyZXN0VVJJIiwicG9pbnRzIiwiZ29hbHMiLCJ3aW5zIiwiZHJhd3MiLCJsb3NzZXMiLCJnZXQiLCJyZXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQVVLLEFBQ1I7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseURBQU0sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7b0JBQTlCO3NCQUZGLEFBRUUsQUFDQTtBQURBO2tEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO29CQUE1QjtzQkFKSixBQUNFLEFBR0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO2dEQUNPLFdBQUwsQUFBZTtvQkFBZjtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNENBQUEsY0FBQSxXQUFPLFdBQVAsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLHlCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSxzQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0EsdUJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU5GLEFBTUUsQUFDQSxzQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FUTixBQUNFLEFBQ0UsQUFPRSxBQUdKLHdCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0M7QUFERDtBQUFBLGNBQ0MsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixTQUFoQixBQUF5QixJQUFJLFVBQUEsQUFBQyxVQUFELEFBQVcsR0FBTSxBQUM3QztZQUFNLFdBQVcsSUFBQSxBQUFJLEtBQUosQUFBUyxJQUFULEFBQWEsbUJBQTlCLEFBQWlELEFBQ2pEOytCQUNFLGNBQUEsUUFBSSxLQUFKLEFBQVMsR0FBRyxXQUFaLEFBQXVCO3NCQUF2Qjt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxjQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxvQkFERixBQUNFLEFBQWMsQUFDZCwyQkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUFJO0FBQUo7QUFBQSxrREFBUyxXQUFMLEFBQWUsaUJBQWdCLEtBQUssU0FBcEMsQUFBNkM7c0JBQTdDO3dCQUZOLEFBRUUsQUFBSSxBQUNKO0FBREk7NkJBQ0osY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsb0JBSEYsQUFHRSxBQUFjLEFBQ2QseUJBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsb0JBSkYsQUFJRSxBQUFjLEFBQ2Qsd0JBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsb0JBTEYsQUFLRSxBQUFjLEFBQ2QsdUJBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsb0JBTkYsQUFNRSxBQUFjLEFBQ2Qsd0JBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsb0JBUkosQUFDRSxBQU9FLEFBQWMsQUFHbkI7QUE5QlAsQUFFRSxBQUVFLEFBWUUsQUFDQyxBQWlCTCxvREFBSyxXQUFMLEFBQWU7b0JBQWY7c0JBekNOLEFBQ0UsQUFNRSxBQWtDRSxBQUlQO0FBSk87Ozs7U0FqRFI7Ozs7Ozs7Ozs7O3VCQUdvQixnQkFBQSxBQUFNLElBQU4sQUFBVSxBOzttQkFBdEI7QTtpREFDQyxFQUFFLE1BQU0sSUFBUixBQUFZLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFMTSxnQkFBTSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXhvYmF4by9EZXNrdG9wL3VuaXZlcnNhbC1uZXh0In0=