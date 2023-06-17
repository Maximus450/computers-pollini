import Item from "./Item";
import "../Main.css"

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="products">
        {products.map((prods) => (
          <Item product={prods} key={prods.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
