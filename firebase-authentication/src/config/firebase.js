import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLl1MA4ol9z8KdUX8jZumbIfBbuJwIdSs",
  authDomain: "fern-4-phase-2.firebaseapp.com",
  projectId: "fern-4-phase-2",
  storageBucket: "fern-4-phase-2.firebasestorage.app",
  messagingSenderId: "694997663191",
  appId: "1:694997663191:web:0d2ad11c8ac264fe249f92",
  measurementId: "G-36BQ6R73CY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
