"use strict";

import {action, observable} from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/ownerEvents";

/**
 * Current Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class CurrentEventState {

  @observable title = "Current Events";
  @observable data = { events: [] };
  @observable currentEventsViews = [];
  @observable selectedEventId = 0;

  /**
   * Fetch a list of current events in JSON format for a given internal administrator identifier
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
          completed: false
        })
      });
      this.data.events = await response.json();
    } catch (error) {
      // TODO: Implement error handling
    }
  }
}