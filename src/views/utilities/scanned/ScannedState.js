"use strict";

import { action, observable } from "mobx";

const ADD_USER_URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/attendees/";
const UPDATE_LEFT_URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/attendees/left/";

/**
 * Scanned State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class ScannedState {

  @observable title = "Scanned";
  @observable response = "response";
  @observable data = {
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    licenseNumber: ""
  };

  /**
   * Enter an attendee into the event
   * @param data
   * @param eventId
   * @returns {Promise<void>}
   */
  @action
  async enteringUser(data, eventId){
    let payload = {
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
        eventId: eventId
      })
    };

    await fetch(ADD_USER_URL, payload)
      .then(response => {
        console.log(response);
      }).catch( (error) => {
      //TODO: error handling
        console.log(error);
      });
  }

  /**
   * Mark an already attending user as leaving the event
   * @returns {Promise<void>}
   */
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
    }).catch( (error) => {
      //TODO: error handling
    });
  }
}