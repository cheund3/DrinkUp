"use strict";

import React from "react";
import { ScrollView, View, Text } from "react-native";
import { inject, observer } from "mobx-react";
import {Checkbox, List, Switch} from "react-native-paper";

/**
 * Attendance List Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class AttendanceListScreen extends React.Component {

  /**
   * Fetch a list of attendees when the component mounts
   * @returns {Promise<void>}
   */
  async componentDidMount() {
    await this.props.state.attendanceListState.fetchAttendees(this.props.state.userInterfaceState.selectedEventId);
  }

  /**
   * Convert the list of events into viewable items and render the screen
   * @returns {*}
   */
  render() {
    const attendeesViews = [];
    this.props.state.attendanceListState.data.attendees.forEach(function (attendee) {
      attendeesViews.push(
        <List.Item
          key={attendee.id}
          title={attendee.firstName + " " + attendee.lastName}
          description={attendee.age}
          left={() =>
            <Checkbox
              status={attendee.age>=21 ? "checked" : "unchecked"}
              color={"#8400EE"}
            />}
          right={() =>  <Switch
            value={attendee.left}
            color={"#8400EE"}
            // onValueChange={() =>
            // { this.setState({ isSwitchOn: !isSwitchOn }); }
            // }}
          />}
        />
      );
    });

    return (
      <ScrollView>
        <List.Section title="Attendance List">
          {attendeesViews}
        </List.Section>
      </ScrollView>
    );
  }
}