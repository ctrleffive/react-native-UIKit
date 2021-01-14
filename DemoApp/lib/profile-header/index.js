import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  backgroundImg: {
    resizeMode: 'cover',
    height: 150,
  },
  profileImg: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 4,
    width: 100,
    height: 100,
    position: 'absolute',
    alignSelf: 'center',
    top: 75,
    left: (width / 2) - 50,
  },
  shadow: {
    position: 'absolute',
    alignSelf: 'center',
    top: 75,
    left: (width / 2) - 50,
    borderRadius: 4,
    width: 100,
    height: 100,
    shadowColor: '#D8D8D8',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    marginTop: 35,
    marginBottom: 10,
    fontWeight: '300',
  },
  summary: {
    paddingHorizontal: 10,
  },
});

const ProfileHeader = ({ profileImg, backgroundImg, circle, blurRadius }) => (
  <View style={styles.container}>
    <Image
      blurRadius={blurRadius}
      source={{ uri: backgroundImg }}
      style={styles.backgroundImg}
    />
    <View style={[styles.shadow, { borderRadius: circle ? 50 : 0 }]} />
    <Image
      source={{ uri: profileImg }}
      style={[styles.profileImg, { borderRadius: circle ? 50 : 0 }]}
    />
  </View>
);

ProfileHeader.defaultProps = {
  circle: false,
  blurRadius: 0,
};

ProfileHeader.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  profileImg: PropTypes.string,
  backgroundImg: PropTypes.string,
  circle: PropTypes.bool,
  blurRadius: PropTypes.number,
};

export default ProfileHeader;
