import React from "react";
import {Button, Text, View} from "react-native";

/**
 * Previous Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class PreviousEventsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          This must be a list of previous event names. If there are no events, a message should be displayed.
          Clicking on one of the events in the list should allow a user to see more data, however they should
          not be allowed to update any data on the event (unlike how current events works).
        </Text>
        <Button
          title={"Sample Single Event"}
          onPress={() => this.props.navigation.navigate("SingleEventScreen")}
        />
      </View>
    );
  }
}