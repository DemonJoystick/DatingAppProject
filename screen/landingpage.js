import {React, Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,TextInput,Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inputs from './inputs.js'
import App from '../App.js'

export default function SplashScreen () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.logo} source={require('../images/logo.png')} />
        <Text style={styles.titleText}>HoneY</Text>
        <Text style={styles.bodyText}>Bee Mine</Text>
      </View>
    );
  }
 

  const styles = StyleSheet.create({
    titleText: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom:20
    },
    bodyText: {
      fontSize: 15,
      color:'yellow',
      fontWeight: "bold"
    },
    logo:{
      marginBottom: 40,
        width: 100,
        height:100,
        borderRadius:50,
        padding: 30,
    }
  });
  
