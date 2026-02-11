import ProductCard from "./components/ProductCard";
function App(){

  const products = [
    {
      id : 1 ,
      name : "iphone",
      price : 80000,
      description : "Latest Apple smart phone"
    },
    {
      id : 2 ,
      name : "samsung",
      price : 70000,
      description : "Latest Samsung smart phone"
    },
    {
      id : 3 ,
      name : "realme",
      price : 50000,
      description : "Latest realme smart phone"
    }
  ];
  return (
    <>
      <h1 className="title">Product store</h1>
      {products.map((product) => (<ProductCard key ={product.id} name={product.name} price={product.price} description = {product.description} />))}
    </>
    
  );
}

export default App;