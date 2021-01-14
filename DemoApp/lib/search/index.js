'use strict';
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import PropTypes from 'prop-types';


import {primary, lightGrey, gutter} from '../variables'

const searchIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUzSURBVHic7ZtdaFxFFMd/s0mbpDGtbSxpu0VTQUE0ItVSfRAsGut3DPjUWCiCD4JQiw9CQRF8kKJSix8vIlaUgCBq6jetoM1LKWKrIvWLJgWTNq0abJGNbd3jw8zSy83cu3f2zr27bvKHYcNM9pz/+d+Zc++dOatEhLmM1iyMKqVagTXAKtOK5rMdOA5MmjYBjIvI6Sx4JIHyNQOUUhcBdwADwN3A0oRfPQ+MAiPAiIiMeyGUFCKSqgEbgI+BGUA8tMPAVqAtLbdE/FME3gd84iloWxsHNgOFhhIAWAnsBv7NMPhg+xboz0oApxyglFoPvG9EqIYyMIZOepVWAlaY768EeoGuBLYEeBp4Rnzfthyu/JAJIO5qlYA9wEPA8gQ2FwD9wCvAb1VsC/AO0JHrEgAU8GwVYtPAE0Bnipyi0HeRQ1V8fQ0U8xQgLvgZ4AVgmTdCWogh4GiM3yPAkswFMETisvS1PqdjyHc7MBzj/1OgJTMBgPUxa340yRr3JMR2dEK18diZiQDoDD0Z4XQYWJhH8AE+g8C5CD5bshDgjZgrn2vwAU6PRHD6E7jYmwDANdgfcsbzmvYxIrwaIcIOnwJ8aHHwT5YJz0GAVmC/hV8JWJ1aAODmrJKNRxGui0iKr/sQYI/F8F9Ad70DD/F828LzfC1LtICBUqoT/Vgaxg4R+cPSX088CZwN9bUA97oaKgT+vh398BHEDPCSq9GsISJjwLuWoQFXW0EB7reM7xORM65Gc8J7lr5+pdQiFyMFAKVUC3obK4wPaiCWFz5Dz9AgOtAzOTEqM+ByoDs0VkYnxYaEiPwN7LUMrXOxUxFglWVsTEROuRLLGQctfbZYIhEnwHFnOvnDxnFeABcD8wKYzw7LWMmZTv6wcex0MVARwKbkCmc6+cPG8aSLgYoAk5axJFvf9YaN45SLgXkBzOeEZaxXKbXAmVK+uMLSd8LFQEWAcfTrZBBdwC3OlHKCUkoB91iGDrjYKQCIPp8ftYzbXpAaBTcAqy39tsfjSATfBkcs4wNG6UbEoKXvZxE55mKkmgBFYKOLwTyglFqIPrQJw+nqA7O2xA4ze6vpEKaSpFEasM3CU4Ab0+4Jbo0wPFTvoAMcFwO/Wzh+VZO9kPE29B0hbPwo0F7v4A3HqMPau1ILYBxsjnAw3ADB34n90Oa7mm1anBTQZSk2EbbXMfir0Fv0YU5lYIM3AYyzfuyHD2VgsA7BdwO/RFyUXalsxzh9KsLhOeDRHIO/Gvg1gsuPpCyZiXOs0DU5NscCvEbGJ8XAfcDpGA4PpvZRhUAHuiYnisABYF0GgS8FdkYsw2A7CfRlJoAhU0TX5ESRKKOLJno9BN4GPI4+848L3JsISYktQdfkxBGZAd4CHgC6HIIuADeh7+/HHAL3IkLiQklzevQ88FiCfz8LfInet58ItBIXqseLwJXoe3tPAptH0CLtwl6IfQq4VUS+T2DrAmqYpltwm6JpWxl4EfMkCqyN8e88E9IkqeeoXjmatv1grmrYvzcR0iatS4E38V84vR991h/5FupLhFQCBMj0AA8DH6WYFT8BL+PwSutDBG+/GKnAVJpsBK5n9k9mFhliU6adQD9L7BXHnZyAv7XAPmpMjN4FqAfSiFCwdf7fICLfALehq9bDWA58oZTqs323KQSA2kVoGgGgNhGaSgBwF6EpkqANVRLjFLBGREpNNwMqqDITeoBN0IRLIIgqIiyGJl4CQZjl8Dlwiek6A1wmItNzQgAAU0G6CX3qvVtEpmGOzIA4/Ae88z5tdXC65wAAAABJRU5ErkJggg==';

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  render(){
    const {placeHolder, backgroundColor, innerBackground, borderColor, border, radius, iconColor, onSubmitEditing, onChangeText} = this.props;
    return(
      <View style={[styles.holder, {backgroundColor: backgroundColor}]}>
        <TextInput
           style={[styles.input, {backgroundColor:innerBackground, borderRadius: radius, borderColor: borderColor, borderWidth: border ? 1 : 0}]}
           onChangeText={(text) => { this.setState({text}); onChangeText(text)}}
           value={this.state.text}
           placeholder={placeHolder}
           placeholderTextColor={'#9197A3'}
         />
       <Image style={[{width: 20, height: 20, resizeMode: Image.resizeMode.contain, tintColor: iconColor}, styles.icon]} source={{uri: searchIcon}}/>
      </View>
    )
  }
}
Search.defaultProps = {
  placeHolder: 'Search',
  backgroundColor: lightGrey,
  //backgroundColor: primary,
  innerBackground: '#FAFAFA',
  radius: 5,
  borderColor: '#D8D8D8',
  border: true,
  iconColor: '#D8D8D8'
}
Search.propTypes = {
  placeHolder: PropTypes.string,
  backgroundColor: PropTypes.string,
  innerBackground: PropTypes.string,
  radius: PropTypes.number,
  borderColor: PropTypes.string,
  border: PropTypes.bool,
  iconColor:  PropTypes.string,
}

const styles = StyleSheet.create({
  holder: {
    padding: 10,
  },
  icon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    paddingRight: 30,
  }
});
