"use strict";

import React from "react";
import {Button, Text, TextInput, View} from 'react-native';
import {inject, observer} from "mobx-react";

/**
 * Sign-Up Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Soon to come! {this.props.state.signUpState.isLoading}</Text>
        <Formik
          initialValues={this.props.state.newEventState.initialValues}
          onSubmit={async (values) => {
            await this.props.state.newEventState.handleCreate(values);
            // Alert.alert(JSON.stringify(response, null, 2));
            Keyboard.dismiss();
            this.props.navigation.navigate("Current Events");
          }
          }>
          {({ handleChange, handleSubmit, values }) => (
            <View styles={{justifyContent: "center"}}>
              <TextInput
                onChangeText={handleChange("eventName")}
                value={values.eventName}
                label="Event Name"
                placeholder=""
              />
              <TextInput
                onChangeText={handleChange("description")}
                value={values.description}
                label="Description"
                placeholder=""
              />
              <Button onPress={handleSubmit} style={styles.button}>Submit</Button>
            </View>
          )}
        </Formik>      </View>
    );
  }
}
