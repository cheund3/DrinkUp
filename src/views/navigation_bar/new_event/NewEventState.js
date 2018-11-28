"use strict";

import {action, observable} from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events"; // use caps for global constants

/**
 * Create New Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class NewEventState {

  @observable title = "New Event";
  @observable initialValues = { eventName: "", description: "" };

  async resetInitialValues(){
    this.initialValues.eventName = "";
    this.initialValues.description = "";
  }

  @action
  async handleCreate(values){
    await fetch(URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        name: values.eventName,
        description: values.description,
      })
    }).then(response => response.json());
    // await this.resetInitialValues();
  }

}