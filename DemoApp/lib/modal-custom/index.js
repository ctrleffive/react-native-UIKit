/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'
import React, { Component } from 'react'
import {
  AppRegistry,
  Modal,
  StyleSheet,
  SwitchIOS,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

var Button = (props) => {
  const [active, setActive] = useState(false)

  const _onHighlight = () => {
    setActive(true)
  }

  const _onUnhighlight = () => {
    setActive(false)
  }

  var colorStyle = {
    color: active ? '#fff' : '#000',
  }

  return (
    <TouchableHighlight
      onHideUnderlay={_onUnhighlight}
      onPress={props.onPress}
      onShowUnderlay={_onHighlight}
      style={[styles.button, props.style]}
      underlayColor="#a9d9d4"
    >
      <Text style={[styles.buttonText, colorStyle]}>{props.children}</Text>
    </TouchableHighlight>
  )
}

var ModalCustom = (props) => {
  const [animated, setAnimated] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [transparent, setTransparent] = useState(true)

  const _setModalVisible = (visible) => {
    setModalVisible(visible)
  },

  const _toggleAnimated = () => {
    setAnimated(!animated)
  },

  const _toggleTransparent = () => {
    setTransparent(!transparent)
  },

  var modalBackgroundStyle = {
    backgroundColor: transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
  }
  var innerContainerTransparentStyle = transparent
    ? { backgroundColor: '#fff', padding: 20 }
    : null

  return (
    <View>
      <Modal
        animated={animated}
        transparent={transparent}
        visible={modalVisible}
      >
        <View style={[styles.container, modalBackgroundStyle]}>
          <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
            <Text>
              This modal was presented{' '}
              {animated ? 'with' : 'without'} animation.
            </Text>
            <Button
              onPress={() => _setModalVisible(false)}
              style={styles.modalButton}
            >
              Close
            </Button>
          </View>
        </View>
      </Modal>

      <View style={styles.row}>
        <Text style={styles.rowTitle}>Animated</Text>
        <SwitchIOS
          value={animated}
          onValueChange={_toggleAnimated}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.rowTitle}>Transparent</Text>
        <SwitchIOS
          value={transparent}
          onValueChange={_toggleTransparent}
        />
      </View>

      <Button onPress={() => _setModalVisible(true)}>Present</Button>
    </View>
  )
}

exports.examples = [
  {
    title: 'Modal Presentation',
    description: 'Modals can be presented with or without animation',
    render: () => <ModalExample />,
  },
]

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
})

module.exports = ModalCustom
