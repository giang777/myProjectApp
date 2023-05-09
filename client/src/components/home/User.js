import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'

const User = (props) => {
  return (
    <View style={styles.container}>
      <Text>User</Text>
      <Button title="Đăng xuất" onPress={()=>{props.navigation.navigate("Login")}}/>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
})