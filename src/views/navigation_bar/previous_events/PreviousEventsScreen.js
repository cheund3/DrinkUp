"use strict";

import React from "react";
import { ScrollView, View } from "react-native";
import { inject, observer } from "mobx-react";
import { Appbar, Checkbox, List } from "react-native-paper";

import { basic } from "../../../styles/basic";

/**
 * Previous Events Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class PreviousEventsScreen extends React.Component {

  /**
   * Fetch a list of previous events when the component mounts
   * @returns {Promise<void>}
   */
  async componentDidMount() {
    await this.props.state.previousEventsState.fetchEvents(this.props.state.userInterfaceState.internalId);
  }

  /**
   * Update the selected identifier and navigate to the single event screen
   * @param id
   */
  handleButtonPress(id){
    this.props.state.userInterfaceState.selectedEventId = id;
    this.props.navigation.navigate("PreviousSingleEventScreen");
  }

  render() {
    // Generate a list of items representing each event
    const previousEventsViews = [];
    const events = this.props.state.previousEventsState.data.events;
    for(let i = 0; i< events.length; i++){
      previousEventsViews.push(
        <List.Item
          key={events[i].id}
          title={events[i].name}
          description={events[i].description}
          right={() => {events[i].updatedAt}}
          onPress={() => {this.handleButtonPress(events[i].id);}}
        />
      );
    }

    // returned the entire view of the component
    return (
      <View style={basic.container}>
        <Appbar.Header>
          <Appbar.Content
            title= {this.props.state.previousEventsState.title}
          />
        </Appbar.Header>
        <ScrollView>
          <List.Section>
            {previousEventsViews}
          </List.Section>
        </ScrollView>
      </View>
    );
  }
}
