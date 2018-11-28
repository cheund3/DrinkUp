"use strict";

import React from "react";
import {Button, Text, View} from "react-native";

/**
 * Single Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SingleEventScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

        <Text>Single Event</Text>
        <Button
          title={"Go to Scanner"}
          onPress={() => {this.props.navigation.navigate("Scanner");}}
        />
      </View>
    );
  }
}