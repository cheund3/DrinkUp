import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  rectangle: {
    height: 299,
    width: 69,
    borderWidth: 2,
    borderColor: "#8400EE",
    backgroundColor: "transparent",
  }
});