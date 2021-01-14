import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  border: {
    borderColor: 'rgba(0, 0, 0, 0.6)',
    borderWidth: 0.1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

const Avatar = ({ src, size, circle, onPress }) => (
  <View>
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{ uri: src }}
        style={[styles.img, {
          height: size,
          width: size,
          borderRadius: circle ? size / 2 : 0,
        }]}
      />
      <View
        style={[styles.border, {
          height: size,
          width: size,
          borderRadius: circle ? size / 2 : 0,
        }]}
      />
    </TouchableOpacity>
  </View>
);

Avatar.defaultProps = {
  size: 40,
  circle: false,
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
  circle: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Avatar;
