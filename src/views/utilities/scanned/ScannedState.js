"use strict";

import {action, observable} from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/attendees/";

/**
 * Scanned State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class ScannedState {

  @observable title = "Scanned";
  @observable data;
  @observable res = "res";

  @action
  async enteringUser(data){
    await fetch(URL, {
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
        left: false
      })
    }).then(response => {
      response.json();
    }).catch( (error) => {
      error;
    });
  }

  @action
  async leavingUser(data){
    await fetch(URL, {
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
        left: true
      })
    }).then(response => {
      response.json();
    }).catch( (error) => {
      error;
    });
  }
}