"use strict";

import {createStackNavigator} from "react-navigation";
import {CreateNewEventScreen} from "../../screens/navigation_bar/CreateNewEventScreen";
import {SingleEventScreen} from "../../screens/SingleEventScreen";

/**
 * Create New Event Stack
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const createNewEventsStack = createStackNavigator({
    CreateNewEvent: {
      screen: CreateNewEventScreen,
      navigationOptions: ({navigation}) => ({
        header: null
      })
    },
    SingleEvent: SingleEventScreen
  },
  {
    initialRoutName: "CreateNewEvent"
  }
);
