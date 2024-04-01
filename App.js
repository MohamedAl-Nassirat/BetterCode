import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



import DataStructures from './screens/DSA';
import AlgoAnalysis from './screens/AlgorithmComplexity';
import SpotTheBug from './screens/SpotTheBug';
import ProgoType from './screens/ProgoType';


const Tab = createMaterialTopTabNavigator();

// The Home screen that shows the list of options
function HomeScreen({ navigation }) {
  const menuItems = [
    { id: '1', title: 'DS&A Quick Quiz', screen: 'DataStructures' },
    { id: '2', title: 'Algorithm Complexity Analysis', screen: 'AlgoAnalysis' },
    { id: '3', title: 'Spot the Bug', screen: 'SpotTheBug' },
    { id: '4', title: 'ProgoType', screen: 'ProgoType' },
  ];

  return (
    <View style={{ flex: 1 }}> 
      <Text style={styles.pageTitle}>BetterCode</Text> 
      <Text style={styles.introText}>Welcome to BetterCode, Where we help you CS</Text>
    </View>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarPosition="bottom"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0.5,
            borderTopColor: 'grey',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 5,
            shadowOpacity: 0.1,
            shadowRadius: 10,
            height: 60
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIndicatorStyle: { height: 0 },
          swipeEnabled: true,
        }}
      >
        <Tab.Screen name="DS&A" component={DataStructures} /> {/* Replace with ICON */}
        <Tab.Screen name="Complexity" component={AlgoAnalysis} /> {/* Replace with ICON */}
        <Tab.Screen name="Home" component={HomeScreen} /> {/* Replace with ICON */}
        <Tab.Screen name="SpotTheBug" component={SpotTheBug} /> {/* Replace with ICON */}
        <Tab.Screen name="ProgoType" component={ProgoType} /> {/* Replace with ICON */}
      </Tab.Navigator>
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
    margin: 10,
    padding: 80,
    color: 'blue',
  },
  introText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'orange',
  },
});
