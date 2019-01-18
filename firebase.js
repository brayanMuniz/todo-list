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
const db = firebase.database()
// Return Promises not the value itself
// Basic Read
function readRoot() {
    return db.ref('/').once('value')
}

// Basic write
function testWrite() {
    return db.ref('/').set({
        test: {
            name: 'helo',
            worked: true
        }
    })
}

module.exports = {
    db,
    testWrite,
    readRoot
}