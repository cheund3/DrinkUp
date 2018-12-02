"use strict";

import { action, observable } from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users/signup";


/**
 * Sign Up State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SignUpState {

  @observable data = {};
  @observable user = null;
  @observable error = "";
  @observable initValues = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "confirmPassword": ""
  };

  /**
   * Attempt to sign up a user with the information from the sign up form
   * @param values
   * @returns {Promise<*>}
   */
  @action
  async handleSubmit(values){

    // Request options
    const request = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      }),
    };

    // Make the request
    try {
      let response = await fetch(URL, request);
      if(response.status === 201) {
        let responseJson = await response.json();
        this.user = responseJson;
        this.error = "";
        return responseJson.id;
      } else {
        this.error = "Invalid sign up";
        return -1;
      }
    } catch (error) {
      this.error = "Invalid sign up";
      return -1;
    }
  }
}