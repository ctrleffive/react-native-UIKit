/* @flow */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { Close } from '../';
import { alertMessage } from '../variables';

const AlertMessage = ({ backgroundColor, color, message, onPress }) => (
  <View style={[styles.row, { backgroundColor }]}>
    <Text style={[styles.text, { color }]}>{message}</Text>
    <Close color={color} onPress={onPress} />
  </View>
);


const { color, backgroundColor } = alertMessage;

AlertMessage.defaultProps = {
  color,
  backgroundColor,
};

AlertMessage.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  message: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 2,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default AlertMessage;
