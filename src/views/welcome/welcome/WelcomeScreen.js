"use strict";

import {styles} from "./WelcomeStyle";
import React, {Component} from "react";
import {Text, View, Image} from "react-native";
import {inject, observer} from "mobx-react";
import {Formik} from "formik";
import {Button, TextInput, Appbar} from "react-native-paper";

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
        <Image style={styles.image}
          source={require("../../../assets/img/drinkupIcon.png")}
        />
        <Text>Welcome Screen</Text>
        <View>
          <Button style={styles.button} mode="contained"
            onPress={() => this.props.navigation.navigate("SignIn")}
          ><Text style={{fontSize: 40}}>Sign In</Text></Button>
          <Button style={styles.button} mode="contained"
            onPress={() => this.props.navigation.navigate("SignUp")}
          ><Text style={{fontSize: 40}}>Sign Up</Text></Button>
          <Text style={{textAlign: "center", bottom: -30}}>Please drink responsibly!</Text>
        </View>
      </View>
    );
  }
}