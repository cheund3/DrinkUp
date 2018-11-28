"use strict";

import {StyleSheet} from "react-native";

/**
 * SignUp Screen - Styles
 * @author Jeffrey Poegel <poegej@rpi.edu>
 */

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 1,
    width: "100%",
  },
  textInput: {
    height: 80,
    width: "80%",
  },
  button: {
    color: "blue",
    marginTop: 16,
  }
});