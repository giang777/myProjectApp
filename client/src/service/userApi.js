import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const userApi = async (tk, mk) => {
    const user = { username: tk, passwrd: mk };
    try {


        const api = await fetch('http://192.168.1.10:3000/apiUser/checkLogin', {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        const CheckLogin = await api.json();
        if (api.status == 200) {
            const userLogin = CheckLogin.data;
            return userLogin;
        }

        return null;


    } catch (error) {
        return null;
    }


}

export default { userApi }

