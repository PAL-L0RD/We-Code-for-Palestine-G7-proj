const firebase = require("firebase/app");
// Required for side-effects
require("firebase/auth")
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyBOFNQsjqeIPYKu88U7y22uAVDpCKYe8sk",
    authDomain: "code-for-palestine-messeges.firebaseapp.com",
    databaseURL: "https://code-for-palestine-messeges.firebaseio.com",
    projectId: "code-for-palestine-messeges",
    storageBucket: "code-for-palestine-messeges.appspot.com",
    messagingSenderId: "121281191547",
    appId: "1:121281191547:web:ee491a648458f6ad20ccde"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var auth= firebase.auth()
var db = firebase.firestore();
export { firebase, db as default , auth};
