import Product from "./Product";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const axiosPublic = useAxiosPublic()
  const { data: products = [],isPending: loading } = useQuery({
    queryKey: ['camps'],
    queryFn: async () => {
        const res = await axiosPublic.get('/products');
        return res.data;
    }
})
  

  return (
    <div className="my-10 w-11/12 mx-auto pt-10">
      <h1 className="text-center text-5xl font-semibold font-serif text-black mb-16">
        All in One
      </h1>
      <div className="grid grid-cols-4 gap-x-6 gap-y-20 ">
        {
            products?.map(product => <Product key={product?.id} product={product}></Product>)
        }
      </div>
    </div>
  );
};

export default Products;
