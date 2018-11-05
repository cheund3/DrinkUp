import {action, observable} from "mobx";
import bind from "bind-decorator";

/**
 * Create New Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class CreateNewEventState {

  @observable
  data;

  constructor() {
    this.data = {};
  }

  @bind
  @action
  updateData(data) {
    this.data = data;
  }

}