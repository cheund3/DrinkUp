"use strict";

import { createStackNavigator } from "react-navigation";
import { PreviousEventsScreen } from "../../views/navigation_bar/previous_events/PreviousEventsScreen";
import { PreviousSingleEventScreen } from "../../views/utilities/single_event/previous_single_event/PreviousSingleEventScreen";
import { AttendanceListScreen } from "../../views/utilities/attendance_list/AttendanceListScreen";

/**
 * Previous Events Stack
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const previousEventStack = createStackNavigator(
  {
    PreviousEventsScreen: {
      screen: PreviousEventsScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    PreviousSingleEventScreen: PreviousSingleEventScreen,
    AttendanceListScreen: AttendanceListScreen,
  },
  {
    initialRouteName: "PreviousEventsScreen"
  }
);