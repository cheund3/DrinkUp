"use strict";

import {action, observable} from "mobx";

/**
 * Sign Up State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SignUpState {

  @observable data = {};

  @action
  doSomething(){}

}