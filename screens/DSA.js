import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DSA() {
  return (
    <View style={styles.screenContainer}>
      <Text>This section will have various Data Structures and Algorithm questions to help you prepare for your interviews</Text>
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