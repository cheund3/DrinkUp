// import React, { Component } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions
// } from "react-native";
//
// <<<<<<< HEAD
// import Camera from "react-native-camera";
// =======
// import { RNCamera } from "react-native-camera";
// >>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a
//
// export default class ScannerV2 extends Component {
//
//   constructor() {
//     super();
//     this.state = {
//       scanning: true,
//       cameraType: RNCamera.Constants.Type.back,
//       data: "no data"
//     };
//   }
//
//   _handleBarCodeRead(e) {
// <<<<<<< HEAD
//     Vibration.vibrate();
//     this.setState({scanning: false});
//     Linking.openURL(e.data).catch(err => console.error("An error occured", err));
//     return;
// =======
//     console.log(e.type);
//     this.setState({scanning: false, data: e.type});
// >>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a
//   }
//
//   getInitialState() {
//     return {
//       scanning: true,
// <<<<<<< HEAD
//       cameraType: Camera.constants.Type.back
// =======
//       cameraType: RNCamera.Constants.Type.back
// >>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a
//     };
//   }
//
//   render() {
//     if(this.state.scanning) {
//       return (
//         <View style={styles.container}>
//           <Text style={styles.welcome}>
//             Barcode Scanner
//           </Text>
//           <View style={styles.rectangleContainer}>
//             <RNCamera
//               style={styles.camera}
//               type={this.state.cameraType}
//               barCodeTypes = {[RNCamera.Constants.BarCodeType.pdf417]}
//               onBarCodeRead={this._handleBarCodeRead.bind(this)}>
//               <View style={styles.rectangleContainer}>
//                 <View style={styles.rectangle}/>
//               </View>
//             </RNCamera>
//           </View>
//           <Text style={styles.instructions}>
// <<<<<<< HEAD
//             Double tap R on your keyboard to reload,{"\n"}
// =======
//             Data: {this.state.data}
// >>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a
//           </Text>
//         </View>
//       );
//     }
//     else{
//       return (<View  style={styles.container}>
//         <Text style={styles.welcome}>
//           Barcode Scanner
//         </Text>
//         <Text style={styles.instructions}>
// <<<<<<< HEAD
//           Double tap R on your keyboard to reload,{"\n"}
// =======
//           Data: {this.state.data}
// >>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a
//         </Text>
//       </View>);
//     }
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//   },
//   camera: {
//     flex: 0,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "transparent",
// <<<<<<< HEAD
//     height: Dimensions.get("window").width,
// =======
//     height: Dimensions.get("window").height,
// >>>>>>> 073415c6b55f796a724602ee6b8b1c54e6afb99a
//     width: Dimensions.get("window").width,
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5,
//   },
//   rectangleContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "transparent",
//   },
//
//   rectangle: {
//     height: 400,
//     width: 100,
//     borderWidth: 2,
//     borderColor: "#00FF00",
//     backgroundColor: "transparent",
//   },
// });