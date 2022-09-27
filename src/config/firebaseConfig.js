// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4JH9DUUGHtDg2oOMZYfW9vCK4knfGR8E",
  authDomain: "react-native-firebase-c4d8c.firebaseapp.com",
  projectId: "react-native-firebase-c4d8c",
  storageBucket: "react-native-firebase-c4d8c.appspot.com",
  messagingSenderId: "155470445574",
  appId: "1:155470445574:web:b06e8ef04585db767d1787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);