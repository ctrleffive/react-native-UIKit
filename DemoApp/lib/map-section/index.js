'use strict';
import React, { Component } from 'react';
import  {

  StyleSheet,
  Text,
  View,
  MapView,
} from 'react-native';
import PropTypes from 'prop-types';

const MapSection = ({region, annotations, height, fullHeight, ...props}) => (
  <MapView
    {...props}
    style={[styles.map, {height: height, flex: fullHeight ? 1 : null}]}
    region={region}
    annotations= {annotations}
  />
);

const styles = StyleSheet.create({
  map: {
    //flex:1,
  }
});
MapSection.defaultProps = {
  height: 400,
  fullHeight: false,
}
MapSection.propTypes = {
  region: PropTypes.object,
  annotations: PropTypes.array,
  height: PropTypes.number,
  fullHeight: PropTypes.bool,
}

export default MapSection;
