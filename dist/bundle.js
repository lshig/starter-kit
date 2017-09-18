webpackJsonp([0],{

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _H = __webpack_require__(84);

var _H2 = _interopRequireDefault(_H);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(_H2.default, { text: 'Hello, World!' })
  );
}

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = H1;

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(102);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function H1(_ref) {
  var text = _ref.text;

  return _react2.default.createElement(
    'h1',
    null,
    text
  );
}
H1.propTypes = {
  text: _propTypes2.default.string.isRequired
};

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(83);

var _App = __webpack_require__(82);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

/***/ })

},[85]);