let firebase = require('firebase')
var config = {
    apiKey: "AIzaSyCDuKCX0X_t9qn7Razot5ai8bNqGEysp5s",
    authDomain: "todo-list-d3a5f.firebaseapp.com",
    databaseURL: "https://todo-list-d3a5f.firebaseio.com",
    projectId: "todo-list-d3a5f",
    storageBucket: "todo-list-d3a5f.appspot.com",
    messagingSenderId: "966415903719"
};

firebase.initializeApp(config);
let db = firebase.firestore()
db.settings({
    timestampsInSnapshots: true
});
// Return Promises not the value itself
// Basic Read
function testWrite() {
    return db.collection("Users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
}

// Basic write
function readRoot() {
    return db.collection("Users").get()
}

module.exports = {
    db,
    testWrite,
    readRoot
}