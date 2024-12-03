import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function AdminNavbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate("/login");
            })
            .catch((error) => {
                // An error happened.
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                });
            });
    };
    return (
        <div className="navbar bg-gray-200">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
