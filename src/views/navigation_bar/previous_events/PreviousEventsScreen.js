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
    await this.props.state.previousEventsState.fetchEvents(8675309);
  }

  render() {
    const previousEventsState = [];
    this.props.state.previousEventsState.data.events.forEach(function (event) {
      previousEventsState.push(
        <List.Item
          title={event.name}
          description={event.description}
        />
      );
    });
    return (
      <View style={basic.container}>
        <Appbar.Header>
          <Appbar.Content
            title= {this.props.state.previousEventsState.title}
          />
        </Appbar.Header>
        <ScrollView>
          <List.Section>
            {previousEventsState}
          </List.Section>
        </ScrollView>
      </View>
    );
  }
}
