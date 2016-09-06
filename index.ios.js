
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import Startups from './components/Startups'

class startups extends Component {
  render() {
    const initialRoute = {
      component: Startups,
      title: 'Startups'
    }

    return (
      <NavigatorIOS style={styles.container} initialRoute={initialRoute} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('startups', () => startups);
