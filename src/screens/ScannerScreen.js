import React from "react";
import { View } from "react-native";
import ScannerV2 from "../components/ScannerV2";

/**
 * Scanner Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class ScannerScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScannerV2/>
      </View>
    );
  }
}