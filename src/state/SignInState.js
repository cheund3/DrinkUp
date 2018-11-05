import {action, observable} from "mobx";
import bind from "bind-decorator";

export class SignInState {


  @observable
  user = {};

  constructor() {
    this.user = {};
  }

  // @bind
  // @action
  // updateLoading(loading) {
  //   this.isLoading = loading;
  // }

}