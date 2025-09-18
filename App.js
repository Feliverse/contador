import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>CONTADOR</Text>
      <Text style={styles.count}>{count}</Text>
      <Button style={styles.button} title="Incrementar" onPress={() => setCount(count + 1)} />
      <Button style={styles.button} title="Disminuir" onPress={() => setCount(count - 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    margin: 10,
    padding: 10,
    borderRadius: 100 / 2,
    backgroundColor: '#9b4717ff',
    color: '#af5959ff',
  },
});
