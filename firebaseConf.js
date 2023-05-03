// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGwPUtMwurKiJSfm06UId57wJwDvdzIE4",
  authDomain: "massolar-cc7cb.firebaseapp.com",
  projectId: "massolar-cc7cb",
  storageBucket: "massolar-cc7cb.appspot.com",
  messagingSenderId: "1082828056583",
  appId: "1:1082828056583:web:0546e3ee50b490a0b862a2",
  measurementId: "G-JH03VKJ7LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);