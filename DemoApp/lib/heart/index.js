'use strict';
import React, { Component } from 'react';
import {
  View,
  Animated,
  Touchable,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA0lBMVEX/////gID/gIP/foP/foH/foP/foL/foH/foP/foH/fIP/AP//foH/f4L/foL/foP/foP/gID/foH/foH/f4L/eIf/gID/foP/foL/gIT/e4T/foL/foL/fYL/fIP/foL/f4L/gID/foL/foH/gID/foL/foL/fYL/fYL/foL/cY7/foL/foP/foL/gID/foP/foL/foL/foL/foL/fYL/foH/foL/f4L/gID/foL/foP/foH/gID/gID/foL/fYL/foL/gID/gID/foH/foIAAAB++MPeAAAARHRSTlMABkZxiqSujm1LJwFRqfLTaQxBy5MRCqjfNh3O+W4j540O1l0CtvczYuIJ5HfbKnmy5ebKr4bchRTtZ8keJukv7jIagu+MSbcAAAABYktHREWOs6hXAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4AQLAiUEFAtQcwAAAYRJREFUWMPt1cd6gkAUhuFj7L1gF3tB7L135/6vKRgegsgMTFkmZ/v7vTsHgP+znOfL6/MHgqFwBLdGwqFgwO/zfnnwdTQWTyDjkqm0dU2nkr9jIh6L2vuMhCyXyObMMZdNWFcp85HnC8h2xZKxlor2tZB/78sVhDm5qq9VGbdWymZfqyP8NV5rgzDWa0bfbCHStQHaxLHV1PtOl/gT1FOUHnntdn6APnI4VXVa+69+METcNxxowIi/R2ikAWMRYAwwEekRmsBUDJjCTAyYgSQGSDAXA+YgiwEyLMSABSzFgCWsxIAVrMWANShigAKwEek32p9pKwJsNWC35+/3u9eLcuAHDvqbeOTtj/qbCCeVr1dPxrt+vvD0l7P5Zbne2Pvb9f3bdmcWbnfr15VV+OxZBXvPJuB6FgHf0wuknlYg93SCU08jOPfuglvvJrj3zgJN7yTQ9WSBticJ9D1eYOlxAltvF1j7T4G9two8/bvA15sCb28I/L0uiPQAj+fzIdL/jfsGDYl8Y1jr/K4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTYtMDQtMTFUMDI6Mzc6MDQrMDI6MDCNCnbUAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTA0LTExVDAyOjM3OjA0KzAyOjAw/FfOaAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=';

var EdgeInsetsPropType = PropTypes.shape({
  top: PropTypes.number,
  left: PropTypes.number,
  bottom: PropTypes.number,
  right: PropTypes.number
});

type Event = Object;

type State = {
  animationID: ?number;
  scale: Animated.Value;
};

var PRESS_RETENTION_OFFSET = {top: 20, left: 20, right: 20, bottom: 30};

/*
 * Example of using the `TouchableMixin` to play well with other responder
 * locking views including `ScrollView`. `TouchableMixin` provides touchable
 * hooks (`this.touchableHandle*`) that we forward events to. In turn,
 * `TouchableMixin` expects us to implement some abstract methods to handle
 * interesting interactions such as `handleTouchablePress`.
 */
var TouchableBounce = React.createClass({
  mixins: [Touchable.Mixin],

  propTypes: {
    onPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    // The function passed takes a callback to start the animation which should
    // be run after this onPress handler is done. You can use this (for example)
    // to update UI before starting the animation.
    onPressWithCompletion: PropTypes.func,
    // the function passed is called after the animation is complete
    onPressAnimationComplete: PropTypes.func,
    /**
     * When the scroll view is disabled, this defines how far your touch may
     * move off of the button, before deactivating the button. Once deactivated,
     * try moving it back and you'll see that the button is once again
     * reactivated! Move it back and forth several times while the scroll view
     * is disabled. Ensure you pass in a constant to reduce memory allocations.
     */
    pressRetentionOffset: EdgeInsetsPropType,
    /**
     * This defines how far your touch can start away from the button. This is
     * added to `pressRetentionOffset` when moving off of the button.
     * ** NOTE **
     * The touch area never extends past the parent view bounds and the Z-index
     * of sibling views always takes precedence if a touch hits two overlapping
     * views.
     */
    hitSlop: EdgeInsetsPropType,
  },

  getInitialState: function(): State {
    return {
      ...this.touchableGetInitialState(),
      scale: new Animated.Value(1),
      active: false
    };
  },

  bounceTo: function(
    value: number,
    velocity: number,
    bounciness: number,
    callback?: ?Function
  ) {
    Animated.spring(this.state.scale, {
      toValue: value,
      velocity,
      bounciness,
    }).start(callback);
  },

  /**
   * `Touchable.Mixin` self callbacks. The mixin will invoke these if they are
   * defined on your component.
   */
  touchableHandleActivePressIn: function(e: Event) {
    this.bounceTo(0.93, 0.1, 0);
    this.props.onPressIn && this.props.onPressIn(e);
  },

  touchableHandleActivePressOut: function(e: Event) {
    this.bounceTo(1, 0.4, 0);
    this.props.onPressOut && this.props.onPressOut(e);
  },

  touchableHandlePress: function(e: Event) {
    this.setState({
      active: !this.state.active
    })
    var onPressWithCompletion = this.props.onPressWithCompletion;
    if (onPressWithCompletion) {
      onPressWithCompletion(() => {
        this.state.scale.setValue(0.93);
        this.bounceTo(1, 10, 10, this.props.onPressAnimationComplete);
      });
      return;
    }

    this.bounceTo(1, 10, 10, this.props.onPressAnimationComplete);
    this.props.onPress && this.props.onPress(e);
  },

  touchableGetPressRectOffset: function(): typeof PRESS_RETENTION_OFFSET {
    return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
  },

  touchableGetHitSlop: function(): ?Object {
    return this.props.hitSlop;
  },

  touchableGetHighlightDelayMS: function(): number {
    return 0;
  },

  render: function(): ReactElement {
    const { size, tint, tintActive } = this.props;
    return (
      <Animated.View
        style={[{transform: [{scale: this.state.scale}]}, this.props.style]}
        accessible={true}
        accessibilityLabel={this.props.accessibilityLabel}
        accessibilityComponentType={this.props.accessibilityComponentType}
        accessibilityTraits={this.props.accessibilityTraits}
        testID={this.props.testID}
        hitSlop={this.props.hitSlop}
        onStartShouldSetResponder={this.touchableHandleStartShouldSetResponder}
        onResponderTerminationRequest={this.touchableHandleResponderTerminationRequest}
        onResponderGrant={this.touchableHandleResponderGrant}
        onResponderMove={this.touchableHandleResponderMove}
        onResponderRelease={this.touchableHandleResponderRelease}
        onResponderTerminate={this.touchableHandleResponderTerminate}>
        {this.props.children}
          {this.state.active ?
            <Image style={{width: size, height: size,tintColor: tintActive}} source={{uri: base64Icon}}/>
           :
           <Image style={{width: size, height: size, tintColor: tint}} source={{uri: base64Icon}}/>}
      </Animated.View>
    );
  }
});

module.exports = Heart;

/*
import Heart from './Heart'
<Heart
  onPress={() => console.log('pressed')}
  size={30}
  tint={'#eee'}
  tintActive={'red'}
/>
*/
