import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { gutter } from '../variables';
import { Heading, Avatar, DateItem } from '../';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const AvartarHeader = ({ src, timestamp, heading, circle, backgroundColor, height, gutter }) => (
  <View style={[styles.header, { backgroundColor, padding: gutter}]}>
    <Avatar
      circle={circle}
      size={height}
      src={src}
    />
    <View style={[styles.titleContainer, { height }]}>
      <Heading size={15} weight={'600'}>{heading}</Heading>
      <DateItem timestamp={timestamp} />
    </View>
  </View>
);

AvartarHeader.defaultProps = {
  height: 40,
  gutter,
};

AvartarHeader.propTypes = {
  src: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  circle: PropTypes.bool,
  backgroundColor: PropTypes.string,
  height: PropTypes.number,
  gutter: PropTypes.number,
};

export default AvartarHeader;
