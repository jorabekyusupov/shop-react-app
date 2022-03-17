export default function ProductItem(props){
    const {id, name, description, price, full_background, addToCart} = props
    return(
        <div className="card">
            <div className="card-image">
                <img src={full_background }  />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action" >
                <button className="btn light-blue"  onClick={()=>addToCart({id, name, price})}>BUY</button>
                <span className="right">{price} $</span>
            </div>
        </div>
    );
} 