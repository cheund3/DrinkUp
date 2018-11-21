"use strict";

import React from "react";
<<<<<<< HEAD:src/views/utilities/scanner/ScannerScreen.js
import { Text, View } from "react-native";
import {inject, observer} from "mobx-react";
=======
import { View } from "react-native";
import ScannerV4 from "../components/ScannerV4";
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a:src/screens/ScannerScreen.js

/**
 * Scanner Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class ScannerScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
<<<<<<< HEAD:src/views/utilities/scanner/ScannerScreen.js
        <Text> The barcode scanner will go here. Entering/leaving boolean will be passed through props </Text>
=======
        <ScannerV4/>
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a:src/screens/ScannerScreen.js
      </View>
    );
  }
}