import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const UserMenu = (props) => {
    
  return (
    <View style={styles.viewBody}>
      <TouchableOpacity style={styles.viewItem}>
        <Icon name='user' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Thông tin tài khoản</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewItem}>
        <Icon name='user' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Thông tin tài khoản</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewItem}>
        <Icon name='user' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Thông tin tài khoản</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewItem}>
        <MaterialCommunityIcons name='headset' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Liên hệ</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UserMenu

const styles = StyleSheet.create({
    viewBody: {
        flex: 7,
        backgroundColor:"white",
    },
    viewItem:{
        width:"100%",
        height:50,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        alignSelf:"stretch",
        borderTopWidth:0.2,
        borderBottomWidth:0.2,
        borderColor:"lightgray",
        paddingLeft:10,
    },
    textItem:{
        fontSize:20,
        marginLeft:10,
    },
})