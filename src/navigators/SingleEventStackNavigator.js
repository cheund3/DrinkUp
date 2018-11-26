"use strict";

import { createStackNavigator } from "react-navigation";
import {Scanner} from "../components/Scanner";
import {SingleEventScreen} from "../views/utilities/single_event/SingleEventScreen";

/**
 * Single Event Stack Navigator
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export default createStackNavigator(
  {
    SingleEventScreen: {
      screen: SingleEventScreen,
      navigationOptions: ({navigation}) => ({
        header: null
      })
    },
    Scanner: {
      screen: Scanner,
      navigationOptions: ({navigation}) => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "SingleEventScreen"
  }
);