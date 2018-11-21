"use strict";

import {createStackNavigator} from "react-navigation";
<<<<<<< HEAD
import {CurrentEventsScreen} from "../../views/navigation_bar/current_events/CurrentEventsScreen";
import {SingleEventScreen} from "../../views/utilities/single_event/SingleEventScreen";
=======
import {CurrentEventsScreen} from "../../screens/navigation_bar/CurrentEventsScreen";
import {SingleEventScreen} from "../../screens/SingleEventScreen";
import SingleEventStackNavigator from "../SingleEventStackNavigator";
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a

/**
 * Current Events Stack
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const currentEventsStack = createStackNavigator({
  CurrentEvents: {
    screen: CurrentEventsScreen,
<<<<<<< HEAD
    navigationOptions: () => ({
      header: null
    })
  },
  SingleEventScreen: SingleEventScreen
=======
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  SingleEventStack: SingleEventStackNavigator
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a
},
{
  initialRouteName: "CurrentEvents"
}
);