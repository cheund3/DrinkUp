import {SignUpState} from "./SignUpState";
import {UserProfileState} from "./UserProfileState";

export class RootState {

  signUpState;
  userProfileState;

  constructor() {
    this.signUpState = new SignUpState();
    this.userProfileState = new UserProfileState();
  }

}