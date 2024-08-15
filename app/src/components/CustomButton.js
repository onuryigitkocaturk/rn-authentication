import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({buttonText, setWidth, handleOnPress}) => {
  return (
    <Pressable 
        onPress={()=> handleOnPress() }
        style={({pressed})=> [{
        backgroundColor: pressed ? 'gray':'blue',
        width: setWidth,
        },styles.button]}>
        <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        height: 50,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:5
    },
    buttonText:{
        fontWeight:'bold',
        color:'white'
      }
})