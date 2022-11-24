import {React , useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,TextInput,Button ,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inputs from './inputs.js'

export default function FinalScreen() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.titleText}>HoneY</Text>
        <Text style={styles.headerText}>Final details before your account is setup</Text>
        <View style={styles.inputView}>
        <TextInput
            style={styles.TextInput}
            placeholder="Full Names"
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setName(name)}
        />
        </View>

        <View style={styles.inputView}>
        <TextInput
            style={styles.TextInput}
            placeholder="Phone Number"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(phone) => setPhone(phone)}
        />
        </View>

<TouchableOpacity style={styles.loginBtn}>
  <Text style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>
<Text style={styles.headerText}>I agree to terms of service and policy privacy</Text>
   </View>
    );
  }

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
 },
 headerText:{
    marginBottom:20,
    fontSize:11,
    fontStyle:"italic"
 }
  });