"use strict";

import {action, observable} from "mobx";

/**
 * Single Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SingleEventState {

  @observable title = "Sample Event Name";

  @action
  doSomething(){}

}