import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import {
  fetchProductFailure,
  fetchProductStart,
  fetchProductSuccess,
} from "./slice";

const productRef = collection(db, "products");

const getProducts = () => async (dispatch) => {
  dispatch(fetchProductStart());

  try {
    let data = [];
    const querySnapshots = await getDocs(productRef);
    querySnapshots.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
      dispatch(fetchProductSuccess(data));
    });
    console.log(querySnapshots);
  } catch (err) {
    dispatch(fetchProductFailure(err));
  }
};

const addProduct = (payload) => async () => {
  try {
    const newData = {
      available: true,
      image: "https://placehold.co/300",
      ...payload,
    };

    const docRef = await addDoc(productRef, newData);
    console.log(docRef);
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = (id) => async () => {
  try {
    const docRef = doc(db, "products", id);
    console.log(docRef.id);
    await deleteDoc(docRef);
  } catch (err) {
    console.log(err);
  }
};

export { getProducts, addProduct, deleteProduct };
