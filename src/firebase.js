// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authentication-3e4ef.firebaseapp.com",
  projectId: "authentication-3e4ef",
  storageBucket: "authentication-3e4ef.appspot.com",
  messagingSenderId: "1086383008330",
  appId: "1:1086383008330:web:d4d705708899b85f9914b3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
