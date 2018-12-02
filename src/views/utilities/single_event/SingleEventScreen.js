"use strict";

import React from "react";
import { View } from "react-native";
import { Button} from "react-native-paper";
import { inject, observer } from "mobx-react";

import { basic } from "../../../styles/basic";

/**
 * Single Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class SingleEventScreen extends React.Component {
  render() {
    return (
      <View style={basic.container}>
        <View style={basic.content}>
          <Button
            style={basic.button}
            mode = "contained"
            onPress={() => this.props.navigation.navigate("Scanner")}
          > Scanner </Button>
          <Button
            style={basic.button}
            mode = "contained"
            onPress={() => this.props.navigation.navigate("Attendance")}
          > Attendance List </Button>
        </View>
      </View>
    );
  }
}