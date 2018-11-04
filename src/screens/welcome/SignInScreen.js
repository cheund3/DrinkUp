import React from "react";
import {Button, Text, View} from "react-native";

/**
 * Sign-In Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SignInScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Sign In</Text>
        <Button
          title={"To go Navigator"}
          onPress={() => this.props.navigation.navigate("BottomNavigationBar")}
        />
      </View>
    );
  }
}