import React from "react";
import {Button, Text, View} from "react-native";
import {inject, observer} from "mobx-react";

/**
 * User Profile Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("rootState")
@observer
export class UserProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Data from state: {this.props.rootState.userProfileState.name}</Text>
        <Button
        title="Update name field"
        onPress={() => {this.props.rootState.userProfileState.updateName("Dylan")}}
        />
      </View>
    );
  }
}