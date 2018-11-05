import {action, observable} from "mobx";
import bind from "bind-decorator";

/**
 * Sign Up State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class SignUpState {

  @observable
  isLoading;

  constructor() {
    this.isLoading = false;
  }

  @bind
  @action
  updateLoading(loading) {
    this.isLoading = loading;
  }

}