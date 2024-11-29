import React, { useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
export default function AdminHome() {
  const { user, loading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate("/login");
      }
      async function getData() {
        const data = [];
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            ...doc.data(),
          });
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
        setProducts([...data]);
      }
      getData();
    }
  }, [navigate, loading]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl">Admin</h1>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.name}
                src={product.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
