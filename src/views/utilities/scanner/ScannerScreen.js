"use strict";

import React, { Component } from "react";
import { View } from "react-native";
import { RNCamera } from "react-native-camera";
import { inject, observer } from "mobx-react";

import { styles } from "./ScannerStyles";

@inject("state")
@observer
export class ScannerScreen extends Component {

  /**
   * Parse the scanned data into the correct JSON format and navigate to the scanned screen
   * @param e
   * @returns {Promise<void>}
   * @private
   */
  async _handleBarCodeRead(e) {
    await this.props.state.scannerState.handleBarcodeRead(e);
    this.props.state.scannedState.data = JSON.parse(JSON.stringify(this.props.state.scannerState.parsedData));
    console.log(this.props.state.scannedState.data);
    this.props.navigation.navigate("Scanned");
  }

  /**
   * Render the React Native Camera scanner
   * @returns {*}
   */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rectangleContainer}>
          <RNCamera
            style={styles.camera}
            type={this.props.state.scannerState.cameraType}
            barCodeTypes = {[RNCamera.Constants.BarCodeType.pdf417]}
            onBarCodeRead={this._handleBarCodeRead.bind(this)}>
            <View style={styles.rectangleContainer}>
              <View style={styles.rectangle}/>
            </View>
          </RNCamera>
        </View>
      </View>
    );
  }
}
