"use strict";

import React from "react";
import {Button,Text, View} from "react-native";
<<<<<<< HEAD:src/views/welcome/welcome/WelcomeScreen.js
import {inject, observer} from "mobx-react";
=======
import {inject} from "mobx-react";
import {observable} from "mobx";
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a:src/screens/welcome/WelcomeScreen.js

/**
 * welcome Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
<<<<<<< HEAD:src/views/welcome/welcome/WelcomeScreen.js
@inject("state")
@observer
=======
// @inject("rootState")
// @observable
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a:src/screens/welcome/WelcomeScreen.js
export class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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