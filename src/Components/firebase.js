const firebase = require('firebase/app');
require('firebase/firestore');
const firebaseConfig = {
  apiKey: 'AIzaSyC9D2Cyimy3mrT0zMdkHYaOlJi4di4-yQQ',
  authDomain: 'code-for-palestine.firebaseapp.com',
  databaseURL: 'https://code-for-palestine.firebaseio.com',
  projectId: 'code-for-palestine',
  storageBucket: 'code-for-palestine.appspot.com',
  messagingSenderId: '412104065982',
  appId: '1:412104065982:web:c387af8ac309df06e7afef',
  measurementId: 'G-RTPL4ETH3R',
}; // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.firebase();
export { firebase, database as default };
