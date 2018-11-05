import { createStackNavigator } from "react-navigation";
import {SingleEventScreen} from "../screens/SingleEventScreen";
import {ScannerScreen} from "../screens/ScannerScreen";

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
    ScannerScreen: {
      screen: ScannerScreen,
      navigationOptions: ({navigation}) => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "SingleEventScreen"
  }
);