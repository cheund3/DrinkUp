"use strict";

import React from "react";
import {Button, Text, View} from "react-native";
import {inject, observer} from "mobx-react";

/**
 * Sign-In Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class SignInScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Sign In</Text>
        <UserInput
          //source={usernameImg}
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
        <UserInput
          //source={passwordImg}
          secureTextEntry={true}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <Button
          title={"Login"}
          onPress={() => this.props.navigation.navigate("BottomNavigationBar")}
        />
      </View>
    );
  }
}