import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'

const UserLogin = (props) => {
    return (
        <View style={styles.viewHeader}>
            <Image source={{ uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSG9AqhrfEd6g5LJum8-nRFoWaGMjdtE7AZYu9cASqDFKRUQrJpF51kqXJvinadFv7zWFIq-Kx90tpmTQpVkZZoFAvay5Ue2b2_PuZt5OCuDPD0Qyo_CKk0JL00VzAFnGnbSANWJhoPBIciy74Kqsy2_rs4-RWTm6rKkrjSoevEZiOjOTy8XwT8HJf/s650/cach-dat-anh-mat-dinh-fb-don-gian-nhanh-chong-1.png" }} style={styles.img} />
            <TouchableOpacity style={styles.viewTextLogin}>
                <Text style={styles.textLogin}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserLogin

const styles = StyleSheet.create({
    viewHeader: {
        flex: 3,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },

    img: {
        width: 150,
        height: 150,
        alignSelf: "center",
        borderRadius: 100,
    },

    viewTextLogin:{
        alignSelf:"center",
    },

    textLogin:{
        fontSize:35,
        fontWeight:"700",
        color:"#0099ff",
    }
})