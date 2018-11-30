"use strict";

import { createStackNavigator } from "react-navigation";
import { SignInScreen } from "../views/welcome/sign_in/SignInScreen";
import { SignUpScreen } from "../views/welcome/sign_up/SignUpScreen";
import { WelcomeScreen } from "../views/welcome/welcome/WelcomeScreen";
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
    SignUp: {
      screen: SignUpScreen
    },
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