import {action, observable} from "mobx";
import bind from "bind-decorator";

export class UserProfileState {

  @observable
  name;

  constructor() {
    this.name = "sadfas";
  }

  @bind
  @action
  updateName(name) {
    this.name = name;
  }

}