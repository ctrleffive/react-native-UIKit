import React from 'react';
import {
  Image,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const ImageCustom = ({
  src, height, children, blurRadius, fullHeight, overlayOpacity, overlayColor,
}) => (
  <Image source={{ uri: src }}
    blurRadius={blurRadius}
    style={{ resizeMode: 'cover', height, flex: fullHeight ? 1 : 0 }}
  >
    <View style={[styles.overlay, { backgroundColor: overlayColor, opacity: overlayOpacity }]} />
      {children}
  </Image>
);

ImageCustom.defaultProps = {
  height: 300,
  blurRadius: 0,
  fullHeight: false,
  overlayOpacity: 0,
  overlayColor: '#000',
};

ImageCustom.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  blurRadius: PropTypes.number,
  fullHeight: PropTypes.bool,
  overlayOpacity: PropTypes.number,
  overlayColor: PropTypes.string,
  children: PropTypes.element,
};

export default ImageCustom;
