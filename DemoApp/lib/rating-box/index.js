import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import Rating from './rating';

const RatingBox = ({ rating, outOf }) => (
  <View>
    <Rating value={rating} max={outOf} />
  </View>
);

export default RatingBox;

RatingBox.propTypes = {
  rating: PropTypes.number.isRequired,
  outOf: PropTypes.number.isRequired,
};
