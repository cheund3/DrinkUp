"use strict";

import {action, observable} from "mobx";

const ADD_USER_URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/attendees/";
const UPDATE_LEFT_URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/attendees/left/"

/**
 * Scanned State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class ScannedState {

  @observable title = "Scanned";
  @observable data = {
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    licenseNumber: ""
  };
  @observable res = "res";

  @action
  async enteringUser(data){
    await fetch(ADD_USER_URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        dob: data.dateOfBirth,
        licenseNumber: data.licenseNumber,
      })
    }).then(response => {
      response.json();
    }).catch( (error) => {
      error;
    });
  }

  @action
  async updateLeft(){
    await fetch(UPDATE_LEFT_URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        licenseNumber: this.data.licenseNumber
      })
    }).then(response => {
      response.json();
    }).catch( (error) => {
      error;
    });
  }
}