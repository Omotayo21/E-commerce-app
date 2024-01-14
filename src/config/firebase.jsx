// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9nhTAOyxnSaqOExcpar8vzsSeqrSxknQ",
  authDomain: "my-shopping-app-dfa7b.firebaseapp.com",
  databaseURL: "https://my-shopping-app-dfa7b-default-rtdb.firebaseio.com",
  projectId: "my-shopping-app-dfa7b",
  storageBucket: "my-shopping-app-dfa7b.appspot.com",
  messagingSenderId: "313243136530",
  appId: "1:313243136530:web:ea0a2c841101cfd9a89ecb",
  measurementId: "G-FTG2KJYX61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);
export const googleProvider = new GoogleAuthProvider;



export const db = getFirestore(app);