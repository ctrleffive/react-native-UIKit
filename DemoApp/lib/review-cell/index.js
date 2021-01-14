import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { truncate } from 'lodash';

import { gutter, grey, lightGrey } from '../variables';

import { RatingBox } from '../';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    fontSize: 17,
  },
  description: {
    flex: 1,
    fontSize: 13,
    color: grey,
  },
  content: {
    height: 75,
    flex: 1,
    flexDirection: 'column',
  },
});

const ReviewCell = ({ title, description, src, onPress, gutter, outOf, rating }) => (
  <TouchableOpacity
    style={[styles.row, { borderColor: lightGrey, marginLeft: gutter }]}
    onPress={onPress}
  >
    <View style={[styles.content, { paddingBottom: gutter }]}>
      <Text style={[styles.title, { marginTop: gutter }]}>
        {title}
      </Text>
      <Text style={styles.description}>
        {truncate(description, { 'length': 44, 'separator': /,? +/ })}
      </Text>
      <RatingBox rating={rating} outOf={outOf} />
    </View>
    <Image
      source={{ uri: src }}
      style={[styles.thumb, { height: 75, width: 70 }]}
    />
  </TouchableOpacity>
);

ReviewCell.defaultProps = {
  gutter,
};

ReviewCell.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  onPress: PropTypes.func,
  gutter: PropTypes.number,
  outOf: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ReviewCell;
