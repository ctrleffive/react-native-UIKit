'use strict'
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const Heading = ({size, weight, children}) => (
  <Text style={[styles.title, {fontSize: size, fontWeight: weight}, ]}>{children}</Text>
)

Heading.propTypes = {
  weight: PropTypes.string,
  size: PropTypes.number
}

Heading.defaultProps = {
  weight: '600',
  size: 17
}

var styles = StyleSheet.create({
  title: {
    marginLeft: 10,
  }
})

export default Heading;
