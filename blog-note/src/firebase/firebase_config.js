// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2GJNB0kDRlnVNKECTQpUwlf-g1kVXt4M",
  authDomain: "blog-notes-52867.firebaseapp.com",
  projectId: "blog-notes-52867",
  storageBucket: "blog-notes-52867.firebasestorage.app",
  messagingSenderId: "1029182117092",
  appId: "1:1029182117092:web:e7c0b490a790f8b16288f1",
  measurementId: "G-YD09201ZL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);