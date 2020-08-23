import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function CreateSecurityCodeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>CreateSecurityCode Screen</Text>
      <Button title="Continue" onPress={() =>navigation.navigate("Welcome")} />
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
});