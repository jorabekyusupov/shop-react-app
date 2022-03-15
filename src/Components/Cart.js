export default function Cart(props) {
  const { quantity = 0 , handleCartShow = Function.prototype } = props;
  return (
    <div className="cart light-blue white-text" onClick={handleCartShow}>
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
