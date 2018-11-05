/**
 * DrinkUp
 * @author: Dylan L. Cheung
 */

import React from 'react';
import {RootState} from "./state/RootState";
import {Provider} from "mobx-react";
import { RootStackNavigator } from "./navigators/RootStackNavigator";

export default class App extends React.Component {

  rootState;

  constructor(props){
    super(props);
    this.rootState = new RootState();
  }

  render() {
    return (
      <Provider rootState={this.rootState}>
          <RootStackNavigator/>
      </Provider>
    );
  }
}
