import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import { gutter } from '../variables';

const LoginFb = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.outer}>
    <Image source={require('./assets/fb-login-button.png')}/>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  outer: {
    alignItems: 'center',
    marginBottom: gutter,
  },
});

LoginFb.propTypes = {
  onPress: PropTypes.func,
};

export default LoginFb;
