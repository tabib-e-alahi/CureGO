import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  

  return (
    <div className="m-10">
      <h1 className="text-center text-5xl font-semibold font-serif mb-20">
        All in One
      </h1>
      <div className="grid grid-cols-5 gap-6 ">
        {
            products?.map(product => <Product key={product?.id} product={product}></Product>)
        }
      </div>
    </div>
  );
};

export default Products;
