// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzv0G7z-Ol4gTyaoshXtF-ESAei4BNStY",
  authDomain: "bill-managment-system.firebaseapp.com",
  projectId: "bill-managment-system",
  storageBucket: "bill-managment-system.firebasestorage.app",
  messagingSenderId: "126734298591",
  appId: "1:126734298591:web:4faeb21ad0e4000c2de86a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);