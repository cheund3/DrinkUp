"use strict";

import { createStackNavigator } from "react-navigation";
import { PreviousEventsScreen } from "../../views/navigation_bar/previous_events/PreviousEventsScreen";
import { SingleEventScreen } from "../../views/utilities/single_event/SingleEventScreen";

/**
 * Previous Events Stack
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const previousEventStack = createStackNavigator(
  {
    PreviousEvents: {
      screen: PreviousEventsScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    SingleEventScreen: SingleEventScreen
  },
  {
    initialRouteName: "PreviousEvents"
  }
);