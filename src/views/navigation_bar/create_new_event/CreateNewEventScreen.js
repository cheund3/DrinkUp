"use strict";

import React from "react";
import {Button, Text, View} from "react-native";
import {inject, observer} from "mobx-react";

/**
 * New Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
<<<<<<< HEAD:src/views/navigation_bar/create_new_event/CreateNewEventScreen.js
@inject("state")
=======
@inject("rootState")
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a:src/screens/navigation_bar/CreateNewEventScreen.js
@observer
export class CreateNewEventScreen extends React.Component {
  render() {
    return (
<<<<<<< HEAD:src/views/navigation_bar/create_new_event/CreateNewEventScreen.js
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>New Event</Text>
=======
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.props.rootState.createNewScreenState.screenName}</Text>
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a:src/screens/navigation_bar/CreateNewEventScreen.js
        <Button
          title={"Create a new event"}
          onPress={() => {this.props.rootState.createNewScreenState.createEvent()}} // TODO: This should insert new data into the database
        />
      </View>
    );
  }
}