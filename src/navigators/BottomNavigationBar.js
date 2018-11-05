import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import {UserProfileScreen} from "../screens/navigation_bar/UserProfileScreen";
import {previousEventStack} from "./navigation_bar/PreviousEventsStack";
import {currentEventsStack} from "./navigation_bar/CurrentEventsStack";
import {createNewEventsStack} from "./navigation_bar/CreateNewEventStack";
import {joinExistingEventStack} from "./navigation_bar/JoinExistingStack";

/**
 * Bottom Navigation Bar
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export default createBottomTabNavigator(
  {
    UserProfile: UserProfileScreen,
    PreviousEventsStack: previousEventStack,
    CurrentEventStack: currentEventsStack,
    NewEventStack: createNewEventsStack,
    JoinExistingEventStack: joinExistingEventStack,
  },
  {
    initialRouteName: "CurrentEventStack"
  }
);