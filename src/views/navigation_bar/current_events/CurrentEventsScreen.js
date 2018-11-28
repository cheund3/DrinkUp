"use strict";

import React from "react";
import {Button, Text, View} from "react-native";
import {inject, observer} from "mobx-react";
import {basic} from "../../../styles/basic";
import {Appbar} from "react-native-paper";

/**
 * Current Events Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class CurrentEventsScreen extends React.Component {

  // componentDidMount(){
  //   this.props.state.currentEventsState.fetchEvents(this.props.state.userInterfaceState.internalId);
  // }

  render() {
    return (
      <View style={basic.container}>
        <Appbar.Header>
          <Appbar.Content
            title= {this.props.state.currentEventsState.title}
          />
        </Appbar.Header>
        <Text> {this.props.state.currentEventsState.events} </Text>
        <View style={basic.content}>
          <Button
            style={basic.button}
            mode = "contained"
            title={"Single Event"}
            onPress={() => this.props.navigation.navigate("SingleEventScreen")}
          />
        </View>
      </View>
    );
  }
}