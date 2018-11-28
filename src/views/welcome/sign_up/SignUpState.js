"use strict";

import {action, observable} from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users";


/**
 * Sign Up State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SignUpState {

  @observable data = {};

  @observable initValues = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "confirmPassword": ""
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
          firstName: values.firstName,
          lastName: values.lastName,
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