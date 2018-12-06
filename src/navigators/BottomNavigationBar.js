"use strict";

import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";

import { UserProfileScreen } from "../views/navigation_bar/user_profile/UserProfileScreen";
import { NewEventScreen } from "../views/navigation_bar/new_event/NewEventScreen";
import { previousEventStack } from "./bottom_navigation_bar/PreviousEventsStack";
import { currentEventsStack } from "./bottom_navigation_bar/CurrentEventsStack";

/**
 * Bottom Navigation Bar
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export default createBottomTabNavigator(
  {
    ProfileScreen: {
      screen: UserProfileScreen,
      navigationOptions: () => ({
        header: null,
        tabBarIcon: (<FeatherIcon name="user" size={20} color="#8400EE" />),
        tabBarOptions: {
          showLabel: false
        }
      })
    },
    PreviousEventsStack: {
      screen: previousEventStack,
      navigationOptions: () => ({
        header: null,
        tabBarIcon: (<FeatherIcon name="archive" size={20} color="#8400EE" />),
        tabBarOptions: {
          showLabel: false
        }
      })
    },
    CurrentEventsStack: {
      screen: currentEventsStack,
      navigationOptions: () => ({
        header: null,
        tabBarIcon: (<AntDesignIcon name="profile" size={20} color="#8400EE" />),
        tabBarOptions: {
          showLabel: false
        }
      })
    },
    NewEventScreen: {
      screen : NewEventScreen,
      navigationOptions: () => ({
        header: null,
        tabBarIcon: (<AntDesignIcon name="addfile" size={20} color="#8400EE" />),
        tabBarOptions: {
          showLabel: false
        }
      })
    }
  },
  {
    initialRouteName: "ProfileScreen"
  }
);