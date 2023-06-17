import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/Config.js";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "Products", id);

    getDoc(docRef).then((resp) => {
      setItem({
        ...resp.data(),
        id: resp.id,
      });
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
