import React from 'react';
import { StyleSheet, View } from 'react-native';
import data from './data';
import Home from './Home';

GLOBAL.self = GLOBAL; // eslint-disable-line

// Default styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
