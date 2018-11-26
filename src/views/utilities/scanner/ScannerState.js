"use strict";

import {action, observable} from "mobx";
import {RNCamera} from "react-native-camera";

/**
 * Scanner State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class ScannerState {

  @observable data;
  @observable parsedData= "dummy data";
  @observable scanning = true;
  @observable leaving;
  @observable cameraType = RNCamera.Constants.Type.back;

  parseName(sequence){
    const name = sequence.slice(30);
    const splitName = name.split(",");
    const lastName = splitName[0];
    const firstName = splitName[1];
    const middleName = splitName[2];
    return {firstName, middleName, lastName};
  }

  removeCode(sequence){
    return sequence.slice(3);
  }

  parseData(){
    const tempData = this.data.split("\n");
    let firstName, middleName, lastName, licenseNumber, dateOfBirth;
    for(let i = 0; i<tempData.length; i++) {
      if (tempData[i][2] === "A" && tempData[i][3] === "A" && tempData[i][4] === "M") {
        const name = this.parseName(tempData[i]);
        firstName = name.firstName;
        middleName = name.middleName;
        lastName = name.lastName;
      }
      else if (tempData[i][0] === "D" && tempData[i][1] === "A" && tempData[i][2] === "Q") {
        licenseNumber = this.removeCode(tempData[i]);
      }
      else if (tempData[i][0] === "D" && tempData[i][1] === "B" && tempData[i][2] === "B") {
        dateOfBirth = this.removeCode(tempData[i]);
      }
    }
    this.parsedData = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      licenseNumber: licenseNumber,
      dateOfBirth: dateOfBirth
    };
  }

  @action
  enteringUser(){
    this.leaving = false;
  }

  @action
  leavingUser(){
    this.leaving = true;
  }

}