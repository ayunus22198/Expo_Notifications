import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Expo, { Notifications } from 'expo';
import EntryScreen from './components/EntryScreen';
import registerForNotifications from './services/pushNotifications';
import io from "socket.io-client";

export default class App extends React.Component {
  componentDidMount() {
    console.log('Hi');
    registerForNotifications();
    this.socket = io("http://192.168.0.27:3000");
    this.socket.on("notification", msg => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification;

      if(origin === 'received' && text) {
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'Ok.' }]
        )
      }
    })
  }

  render() {
    return (
      <EntryScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
