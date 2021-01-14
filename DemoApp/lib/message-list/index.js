import React from 'react';
import {
  View,
  ListView,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

import { Message } from '../';

const { width } = Dimensions.get('window');
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const MessageList = ({
  items, headerContent, footerContent,
  backgroundColor, timestamp, onPress,
}) => (
  <ListView
    enableEmptySections={true}
    contentContainerStyle={{ backgroundColor }}
    renderHeader={() => <View style={{ width }}>{headerContent}</View>}
    renderFooter={() => <View style={{ width }}>{footerContent}</View>}
    dataSource={ds.cloneWithRows(items)}
    renderRow={(rowData) => <Message
      user={rowData.user}
      active={rowData.active}
      title={rowData.title}
      message={rowData.message}
      timestamp={timestamp}
      onPress={() => onPress(rowData.id)}
    />}
  />
);

MessageList.defaultProps = {
  backgroundColor: '#E9EAEF',
};

MessageList.propTypes = {
  gutter: PropTypes.number,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.number,
  onPress: PropTypes.func,
  items: PropTypes.array,
  timestamp: PropTypes.number,
  headerContent: PropTypes.element,
  footerContent: PropTypes.element,
};

export default MessageList;
