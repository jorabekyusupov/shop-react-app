export default function CartItem(props) {
    const {id, name, price, quantity, decrementQuantity, incrementQuantity} = props;
    return (<li className="collection-item">
        {name} x{quantity} = {price * quantity} $
        <span className="secondary-content">
            <button className="btnCustom light-blue" onClick={()=>{incrementQuantity(id)}}><i className="material-icons">exposure_plus_1</i></button>
            <button className="btnCustom light-blue" onClick={()=>{decrementQuantity(id)}}><i className="material-icons">exposure_minus_1</i></button>
        <i className="material-icons delete-item" onClick={() => props.removeCartItem(id)}>delete_forever</i>
      </span>
    </li>);
}
