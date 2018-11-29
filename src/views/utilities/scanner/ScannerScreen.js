import React, { Component } from "react";
import { Text, View } from "react-native";
import { RNCamera } from "react-native-camera";
import { inject, observer } from "mobx-react";
import { styles } from "./ScannerStyles";

@inject("state")
@observer
export class ScannerScreen extends Component {

  async _handleBarCodeRead(e) {
    await this.props.state.scannerState.handleBarcodeRead(e);
    this.props.state.scannedState.data = JSON.parse(JSON.stringify(this.props.state.scannerState.parsedData));
    this.props.navigation.navigate("Scanned");
  }

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
