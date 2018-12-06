"use strict";

import { createStackNavigator } from "react-navigation";
import { CurrentEventsScreen } from "../../views/navigation_bar/current_events/CurrentEventsScreen";
import { ScannerScreen } from "../../views/utilities/scanner/ScannerScreen";
import { ScannedScreen } from "../../views/utilities/scanned/ScannedScreen";
import { AttendanceListScreen } from "../../views/utilities/attendance_list/AttendanceListScreen";
import { CurrentSingleEventScreen } from "../../views/utilities/single_event/current_single_event/CurrentSingleEventScreen";

/**
 * Current Events Stack
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const currentEventsStack = createStackNavigator({
  CurrentEventsScreen: {
    screen: CurrentEventsScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  CurrentSingleEventScreen: CurrentSingleEventScreen,
  ScannerScreen: ScannerScreen,
  ScannedScreen: ScannedScreen,
  AttendanceListScreen: AttendanceListScreen,
},
{
  initialRouteName: "CurrentEventsScreen"
}
);