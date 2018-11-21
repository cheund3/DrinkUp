"use strict";

import React from "react";
import {Button, Text, View} from "react-native";
<<<<<<< HEAD:src/views/navigation_bar/current_events/CurrentEventsScreen.js
import {inject, observer} from "mobx-react";
=======
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a:src/screens/navigation_bar/CurrentEventsScreen.js

/**
 * Current Events Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class CurrentEventsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Current Events</Text>
        <Button
          title={"Sample Single Event"}
          onPress={() => this.props.navigation.navigate("SingleEventScreen")}
        />
      </View>
    );
  }
}