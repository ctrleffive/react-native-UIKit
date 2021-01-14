import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import moment from 'moment'

const DateItem = ({ timestamp, color, marginLeft, fontSize }) => (
  <Text style={{ color, marginLeft, fontSize }}>
    { moment(timestamp).fromNow() }
  </Text>
);

DateItem.defaultProps = {
  color: '#222',
  marginLeft: 0,
  fontSize: 13,
};

DateItem.propTypes = {
  color: PropTypes.string,
  timestamp: PropTypes.number.isRequired,
  marginLeft: PropTypes.number,
  fontSize: PropTypes.number,
};

export default DateItem;
