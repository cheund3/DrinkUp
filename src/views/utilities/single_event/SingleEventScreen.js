"use strict";

import React from "react";
import {Button, Text, View} from "react-native";

/**
 * Single Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SingleEventScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
<<<<<<< HEAD:src/views/utilities/single_event/SingleEventScreen.js
        <Text>
          Information to be shown on this page:
            name of the event,
            attendance count,
            enter button (goes to scanner page),
            leaving button (goes to scanner page),
            attendance list preview of most recent 20 (clickable for attendance page),
            finished button (closes the ability to create any more changes to the event data. maybe implement an "are you sure" popup),
            owners/creators of the event who can modify the event list (possibly just an owners button that leads to a list on a separate page),
        </Text>
=======
        <Text>Single Event</Text>
        <Button
          title={"Go to Scanner"}
          onPress={() => this.props.navigation.navigate("ScannerScreen")} // TODO: This should insert new data into the database
        />
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a:src/screens/SingleEventScreen.js
      </View>
    );
  }
}