"use strict";

import { View } from "react-native";
import { Button, Card, Paragraph, Title} from "react-native-paper";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";

import { basic } from "../../../styles/basic";

@inject("state")
@observer
export class ScannedScreen extends Component {

  render() {
    /**
     * Render a screen for the scanned user and buttons to insert or update an attendee
     */
    return (
      <View style={basic.container}>
        <Card>
          <Card.Content>
            <Title>{this.props.state.scannedState.data.firstName} {this.props.state.scannedState.data.middleName} {this.props.state.scannedState.data.lastName}</Title>
            <Paragraph> License #: {this.props.state.scannedState.data.licenseNumber}</Paragraph>
            <Paragraph> Date of Birth: {this.props.state.scannedState.data.dateOfBirth}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={async () => {
              await this.props.state.scannedState.enteringUser(this.props.state.scannedState.data, this.props.state.currentEventsState.selectedEventId);
              this.props.navigation.navigate("SingleEventScreen");
            }}>Entering</Button>
            <Button onPress={async () => {
              await this.props.state.scannedState.updateLeft();
              this.props.navigation.navigate("SingleEventScreen");
            }}>Leaving</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  }
}