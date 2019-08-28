import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EntryScreen from './components/EntryScreen';
export default function App() {
  return (
    <EntryScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
