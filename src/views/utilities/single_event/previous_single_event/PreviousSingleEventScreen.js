"use strict";

import React from "react";
import { View } from "react-native";
import {Button, Paragraph, Title} from "react-native-paper";
import { inject, observer } from "mobx-react";

import { basic } from "../../../../styles/basic";

/**
 * Previous Single Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class PreviousSingleEventScreen extends React.Component {

  /**
   * Fetch the the selected previous single event when the component mounts
   * @returns {Promise<void>}
   */
  async componentDidMount() {
    await this.props.state.previousSingleEventState.fetchEvent(this.props.state.userInterfaceState.selectedEventId);
  }

  render() {
    return (
      <View style={basic.centered_container}>
        <View style={basic.top}>
          <Title> {this.props.state.previousSingleEventState.event.title} </Title>
          <Paragraph/>
          <Paragraph/>
          <Paragraph> Start Time: </Paragraph>
          <Paragraph>       {this.props.state.previousSingleEventState.event.startTime}</Paragraph>
          <Paragraph/>
          <Paragraph> End Time: </Paragraph>
          <Paragraph>       {this.props.state.previousSingleEventState.event.endTime}</Paragraph>
          <Paragraph/>
          <Paragraph> Description: </Paragraph>
          <Paragraph>       {this.props.state.previousSingleEventState.event.description}</Paragraph>
        </View>
        <View style={basic.bottom}>
          <Button
            style={basic.button}
            mode = "contained"
            onPress={() => this.props.navigation.navigate("AttendanceListScreen")}
          > Attendance List </Button>
        </View>
      </View>
    );
  }
}