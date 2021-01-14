import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  close: {
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    color: '#fff',
  },
});

const Close = ({ size, color, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.close, { fontSize: size, color }]}>
      ×
    </Text>
  </TouchableOpacity>
);

Close.defaultProps = {
  size: 25,
  color: '#222',
};

Close.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

export default Close;
