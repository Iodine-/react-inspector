'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ObjectName = require('../object/ObjectName');

var _ObjectName2 = _interopRequireDefault(_ObjectName);

var _ObjectPreview = require('./ObjectPreview');

var _ObjectPreview2 = _interopRequireDefault(_ObjectPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectRootLabel = function ObjectRootLabel(_ref) {
  var name = _ref.name,
      data = _ref.data,
      expanded = _ref.expanded,
      format = _ref.format;

  if (typeof name === 'string') {
    return expanded ? _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_ObjectName2.default, { name: name }),
      _react2.default.createElement(
        'span',
        null,
        ': ',
        '{'
      )
    ) : _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_ObjectName2.default, { name: name }),
      _react2.default.createElement(
        'span',
        null,
        ': '
      ),
      _react2.default.createElement(_ObjectPreview2.default, { data: data, format: format })
    );
  } else {
    return expanded ? '{' : _react2.default.createElement(_ObjectPreview2.default, { data: data, format: format });
  }
};

exports.default = ObjectRootLabel;