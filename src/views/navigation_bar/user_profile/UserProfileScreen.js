import React from "react";
import {Button, Text, View} from "react-native";
import {inject, observer} from "mobx-react";

/**
 * User Profile Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class UserProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Name: {this.props.state.userProfileState.name}</Text>
          <Button
            title="update"
            onPress={() => this.props.state.userProfileState.updateName()}
          />
          <Button
            title="reset"
            onPress={() => this.props.state.userProfileState.resetName()}
          />
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Counter: {this.props.state.userProfileState.counter}</Text>
          <Button
            title="Increment"
            onPress={() => this.props.state.userProfileState.increase()}
          />
          <Button
            title="Decrement"
            onPress={() => this.props.state.userProfileState.decrease()}
          />
        </View>
      </View>
    );
  }
}

