import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SpotTheBug() {
  return (
    <View style={styles.screenContainer}>
      <Text>Here you will see programming samples and have to squash the bug!</Text>
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