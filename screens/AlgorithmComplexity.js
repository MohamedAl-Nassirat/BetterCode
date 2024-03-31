import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AlgorithmComplexity() {
  return (
    <View style={styles.screenContainer}>
      <Text>Here you will see various algorithms in a flash card manner and have to specify the time and space complexity</Text>
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