/**
 * DrinkUp
 * @author: Dylan L. Cheung
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarcodeScan from "./components/Scanner";
import ScannerV2 from "./components/ScannerV2";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Text style={styles.welcome}>Hello World</Text>*/}
        {/*<Text style={styles.instructions}>Dylan Cheung</Text>*/}
        {/*<BarcodeScan/>*/}
        <ScannerV2/>
      </View>
    );
  }
}