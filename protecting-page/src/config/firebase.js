import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIc3iS40WShqAJB0EXz2RybRyrT80rtSs",
  authDomain: "protecting-page-fern4.firebaseapp.com",
  projectId: "protecting-page-fern4",
  storageBucket: "protecting-page-fern4.firebasestorage.app",
  messagingSenderId: "697125116606",
  appId: "1:697125116606:web:2b28e27df2d0c8eb071cef",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
