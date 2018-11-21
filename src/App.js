/**
 * DrinkUp
 * @author: Dylan L. Cheung
 */

import React from "react";
import {RootState} from "./RootState";
import {Provider} from "mobx-react";
import { RootStackNavigator } from "./navigators/RootStackNavigator";

export default class App extends React.Component {

  state;

  constructor(props){
    super(props);
    this.state = new RootState();
  }

  render() {
    return (
      <Provider state={this.state}>
        <RootStackNavigator/>
      </Provider>
    );
  }
}
