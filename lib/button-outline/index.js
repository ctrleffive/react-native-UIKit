import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { gutter } from '../variables';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

const ButtonOutline = ({
  children, radius, backgroundColor, borderWidth, color,
  fontWeight, fontSize, gutter, onPress,
}) => (
  <TouchableOpacity
    style={[styles.btn, {
      borderRadius: radius,
      backgroundColor,
      borderWidth,
      borderColor: color,
      padding: gutter,
      marginBottom: gutter,
    }]}
    onPress={onPress}
  >
    <Text
      style={[styles.text, {
        color,
        fontSize,
        fontWeight,
      }]}
    >
      {children}
    </Text>
  </TouchableOpacity>
);

ButtonOutline.defaultProps = {
  radius: 4,
  borderWidth: 2,
  backgroundColor: 'transparent',
  color: '#fff',
  gutter,
};

ButtonOutline.propTypes = {
  radius: PropTypes.number,
  type: PropTypes.string,
  invert: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  borderWidth: PropTypes.number,
  gutter: PropTypes.number,
  children: PropTypes.string.isRequired,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.number,
  onPress: PropTypes.func,
};

export default ButtonOutline;
