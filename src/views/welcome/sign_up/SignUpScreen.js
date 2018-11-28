"use strict";

import {styles} from "./SignUpStyle";
import React from "react";
import {Text, View} from "react-native";
import {inject, observer} from "mobx-react";
import {Formik} from "formik";
import {Button, TextInput, Appbar} from "react-native-paper";

/**
 * Sign-Up Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title= {"Sign Up"}
          />
        </Appbar.Header>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Formik
            initValues={this.props.state.signUpState.initValues}
            onSubmit={async (values) => {
              await this.props.state.signUpState.handleSubmit(values);

              // Keyboard.dismiss();
              this.props.navigation.navigate("Profile");
            }
            }>
            {({handleChange, handleSubmit, values}) => (
              <View style={styles.content}>
                <TextInput style={styles.textInput}
                  onChangeText={handleChange("firstName")}
                  value={values.firstName}
                  label="First Name"
                  placeholder=""
                  height={10}
                />
                <TextInput style={styles.textInput}
                  onChangeText={handleChange("lastName")}
                  value={values.lastName}
                  label="Last Name"
                  placeholder=""
                />
                <TextInput style={styles.textInput}
                  onChangeText={handleChange("email")}
                  value={values.email}
                  label="Email"
                  placeholder=""
                />
                <TextInput style={styles.textInput}
                  onChangeText={handleChange("password")}
                  value={values.password}
                  label="Password"
                  placeholder=""
                />
                <TextInput style={styles.textInput}
                  onChangeText={handleChange("confirmPassword")}
                  value={values.confirmPassword}
                  label="Confirm Password"
                  placeholder=""
                />
                <Button onPress={handleSubmit} style={styles.button} mode="contained">Submit</Button>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}
