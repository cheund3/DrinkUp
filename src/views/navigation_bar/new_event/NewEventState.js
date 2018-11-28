"use strict";

import {action, observable} from "mobx"
import {Keyboard} from "react-native";
const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events";

/**
 * Create New Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class NewEventState {

  @observable title = "New Event";
  @observable initialValues = { eventName: "", description: "" };
  @observable internalId = 1;

  async resetInitialValues(){
    this.initialValues.eventName = "";
    this.initialValues.description = "";
  }

  @action
  async handleCreate(values, internalId){
    Keyboard.dismiss();
    await fetch(URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.eventName,
        description: values.description,
        owner: internalId
      })
    }).then(response => response.json());
    await this.resetInitialValues();
  }

}