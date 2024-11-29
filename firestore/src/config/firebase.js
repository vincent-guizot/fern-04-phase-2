import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoHSIh3amZ9yMeUSGR8NoeCfmRgdgg-Qk",
  authDomain: "product-fern.firebaseapp.com",
  projectId: "product-fern",
  storageBucket: "product-fern.firebasestorage.app",
  messagingSenderId: "328566385626",
  appId: "1:328566385626:web:3cd310b1565f4be9d22ee3",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
