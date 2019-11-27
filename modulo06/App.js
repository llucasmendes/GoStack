import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';

class App extends Component {
  render (){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem vindo!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
