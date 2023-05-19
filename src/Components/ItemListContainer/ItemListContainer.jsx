import { useEffect, useState } from "react";
import data from "../../Data/data.json";
import "./ItemListContainer.css"
import { Link, useParams } from "react-router-dom";

const askData = () => {
  return new Promise((resolve, reject) => {
      setTimeout( () => {
          resolve(data);
      }, 500)
  })
}

const Item = ( {product} ) => {
  return (
      <div>
        <img src={product.img} alt="Product"/>
        <div>
          <h4>{product.name}</h4>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <Link to={`/item/${product.id}`}>See more</Link>
        </div>
      </div>
  )
}

const ItemList = ( {products} ) => {

  return (
    <div>
        <div>
            { products.map((prods) => <Item product={prods} key={prods.id} />) }
        </div>
    </div>
  )
}

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const category = useParams().category;

    useEffect(() => {
        askData()
            .then((res) => {
              if (category){
                setProducts( res.filter((prods) => prods.category === category) );
              } else {
              setProducts(res);
              }
            })
    }, [category])
    
    
  return (
    <div>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer