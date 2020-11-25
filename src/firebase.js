import firebase from 'firebase/app'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
    apiKey: "bt1J2WMuE8JJeN5WsA1v8DxhXBezXy1STMy38flt2foc",
    authDomain: "tissini-7027b.firebaseapp.com",
    databaseURL: "https://tissini-7027b.firebaseio.com",
    projectId: "tissini-7027b",
    storageBucket: "tissini-7027b.appspot.com",
    messagingSenderId: "980541466200",
    appId: "1:980541466200:web:3cf690b61e2bc186d28c2d",
    measurementId: "G-7CEFZKM0JS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()
  const functions = firebase.functions()

  export{
      firebase,
      auth,
      db,
      storage,
      functions
  }