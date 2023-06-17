import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import { collection, getDocs, query, where  } from "firebase/firestore";
import { db } from "../Firebase/Config.js";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    const productsRef = collection(db, "Products");
    const q = category ? query(productsRef, where("category", "==", category)) :productsRef;
    getDocs(q)
      .then((resp) => {
        setProducts(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
      );
    });
  }, [category]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
