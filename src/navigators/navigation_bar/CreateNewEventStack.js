"use strict";

import {createStackNavigator} from "react-navigation";
import {NewEventScreen} from "../../views/navigation_bar/new_event/NewEventScreen";
import {SingleEventScreen} from "../../views/utilities/single_event/SingleEventScreen";

/**
 * Create New Event Stack
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const createNewEventsStack = createStackNavigator({
  CreateNewEvent: {
    screen: NewEventScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  SingleEventScreen: SingleEventScreen
},
{
  initialRoutName: "CreateNewEvent"
}
);
