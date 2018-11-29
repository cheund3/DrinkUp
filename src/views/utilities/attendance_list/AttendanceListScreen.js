"use strict";

import React from "react";
import {Text, View, ScrollView} from "react-native";
import {inject, observer} from "mobx-react";
import {List} from "react-native-paper";

/**
 * Attendance List Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class AttendanceListScreen extends React.Component {
  render() {
    this.props.state.attendanceListState.fetchAttendees();
    const attendeesViews = [];
    this.props.state.attendanceListState.data.attendees.forEach(function (attendee) {
      attendeesViews.push(
        <List.Item
          title={attendee.firstName + attendee.lastName}
          description={"21"}
        />
      );
    });

    return (
      <ScrollView>
        <List.Section title="Attendance List">
          {attendeesViews}
          <List.Item
            title="John Doe - 21"
            description="NHL18198501"
          />
        </List.Section>
      </ScrollView>
    );
  }
}