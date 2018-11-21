"use strict";

import { createStackNavigator } from "react-navigation";
<<<<<<< HEAD
import { SignInScreen } from "../views/welcome/sign_in/SignInScreen";
import { SignUpScreen } from "../views/welcome/sign_up/SignUpScreen";
import { WelcomeScreen } from "../views/welcome/welcome/WelcomeScreen";
=======
import { SignInScreen } from "../screens/welcome/SignInScreen";
import { SignUpScreen } from "../screens/welcome/SignUpScreen";
import { WelcomeScreen } from "../screens/welcome/WelcomeScreen";
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a
import BottomNavigationBar from "./BottomNavigationBar";

/**
 * Root Stack Navigator
 * Acts as the main entry point into the navigation of the application
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const RootStackNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    SignIn: {
      screen: SignInScreen
    },
    SignUp: SignUpScreen,
    BottomNavigationBar: {
      screen: BottomNavigationBar,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "Welcome",
  }
);