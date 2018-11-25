"use strict";

import React from "react";
import {Button,Text, View} from "react-native";
import {inject, observer} from "mobx-react";

/**
 * welcome Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome Screen</Text>
        <View>
          <Button
            title={"Sign In"}
            size={35}
            onPress={() => this.props.navigation.navigate("SignIn")}
          />
          <Button
            title={"Sign Up"}
            size={35}
            onPress={() => this.props.navigation.navigate("SignUp")}
          />
        </View>
      </View>
    );
  }
}