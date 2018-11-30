"use strict";

import {action, observable} from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/ownerEvents";


/**
 * Previous Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class PreviousEventsState {

  @observable title = "Previous Events";
  @observable data = { events: [] };

  /**
   * Fetch a list of previous events in JSON format for a given internal administrator identifier
   * @param internalId
   * @returns {Promise<void>}
   */
  @action
  async fetchEvents(internalId) {
    try {
      let response = await fetch(URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          owner: internalId,
          completed: true
        })
      });
      console.log(response);
      let responseJson = await response.json();
      this.data.events = responseJson;
      console.log(responseJson);
    } catch (error) {
      console.log(error);
    }
  }

}