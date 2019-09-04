import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class EntryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    }
  }

  render() {
    return (
      <View>
        <Text>Welcome To Notifications</Text>
      </View>
    )
  }
}
