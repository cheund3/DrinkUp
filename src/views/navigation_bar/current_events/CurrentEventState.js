"use strict";

import {action, observable} from "mobx";

/**
 * Current Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class CurrentEventState {

  @observable data = {};

  @action
  doSomething(){}

}