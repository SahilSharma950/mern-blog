// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-4a8c0.firebaseapp.com",
  projectId: "mern-blog-4a8c0",
  storageBucket: "mern-blog-4a8c0.appspot.com",
  messagingSenderId: "81254013449",
  appId: "1:81254013449:web:cbf2952ddb952f664136d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);