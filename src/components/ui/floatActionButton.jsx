import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Add} from 'iconsax-react-nativejs';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="32" color="#000" />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2CCCE4',
    alignItems: 'center',
    width: 70,
    height: 70,
    justifyContent: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});
