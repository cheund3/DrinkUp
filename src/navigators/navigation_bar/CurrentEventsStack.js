"use strict";

import { createStackNavigator } from "react-navigation";
import { CurrentEventsScreen } from "../../views/navigation_bar/current_events/CurrentEventsScreen";
import SingleEventStackNavigator from "../SingleEventStackNavigator";

/**
 * Current Events Stack
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const currentEventsStack = createStackNavigator({
  CurrentEvents: {
    screen: CurrentEventsScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  SingleEventScreen: {
    screen: SingleEventStackNavigator
  }
},
{
  initialRouteName: "CurrentEvents"
}
);