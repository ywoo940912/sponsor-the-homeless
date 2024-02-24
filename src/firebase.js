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
  apiKey: "AIzaSyBtrdMM9IlwuJBvCdJ329a-QluuRVyq7Oo",
  authDomain: "sponsor-the-homeless.firebaseapp.com",
  projectId: "sponsor-the-homeless",
  storageBucket: "sponsor-the-homeless.appspot.com",
  messagingSenderId: "653136299983",
  appId: "1:653136299983:web:9d43e992f43559a77734ba",
  measurementId: "G-SWRYXX6K8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);