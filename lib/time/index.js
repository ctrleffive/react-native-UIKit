import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import moment from 'moment';

const Time = ({ timestamp, color }) => (
  <Text style={{ color }}>
    {moment(timestamp).format('LT')}
  </Text>
);

Time.propTypes = {
  timestamp: PropTypes.number,
  color: PropTypes.string,
};

Time.defaultProps = {
  color: '#222',
};

export default Time;
