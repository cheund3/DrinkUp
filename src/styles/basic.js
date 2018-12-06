"use strict";

import { StyleSheet } from "react-native";

/**
 * Basic React Native Paper Style
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export const basic = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  centered_container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    justifyContent: "center"
  },
  content: {
    padding: 16
  },
  top: {
    flex: 1,
    padding: 16
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginTop: 16,
  },
  centered_button: {
    marginTop: 16,
    width: 200,
  },
  color: {
    color: "#8400EE"
  }
});