import firebase from 'firebase'


var config = {
    apiKey: "AIzaSyAZEfgb9ChDp5E8-ZW7aptbYkKAFF8SzjU",
    authDomain: "todolist-homework.firebaseapp.com",
    databaseURL: "https://todolist-homework.firebaseio.com",
    projectId: "todolist-homework",
    storageBucket: "todolist-homework.appspot.com",
    messagingSenderId: "205831335819"
};
firebase.initializeApp(config);

export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

