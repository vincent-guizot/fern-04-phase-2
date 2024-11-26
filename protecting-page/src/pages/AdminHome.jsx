import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function AdminHome() {
    const navigate = useNavigate();
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                // ...
                console.log(uid, "< uid");
            } else {
                // User is signed out
                // ...
                navigate("/login");
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return <h1>Admin</h1>;
}
