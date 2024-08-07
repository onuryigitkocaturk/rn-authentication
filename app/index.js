import { StyleSheet, Text,  View, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';

export default function App(){
  const [name, setName] = useState(''); 
  const [lastName, setLastName] = useState('');
  const [result, setResult]= useState('');
  
    return(
        <View style={styles.container}>
        
          <Image 
            source = {require('./assets/images/loginIcon.png')}
            style = {styles.image}
          />

          <Text>Welcome {result}</Text>

              <Text>Name</Text>
              <TextInput
              placeholder='Enter your name'
              style={styles.textInputStyle}
              onChangeText={(value)=> setName(value)}
              value = {name}
              />
              
              <Text>Last Name</Text>
              <TextInput
              placeholder='Enter your last name'
              style={styles.textInputStyle}
              onChangeText={(value)=> setLastName(value)}
              value={lastName}
              />

              <Pressable 
                onPress={()=> setResult(name + ' ' + lastName) }
                style={({pressed})=> [{
                  backgroundColor: pressed ? 'gray':'blue'
                },styles.button]}>
                <Text style={styles.buttonText}>Save</Text>
              </Pressable>

        </View>
    );
}

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
    color: 'blue',
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
  }
});