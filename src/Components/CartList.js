import CartItem from "./CartItem";

export default function CartList(props) {
    const {order, incrementQuantity, decrementQuantity} = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);
    return (
        <div className="cart_list">
            <div className="basket-list">
                <ul className="collection">
                    <li className="collection-item active light-blue">Carts</li>
                    {order.length ? order.map(item => {
                        return (
                            <CartItem
                                key={item.id} {...item}
                                removeCartItem={props.removeCartItem}
                                decrementQuantity={decrementQuantity}
                                incrementQuantity={incrementQuantity}
                            />
                        )
                    }) : <li className="collection-item">Cart is empty</li>}
                    <li className="collection-item active light-blue">Total Cost: {totalPrice} $</li>
                </ul>
                <i className="material-icons basket-close" onClick={props.handleCartShow}>close</i>
            </div>
        </div>
    );
}
