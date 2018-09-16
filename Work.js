import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
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
      work: true
    };
  }

  changeToHome() {
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
      return <Home data={this.props.data} />;
    }
  }
}

export default Work;
