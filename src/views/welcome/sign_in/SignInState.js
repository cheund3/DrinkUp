"use strict";

import {action, observable} from "mobx";

/**
 * Sign In State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SignInState {
  @observable user = {};

  @action
  updateUser(data) {
    this.user = data;
  }
}