import CartItem from "./CartItem";

export default function CartList(props) {
  const { order } = props;
  return (
    <div>
      <ul className="collection">
        <li className="collection-item active">Carts</li>
        {order.length ? order.map(item => {
            <CartItem key={item.id} {...item}/>
        }) : <li className="collection-item">Cart is empty</li> }
        <li className="collection-item active">Total Cost:</li>
      </ul>
    </div>
  );
}
