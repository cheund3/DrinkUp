import React from "react";
import {Button, Text, View} from 'react-native';

/**
 * Join Existing Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class JoinExistingEventScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Join Existing Event</Text>
        <Button
          title={"Sample Single Event"}
          onPress={() => this.props.navigation.navigate("SingleEventScreen")}
        />
      </View>
    );
  }
}