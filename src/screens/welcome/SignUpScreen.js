import React from "react";
import { Text, View } from "react-native";
import {inject, observer} from "mobx-react";

/**
 * Sign-Up Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */

@inject("rootState")
@observer
export class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Soon to come! {this.props.rootState.signUpState.isLoading}</Text>
      </View>
    );
  }
}
