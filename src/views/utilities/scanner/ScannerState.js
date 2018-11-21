"use strict";

import {action, observable} from "mobx";

/**
 * Scanner State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class ScannerState {

  @observable data = {};

  @action
  doSomething(){}

}