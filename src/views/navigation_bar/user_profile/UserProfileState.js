"use strict";

import {action, observable} from "mobx";
const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/:";

/**
 * User Profile State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class UserProfileState {

  @observable title = "Profile";
  @observable profile = "empty";


  // @action
  // fetchProfile(internalId){
  //   fetch(URL+internalId, {
  //     method: "GET",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //     }
  //   }).then(response => response.json());
  // }
}