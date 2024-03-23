import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen.js';
import Challenges from './Components/challenge.js';
import Crypto from './Components/crypto.js';
import Bar from './Components/bar.js';
import ProductPage from './Components/ProductPage.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Define a stack navigator to be used inside the Main tab
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductPage" component={ProductPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <Tab.Navigator tabBar={(props) => <Bar {...props} />} screenOptions={{ headerShown: false }}>
        {/* The MainStack function returns a Stack.Navigator */}
        <Tab.Screen name="Home" component={MainStack} options={{ headerShown: false }} />
        <Tab.Screen name="Challenges" component={Challenges} options={{ headerShown: false }} />
        <Tab.Screen name="Crypto" component={Crypto} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
