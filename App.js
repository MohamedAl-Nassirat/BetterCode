import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import DataStructures from './screens/DSA';
import AlgoAnalysis from './screens/AlgorithmComplexity';
import SpotTheBug from './screens/SpotTheBug';
import ProgoType from './screens/ProgoType';

// The Home screen that shows the list of options
function HomeScreen({ navigation }) {


  const menuItems = [
    { id: '1', title: 'DS&A Quick Quiz', screen: 'DataStructures' }, // Will use Quiz/FlashCard component
    { id: '2', title: 'Algorithm Complexity Analysis', screen: 'AlgoAnalysis' }, // Will use Quiz component
    { id: '3', title: 'Spot the Bug', screen: 'SpotTheBug' }, // Will use Quiz Component
    { id: '4', title: 'ProgoType', screen: 'ProgoType' },
  ];

  return (
    <View style={{ flex: 1 }}> 
      <Text style={styles.pageTitle}>BetterCode</Text> 
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.screen)}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome to better code" component={HomeScreen} />
        <Stack.Screen name="DataStructures" component={DataStructures} />
        <Stack.Screen name="AlgoAnalysis" component={AlgoAnalysis} />
        <Stack.Screen name="SpotTheBug" component={SpotTheBug} />
        <Stack.Screen name="ProgoType" component={ProgoType} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  pageTitle: {
    fontSize: 30,
    textAlign: 'center',
    padding: 100,
    color: 'blue',
  },
});
