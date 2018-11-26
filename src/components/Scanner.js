import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { RNCamera } from "react-native-camera";
import {inject, observer} from "mobx-react";
import {Button} from "react-native-paper";

@inject("state")
@observer
export class Scanner extends Component {

  _handleBarCodeRead(e) {
    this.props.state.scannerState.scanning = false;
    this.props.state.scannerState.data = e.data;
  }

  render() {
    if(this.props.state.scannerState.scanning) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Barcode Scanner
          </Text>
          <View style={styles.rectangleContainer}>
            <RNCamera
              style={styles.camera}
              type={this.props.state.scannerState.cameraType}
              barCodeTypes = {[RNCamera.Constants.BarCodeType.pdf417]}
              onBarCodeRead={this._handleBarCodeRead.bind(this)}
              // googleVisionBarcodeType={RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.PDF417}
              // onGoogleVisionBarcodesDetected={this._handleBarCodeRead.bind(this)}
            >
              <View style={styles.rectangleContainer}>
                <View style={styles.rectangle}/>
              </View>
            </RNCamera>
          </View>
          <Text style={styles.instructions}>
            Data: {this.props.state.scannerState.data}
          </Text>
        </View>
      );
    }
    else{
      return (<View  style={styles.container}>
        <Text style={styles.welcome}>
          Barcode Scanner
        </Text>
        <Text style={styles.instructions}>
          Data: {this.props.state.scannerState.data}
        </Text>
        <Button onPress={this.} > Entering User</Button>
      </View>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  camera: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  rectangle: {
    height: 380,
    width: 69,
    borderWidth: 2,
    borderColor: "#122fff",
    backgroundColor: "transparent",
  },
});