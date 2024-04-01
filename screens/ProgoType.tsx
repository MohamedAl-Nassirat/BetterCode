import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgoType: React.FC = () => {
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

export default ProgoType;