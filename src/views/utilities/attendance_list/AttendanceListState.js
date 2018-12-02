"use strict";

import {action, observable} from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/attendees/getEvents";

/**
 * Attendance List State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class AttendanceListState {

  @observable data = { attendees: [] };

  /**
   * Fetch a list of attendees given an event idenfitier
   * @param eventId
   * @returns {Promise<void>}
   */
  @action
  async fetchAttendees(eventId) {
    try {
      let response = await fetch(URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: eventId
        }),
      });
      let responseJson = await response.json();
      console.log("\n\nAttendance list fetching...");
      console.log(responseJson);
      this.data.attendees = responseJson;
    } catch (error) {
      //TODO: error handling
    }
  }

}