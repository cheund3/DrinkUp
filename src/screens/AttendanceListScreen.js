import React from "react";
import { Text, View } from "react-native";

/**
 * Attendance List Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class AttendanceListScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          Will hold the attendance list. Functionality:
            search for a user by name,
            manually add/modify/remove a user,
            display each attendee in the attendance list (by most recent change) with:
              [name, age (colored red if under 21), present at event]
            option to display just attendees who and present,
            option to display attendees who have left.
        </Text>
      </View>
    );
  }
}