import React from "react";
import {Text, View} from "react-native";
import {inject, observer} from "mobx-react";
import {basic} from "../../../styles/basic";
import {Formik} from "formik";
import {Appbar, Button, TextInput} from "react-native-paper";
import {styles} from "./UserProfileStyle";

/**
 * User Profile Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class UserProfileScreen extends React.Component {

  async componentDidMount() {
    this.props.state.userProfileState.user = this.props.state.userInterfaceState.internalId;
    await this.props.state.userProfileState.fetchProfile();
  }

  render() {
    return (
      <View style={basic.container}>
        <Appbar.Header>
          <Appbar.Content
            title={this.props.state.userProfileState.title}
          />
        </Appbar.Header>
        <View style={basic.content}>
          <Formik
            initValues={this.props.state.userProfileState.profile}
            onSubmit={async (values) => {
              await this.props.state.userProfileState.handleSubmit(values);
            }
            }>
            {({handleChange, handleSubmit, values}) => (
              <View style={basic.content}>
                <TextInput style={styles.textInput}
                  onChangeText={handleChange("firstName")}
                  value={values.firstName}
                  label={this.props.state.userProfileState.profile.firstName}
                  placeholder=""
                />
                <TextInput style={styles.textInput}
                  onChangeText={handleChange("lastName")}
                  value={values.lastName}
                  label={this.props.state.userProfileState.profile.lastName}
                  placeholder=""
                />
                <TextInput style={styles.textInput}
                  onChangeText={handleChange("email")}
                  value={values.email}
                  label={this.props.state.userProfileState.profile.email}
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
                  value={""}
                  label="Confirm Password"
                  placeholder=""
                  secureTextEntry={true}
                />
                <Button onPress={async () => {
                  await handleSubmit(values);
                  this.forceUpdate();
                }} style={styles.button} mode="contained">Update</Button>
              </View>
            )}
          </Formik>
          <Button onPress={() => this.props.navigation.navigate("Welcome")} style={styles.button} mode="contained">Log out</Button>
        </View>
      </View>
    );
  }
}
