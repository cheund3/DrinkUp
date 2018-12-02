/**
 * DrinkUp
 * @author: Dylan L. Cheung
 */

import React from "react";
import { Provider } from "mobx-react";
import { RootState } from "./RootState";
import { RootStackNavigator } from "./navigators/RootStackNavigator";

export default class App extends React.Component {

  state;

  constructor(props){
    super(props);
    this.state = new RootState();
  }

  /**
   * Encapsulate the entire render of an application with Provider,
   * allowing the insertion of the root state into the whole application
   * @returns {*}
   */
  render() {
    return (
      <Provider state={this.state}>
        <RootStackNavigator/>
      </Provider>
    );
  }
}
