"use strict";

import React from "react";
import {Button, Text, View} from "react-native";
import {inject, observer} from "mobx-react";

/**
 * Sign-In Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
<<<<<<< HEAD:src/views/welcome/sign_in/SignInScreen.js
@inject("state")
@observer
=======
// @inject("rootState")
// @observer
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a:src/screens/welcome/SignInScreen.js
export class SignInScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Sign In</Text>

        <Button
          title={"Submit"}
          onPress={() => this.props.navigation.navigate("BottomNavigationBar")}
        />
      </View>
    );
  }
}