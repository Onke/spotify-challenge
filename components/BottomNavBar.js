import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import App from '../App';

//Screen Names
const homeName = 'Ikhaya';
const searchName = 'Sesha';
const libraryName = 'Umtapo Wakho';

const Tab = createBottomTabNavigator();

export default function BottomNavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={searchName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn == searchName) {
              iconName = focused ? 'search' : 'search-outline';
            } else if (rn == libraryName) {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarStyle: {backgroundColor: '#282828', borderTopColor: '#282828'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {fontSize: 13},

          headerShown: false,
        })}>
        <Tab.Screen name={homeName} component={App} />
        <Tab.Screen name={searchName} component={App} />
        <Tab.Screen name={libraryName} component={App} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
