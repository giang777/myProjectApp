import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CheckBox } from 'react-native-elements'

const Register = (props) => {
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
                            {/*name*/}
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
                                    placeholder='Nhập tên đăng nhập'
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
                            {/*Username*/}
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
                                    secureTextEntry={true}
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
                                    placeholder='Nhập lại mật khẩu'
                                    secureTextEntry={true}
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
                                />
                            </View>

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
                        >
                            <Text
                                style={{
                                    fontSize:17,
                                    fontWeight:"700",
                                    color:"white",
                                }}
                            >Đăng Ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewFooter}>
                    {/*View footer */}
                    <Text
                        style={{
                            fontSize: 15,
                        }}
                    >Đã có tài khoản ?</Text>
                    <TouchableOpacity 
                        onPress={()=>{props.navigation.navigate("Login")}}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "900",
                                color: "black",
                                marginTop: 20
                            }}
                        >Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register

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