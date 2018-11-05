"use strict";

import {createStackNavigator} from "react-navigation";
import {JoinExistingEventScreen} from "../../screens/navigation_bar/JoinExistingEventScreen";
import {SingleEventScreen} from "../../screens/SingleEventScreen";

/**
 * Join Existing Event Stack
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const joinExistingEventStack = createStackNavigator({
    JoinExistingEvent: {
      screen: JoinExistingEventScreen,
      navigationOptions: ({navigation}) => ({
        header: null
      })
    },
    SingleEventScreen: SingleEventScreen
  },
  {
    initialRouteName: "JoinExistingEvent"
  }
);