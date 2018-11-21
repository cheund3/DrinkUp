// TODO: Will be implemented in the future

<<<<<<< HEAD
// "use strict";
//
// import {createStackNavigator} from "react-navigation";
// import {JoinExistingEventScreen} from "../../views/navigation_bar/join_exisiting_events/JoinExistingEventScreen";
// import {SingleEventScreen} from "../../views/utilities/single_event/SingleEventScreen";
//
// /**
//  * Join Existing Event Stack
//  * @author Dylan L. Cheung <cheund3@rpi.edu>
//  */
// export const joinExistingEventStack = createStackNavigator({
//   JoinExistingEvent: {
//     screen: JoinExistingEventScreen,
//     navigationOptions: () => ({
//       header: null
//     })
//   },
//   SingleEventScreen: SingleEventScreen
// },
// {
//   initialRouteName: "JoinExistingEvent"
// }
// );
=======
import {createStackNavigator} from "react-navigation";
import {JoinExistingEventScreen} from "../../screens/navigation_bar/JoinExistingEventScreen";
import {SingleEventScreen} from "../../screens/SingleEventScreen";

/**
 * Join Existing Event Stack
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const joinExistingEventStack = createStackNavigator({
  JoinExistingEvent: {
    screen: JoinExistingEventScreen,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  SingleEventScreen: SingleEventScreen
},
{
  initialRouteName: "JoinExistingEvent"
}
);
>>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a
