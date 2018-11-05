import {action, observable} from "mobx";
import bind from "bind-decorator";

/**
 * Create New Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class CreateNewEventState {

  @observable data;
  @observable screenName;
  options;
  response;

  constructor() {
    this.data = {};
    this.screenName = "New Event";
    this.options = {
      method: "POST",
      uri: "ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events",
      body: {
        name: "Test Event"
      }
    };
    this.response = "";
  }

  @bind
  @action
  updateData(data) {
    this.data = data;
  }

  @bind
  @action
  createEvent(){
    fetch("ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        firstParam: "yourValue",
        secondParam: "yourOtherValue",
      })
    }
    ).then((response) => {
      this.response = response;
    }).catch ((error)=>{
      console.error(error);
    });

  }

}