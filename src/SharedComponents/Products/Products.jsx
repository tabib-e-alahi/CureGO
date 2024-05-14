import Product from "./Product";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import './Product.css'
import { useContext } from "react";
import { ConcernContext } from "../../hooks/ConcernProvider";
const Products = () => {
  const {selectedConcern} = useContext(ConcernContext)
  const axiosPublic = useAxiosPublic()
  // =========== tanstack query ==================
  const { data: products = [],isPending: loading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
        const res = await axiosPublic.get('/products');
        return res.data;
    }
})



  const filteredProducts = selectedConcern
    ? products.filter((product) =>
        product.skin_concerns.includes(selectedConcern)
      )
    : products;

  console.log(filteredProducts.length)

  return (
    <>
    {
      loading ? <div className="loader my-44 mx-auto"></div> 
      :
      <div className="my-16 w-11/12 mx-auto pt-10">
      
      <h1 className="text-center text-5xl font-semibold font-serif text-black mb-16">
        All in One
      </h1>
      <div className="grid grid-cols-4 gap-x-6 gap-y-20 ">
        {
            filteredProducts?.map(product => <Product key={product?._id} product={product}></Product>)
        }
      </div>
    </div>
    }
    </>
  );
};

export default Products;
