export default function CartItem(props) {
    const {id, name, price, quantity} = props;
    return (
        <li className="collection-item">
            {name} x{quantity} = {price * quantity } $
            <span className="secondary-content">
        <i className="material-icons delete-item" onClick={() => props.removeCartItem(id)}>delete_forever</i>
      </span>
        </li>
    );
}
