import { observable } from "mobx";

/**
 * Domain State
 * Represents the data the application is about
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class DomainState{

  constructor(rootStore){
    this.rootStore = rootStore; // Allows DomainState to access all other stores in the project
  }
}