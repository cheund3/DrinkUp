import React from "react";
import {Text, View} from "react-native";

/**
 * User Profile Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class UserProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          This page should be information about the logged in user. We should implement the ability to modify username,
          email, and password (and any other information you can think of).
        </Text>
        {/*<Text>Data from state: {this.props.rootState.userProfileState}</Text>*/}
        {/*<Button*/}
        {/*title="Update name field"*/}
        {/*onPress={() => {this.props.rootState.userProfileState.updateName("Dylan")}}*/}
        {/*/>*/}
      </View>
    );
  }
}