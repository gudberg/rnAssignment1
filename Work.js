import React, { Component } from 'react';
import {
  Text, View, Image, Animated, TouchableOpacity,
} from 'react-native';
import Home from './Home';
// Global styling declared in styles.js file
const globalStyle = require('./styles');

class Work extends Component {
  constructor(props) {
    super(props);
    this.changeToHome = this.changeToHome.bind(this);
    this.state = {
      work: true,
      animated: new Animated.Value(0),
    };
  }

  changeToHome() {
    // Here we both add the animation and set the state home to false
    // in order to render the Home component
    const { animated } = this.state;
    Animated.timing(animated, {
      toValue: 1,
      duration: 700,
    }).start();

    this.setState({
      work: false,
    });
  }

  render() {
    const { data } = this.props;
    const workData = data[0];
    const { work, animated } = this.state;
    if (work) {
      return (
        <View>
          <View style={globalStyle.information}>
            <Text style={globalStyle.text}>Work Information</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Image source={{ uri: workData.avatar }} style={globalStyle.imageStyle} />
          </View>
          <View style={globalStyle.names}>
            <Text>
              {workData.name.first_name}
              {' '}
              {workData.name.last_name}
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
            <Text>{workData.work.address}</Text>
          </View>
          <View style={globalStyle.informationStyle}>
            <Text>{workData.work.email}</Text>
          </View>
          <View style={globalStyle.informationStyle}>
            <Text>{workData.work.phone_number}</Text>
          </View>
          <View style={globalStyle.informationStyle}>
            <Text>{workData.work.company}</Text>
          </View>
          <View style={globalStyle.informationStyle}>
            <Text>
              {workData.work.department}
,
              {workData.work.job_title}
              {' '}
            </Text>
          </View>
        </View>
      );
    }
    return (
      <Animated.View
        style={{
          transform: [
            {
              scale: animated.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
        }}
      >
        <Home data={data} />
      </Animated.View>
    );
  }
}

export default Work;
