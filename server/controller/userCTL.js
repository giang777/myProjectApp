const firebase = require("../model/data.js");
const UserMd = require("../model/userMd.js");
exports.GetList = async (req, res, next) => {
    const data = firebase.ref("User");
    const listUser = [];
    try {
        const list = await data.once('value');

        list.forEach((item) => {
            listUser.push({
                username: item.key,
                ...item.val(),
            })
        });

    } catch (error) {
        console.log("Thất bại");
    } finally {

    }

    res.render("user/list", {
        list: listUser,
    });
}

exports.AddUser = async (req, res, next) => {
    const data = firebase.ref("User");

    try {
        let user = new UserMd();
        user.setPasswrd("123456");
        user.setImg("https://i.pinimg.com/originals/3c/cf/db/3ccfdba6a41cbfb82ec383439a4f0f1f.jpg");
        user.setName("Nguyễn Minh Giang");
        user.setFavourite([]);
        user.setOrder([]);
        user.setMark(0);

        await data.child("giang789").set(user);
        console.log("Thêm thành công");

    } catch (error) {
        console.log("Thất bại");
    }

    res.redirect("/user");
}

exports.DeleteUser = async (req, res, next) => {
    const data = firebase.ref("User");

    try {
        await data.child("giang789").remove();
        console.log("Xóa thành công");

    } catch (error) {
        console.log("Thất bại");
    }

    res.redirect("/user");
}

exports.UpdateUser = async (req, res, next) => {
    const data = firebase.ref("User");

    try {
        let user = new UserMd();
        user.setPasswrd("123456");
        user.setImg("https://i.pinimg.com/originals/3c/cf/db/3ccfdba6a41cbfb82ec383439a4f0f1f.jpg");
        user.setName("Nguyễn Minh Giang");
        user.setFavourite([{hi:123}]);
        user.setOrder([{hi:123}]);
        user.setMark(0);

        await data.child("giang789").update(user);
        console.log("Sửa thành công");

    } catch (error) {
        console.log("Thất bại");
    }

    res.redirect("/user");
}