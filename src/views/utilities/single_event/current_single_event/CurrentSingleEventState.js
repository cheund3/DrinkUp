"use strict";

import {action, observable} from "mobx";

const MODIFIER = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/"
const CLOSE_EVENT_URL = MODIFIER + "closeEvent/";

/**
 * Curent Single Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class CurrentSingleEventState {

  @observable event = {
    title: "",
    startTime: "",
    description: ""
  }

  @action
  async fetchEvent(id){
    await fetch(MODIFIER + id, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      // json: true
    }).then( response => {
      response = JSON.parse(response._bodyText);
      this.event.title = response.name;
      const date = new Date(response.createdAt);
      this.event.startTime = date.toString();
      this.event.description = response.description;
    }).catch(error => {
      //TODO: implement error handling
    });
  }

  @action
  async endEvent(id){
    await fetch(CLOSE_EVENT_URL + id, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      json: true
    }).then( response => {
    }).catch(error => {
      //TODO: implement error handling
    });
  }

}