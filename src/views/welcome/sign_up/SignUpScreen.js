"use strict";

import React from "react";
import {Text, View} from "react-native";
import {inject, observer} from "mobx-react";
import {Formik} from "formik";
import {Button, TextInput} from "react-native-paper";

import {styles} from "./SignUpStyle";

/**
 * Sign-Up Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class SignUpScreen extends React.Component {

  /**
   * Render the sign up screen with a form for an first name, last name, email, password, and a confirmed password
   * @returns {*}
   */
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Formik
            initValues={this.props.state.signUpState.initValues}
            onSubmit={async (values) => {
              let user = await this.props.state.signUpState.handleSubmit(values);
              this.props.state.userInterfaceState.internalId = user;

              // Prevents a user from signing up unless the information is valid
              if(user !== -1) {
                this.props.navigation.navigate("Profile");
              }
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
                  secureTextEntry={true}
                />
                <TextInput style={styles.textInput}
                  onChangeText={handleChange("confirmPassword")}
                  value={values.confirmPassword}
                  label="Confirm Password"
                  placeholder=""
                  secureTextEntry={true}
                />
                <Text style={{color: "red"}}>{this.props.state.signUpState.error}</Text>
                <Button onPress={handleSubmit} style={styles.button} mode="contained">Sign Up</Button>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}