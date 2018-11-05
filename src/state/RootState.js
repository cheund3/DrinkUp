import {SignUpState} from "./welcome/SignUpState";
import {UserProfileState} from "./UserProfileState";
import {CreateNewEventState} from "./navigation_bar/CreateNewEventState";
// import {SignInState} from "./welcome/SignInState";
// import {WelcomeState} from "./welcome/WelcomeState";

/**
 * Root State
 * Combine all states into one
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class RootState {

  // signInState;
  signUpState;
  userProfileState;
  // welcomeState;
  createNewScreenState;

  constructor() {
    // this.signInState = new SignInState();
    this.signUpState = new SignUpState();
    this.userProfileState = new UserProfileState();
    // this.welcomeState = new WelcomeState();
    this.createNewScreenState = new CreateNewEventState();
  }

}