import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>CONTADOR</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}> - </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e3efff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  count: {
    fontSize: 48,
    marginBottom: 20,
  },
  button: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 100 / 2,
    backgroundColor: '#37322fff',
  },
  buttonText: {
    fontSize: 36,
    color: '#ffffff',
  },
});
