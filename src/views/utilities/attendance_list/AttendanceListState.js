"use strict";

import {action, observable} from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/attendees";

/**
 * Attendance List State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class AttendanceListState {

  @observable data = {
    attendees: []
  };

  @action
  async fetchAttendees() {
    try {
      let response = await fetch(URL, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: "",
      });
      console.log(response);
      let responseJson = await response.json();
      this.data.attendees = responseJson;
      console.log(responseJson);
    } catch (error) {
      console.log(error);
    }
  }

  @action
  doSomething(){}

}