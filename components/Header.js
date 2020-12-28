import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Text To Speech Converter</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: { backgroundColor: '#00B8C0' },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    color:'white'
  },
});