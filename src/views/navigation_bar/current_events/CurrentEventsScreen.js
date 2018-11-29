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
    await this.props.state.currentEventsState.fetchEvents(8675309);
  }

  render() {
    const currentEventsViews = [];
    this.props.state.currentEventsState.data.events.forEach(function (event) {
      currentEventsViews.push(
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