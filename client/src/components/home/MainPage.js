import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const MainPage = () => {

  const userLogin = useSelector((state)=> state.userLogin);
  console.log(userLogin);
  if(userLogin.name){
    console.log(true);
  }else{
    console.log(false);
  }
  return (
    <View>
      <Text>main</Text>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({})