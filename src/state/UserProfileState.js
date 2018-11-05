import {action, observable} from "mobx";
import bind from "bind-decorator";

export class UserProfileState {

  @observable name;
  @observable data;

  constructor() {
    this.name = "sample name";
    this.data = {};
  }

  @bind
  @action
  updateName(name) {
    this.name = name;
  }

}