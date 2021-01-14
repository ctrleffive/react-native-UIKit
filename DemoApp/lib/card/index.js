import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { truncate } from 'lodash';
import { gutter } from '../variables';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderColor: '#D8D8D8',
    borderWidth: 1,
    shadowColor: '#D8D8D8',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  clipRadius: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  lowerSection: {
    padding: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
  },
  link: {
    fontSize: 15,
    marginTop: 5,
    color: '#979DA8',
  },
  img: {
    height: 200,
    resizeMode: 'cover',
  },
  imgBorderBtm: {
    borderColor: '#D8D8D8',
    borderTopWidth: 1,
    height: 1,
  },
});

const Card = ({
  src, title, link, radius, gutter,
  onPress, marginBottom, shadow,
}) => (
  <View style={{ marginHorizontal: gutter, borderRadius: radius, marginBottom }}>
    <View style={[styles.card, { shadowOpacity: shadow ? 0.6 : 0, borderRadius: radius }]}>
      <View style={styles.clipRadius}>
        <TouchableOpacity onPress={onPress}>
          <Image source={{ uri: src }} style={styles.img} />
        </TouchableOpacity>
        <View style={styles.imgBorderBtm} />
        <View style={styles.lowerSection}>
          <Text style={styles.title}>
            { truncate(title, { 'length': 64, 'separator': /,? +/ })}
          </Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.link}>{link}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

Card.defaultProps = {
  gutter,
  radius: 4,
  marginBottom: 0,
  shadow: true,
};

Card.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  gutter: PropTypes.number,
  onPress: PropTypes.func,
  marginBottom: PropTypes.number,
  shadow: PropTypes.bool,
  radius: PropTypes.number,
};

export default Card;
