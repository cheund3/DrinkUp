"use strict";

import React from "react";
import {Button, Text, View} from "react-native";
import {Appbar, DataTable} from "react-native-paper";
import {inject, observer} from "mobx-react";
import {basic} from "../../../styles/basic";

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
        <Appbar.Header>
          <Appbar.Content
            title= {this.props.state.singleEventState.title}
          />
        </Appbar.Header>
        <View style={basic.content}>
          <Button
            style={basic.button}
            mode = "contained"
            title={"Scanner"}
            onPress={() => this.props.navigation.navigate("Scanner")}
          />
        </View>
      </View>
    );
  }
}