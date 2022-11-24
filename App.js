import {React} from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inputs from './screen/inputs.js'
import SplashScreen from "./screen/landingpage.js";
import LoginScreen from "./screen/loginpage.js";
import SignupScreen from "./screen/signup.js";
import FinalScreen from "./screen/finalsetup.js";


const Stack = createNativeStackNavigator();

<div>
<SplashScreen />
<LoginScreen />
<SignupScreen />
<FinalScreen />
</div>




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Final">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Final" component={FinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
