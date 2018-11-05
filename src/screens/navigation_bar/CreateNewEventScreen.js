"use strict";

import React from "react";
import {Button, Text, View} from "react-native";
import {inject, observer} from "mobx-react";

/**
 * New Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("rootState")
@observer
export class CreateNewEventScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.props.rootState.createNewScreenState.screenName}</Text>
        <Button
          title={"Create a new event"}
          onPress={() => {this.props.rootState.createNewScreenState.createEvent()}} // TODO: This should insert new data into the database
        />
      </View>
    );
  }
}