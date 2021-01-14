import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { gutter, error } from '../variables';

const FieldError = ({ errorMsg, error, color, marginBottom }) => (
  <View style={[styles.container, { marginBottom }]}>
    {error ? <Text style={{ color }}>
      {errorMsg}
    </Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

FieldError.defaultProps = {
  error: false,
  color: error,
  marginBottom: gutter,
};

FieldError.propTypes = {
  errorMsg: PropTypes.string,
  error: PropTypes.bool,
  color: PropTypes.string,
  marginBottom: PropTypes.number,
};

export default FieldError;
