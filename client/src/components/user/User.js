import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import UserLogin from './UserLogin'
import UserMenu from './UserMenu'


const User = (props) => {
  return (
    <View style={styles.container}>
       <UserLogin onPress={()=>{props.navigation.navigate("Login")}}/>
       <UserMenu/>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


  
})