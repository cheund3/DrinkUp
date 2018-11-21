"use strict";

import {createStackNavigator} from "react-navigation";
import {CurrentEventsScreen} from "../../views/navigation_bar/current_events/CurrentEventsScreen";
import {SingleEventScreen} from "../../views/utilities/single_event/SingleEventScreen";

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
  SingleEventScreen: SingleEventScreen
},
{
  initialRouteName: "CurrentEvents"
}
);