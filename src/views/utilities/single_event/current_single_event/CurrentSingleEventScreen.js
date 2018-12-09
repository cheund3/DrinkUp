"use strict";

import React from "react";
import { View } from "react-native";
import { Title, Paragraph, Button } from "react-native-paper";
import { inject, observer } from "mobx-react";

import { basic } from "../../../../styles/basic";

/**
 * Current Single Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class CurrentSingleEventScreen extends React.Component {

  /**
   * Fetch the the selected current single event when the component mounts
   * @returns {Promise<void>}
   */
  async componentDidMount() {
    await this.props.state.currentSingleEventState.fetchEvent(this.props.state.userInterfaceState.selectedEventId);
  }

  /**
   * Handle the button press for ending an event
   * @returns {Promise<void>}
   */
  async handleEndEventButton(){
    await this.props.state.currentSingleEventState.endEvent(this.props.state.userInterfaceState.selectedEventId);

    // Reload current and previous event screens with updated information
    await this.props.state.currentEventsState.fetchEvents(this.props.state.userInterfaceState.internalId);
    await this.props.state.previousEventsState.fetchEvents(this.props.state.userInterfaceState.internalId);
    this.props.navigation.navigate("PreviousEventsStack");
  }

  render() {
    return (
      <View style={basic.centered_container}>
        <View style={basic.top}>
          <Title> {this.props.state.currentSingleEventState.event.title} </Title>
          <Paragraph/>
          <Paragraph/>
          <Paragraph> Start Time: </Paragraph>
          <Paragraph>       {this.props.state.currentSingleEventState.event.startTime}</Paragraph>
          <Paragraph/>
          <Paragraph> Description: </Paragraph>
          <Paragraph>       {this.props.state.currentSingleEventState.event.description}</Paragraph>
        </View>
        <View style={basic.bottom}>
          <Button
            style={basic.centered_button}
            mode = "contained"
            onPress={() => this.props.navigation.navigate("ScannerScreen")}
          > Scanner </Button>
          <Button
            style={basic.centered_button}
            mode = "contained"
            onPress={() => this.props.navigation.navigate("AttendanceListScreen")}
          > Attendance List </Button>
          <Button
            style={basic.centered_button}
            mode = "contained"
            onPress={async () => this.handleEndEventButton()}
          > End Event </Button>
        </View>
      </View>
    );
  }
}