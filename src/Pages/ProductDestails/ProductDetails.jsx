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

  const {
    product_name,
    product_image,
    brand_name,
    reviews,
    product_price,
    product_stock_count,
    product_subtitle,
    product_overview,
    key_ingredients,
    key_ingredients_description,
    product_usage,
    skin_concerns,
    ingredients,
    product_quantity,
    return_policy,
  } = product;

  return (
    <div className="bg-white  w-96">
      <img className="w-60 h-80" src={product_image} alt="" />
      <h1 className="text-4xl text-black mt-20">{product_name}</h1>
    </div>
  );
};

export default ProductDetails;
