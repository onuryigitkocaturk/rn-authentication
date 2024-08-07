import { StyleSheet, Text,  View, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import Loading from '../components/Loading';
const LoginPage = ({navigation}) => {
  const [email, setName] = useState(''); 
  const [password, setLastName] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  
    return(
        <View style={styles.container}>
        
          <Image 
            source = {require('../../assets/images/loginIcon.png')}
            style = {styles.image}
          />

          <Text style={styles.welcome}>Welcome</Text>

              <Text>Email</Text>
              <TextInput
              inputMode='email'
              placeholder='Enter your e-mail'
              style={styles.textInputStyle}
              onChangeText={(value)=> setName(value)}
              value = {email}
              />
              
              <Text>Password</Text>
              <TextInput
              secureTextEntry={true}
              placeholder='Enter your password'
              style={styles.textInputStyle}
              onChangeText={(value)=> setLastName(value)}
              value={password}
              />

              <Pressable 
                onPress={()=> setIsLoading(true) }
                style={({pressed})=> [{
                  backgroundColor: pressed ? 'gray':'blue'
                },styles.button]}>
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>

              <Pressable 
                onPress={()=> navigation.navigate('SignUp')}
                style={({pressed})=> [{
                  backgroundColor: pressed ? 'gray':'blue',
                  marginTop:50,
                },styles.signupButton]}>
                <Text style={styles.buttonText}>SignUp</Text>
              </Pressable>

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
  textInputStyle:{
    borderWidth:1,
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginVertical:10,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
     
  },
  button:{
    width:'80%',
    height: 50,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontWeight:'bold',
    color:'white'
  },
  image:{
    width:100,
    height:100,
  },
  welcome:{
    fontWeight:'bold',
    fontSize:26
  },
  signupButton:{
    width:'80%',
    height: 50,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});