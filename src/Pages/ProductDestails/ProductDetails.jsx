import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import AccordionCompo from "./ProductComo/AccordionCompo";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";
import { Rating } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("the desired id:===", id);
  const axiosPublic = useAxiosPublic();

  const { data: product = {}, isLoading: loading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      console.log(res.data);
      return res?.data;
    },
  });
  console.log(product);

  const {
    _id,
    product_name,
    product_image,
    brand_name,
    reviews,
    key_ingredients,
    key_ingredients_description,
    product_usage,
    skin_concerns,
    product_price,
    product_stock_count,
    product_subtitle,
    product_overview,
    ingredients,
    product_quantity,
    return_policy,
  } = product;
  console.log(key_ingredients_description);
  const reviewCount = reviews.length;
  const totalRating = reviews.reduce(
    (total, item) => total + item["rating"],
    0
  );
  const avgRatings = totalRating / reviewCount;

  return (
    <div className=" bg-white w-9/12 mx-auto grid grid-cols-2 gap-10 lato_font p-4">
      {loading ? (
        <ProductDetailsSkeleton></ProductDetailsSkeleton>
      ) : (
        <>
          <div className="p-4">
            <img className="mx-auto" src={product_image} alt="" />
            <AccordionCompo product={product}></AccordionCompo>
          </div>

          <div className="pt-6 px-2">
            <h1 className="text-4xl text-[#161a1a] font-bold">{brand_name}</h1>
            <h1 className="text-3xl text-[#2E3337] light_font mt-3 mb-6">
              {product_name}
            </h1>
            <div className="flex flex-col gap-2 mb-3 justify-start">
              <div className="flex gap-1 items-center">
                <Rating
                  className="w-40 "
                  size="large"
                  name="half-rating-read"
                  value={avgRatings}
                  precision={0.1}
                  readOnly
                />{" "}
                <p className="font-semibold text-xl ml-1">({avgRatings}/5)</p>
              </div>
              <p
                className="text-[#333333] text-sm"
              >
                <span className=" hover:underline hover:font-bold">
                  {reviewCount} reviews
                </span>{" "}
                <Link className="ml-4 hover:underline hover:font-bold">
                  Write Reviews
                </Link>
              </p>
            </div>
            <p className="my-10 text-3xl  light_font">
              Price: ${product_price}
            </p>
            <p>Available Quantity: {product_stock_count}</p>
            <p>{product_subtitle}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
