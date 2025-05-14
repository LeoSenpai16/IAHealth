// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFZ6uBI083GomTc2IOkage4mkU2NQzNVM",
  authDomain: "iahealth-980da.firebaseapp.com",
  projectId: "iahealth-980da",
  storageBucket: "iahealth-980da.firebasestorage.app",
  messagingSenderId: "726149629800",
  appId: "1:726149629800:web:48af7f0746eaae3b64f8dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };