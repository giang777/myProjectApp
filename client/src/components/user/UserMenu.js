import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const UserMenu = (props) => {
    
  return (
    <View style={styles.viewBody}>
      <Text style={styles.textView}>Chi tiết</Text>
      <TouchableOpacity style={styles.viewItem}>
        <MaterialCommunityIcons name='cart' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Sản phẩm đã mua</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewItem}>
        <Icon name='bell' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Thông báo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewItem}>
        <Icon name='heart' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Sản phẩm yêu thích</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewItem}>
        <Icon name='map' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Số địa chỉ</Text>
      </TouchableOpacity>

      <Text style={styles.textView}>Hộ trợ</Text>
      <TouchableOpacity style={styles.viewItem}>
        <MaterialCommunityIcons name='note' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Chính sách & điều khoản</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewItem}>
        <MaterialCommunityIcons name='headset' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Liên hệ</Text>
      </TouchableOpacity>
      

      <Text style={styles.textView}>Thiết lập</Text>
      <TouchableOpacity style={styles.viewItem}>
        <Icon name='user' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Thông tin tài khoản</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewItem}>
        <Icon name='lock' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewItem}>
        <MaterialCommunityIcons name='logout' size={25} color={"gray"}/>
        <Text style={styles.textItem}>Đăng xuất</Text>
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

    textView:{
      fontSize:25,
      color:"#0099ff",
      marginBottom:10,
      marginTop:10,
      marginLeft:10,
    }
})