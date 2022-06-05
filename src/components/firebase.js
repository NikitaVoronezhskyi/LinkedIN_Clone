import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore}  from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfFRQxV-kR2iP1mPhD_cF4UJ8KQwCJXLA",
    authDomain: "linkedin-rqu.firebaseapp.com",
    projectId: "linkedin-rqu",
    storageBucket: "linkedin-rqu.appspot.com",
    messagingSenderId: "161102543463",
    appId: "1:161102543463:web:07ea21ac5caed7e6ab32c2",
    measurementId: "G-T7H832MF42"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export {db,auth}

