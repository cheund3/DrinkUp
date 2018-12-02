"use strict";

import { observable } from "mobx";

export class UserInterfaceState {

  // Holds the internal id for the user once signed up and/or logged in
  @observable internalId = 8675309;


}