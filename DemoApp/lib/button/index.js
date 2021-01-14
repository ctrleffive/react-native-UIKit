import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { primary, gutter } from '../variables';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

const Button = ({
  children, radius, fontWeight, fontSize,
  backgroundColor, color, gutter, onPress,
}) => (
  <TouchableOpacity
    style={{ borderRadius: radius, backgroundColor, padding: gutter, marginBottom: gutter }}
    onPress={onPress}
  >
    <Text style={[styles.text, { color, fontSize, fontWeight }]}>
      {children}
    </Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  radius: 4,
  backgroundColor: primary,
  color: '#fff',
  gutter,
};

Button.propTypes = {
  radius: PropTypes.number,
  type: PropTypes.string,
  invert: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  gutter: PropTypes.number,
  fontWeight: PropTypes.string,
  children: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  onPress: PropTypes.func,
};

export default Button;
