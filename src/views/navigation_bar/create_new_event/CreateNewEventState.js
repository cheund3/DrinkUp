"use strict";

import {action, observable} from "mobx";

/**
 * Create New Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class CreateNewEventState {

  @observable data = {};

  @action
  doSomething(){}

}