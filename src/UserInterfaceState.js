"use strict";

import {action, observable} from "mobx";

export class UserInterfaceState {

  @observable isLoading = false;

  @action
  updateIsLoading(bool){
    this.isLoading = bool;
  }

}