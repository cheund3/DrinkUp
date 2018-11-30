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

  async componentDidMount() {
    console.log("event id" + this.props.state.currentEventsState.selectedEventId);
    await this.props.state.attendanceListState.fetchAttendees(this.props.state.currentEventsState.selectedEventId);
  }

  render() {
    const attendeesViews = [];
    this.props.state.attendanceListState.data.attendees.forEach(function (attendee) {
      attendeesViews.push(
        <List.Item
          key={attendee.id}
          title={attendee.firstName + " " + attendee.lastName}
          description={attendee.age}
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