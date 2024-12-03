//AdminHome.jsx
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
export default function AdminHome() {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!loading) {
            console.log(user, "user");
            if (!user) {
                navigate("/login");
            }
        }
    }, [navigate, loading]);
    if (loading) {
        return <h1>Loading...</h1>;
    }
    return <h1>Admin</h1>;
}
