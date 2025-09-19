import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonRow}>
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
      </View>
  <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '400',
    letterSpacing: 1,
    color: '#222',
    marginBottom: 8,
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
  },
  count: {
    fontSize: 54,
    fontWeight: '300',
    color: '#222',
    marginBottom: 32,
    fontFamily: 'sans-serif',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  button: {
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    borderRadius: 28,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonText: {
    fontSize: 28,
    color: '#222',
    fontWeight: '400',
    fontFamily: 'sans-serif',
  },
  buttonPressed: {
    backgroundColor: '#e0e0e0',
    borderColor: '#bdbdbd',
  },
});
