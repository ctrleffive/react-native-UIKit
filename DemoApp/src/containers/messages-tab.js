
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import ListView from 'deprecated-react-native-listview';

import _ from 'lodash';

var messages = require('../../db/messages.json')

// import { MessageList, Search } from 'react-native-uikit'
import { MessageList, Search } from '../../lib'

export default class MessagesTab extends Component {
  constructor(props){
    super(props);
    let dataSource = new ListView.DataSource({
      getRowData: (dataBlob, sid, rid) => dataBlob[sid][rid],
      //getSectionHeaderData: (dataBlob, sid) => dataBlob[sid],
      rowHasChanged: (row1, row2) => row1 !== row2,
      //sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(messages),
      messges: [],
      searchText: ''
    }
  }
  componentDidMount(){
    StatusBar.setBarStyle('light-content');
    this.setState({
      messges: messages
    })
  }
  _onChange(text){
    (text.length > 0) ?
    this.setState({
      messges: this.state.messges.filter((item,i) => item.title.includes(text.toLowerCase()))
    }) :
    this.setState({
      messges: messages
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Search
          onChangeText={(searchText) => {
            this.setState({searchText}),
            this._onChange(searchText)
          }}
          />
        <Text>{this.state.searchText}</Text>
          <MessageList
            items={this.state.messges}
            footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
            onPress={(id) => console.log(id)}
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
