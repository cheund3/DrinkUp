"use strict";

import React from "react";
import {ScrollView,Text, View} from "react-native";
import {inject, observer} from "mobx-react";
import {basic} from "../../../styles/basic";
import {Appbar, List} from "react-native-paper";

/**
 * Current Events Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class CurrentEventsScreen extends React.Component {

  async componentDidMount() {
    await this.props.state.currentEventsState.fetchEvents(this.props.state.userInterfaceState.internalId);
  }

  _handleButtonPress(id){
    this.props.state.currentEventsState.selectedEventId = id;
    console.log("hee");
    this.props.navigation.navigate("SingleEventScreen");
  }

  render() {
    const currentEventsViews = [];
    const events = this.props.state.currentEventsState.data.events;
    for(let i = 0; i< events.length; i++){
      currentEventsViews.push(
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