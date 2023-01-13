// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmFSJgXeMze_m-_pZHcjj0z8sMlgD0JvI",
    authDomain: "e-commerce-website-a8c0c.firebaseapp.com",
    projectId: "e-commerce-website-a8c0c",
    storageBucket: "e-commerce-website-a8c0c.appspot.com",
    messagingSenderId: "113781599693",
    appId: "1:113781599693:web:cccfc770dc96084e0ea884",
    measurementId: "G-QRLLRLK8WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initialize Firebase App
export const auth = getAuth(app); // Authorization variable that authorizes requests
export const db = getFirestore(app); // Database variable for Firestore
export const storage = getStorage(app); // Storage variable for Firebase Storage

