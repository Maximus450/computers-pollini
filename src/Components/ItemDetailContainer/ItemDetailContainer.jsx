import { useEffect, useState } from "react"
import data from "../../Data/data.json";
import { useParams } from "react-router-dom";

const askDataPerId = (id) => {
  return new Promise((resolve, reject) => {
      
    const item = data.find((el) => el.id === id);

      if (item) {
        resolve(item);
      } else {
        reject({
          error: "Product not found"
        })
      }

  })
}

const ItemDetail = ( {item} ) => {
  return (
    <div>
      <div>
        <img src={item.img} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Category: {item.category}</p>
          <p>${item.price}</p>
        </div>
      </div>
    </div>
  )
}

const ItemDetailContainer = ( {itemId} ) => {

  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    askDataPerId(Number(id))
      .then((res) => {
        setItem(res);
      })
    }, [id])
    

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer