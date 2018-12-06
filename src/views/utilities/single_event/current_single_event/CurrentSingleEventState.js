"use strict";

import { action } from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/closeEvent/";

/**
 * Curent Single Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class CurrentSingleEventState {

  @action
  async endEvent(id){
    await fetch(URL + id, {
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