import NotFound from "./NotFound";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  const { Products = [], addToCart } = props;
  if (!Products.length) {
    return <NotFound />;
  }
  return (
    <div className="products">
      {Products.map((item) => (
        <ProductItem key={item.id} {...item} addToCart={addToCart}/>
      ))}
    </div>
  );
}
