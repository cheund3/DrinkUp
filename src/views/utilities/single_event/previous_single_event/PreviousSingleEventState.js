"use strict";

import {action, observable} from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/";

/**
 * Previous Single Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class PreviousSingleEventState {

  @observable event = {
    title: "",
    startTime: "",
    endTime: "",
    description: ""
  }

  @action
  async fetchEvent(id){
    await fetch(URL + id, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      // json: true
    }).then( response => {
      response = JSON.parse(response._bodyText);
      this.event.title = response.name;
      const startTime = new Date(response.createdAt);
      this.event.startTime = startTime.toString();
      const endTime = new Date(response.updatedAt);
      this.event.endTime = endTime.toString();
      this.event.description = response.description;
    }).catch(error => {
      //TODO: implement error handling
    });
  }

}