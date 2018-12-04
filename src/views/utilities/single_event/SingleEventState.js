"use strict";

import { action } from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/closeEvent/";

/**
 * Single Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SingleEventState {

  @action
  async endEvent(id){
    await fetch(URL + id, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      json: true
    }).then( response => {
      console.log("event id: " + id);
      console.log(response);
    }).catch(error => {
      //TODO: implement error handling
    });
  }

}