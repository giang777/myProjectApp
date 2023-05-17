const firebase = require("../model/data.js");

exports.GetList = async (req,res,next)=>{
    
    const data = firebase.ref("User");
    const list =  await data.once('value');
    const listUser = [];
    list.forEach((item)=>{
        listUser.push({
            id:item.key,
            ...item.val(),
        })
    });
    //console.log(listUser);

    res.render("home/home",{
    });
}