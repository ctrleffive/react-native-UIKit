import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  img: {
    resizeMode: 'cover',
  },
});

const Carousel = ({ images, height }) => (
  <ScrollView
    horizontal={true}
    decelerationRate={'fast'}
    directionalLockEnabled={true}
    pagingEnabled={true}
    showsHorizontalScrollIndicator={false}
    removeClippedSubviews={true}
    automaticallyAdjustContentInsets={false}
    scrollEventThrottle={200}
    height={height}
  >
    {images.map((item, i) =>
      <Image
        key={i}
        style={[styles.img, { height, width }]}
        source={{ uri: item.src }}
      />
    )}
  </ScrollView>
);

Carousel.defaultProps = {
  images: [],
  height: 300,
  gutter: 0,
  offset: false,
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
};

export default Carousel;
