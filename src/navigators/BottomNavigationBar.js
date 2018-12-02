"use strict";

import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import { UserProfileScreen } from "../views/navigation_bar/user_profile/UserProfileScreen";
import { previousEventStack } from "./navigation_bar/PreviousEventsStack";
import { currentEventsStack } from "./navigation_bar/CurrentEventsStack";
import { createNewEventsStack } from "./navigation_bar/CreateNewEventStack";

/**
 * Bottom Navigation Bar
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export default createBottomTabNavigator(
  {
    "Profile": UserProfileScreen,
    "Previous Events": previousEventStack,
    "Current Events": currentEventsStack,
    "New Event": createNewEventsStack,
  },
  {
    initialRouteName: "Profile"
  }
);