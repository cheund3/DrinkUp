"use strict";

import {action, observable} from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users";


/**
 * Current Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class CurrentEventState {

  @observable title = "Current Events";
  @observable events= "no events";

  // @action
  // fetchEvents(internalId){
  //   fetch(URL, {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: internalId
  //     })
  //   }).then(response => response.json());
  // }
}