import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    resizeMode: 'cover',
    width: width / 3.05,
    height: width / 3.05,
    marginRight: (width / 3) * 0.025,
    marginBottom: (width / 3) * 0.025,
  },
});

const ThumbSwiper = ({ images, onPress }) => (
  <ScrollView
    horizontal={true}
    decelerationRate={'fast'}
    directionalLockEnabled={true}
    showsHorizontalScrollIndicator={false}
    removeClippedSubviews={true}
    automaticallyAdjustContentInsets={false}
    scrollEventThrottle={200}
    contentContainerStyle={styles.scrollView}
  >
    {images.map((item, i) =>
      <TouchableOpacity key={i} onPress={() => onPress(item.id)}>
        <Image
          style={styles.img}
          source={{ uri: item.src }}
        />
      </TouchableOpacity>
    )}
  </ScrollView>
);

ThumbSwiper.propTypes = {
  images: PropTypes.array,
  onPress: PropTypes.func,
};

export default ThumbSwiper;
