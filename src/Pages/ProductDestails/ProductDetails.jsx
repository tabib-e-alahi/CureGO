import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import AccordionCompo from "./ProductComo/AccordionCompo";

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
    _id,
    product_name,
    product_image,
    brand_name,
    reviews,
    product_price,
    product_stock_count,
    product_subtitle,
    product_overview,
    ingredients,
    product_quantity,
    return_policy,
  } = product;

  return (
    <div className="bg-white  w-full">
      <img className="w-60 h-80" src={product_image} alt="" />
      <h1 className="text-4xl text-black mt-20">{product_name}</h1>
      <h1 className="text-3xl">{brand_name}</h1>
      <p>Price: ${product_price}</p>
      <p>Available Quantity: {product_stock_count}</p>
      <p>{product_subtitle}</p>


      <AccordionCompo key={_id} product={product}></AccordionCompo>

    </div>
  );
};

export default ProductDetails;
