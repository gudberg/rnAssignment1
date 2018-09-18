import React from 'react';
import {
  Text, View, Image, TouchableOpacity, Animated,
} from 'react-native';
import Work from './Work';
// Global styling declared in style
const globalStyle = require('./styles');

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.changeToWork = this.changeToWork.bind(this);
    this.state = {
      home: true,
      animated: new Animated.Value(0),
    };
  }

  changeToWork() {
    // Here we both add the animation and set the state home to false
    // in order to render the Work component
    const { animated } = this.state;
    Animated.timing(animated, {
      toValue: 1,
      duration: 700,
    }).start();

    this.setState({
      home: false,
    });
  }

  render() {
    const { data } = this.props;
    const homeData = data[0];
    const { home, animated } = this.state;
    if (home) {
      return (
        <View>
          <View style={globalStyle.information}>
            <Text style={globalStyle.text}>Home Information</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Image source={{ uri: homeData.avatar }} style={globalStyle.imageStyle} />
          </View>
          <View style={globalStyle.names}>
            <Text>
              {homeData.name.first_name}
              {' '}
              {homeData.name.last_name}
            </Text>
          </View>
          <View style={globalStyle.imageMarginizer}>
            <TouchableOpacity
              style={globalStyle.buttonStyle}
              title="click here"
              onPress={this.changeToWork}
            >
              <Text>Show work info</Text>
            </TouchableOpacity>
          </View>
          <View style={globalStyle.informationStyle}>
            <Text>{homeData.home.address}</Text>
          </View>
          <View style={globalStyle.informationStyle}>
            <Text>{homeData.home.email}</Text>
          </View>
          <View style={globalStyle.informationStyle}>
            <Text>{homeData.home.phone_number}</Text>
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
        <Work data={data} />
      </Animated.View>
    );
  }
}
