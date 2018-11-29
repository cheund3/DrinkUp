"use strict";

import {basic} from "../../../styles/basic";
import {welcome} from "./WelcomeStyle";
import React, {Component} from "react";
import {Text, View, Image} from "react-native";
import {inject, observer} from "mobx-react";
import {Button} from "react-native-paper";

/**
 * welcome Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/*<Image style={styles.image}*/}
        {/*source={require("../../../assets/img/drinkupIcon.png")}*/}
        {/*/>*/}
        <View style={welcome.title_container}>
          <Text style={welcome.title}> Drink Up </Text>
          <Text style={{textAlign: "center", bottom: -30}}>Please drink responsibly!</Text>
        </View>
        <View style={welcome.content_container}>
          <Button style={basic.button} mode="contained"
            onPress={() => this.props.navigation.navigate("SignIn")}
          ><Text>Sign In</Text></Button>
          <Button style={basic.button} mode="contained"
            onPress={() => this.props.navigation.navigate("SignUp")}
          ><Text>Sign Up</Text></Button>
        </View>
      </View>
    );
  }
}