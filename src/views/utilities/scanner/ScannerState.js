"use strict";

import {action, observable} from "mobx";
import {RNCamera} from "react-native-camera";

/**
 * Scanner State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class ScannerState {

  @observable data;
  @observable parsedData;
  @observable scanning = true;
  @observable leaving;
  @observable cameraType = RNCamera.Constants.Type.back;

  parseData(){
    // const tempData = this.data.split("\n");
    // let firstName, licenseNumber, dateOfBirth;
    // for(let i = 0; i<tempData.length; i++){
    //   if (tempData[i][2] === "A" && tempData[i][3] === "A" && tempData[i][4] === "M") {
    //     firstName = tempData[i].slice(30, -1);
    //   } else if (tempData[i][2] === "Q"){
    //     licenseNumber = tempData[i];
    //   } else if (tempData[i][2] === "A"){
    //     dateOfBirth = tempData[i];
    //   }
    // }
    // this.parsedData = tempData[1].slice(30, -1);
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