import {React , useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,TextInput,Button ,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inputs from './inputs.js'

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Image style={styles.logo} source={require('../images/logo.png')} />
        <Text style={styles.titleText}>HoneY</Text>
        <Text style={styles.bodyText}>Bee Mine</Text>
        <View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Enter Username."
    placeholderTextColor="#003f5c"
    onChangeText={(email) => setEmail(email)}
  />
</View>
 
<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Enter Password"
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
</View>

<TouchableOpacity style={styles.loginBtn}>
  <Text style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>
</View>
    );
  }

  export default LoginScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffaaa',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    inputView: {
      borderBottomWidth:1,
      width: "80%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    logo:{
      marginTop: -90,
      marginBottom: 40,
        width: 100,
        height:100,
        borderRadius:50,
        padding: 30,
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    loginBtn:
 {
  width:"60%",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:30,
  marginBottom:20,
  backgroundColor:"#000000",
 },
 loginText:{
  color:'#ffffff'
 }
  });