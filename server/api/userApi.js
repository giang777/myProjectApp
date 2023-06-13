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

exports.Register = async (req, res, next) => {
    const dataUser = firebase.ref("User");
    try {
        let name = req.body.name;
        let username = req.body.username;
        let passwrd = req.body.passwrd; 
        const userLogin = await dataUser.child(username).once('value');
        
        if (userLogin.val()) {
            return res.status(401).json({
                msg: "Tài khoản đã tồn tại",
            });
        }

        let user = new UserMd();
        user.setPasswrd(passwrd);
        user.setImg("https://i.pinimg.com/originals/3c/cf/db/3ccfdba6a41cbfb82ec383439a4f0f1f.jpg");
        user.setName(name);
        user.setFavourite([]);
        user.setOrder([]);
        user.setMark(0);
        await dataUser.child(username).set(user)

        return res.status(200).json({
            data: {
                username: username,
                name:user.name,
                img:user.img,
                mark:user.mark,
            },
            msg: "thành công",
        });


    } catch (error) {
        return res.status(500).json({
            msg: "lỗi",
        });
    }
}