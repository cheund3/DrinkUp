import {action, observable} from "mobx";
import bind from "bind-decorator";

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