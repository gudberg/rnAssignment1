// eslint-disable-line
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from './data';
import Home from './Home';

GLOBAL.self = GLOBAL;

// We render the Home component here and send the data as props

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home data={data} />
      </View>
    );
  }
}
// Default styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
