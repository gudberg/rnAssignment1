import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Work from "./Work";
var globalStyle = require("./styles");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.changeToWork = this.changeToWork.bind(this);
    this.state = {
      home: true
    };
  }
ded
  changeToWork() {
    this.setState({
      home: false
    });
  }

  render() {
    const data = this.props.data[0];
    if (this.state.home) {
      return (
        <View>
          <Image source={{ uri: data.avatar }} style={globalStyle.imageStyle} />
          <TouchableOpacity
            style={globalStyle.buttonStyle}
            title="click here"
            onPress={this.changeToWork}
          >
            <Text>Show work info</Text>
          </TouchableOpacity>

          <Text>{data.home.address}</Text>
          <Text>{data.home.email}</Text>
          <Text>{data.home.phone_number}</Text>
        </View>
      );
    } else {
      return <Work data={this.props.data} />;
    }
  }
}
