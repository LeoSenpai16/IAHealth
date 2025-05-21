import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFZ6uBI083GomTc2IOkage4mkU2NQzNVM",
  authDomain: "iahealth-980da.firebaseapp.com",
  projectId: "iahealth-980da",
  storageBucket: "iahealth-980da.firebasestorage.app",
  messagingSenderId: "726149629800",
  appId: "1:726149629800:web:48af7f0746eaae3b64f8dd"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
