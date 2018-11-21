"use strict";

import {action, observable} from "mobx";

/**
 * Previous Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class PreviousEventsState {

  @observable data = {};

  @action
  doSomething(){}

}