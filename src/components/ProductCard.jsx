function ProductCard(props){
    return (

        <div className="card">
            <h2>{props.name}</h2>
            <p>Price : {props.price}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default ProductCard;