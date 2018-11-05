/**
 * Testing the PDF417 decoder. Replace usage of App.js in "../index.js" with Decoder.js
 * Also uncomment the two decoders below
 * @author: Dylan L. Cheung
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import BarcodeScan from "./components/Scanner";
import ScannerV2 from "./components/ScannerV2";
import ScannerScene from "./components/ScannerV3";

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
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<BarcodeScan/>*/}
        {/*<ScannerV2/>*/}
      {/*<ScannerScene/>*/}
      </View>
    );
  }
}