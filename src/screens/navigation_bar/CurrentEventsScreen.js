import React from "react";
import {Button, Text, View} from 'react-native';

/**
 * Current Events Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class CurrentEventsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Current Events</Text>
        <Button
          title={"Sample Single Event"}
          onPress={() => this.props.navigation.navigate("SingleEventScreen")}
        />
      </View>
    );
  }
}