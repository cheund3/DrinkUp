"use strict";

import {action, observable} from "mobx";


const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events"; // use caps for global constants


/**
 * Sign Up State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SignUpState {

  @observable data = {};

  @observable initValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  @action
  doSomething(){}

  @action
  async handleCreate(values){
    await fetch(URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password
      })
    }).then(response => response.json());
    // await this.resetInitialValues();
  }


  submit() {
    const options = {
      method: "POST",
      uri: "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events",
      body: {
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        email: this.data.email,
        password: this.data.password
      },
      json: true
    };
    const response = request(options);
    console.log(response);

    props.navigation.navigate("BottomNavigationBar");
  }

}