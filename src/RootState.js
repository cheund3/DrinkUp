"use strict";

import {SignUpState} from "./views/welcome/sign_up/SignUpState";
import {UserProfileState} from "./views/navigation_bar/user_profile/UserProfileState";
import {UserInterfaceState} from "./UserInterfaceState";
import {WelcomeState} from "./views/welcome/welcome/WelcomeState";
import {SignInState} from "./views/welcome/sign_in/SignInState";
import {NewEventState} from "./views/navigation_bar/new_event/NewEventState";
import {CurrentEventState} from "./views/navigation_bar/current_events/CurrentEventState";
import {PreviousEventsState} from "./views/navigation_bar/previous_events/PreviousEventsState";
import {AttendanceListState} from "./views/utilities/attendance_list/AttendanceListState";
import {ScannerState} from "./views/utilities/scanner/ScannerState";
import {SingleEventState} from "./views/utilities/single_event/SingleEventState";
import {ScannedState} from "./views/utilities/scanned/ScannedState";

/**
 * Root State
 * Hold all the states for the project
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class RootState {

  userInterfaceState;

  // Welcome
  signInState;
  signUpState;
  welcomeState;

  // Navigation Bar
  newEventState;
  currentEventsState;
  previousEventsState;
  userProfileState;

  // Utilities
  attendanceListState;
  scannerState;
  scannedState;
  singleEventState;

  constructor() {
    this.userInterfaceState = new UserInterfaceState();

    this.signInState = new SignInState();
    this.signUpState = new SignUpState();
    this.welcomeState = new WelcomeState();

    this.newEventState = new NewEventState();
    this.currentEventsState = new CurrentEventState();
    this.previousEventsState = new PreviousEventsState();
    this.userProfileState = new UserProfileState();

    this.attendanceListState = new AttendanceListState();
    this.scannerState = new ScannerState();
    this.scannedState = new ScannedState();
    this.singleEventState = new SingleEventState();

  }

}