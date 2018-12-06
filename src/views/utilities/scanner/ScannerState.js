"use strict";

import { action, observable } from "mobx";
import { RNCamera } from "react-native-camera";

const abbreviations = {
  "firstName": ["DAC", "DBP", "DCT"],
  "lastName": ["DAB", "DBO", "DCS"],
  "middleName": ["DAD", "DBQ"],
  "fullName": ["DAA", "DBN"],
  "dateOfBirth": ["DBB", "DBL"],
  "licenseNumber": ["DAQ"],
  "expirationDate": ["DBA"],
  "sex": ["DBC"]
};

/**
 * Scanner State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class ScannerState {

  @observable title = "Scanner";
  @observable data;
  @observable parsedData= "dummy data";
  @observable cameraType = RNCamera.Constants.Type.back;

  /**
   * Parse the full name into first, middle, and last name
   * @param sequence
   * @returns {{firstName: string, middleName: string, lastName: string}}
   */
  parseName(sequence){
    const name = sequence.slice(30);
    const splitName = name.split(",");
    const lastName = splitName[0];
    const firstName = splitName[1];
    const middleName = splitName[2];
    return {firstName, middleName, lastName};
  }

  /**
   * Remove the information code from prefix of data
   * @param sequence
   * @returns {*}
   */
  removeCode(sequence){
    return sequence.slice(3);
  }

  /**
   * Takes a string date parsed from the scanner and returns a correctly formatted date
   *
   * @param str date from the scanner
   */
  convertDate(str) {
    let first = parseInt(str.substring(0, 4));
    if(first < 1300) {
      return str.substring(0, 2) + "-" + str.substring(2, 4) + "-" + str.substring(4, 8);
    } else {
      return str.substring(4, 6) + "-" + str.substring(6, 8) + "-" + str.substring(0, 4);
    }
  }

  /**
   * DEPRECATED
   * Parse the necessary data from a scanned driver's license identifier
   */
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



  /**
   * TODO: comment and rename
   */
  parserForReal() {
    this.parsedData = {
      firstName: "",
      middleName: "",
      lastName: "",
      licenseNumber: "",
      dateOfBirth: "",
      expirationDate: "",
      sex: ""
    };

    const tempData = this.data.split("\n");
    for(let i = 0; i < tempData.length; i++) {
      let row = tempData[i];

      //Parse the first name
      for(let a = 0; a < abbreviations.firstName.length; a++) {
        let abbrev = abbreviations.firstName[a];
        let index = row.indexOf(abbrev);
        if(index !== -1) {
          this.parsedData.firstName = row.substring(index + 3);
          break;
        }
      }

      //Parse the last name
      for(let a = 0; a < abbreviations.lastName.length; a++) {
        let abbrev = abbreviations.lastName[a];
        let index = row.indexOf(abbrev);
        if(index !== -1) {
          this.parsedData.lastName = row.substring(index + 3);
          break;
        }
      }

      //Parse the middle name
      for(let a = 0; a < abbreviations.middleName.length; a++) {
        let abbrev = abbreviations.middleName[a];
        let index = row.indexOf(abbrev);
        if(index !== -1) {
          this.parsedData.middleName = row.substring(index + 3);
          break;
        }
      }

      //Parse the full name
      for(let a = 0; a < abbreviations.fullName.length; a++) {
        let abbrev = abbreviations.fullName[a];
        let index = row.indexOf(abbrev);
        if(index !== -1) {
          const name = row.slice(30);
          const splitName = name.split(",");
          this.parsedData.lastName = splitName[0];
          this.parsedData.firstName = splitName[1];
          this.parsedData.middleName = splitName[2];
          break;
        }
      }

      //Parse the data of birth
      for(let a = 0; a < abbreviations.dateOfBirth.length; a++) {
        let abbrev = abbreviations.dateOfBirth[a];
        let index = row.indexOf(abbrev);
        if(index !== -1) {
          this.parsedData.dateOfBirth = this.convertDate(row.substring(index + 3));
          break;
        }
      }

      //Parse the license number
      for(let a = 0; a < abbreviations.licenseNumber.length; a++) {
        let abbrev = abbreviations.licenseNumber[a];
        let index = row.indexOf(abbrev);
        if(index !== -1) {
          this.parsedData.licenseNumber = row.substring(index + 3);
          break;
        }
      }

      //Parse the expiration date
      for(let a = 0; a < abbreviations.expirationDate.length; a++) {
        let abbrev = abbreviations.expirationDate[a];
        let index = row.indexOf(abbrev);
        if(index !== -1) {
          this.parsedData.expirationDate = this.convertDate(row.substring(index + 3));
          break;
        }
      }

      //Parse the sex
      for(let a = 0; a < abbreviations.sex.length; a++) {
        let abbrev = abbreviations.sex[a];
        let index = row.indexOf(abbrev);
        if(index !== -1) {
          this.parsedData.sex = row.substring(index + 3);
          break;
        }
      }
    }
  }

  /**
   * Handle the button press and parse the scanned data
   * @param e
   * @returns {Promise<void>}
   */
  @action
  async handleBarcodeRead(e) {
    this.data = e.data;
    this.parserForReal();
  }

}