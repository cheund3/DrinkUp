"use strict";

import { SignUpState } from "./views/welcome/sign_up/SignUpState";
import { UserProfileState } from "./views/navigation_bar/user_profile/UserProfileState";
import { UserInterfaceState } from "./UserInterfaceState";
import { SignInState } from "./views/welcome/sign_in/SignInState";
import { NewEventState } from "./views/navigation_bar/new_event/NewEventState";
import { CurrentEventState } from "./views/navigation_bar/current_events/CurrentEventState";
import { PreviousEventsState } from "./views/navigation_bar/previous_events/PreviousEventsState";
import { AttendanceListState } from "./views/utilities/attendance_list/AttendanceListState";
import { ScannerState } from "./views/utilities/scanner/ScannerState";
import { ScannedState } from "./views/utilities/scanned/ScannedState";
import { CurrentSingleEventState } from "./views/utilities/single_event/current_single_event/CurrentSingleEventState";
import { PreviousSingleEventState } from "./views/utilities/single_event/previous_single_event/PreviousSingleEventState";

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

  // Navigation Bar
  newEventState;
  currentEventsState;
  previousEventsState;
  userProfileState;

  // Utilities
  attendanceListState;
  scannerState;
  scannedState;
  currentSingleEventState;
  previousSingleEventState;

  /**
   * Connect all states into a single root state
   */
  constructor() {
    this.userInterfaceState = new UserInterfaceState();

    this.signInState = new SignInState();
    this.signUpState = new SignUpState();

    this.newEventState = new NewEventState();
    this.currentEventsState = new CurrentEventState();
    this.previousEventsState = new PreviousEventsState();
    this.userProfileState = new UserProfileState();

    this.attendanceListState = new AttendanceListState();
    this.scannerState = new ScannerState();
    this.scannedState = new ScannedState();
    this.currentSingleEventState = new CurrentSingleEventState();
    this.previousSingleEventState = new PreviousSingleEventState();

  }

}