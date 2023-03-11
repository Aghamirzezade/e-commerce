// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {signInWithEmailAndPassword,getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgS0Cw2np6Fv2EuUkcb__gv1IeVzzD13o",
  authDomain: "aga-ecommerce.firebaseapp.com",
  projectId: "aga-ecommerce",
  storageBucket: "aga-ecommerce.appspot.com",
  messagingSenderId: "300635718814",
  appId: "1:300635718814:web:72d914d709233b5b21e78f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });