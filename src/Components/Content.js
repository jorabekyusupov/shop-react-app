import {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import Cart from "./Cart";
import CartList from "./CartList";
import Loader from "./Loader";
import ProductList from "./ProductList";
import {toast} from "react-toastify";

export default function Content() {
    const [Product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartShow, setCartShow] = useState(false);

    const incrementQuantity = (itemID) => {
        const newOrder = order.map(el => {
            if (el.id === itemID) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    };
    const decrementQuantity = (itemID) => {
        const newOrder = order.map(el => {
            if (el.id === itemID) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity > 0 ? newQuantity : 1
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const removeCartItem = (itemID) => {
        const newOrder = order.filter(item => item.id !== itemID);
        setOrder(newOrder);
        toast.error('successfully deleted')
    }

    const addToCart = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item, quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem, quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        toast.success('Successfully added')
    };

    const handleCartShow = () => {
        setCartShow(!isCartShow);
    }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setProduct(data.featured);
                setLoading(false);
            });
    }, []);

    return (<div className="content container">
        <Cart quantity={order.length} handleCartShow={handleCartShow}/>
        {loading ? (<Loader/>) : (<ProductList Products={Product} addToCart={addToCart}/>)}
        {
            isCartShow && <CartList
                order={order}
                handleCartShow={handleCartShow}
                removeCartItem={removeCartItem}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}/>
        }
    </div>);
}
