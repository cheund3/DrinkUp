"use strict";

import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { inject, observer } from "mobx-react";

import { basic } from "../../../../styles/basic";

/**
 * Current Single Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class CurrentSingleEventScreen extends React.Component {

  async handleEndEventButton(){
    await this.props.state.currentSingleEventState.endEvent(this.props.state.userInterfaceState.selectedEventId);

    // Reload current and previous event screens with updated information
    await this.props.state.currentEventsState.fetchEvents(this.props.state.userInterfaceState.internalId);
    await this.props.state.previousEventsState.fetchEvents(this.props.state.userInterfaceState.internalId);
    this.props.navigation.navigate("PreviousEventsStack");
  }

  render() {
    return (
      <View style={basic.container}>
        <View style={basic.content}>
          <Button
            style={basic.button}
            mode = "contained"
            onPress={() => this.props.navigation.navigate("ScannerScreen")}
          > Scanner </Button>
          <Button
            style={basic.button}
            mode = "contained"
            onPress={() => this.props.navigation.navigate("AttendanceListScreen")}
          > Attendance List </Button>
          <Button
            style={basic.button}
            mode = "contained"
            onPress={async () => this.handleEndEventButton()}
          > End Event </Button>
        </View>
      </View>
    );
  }
}