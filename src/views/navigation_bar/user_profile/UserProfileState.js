"use strict";

import {action, observable} from "mobx";

/**
 * User Profile State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class UserProfileState {

  @observable counter = 0;
  @observable name = "user";

  @action
  increase() {
    this.counter += 1;
  }

  @action
  decrease() {
    this.counter -= 1;
  }

  @action
  updateName() {
    this.name = "new name";
  }

  @action
  resetName() {
    this.name = "user";
  }
}