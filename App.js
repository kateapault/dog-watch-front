import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddEventNavigator from './navigation/AddEventNavigator'

export default function App() {
  return (
      <AddEventNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'lightgrey',
  },
});
