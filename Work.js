import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity
} from "react-native";
// Global styling declared in styles.js file
var globalStyle = require("./styles");
import Home from "./Home";

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 5,
    borderBottomColor: "#000"
  }
});

class Work extends Component {
  constructor(props) {
    super(props);
    this.changeToHome = this.changeToHome.bind(this);
    this.state = {
      work: true,
      animated: new Animated.Value(0)
    };
  }

  changeToHome() {
    // Here we both add the animation and set the state home to false
    // in order to render the Home component
    Animated.timing(this.state.animated, {
      toValue: 1,
      duration: 700
    }).start();

    this.setState({
      work: false
    });
  }

  render() {
    const data = this.props.data[0];
    if (this.state.work) {
      return (
        <View>
          <View style={globalStyle.information}>
            <Text style={globalStyle.text}>Work Information</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Image
              source={{ uri: data.avatar }}
              style={globalStyle.imageStyle}
            />
          </View>
          <View style={globalStyle.names}>
            <Text>
              {data.name.first_name} {data.name.last_name}
            </Text>
          </View>
          <View style={globalStyle.imageMarginizer}>
            <TouchableOpacity
              style={globalStyle.buttonStyle}
              title="click here"
              onPress={this.changeToHome}
            >
              <Text>Show home info</Text>
            </TouchableOpacity>
          </View>
          <View style={globalStyle.informationStyle}>
            <Text>{data.work.address}</Text>
          </View>
          <View style={globalStyle.informationStyle}>
            <Text>{data.work.email}</Text>
          </View>
          <View style={globalStyle.informationStyle}>
            <Text>{data.work.phone_number}</Text>
          </View>
          <View style={globalStyle.informationStyle}>
            <Text>{data.work.company}</Text>
          </View>
          <View style={globalStyle.informationStyle}>
            <Text>
              {data.work.department}, {data.work.job_title}{" "}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <Animated.View
          style={{
            transform: [
              {
                scale: this.state.animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1]
                })
              }
            ]
          }}
        >
          <Home data={this.props.data} />
        </Animated.View>
      );
    }
  }
}

export default Work;
