"use strict";

import {action, observable} from "mobx";

/**
 * Single Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SingleEventState {

  @observable data = {};

  @action
  doSomething(){}

}