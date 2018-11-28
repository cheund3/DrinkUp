"use strict";

import {action, observable} from "mobx";

/**
 * Scanned State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class ScannedState {

  @observable title = "Scanned";
  @observable data;
  leaving;


  @action
  enteringUser(){
    this.leaving = false;
  }

  @action
  leavingUser(){
    this.leaving = true;
  }
}