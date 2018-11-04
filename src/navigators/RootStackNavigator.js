import { createStackNavigator } from "react-navigation";
import { SignInScreen } from "../screens/welcome/SignInScreen"
import { SignUpScreen } from "../screens/welcome/SignUpScreen";
import { WelcomeScreen } from "../screens/welcome/WelcomeScreen";
import BottomNavigationBar from "./BottomNavigationBar";

/**
 * Root Stack Navigator
 * Acts as the main entry point into the navigation of the application
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export default createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: ({navigation}) => ({
        header: null
      })
    },
    SignIn: {
      screen: SignInScreen
    },
    SignUp: SignUpScreen,
    BottomNavigationBar: {
      screen: BottomNavigationBar,
      navigationOptions: ({navigation}) => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "Welcome",
  }
);