import React from "react";
import {Button, Text, View} from "react-native";

/**
 * New Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class CreateNewEventScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>New Event</Text>
        <Button
          title={"Create a new event"}
          onPress={() => {}}
        />
      </View>
    );
  }
}