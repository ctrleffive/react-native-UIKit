import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

import { floor, divide, take, chunk } from 'lodash';

const { width } = Dimensions.get('window');
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Grid = ({ images, headerContent, footerContent, onPress, itemsPerRow, spacing }) => {
  const rounded = floor(divide(images.length, itemsPerRow));
  const outputRounded = take(images, rounded * itemsPerRow);
  const data = chunk(outputRounded, itemsPerRow); // [[],[],[]]

  // Fix row cell padding
  function paddingFix(i, row) {
    if (i === 0) {
      return {
        // LEFT
        marginRight: spacing,
      };
    } else if (i === row) {
      // RIGHT
      return {
        marginLeft: spacing,
      };
    }
    return {
      // CENTER
      marginHorizontal: spacing,
    };
  }

  return (
    <ListView
      enableEmptySections={true}
      renderHeader={() => <View style={{ width }}>{headerContent}</View>}
      renderFooter={() => <View style={{ width }}>{footerContent}</View>}
      dataSource={ds.cloneWithRows(data)}
      pageSize={10}
      renderRow={(rowData, i) =>
        <View key={i} style={styles.container}>
          {rowData.map((item, ii) =>
            <TouchableOpacity
              key={ii}
              onPress={() => onPress(item.id)}
              style={{ flex: 1 }}
            >
              <Image
                style={[{
                  flex: 1,
                  height: width / (itemsPerRow),
                  marginVertical: 2,
                }, paddingFix(ii, itemsPerRow - 1)]}
                source={{ uri: item.src }}
              />
            </TouchableOpacity>
          )}
        </View>
      }
    />
  );
};

Grid.defaultProps = {
  images: [],
  spacing: 2,
  rows: 3,
};

Grid.propTypes = {
  images: PropTypes.array.isRequired,
  spacing: PropTypes.number,
  rows: PropTypes.number,
  headerContent: PropTypes.element,
  footerContent: PropTypes.element,
  onPress: PropTypes.func,
  itemsPerRow: PropTypes.number,
};

export default Grid;
