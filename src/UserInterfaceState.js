"use strict";

import { observable } from "mobx";

export class UserInterfaceState {

  // Essentially global variables
  @observable internalId = -1;
  @observable selectedEventId = -1;

}