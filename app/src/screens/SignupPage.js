import { StyleSheet, Text, View, SafeAreaView, Image, Pressable} from 'react-native'
import React, { useState } from 'react'
import  CustomTextInput  from "../components/CustomTextInput"
import CustomButton from "../components/CustomButton"
const SignupPage = ({navigation}) => {

  const [name, setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Image style={styles.image} source={require("../../assets/images/signup.png")}/>
          <Text style={styles.signUp}>Sign Up</Text>
        </View>
        
        <View style={styles.textInputContainer}>
          <CustomTextInput
            title="Name"
            isSecureText={false}
            handleOnChangeText={setName}
            handleValue={name}
            handlePlaceholder="Enter your name!"
          />

          <CustomTextInput
              title="Email"
              isSecureText={false}
              handleOnChangeText={setEmail}
              handleValue={email}
              handlePlaceholder="Enter your email!"
            />
          <CustomTextInput
              title="Password"
              isSecureText={true}
              handleOnChangeText={setPassword}
              handleValue={password}
              handlePlaceholder="Enter your password!"
            />

        </View>
        <View style={styles.signUpOptions}>
          <CustomButton
            buttonText="Sign Up"
            setWidth="80%"
            buttonColor="blue"
            pressedButtonColor="gray"
            handleOnPress={()=>console.log(name," ",email, " ", password)}
          />
          <Pressable onPress={()=>navigation.navigate("Login")}>
            <Text style={{fontWeight:"bold", fontSize:10}}>Already have an account? Click here to Login! :) </Text>
          </Pressable>

        </View>
    </SafeAreaView>
  )
}

export default SignupPage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    signUp:{
      fontWeight:'bold',
      fontSize:32,
    },
    textInputContainer:{
      flex:2,
      width:"100%",
      alignItems: 'center',
      justifyContent:"space-between"
    },
    title:{
      flex:2,
      paddingTop:50,
      width:"100%",
      alignItems:"center"
    },
    signUpOptions:{
      flex:3,
      width:"100%",
      alignItems:"center",
      marginTop:110
    },
    image:{
      width:100,
      height:100,
      marginBottom:20,
      
    }
})

