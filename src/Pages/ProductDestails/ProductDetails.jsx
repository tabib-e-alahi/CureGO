import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: product = {} } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      return res.data;
    },
  });
  console.log(product);
  return (
    <div className="bg-white  w-96">
      <img className="w-60 h-80" src={product?.product_image} alt="" />
      <h1 className="text-4xl text-black mt-20">{product?.product_name}</h1>
    </div>
  );
};

export default ProductDetails;
