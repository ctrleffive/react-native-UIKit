
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import ListView from 'deprecated-react-native-listview';

import _ from 'lodash';

import { Grid, ProfileHeader } from '../../lib'

export default class Profile extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    StatusBar.setBarStyle('light-content');
  }
  _header(){
    return (
      <View>
        <ProfileHeader
          profileImg={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
          backgroundImg={'http://petapixel.com/assets/uploads/2014/05/ae5a74db2757e40b78ad13eb119a9224.jpg'}
          blurRadius={20}
          circle={true}
        />
        <Text>Laura Smith</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Grid
          headerContent={this._header()}
          images={[
            {id:0, src:'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg'},
            {id:1, src:'http://justsomething.co/wp-content/uploads/2013/09/black-and-white-photography-benoit-courti-1.jpg'},
            {id:2, src:'http://i.imgur.com/YaQDc.jpg?1'},
            {id:3, src:'http://farm4.staticflickr.com/3284/3032859171_9a71ea30c1_z.jpg'},
            {id:4, src:'http://livefastmag.com/wp-content/uploads/2011/10/1499c4834a64469dd570a47a08d503d2.jpg'},
            {id:5, src:'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg'},
            {id:6, src:'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg'},
            {id:7, src:'http://justsomething.co/wp-content/uploads/2013/09/black-and-white-photography-benoit-courti-1.jpg'},
            {id:8, src:'http://i.imgur.com/YaQDc.jpg?1'},
            {id:9, src:'http://farm4.staticflickr.com/3284/3032859171_9a71ea30c1_z.jpg'},
          ]}
          footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
          onPress={(id) => console.log(id)}
          itemsPerRow={3}
          spacing={2}
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
