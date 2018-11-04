import {observable } from 'mobx';

/**
 * UI State
 * Holds information about the user session and overall state of the application
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class UiState {
  @observable isLoggedIn;

  constructor(rootStore) {
    this.rootStore = rootStore; // Allows UiState to access other stores in the project
    this.isLoggedIn = false;
  }

  get authorized(){
    return this.isLoggedIn;
  }

}