const firebase = require("../model/data.js");
const UserMd = require("../model/userMd.js");

exports.Get = async (req, res, next) => {
    const dataUser = firebase.ref("User");
    const listUser = [];
    try {
        const list = await dataUser.once("value");

        list.forEach((item) => {
            listUser.push({
                username: item.key,
                ...item.val(),
            })
        });

        return res.status(200).json({
            data: listUser,
            msg: "thành công",
        });
    } catch (error) {
        return res.status(500).json({
            msg: "lỗi",
        });
    }
}

exports.CheckLogin = async (req, res, next) => {
    const dataUser = firebase.ref("User");
    try {
        let username = req.body.username;
        let passwrd = req.body.passwrd; console.log(passwrd);
        const userLogin = await dataUser.child(username).once('value');
        
        if (userLogin.val()) {
            if (passwrd == userLogin.val().passwrd) {
                return res.status(200).json({
                    data: {
                        username: username,
                        ...userLogin.val(),
                    },
                    msg: "thành công",
                });
            }

            return res.status(401).json({
                msg: "không thành công",
            });
        }

        return res.status(401).json({
            msg: "không thành công",
        });


    } catch (error) {
        return res.status(500).json({
            msg: "lỗi",
        });
    }
}