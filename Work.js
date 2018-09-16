import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
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
    console.log(data.avatar);
    if (this.state.work) {
      return (
        <View>
          <Image source={{ uri: data.avatar }} style={globalStyle.imageStyle} />
          <Text>{data.name.first_name} {data.name.last_name}</Text>
          <TouchableOpacity
            style={globalStyle.buttonStyle}
            title="click here"
            onPress={this.changeToHome}
          >
            <Text>Show home info</Text>
          </TouchableOpacity>
          <Text style={styles.border}>{data.work.address}</Text>
          <TextInput
            style={styles.border}
            editable={false}
            value={data.work.address}
          />
          <Text style={styles.border}>{data.work.email}</Text>
          <Text style={styles.border}>{data.work.phone_number}</Text>
          <Text style={styles.border}>{data.work.company}</Text>
          <Text style={styles.border}>
            {data.work.department}, {data.work.job_title}{" "}
          </Text>
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
        <Home data={this.props.data} />;
      </Animated.View>
      )
    }
  }
}

export default Work;
