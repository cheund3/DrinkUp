import React from "react";
import {Button,Text, View} from "react-native";
import {inject} from "mobx-react";
import {observable} from "mobx";

/**
 * Welcome Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
// @inject("rootState")
// @observable
export class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome Screen</Text>
        <View>
          <Button
            title={"Sign In"}
            onPress={() => this.props.navigation.navigate("SignIn")}
          />
          <Button
            title={"Sign Up"}
            onPress={() => this.props.navigation.navigate("SignUp")}
          />
        </View>
      </View>
    );
  }
}