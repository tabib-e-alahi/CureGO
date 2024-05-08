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
    <div className="bg-white  w-9/12 mx-auto grid grid-cols-2 gap-2 lato_font">
      <div>
        <img className="" src={product_image} alt="" />
        <AccordionCompo key={_id} product={product}></AccordionCompo>
      </div>

      <div className="pt-6 px-2">
        <h1 className="text-2xl font-bold">{brand_name}</h1>
        <h1 className="text-4xl text-black light_font">{product_name}</h1>

        <p>Price: ${product_price}</p>
        <p>Available Quantity: {product_stock_count}</p>
        <p>{product_subtitle}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
