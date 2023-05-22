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
    //tạo phân trang
    const currentPage = parseInt(req.query.page) || 1;
    const itemPage = 5;
    const startIndex = (currentPage - 1) * itemPage;
    const endIndex = startIndex + itemPage;

    const totalItems = listUser.length;
    const totalPages = Math.ceil(totalItems / itemPage);
    const listPage = listUser.slice(startIndex, endIndex);

    res.render("user/list", {
        list: listUser.length <= 5 ? listUser : listPage,
        sizeList : listUser.length,
        count: totalPages,
        set: currentPage,
        check : req.query.page ? parseInt(req.query.page) : 1,
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
        user.setFavourite([{ hi: 123 }]);
        user.setOrder([{ hi: 123 }]);
        user.setMark(0);

        await data.child("giang789").update(user);
        console.log("Sửa thành công");

    } catch (error) {
        console.log("Thất bại");
    }

    res.redirect("/user");
}