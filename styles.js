"use strict";

var React = require("react-native");

var {
  StyleSheet
} = React;

// We use this file for global styling 

module.exports = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    padding: 2,
    backgroundColor: "red"
  },
  imageStyle: {
    borderColor: "black",
    height: 180,
    borderWidth: 1
  }
});