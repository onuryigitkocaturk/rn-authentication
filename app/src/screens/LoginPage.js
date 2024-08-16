import { StyleSheet, Text,  View, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import Loading from '../components/Loading';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  
    return(
        <View style={styles.container}>
    
          <Text style={styles.welcome}>Welcome!</Text>
          <Image 
            source = {require('../../assets/images/loginIcon.png')}
            style = {styles.image}
          />

          <CustomTextInput
            title="Email"
            isSecureText={false}
            handleOnChangeText={setEmail}
            handleValue={email}
            handlePlaceholder="Enter your email"
            />
          
          <CustomTextInput
            title="Password"
            isSecureText={true}
            handleOnChangeText={setPassword}
            handleValue={password}
            handlePlaceholder="Enter your password"
            />
          
          <CustomButton
            buttonText="Login"
            setWidth= "80%"
            handleOnPress={()=> setIsLoading(true)}
          />

           <CustomButton
            buttonText="SignUp"
            setWidth= "30%"
            handleOnPress={()=> navigation.navigate('SignUp')}
          />
              {isLoading 
                ? <Loading changeIsLoading={()=>setIsLoading(false)}/> 
                : null}
        </View>
    );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputContainer:{
    width:'80%',
  },
  image:{
    width:100,
    height:100,
    marginBottom:40
  },
  welcome:{
    fontWeight:'bold',
    fontSize:32,
  },
  signupButton:{
    width:'40%',
    height: 50,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center'
  },
});