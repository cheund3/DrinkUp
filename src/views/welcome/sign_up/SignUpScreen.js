"use strict";

import React from "react";
import { Text, View } from "react-native";
import {inject, observer} from "mobx-react";

/**
 * Sign-Up Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Soon to come! {this.props.state.signUpState.isLoading}</Text>
      </View>
    );
  }
}
