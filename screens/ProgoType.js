import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgoType() {
  return (
    <View style={styles.screenContainer}>
      <Text>ProgoType, the classic!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});