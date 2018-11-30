"use strict";

import React from "react";
import { ScrollView, Text, View} from "react-native";
import {inject, observer} from "mobx-react";
import {basic} from "../../../styles/basic";
import {Appbar, List} from "react-native-paper";

/**
 * Previous Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class PreviousEventsScreen extends React.Component {

  async componentDidMount() {
    console.log(this.props.state.userInterfaceState.internalId);
    await this.props.state.previousEventsState.fetchEvents(this.props.state.userInterfaceState.internalId);
  }

  _handleButtonPress(id){
    this.props.state.previousEventsState.selectedEventId = id;
    this.props.navigation.navigate("SingleEventScreen");
  }

  render() {
    const previousEventsViews = [];
    const events = this.props.state.previousEventsState.data.events;
    for(let i = 0; i< events.length; i++){
      previousEventsViews.push(
        <List.Item
          key={events[i].id}
          title={events[i].name}
          description={events[i].description}
          onPress={() => {this._handleButtonPress(events[i].id);}}
        />
      );
    }
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
