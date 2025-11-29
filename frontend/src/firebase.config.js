// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, PhoneAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGl95_XisgyqQXfbnQCkNqYSxk8jobgxM",
    authDomain: "softcart-tech.firebaseapp.com",
    projectId: "softcart-tech",
    storageBucket: "softcart-tech.firebasestorage.app",
    messagingSenderId: "71474571294",
    appId: "1:71474571294:web:8c314bba44f2df332ee60f" // Inferred web app ID or placeholder, usually safe to infer for basic auth
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
