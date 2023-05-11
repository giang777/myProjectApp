const admin = require("firebase-admin");

const serviceAccount = require("../model/myproject-7e098-firebase-adminsdk-nek1b-d39219a788.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://myproject-7e098-default-rtdb.firebaseio.com"
});

const firebase = admin.database();
module.exports = firebase;
//kết nối firebase