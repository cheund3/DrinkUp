"use strict";

import {action, observable} from "mobx";

/**
 * Attendance List State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class AttendanceListState {

  @observable data = {};

  @action
  doSomething(){}

}