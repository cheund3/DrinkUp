import React from "react";
import {Text, View} from "react-native";
import {inject, observer} from "mobx-react";
import {basic} from "../../../styles/basic";
import {Appbar} from "react-native-paper";

/**
 * User Profile Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class UserProfileScreen extends React.Component {

  componentDidMount(){
    // this.props.state.userProfileState.fetchProfile(this.props.state.userInterfaceState.internalId);
  }

  render() {
    return (
      <View style={basic.container}>
        <Appbar.Header>
          <Appbar.Content
            title= {this.props.state.userProfileState.title}
          />
        </Appbar.Header>
        <View style={basic.content}>
          <Text> {this.props.state.userProfileState.profile}</Text>
        </View>
      </View>
    );
  }
}

