"use strict";

import {action, observable} from "mobx";
const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users/";

/**
 * User Profile State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class UserProfileState {

  @observable user = -1;

  @observable title = "Profile";

  @observable profile = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
  };

  @action
  async fetchProfile(){
    try {
      let response = await fetch(URL + this.user, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if(response.status === 200) {
        let responseJson = await response.json();
        console.log(responseJson);
        this.profile = responseJson; //
        if (this.profile.firstName === null) {
          this.profile.firstName = "";
        }
        if (this.profile.lastName === null) {
          this.profile.lastName = "";
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  @action
  async handleSubmit(values) {
    console.log("Updating the profile..."); //
    if(values.firstName === "") {
      values.firstName = this.profile.firstName;
    }
    if(values.lastName === "") {
      values.lastName = this.profile.lastName;
    }
    if(values.email === "") {
      values.email = this.profile.email;
    }
    if(values.password === "") {
      values.password = this.profile.password;
    }

    try {
      let response = await fetch(URL + this.user, {
        method: "PUT",
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
      });
      console.log(response);
      if(response === 201) {
        let responseJson = await response.json();
        console.log(responseJson);
        this.profile = values;
      }
    } catch (error) {
      console.log(error);
    }
  }
}