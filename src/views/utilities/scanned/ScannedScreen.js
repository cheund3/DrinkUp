import { Text, View } from "react-native";
import { Appbar, Button } from "react-native-paper";
import { inject, observer } from "mobx-react";
import {basic} from "../../../styles/basic";
import React, { Component } from "react";

@inject("state")
@observer
export class ScannedScreen extends Component {

  render() {
    return (
      <View style={basic.container}>
        <Appbar.Header>
          <Appbar.Content
            title={this.props.state.scannedState.title}
          />
        </Appbar.Header>
        <Text style={basic.content}>
          Data: {JSON.stringify(this.props.state.scannerState.parsedData)}
        </Text>
        <Text style={basic.content}>
          Response: {this.props.state.scannedState.res}
        </Text>
        <Button onPress={() => {this.props.state.scannedState.enteringUser(JSON.parse(JSON.stringify(this.props.state.scannerState.parsedData)));}}> Entering User</Button>
        <Button onPress={() => {this.props.state.scannedState.leavingUser(JSON.parse(JSON.stringify(this.props.state.scannerState.parsedData)));}}> Leaving User</Button>
      </View>
    );
  }
}