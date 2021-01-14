import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const Divider = ({ color, thickness }) => (
  <View style={{ backgroundColor: color, height: thickness }} />
);

Divider.defaultProps = {
  color: '#eee',
  thickness: 1,
};

Divider.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.number,
};

export default Divider;
