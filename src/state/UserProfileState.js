import {action, observable} from "mobx";
import bind from "bind-decorator";

export class UserProfileState {

  @observable
  name;

  constructor() {
    this.name = "";
  }

  @bind
  @action
  updateName(name) {
    this.name = name;
  }

}