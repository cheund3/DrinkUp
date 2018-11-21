"use strict";

import {createStackNavigator} from "react-navigation";
import {CreateNewEventScreen} from "../../views/navigation_bar/create_new_event/CreateNewEventScreen";
import {SingleEventScreen} from "../../views/utilities/single_event/SingleEventScreen";

/**
 * Create New Event Stack
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const createNewEventsStack = createStackNavigator({
  CreateNewEvent: {
    screen: CreateNewEventScreen,
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
