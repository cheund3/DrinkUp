"use strict";

import {action, observable} from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users/signin";

/**
 * Sign In State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SignInState {
  @observable user = null;

  @observable initValues = {
    email: "",
    password: "",
  };

  @observable error = "";

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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
      console.log(response);
      if(response.status === 201) {
        let responseJson = await response.json();
        console.log(responseJson);
        this.user = responseJson;
        this.error = "";
        return responseJson.id;
      } else {
        this.error = "Incorrect username or password";
        return -1;
      }
    } catch (error) {
      console.log(error);
      this.error = "Invalid request";
      return -1;
    }
  }
}