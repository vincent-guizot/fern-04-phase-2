import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

function LogOut() {
  const signOutHandler = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={signOutHandler}>LogOut</button>
    </div>
  );
}

export default LogOut;
