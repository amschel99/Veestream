// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "veestream-f7d76.firebaseapp.com",
  projectId: "veestream-f7d76",
  storageBucket: "veestream-f7d76.appspot.com",
  messagingSenderId: "299018846796",
  appId: "1:299018846796:web:1badbccae834842b13aae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);