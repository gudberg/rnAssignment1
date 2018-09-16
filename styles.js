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
    backgroundColor: "lightblue",
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 22,
  },
  imageStyle: {
    borderColor: "black",
    height: 180,
    borderWidth: 1
  },
  marginizer: {
    marginBottom: 12, 
    marginTop: 12
  }
});