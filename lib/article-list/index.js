import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

import { truncate } from 'lodash';
import { primary, gutter } from '../variables';
import { DateItem } from '../';

const { width } = Dimensions.get('window');
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  text: {
    fontWeight: '500',
  },
  cell: {
    flex: 3,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});

const ArticleList = ({
  items, headerContent, cellHeight, titleSize, titleColor,
  categoryColor, categoryWeight, categorySize,
  footerContent, backgroundColor, dateColor, onPress,
}) => (
  <ListView
    renderHeader={() => <View style={{ width }}>{headerContent}</View>}
    renderFooter={() => <View style={{ width }}>{footerContent}</View>}
    dataSource={ds.cloneWithRows(items)}
    renderRow={(rowData, i) =>
      // TODO move to seperate component
      <TouchableOpacity
        style={{ backgroundColor }}
        key={i}
        onPress={() => onPress(rowData.id)}
      >
        <View style={[styles.row, { paddingVertical: gutter, paddingHorizontal: gutter }]} >
          <View style={{ flex: 2 }}>
            <Image
              source={{ uri: rowData.src }}
              style={[styles.img, { marginRight: gutter, height: cellHeight }]}
            />
          </View>
          <View style={[styles.cell, { height: cellHeight }]}>
            <View>
              <Text
                style={{
                  color: categoryColor,
                  fontWeight: categoryWeight,
                  marginBottom: 3,
                  fontSize: categorySize,
                }}
              >
                {rowData.category}
              </Text>
              <Text style={[styles.text, { color: titleColor, fontSize: titleSize }]}>
                {truncate(rowData.title, { 'length': 70, 'separator': /,? +/})}
              </Text>
            </View>
            <DateItem color={dateColor} timestamp={rowData.timestamp} />
          </View>
        </View>
      </TouchableOpacity>
    }
  />
);

ArticleList.defaultProps = {
  gutter,
  backgroundColor: '#fff',
  categoryColor: primary,
  categorySize: 14,
  categoryWeight: 'bold',
  titleSize: 16,
  titleColor: '#222',
  headerWeight: 'bold',
  cellHeight: 100,
  dateColor: '#666',
};

ArticleList.propTypes = {
  gutter: PropTypes.number,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.number,
  height: PropTypes.number,
  items: PropTypes.array,
  headerContent: PropTypes.element,
  headerWeight: PropTypes.string,
  cellHeight: PropTypes.number,
  titleSize: PropTypes.number,
  titleColor: PropTypes.string,
  categoryColor: PropTypes.string,
  categoryWeight: PropTypes.string,
  categorySize: PropTypes.number,
  footerContent: PropTypes.element,
  dateColor: PropTypes.string,
  onPress: PropTypes.func,
  i: PropTypes.number,
};

export default ArticleList;
