"use strict";

import {action, observable} from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users";

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
    console.log(values);
    try {
      let response = await fetch(URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
      console.log(response);
      let responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.log(error);
    }
  }
}