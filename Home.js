import React from "react";
import { Text, View, Image, TouchableOpacity, Animated } from "react-native";
import Work from "./Work";
// Global styling declared in style
var globalStyle = require("./styles");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.changeToWork = this.changeToWork.bind(this);
    this.state = {
      home: true,
      animated: new Animated.Value(0)
    };
  }

  changeToWork() {
    // Here we both add the animation and set the state home to false
    // in order to render the Work component
    Animated.timing(this.state.animated, {
      toValue: 1,
      duration: 700
    }).start();

    this.setState({
      home: false
    });
  }

  render() {
    const data = this.props.data[0];
    if (this.state.home) {
      return (
        <View>
          <View style={{marginBottom: 20}}>
          <Image source={{ uri: data.avatar }} style={globalStyle.imageStyle} />
          </View>
          <Text>{data.name.first_name} {data.name.last_name}</Text>
          <View style={globalStyle.marginizer}>
          <TouchableOpacity
            style={globalStyle.buttonStyle}
            title="click here"
            onPress={this.changeToWork}
          >
            <Text>Show work info</Text>
          </TouchableOpacity>
          </View>
          <View style={globalStyle.marginizer}>
          <Text>
            {data.home.address}
          </Text>
          </View>
          <View style={globalStyle.marginizer}>
            <Text>{data.home.email}</Text>
          </View>
          <View style={globalStyle.marginizer}>
          <Text>{data.home.phone_number}</Text>
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
          <Work data={this.props.data} />
        </Animated.View>
      );
    }
  }
}
