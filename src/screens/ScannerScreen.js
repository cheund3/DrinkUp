import React from "react";
import { Text, View } from "react-native";

/**
 * Scanner Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class ScannerScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> The barcode scanner will go here. Entering/leaving boolean will be passed through props </Text>
      </View>
    );
  }
}