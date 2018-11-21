/**
 * DrinkUp
 * @author: Dylan L. Cheung
 */

import React from "react";
<<<<<<< HEAD
import {RootState} from "./RootState";
=======
import {RootState} from "./state/RootState";
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a
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
<<<<<<< HEAD
      <Provider state={this.state}>
=======
      <Provider rootState={this.rootState}>
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a
        <RootStackNavigator/>
      </Provider>
    );
  }
}
