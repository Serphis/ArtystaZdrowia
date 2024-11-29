// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAMgZL1xEjWyEXTUXInaaEb4HqiR8S207s",
    authDomain: "artystazdrowia-54567.firebaseapp.com",
    projectId: "artystazdrowia-54567",
    storageBucket: "artystazdrowia-54567.firebasestorage.app",
    messagingSenderId: "338082650089",
    appId: "1:338082650089:web:ce7d3ae9fdc4de22381d78"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);