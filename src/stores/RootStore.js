"use strict";

import {UiState} from "./UiState";

/**
 * Root Store
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class RootStore{

  constructor(){
    this.UiState = new UiState(this);
  }
}
