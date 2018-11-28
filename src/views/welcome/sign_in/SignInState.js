"use strict";

import {action, observable} from "mobx";

/**
 * Sign In State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SignInState {
  @observable user = {};

  @observable initValues = {
    email: "",
    password: "",
  };

  @action
  doSomething(){}

  @action
  async handleSubmit(values){
    await fetch(URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password
      })
    }).then(response => response.json());
    // await this.resetInitialValues();
  }
}