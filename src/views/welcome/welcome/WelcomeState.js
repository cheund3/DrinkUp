"use strict";

import {action, observable} from "mobx";

/**
 * Welcome State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class WelcomeState {

  @observable data = {};

  @action
  doSomething(){}

}