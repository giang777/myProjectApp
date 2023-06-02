import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CheckBox } from 'react-native-elements'
import userApi from '../../service/userApi'
import {useSelector,useDispatch} from "react-redux";
import userSlice from '../../redux/userSlice'

const Login = (props) => {
    const [username, setusername] = useState('');
    const [passwrd, setpasswrd] = useState('');

    const userLogin = useSelector((state)=> state.userLogin);//lấy dữ liệu từ redux
    const dispatch = useDispatch();//cập nhật dữ liệu trong redux
    
    const CheckLogin = async ()=>{
        const user = await userApi.userApi(username,passwrd); // lưu vào redux
        if(user){
            dispatch(userSlice.actions.update(user));
            return props.navigation.navigate("Home");
        }

        return alert("Tài khoản hoặc mật khẩu không đúng !","Thông báo");
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewMain}>
                <Text
                    style={{
                        fontSize: 40,
                        fontWeight: '900',
                        marginVertical: 20,
                    }}
                >MangaKa</Text>
                <View style={styles.viewBody}>
                    {/*View body */}
                    <View style={styles.viewBodyTop}>
                        {/*Top */}
                        <View
                            style={{
                                width: "100%",
                                borderBottomColor: "gray",
                                borderBottomWidth: 1,
                            }}
                        >
                            {/*username */}
                            <View
                                style={{
                                    width: "100%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    padding: 10
                                }}
                            >
                                <Icon name='user' size={20} color={'grey'} />
                                <TextInput
                                    style={{
                                        width: "100%",
                                        height: 30,
                                        marginLeft: 20
                                    }}
                                    placeholder='Nhập tài khoản'
                                    onChangeText={(value)=>{setusername(value)}}
                                />
                            </View>

                        </View>

                        <View
                            style={{
                                width: "100%",
                                borderBottomColor: "gray",
                                borderBottomWidth: 1,
                                marginTop: 40
                            }}
                        >
                            {/*password */}
                            <View
                                style={{
                                    width: "100%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    padding: 10
                                }}
                            >
                                <Icon name='key' size={20} color={'grey'} />
                                <TextInput
                                    style={{
                                        width: "100%",
                                        height: 30,
                                        marginLeft: 20
                                    }}
                                    placeholder='Nhập mật khẩu'
                                    secureTextEntry={true}
                                    onChangeText={(value)=>{setpasswrd(value)}}
                                />
                            </View>

                        </View>

                        <View 
                            style={{
                                width: "100%",
                                flexDirection:"row",
                                justifyContent:"space-between",
                                marginTop:30,
                            }}
                        >
                            <CheckBox
                                size={20}
                                checked={true}
                                title="Lưu mật khẩu"
                            />
                            <TouchableOpacity>
                                <Text
                                    style={{
                                        fontSize:15,
                                        fontWeight:"900"
                                    }}
                                >Quên mật khẩu ?</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={{
                                width:"100%",
                                height:40,
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:30,
                                backgroundColor:"aqua",
                                borderRadius:10,
                            }}
                            onPress={CheckLogin}
                        >
                            <Text
                                style={{
                                    fontSize:17,
                                    fontWeight:"700",
                                    color:"white",
                                }}
                            >Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewBodyBottom}>
                        {/*Bottom */}
                        <Text>Hoặc đăng nhập bằng</Text>
                        <View
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                marginTop: 20
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    height: 40,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20,
                                    backgroundColor: "blue",
                                }}
                            >
                                <Icon name='facebook' size={25} color={'#fff'} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    height: 40,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20,
                                    backgroundColor: "red",
                                }}
                            >
                                <Icon name='google' size={25} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.viewFooter}>
                    {/*View footer */}
                    <Text
                        style={{
                            fontSize: 15,
                        }}
                    >Chưa có tài khoản ?</Text>
                    <TouchableOpacity 
                        onPress={()=>{props.navigation.navigate("Register")}}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "900",
                                color: "black",
                                marginTop: 20
                            }}
                        >Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aqua',
    },
    viewMain: {
        flex: 1,
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 10,
        alignItems: "center"

    },
    viewBody: {
        flex: 4,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    viewFooter: {
        flex: 2,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    viewBodyTop: {
        flex: 5,
        width: "100%",
        padding: 80,
    },
  
    viewBodyBottom: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
})