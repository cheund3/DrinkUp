"use strict";

import {createStackNavigator} from "react-navigation";
import {PreviousEventsScreen} from "../../screens/navigation_bar/PreviousEventsScreen";
import {SingleEventScreen} from "../../screens/SingleEventScreen";

/**
 * Previous Events Stack
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const previousEventStack = createStackNavigator(
  {
    PreviousEvents: {
      screen: PreviousEventsScreen,
      navigationOptions: ({navigation}) => ({
        header: null
      })
    },
    SingleEvent: SingleEventScreen
  },
  {
    initialRouteName: "PreviousEvents"
  }
);