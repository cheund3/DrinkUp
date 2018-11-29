"use strict";

import { createStackNavigator } from "react-navigation";
import { SingleEventScreen } from "../views/utilities/single_event/SingleEventScreen";
import { ScannerScreen } from "../views/utilities/scanner/ScannerScreen";
import {ScannedScreen} from "../views/utilities/scanned/ScannedScreen";
import { AttendanceListScreen } from "../views/utilities/attendance_list/AttendanceListScreen";

/**
 * Single Event Stack Navigator
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export default createStackNavigator(
  {
    SingleEventScreen: {
      screen: SingleEventScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Scanner: {
      screen: ScannerScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Scanned: {
      screen: ScannedScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Attendance: {
      screen: AttendanceListScreen,
      navigationOptions: () => ({
        header: null
      })
    },
  },
  {
    initialRouteName: "SingleEventScreen"
  }
);