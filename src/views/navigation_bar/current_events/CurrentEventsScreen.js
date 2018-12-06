"use strict";

import React from "react";
import { ScrollView, View } from "react-native";
import { inject, observer } from "mobx-react";
import { Appbar, List } from "react-native-paper";

import { basic } from "../../../styles/basic";

/**
 * Current Events Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class CurrentEventsScreen extends React.Component {

  /**
   * Fetch the list of current events when the component mounts
    * @returns {Promise<void>}
   */
  async componentDidMount() {
    await this.props.state.currentEventsState.fetchEvents(this.props.state.userInterfaceState.internalId);
  }

  /**
   * Update the selected identifier and navigate to the single event screen
   * @param id
   */
  handleButtonPress(id){
    this.props.state.userInterfaceState.selectedEventId = id;
    this.props.navigation.navigate("CurrentSingleEventScreen");
  }

  render() {
    // Generate a list of items representing each event
    const currentEventsViews = [];
    const events = this.props.state.currentEventsState.data.events;
    for(let i = 0; i< events.length; i++){
      currentEventsViews.push(
        <List.Item
          key={events[i].id}
          title={events[i].name}
          description={events[i].description}
          onPress={() => {this.handleButtonPress(events[i].id);}}
        />
      );
    }

    // returned the entire view of the component
    return (
      <View style={basic.container}>
        <Appbar.Header>
          <Appbar.Content
            title= {this.props.state.currentEventsState.title}
          />
        </Appbar.Header>
        <ScrollView>
          <List.Section>
            {currentEventsViews}
          </List.Section>
        </ScrollView>
      </View>
    );
  }
}