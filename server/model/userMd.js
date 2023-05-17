class UserMd{

    constructor(passwrd,name,img,favourite,order,mark){
        this.passwrd = passwrd;
        this.name = name;
        this.img = img;
        this.favourite = favourite;
        this.order = order;
        this.mark = mark;
    }

    getPasswrd(){
        return this.passwrd;
    }

    setPasswrd(passwrd){
        this.passwrd = passwrd;
    }


    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getImg(){
        return this.img;
    }

    setImg(img){
        this.img= img;
    }

    getFavourite(){
       return [...this.favourite];
    }

    setFavourite(favourite){
        this.favourite = [...favourite];
    }

    getOrder(){
        return [...this.order];
    }
 
    setOrder(order){
         this.order = [...order];
    }

    getMark(){
        return this.mark;
    }

    setMark(mark){
        this.mark = mark;
    }

}

module.exports = UserMd;