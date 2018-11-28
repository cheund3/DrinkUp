import { Text, View } from "react-native";
import { Appbar, Button } from "react-native-paper";
import { inject, observer } from "mobx-react";
import { styles } from "./ScannedStyles";
import React, { Component } from "react";

@inject("state")
@observer
export class ScannedScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title={this.props.state.scannedState.title}
          />
        </Appbar.Header>
        <Text style={styles.content}>
          Data: {JSON.stringify(this.props.state.scannerState.parsedData)}
        </Text>
        <Button onPress={() => {this.props.state.scannedState.enteringUser();}}> Entering User</Button>
        <Button onPress={() => {this.props.state.scannedState.leavingUser();}}> Leaving User</Button>
      </View>
    );
  }
}