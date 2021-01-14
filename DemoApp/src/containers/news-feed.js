
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import ListView from 'deprecated-react-native-listview';

import _ from 'lodash';

import PostImage from '../components/post-image'
import PostCard from '../components/post-card'
import PostText from '../components/post-text'

var feedData = require('../../db/feed.json')

export default class NewsFeed extends Component {
  constructor(props){
    super(props);
    this.dataSource = new ListView.DataSource({
      getRowData: (dataBlob, sid, rid) => dataBlob[sid][rid],
      //getSectionHeaderData: (dataBlob, sid) => dataBlob[sid],
      rowHasChanged: (row1, row2) => row1 !== row2,
      //sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    this.state = {
      dataSource: this.dataSource.cloneWithRows(feedData),
    }
  }
  componentDidMount(){
    StatusBar.setBarStyle('light-content');
  }
  _renderPostItem(data){
    if(data.content.type === 'image'){
      return (
        <PostImage {...data}/>
      );
    }
    else if(data.content.type === 'card'){
      return (
        <PostCard {...data}/>
      );
    }
    else {
      return (
        <PostText {...data}/>
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
         <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this._renderPostItem(rowData)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
