import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { primary } from '../variables';

const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA0lBMVEX/////gID/gIP/foP/foH/foP/foL/foH/foP/foH/fIP/AP//foH/f4L/foL/foP/foP/gID/foH/foH/f4L/eIf/gID/foP/foL/gIT/e4T/foL/foL/fYL/fIP/foL/f4L/gID/foL/foH/gID/foL/foL/fYL/fYL/foL/cY7/foL/foP/foL/gID/foP/foL/foL/foL/foL/fYL/foH/foL/f4L/gID/foL/foP/foH/gID/gID/foL/fYL/foL/gID/gID/foH/foIAAAB++MPeAAAARHRSTlMABkZxiqSujm1LJwFRqfLTaQxBy5MRCqjfNh3O+W4j540O1l0CtvczYuIJ5HfbKnmy5ebKr4bchRTtZ8keJukv7jIagu+MSbcAAAABYktHREWOs6hXAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4AQLAiUEFAtQcwAAAYRJREFUWMPt1cd6gkAUhuFj7L1gF3tB7L135/6vKRgegsgMTFkmZ/v7vTsHgP+znOfL6/MHgqFwBLdGwqFgwO/zfnnwdTQWTyDjkqm0dU2nkr9jIh6L2vuMhCyXyObMMZdNWFcp85HnC8h2xZKxlor2tZB/78sVhDm5qq9VGbdWymZfqyP8NV5rgzDWa0bfbCHStQHaxLHV1PtOl/gT1FOUHnntdn6APnI4VXVa+69+METcNxxowIi/R2ikAWMRYAwwEekRmsBUDJjCTAyYgSQGSDAXA+YgiwEyLMSABSzFgCWsxIAVrMWANShigAKwEek32p9pKwJsNWC35+/3u9eLcuAHDvqbeOTtj/qbCCeVr1dPxrt+vvD0l7P5Zbne2Pvb9f3bdmcWbnfr15VV+OxZBXvPJuB6FgHf0wuknlYg93SCU08jOPfuglvvJrj3zgJN7yTQ9WSBticJ9D1eYOlxAltvF1j7T4G9two8/bvA15sCb28I/L0uiPQAj+fzIdL/jfsGDYl8Y1jr/K4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTYtMDQtMTFUMDI6Mzc6MDQrMDI6MDCNCnbUAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTA0LTExVDAyOjM3OjA0KzAyOjAw/FfOaAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 11,
    height: 11,
  },
  text: {
    marginLeft: 5,
    fontWeight: '600',
  },
});

const LikeBtn = ({ active, likes, color, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.row}>
    { active
      ?
      <Image
        style={[styles.img, { tintColor: color }]}
        source={{ uri: base64Icon }}
      />
      :
      <Image
        style={[styles.img, { tintColor: '#eee' }]}
        source={{ uri: base64Icon }}
      />}
    <Text style={[styles.text, { color }]}>
      {likes} likes
    </Text>
  </TouchableOpacity>
);


LikeBtn.defaultProps = {
  active: false,
  likes: 0,
  color: primary,
};

LikeBtn.propTypes = {
  active: PropTypes.bool,
  likes: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

export default LikeBtn;
