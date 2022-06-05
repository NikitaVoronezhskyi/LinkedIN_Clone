import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCfFRQxV-kR2iP1mPhD_cF4UJ8KQwCJXLA",
    authDomain: "linkedin-rqu.firebaseapp.com",
    projectId: "linkedin-rqu",
    storageBucket: "linkedin-rqu.appspot.com",
    messagingSenderId: "161102543463",
    appId: "1:161102543463:web:07ea21ac5caed7e6ab32c2",
    measurementId: "G-T7H832MF42",
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = firebase.auth();

  export {db,auth}