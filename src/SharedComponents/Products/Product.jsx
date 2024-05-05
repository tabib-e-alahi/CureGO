import { Rating } from "@mui/material";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  // console.log(product);
  const {
    id,
    image,
    name,
    // brand,
    // category,
    // description,
    // ingredients,
    // skinConcerns,
    price,
    reviews,
  } = product;
  console.log(reviews.length);
  const reviewCount = reviews.length;
  const totalRating = reviews.reduce(
    (total, item) => total + item["rating"],
    0
  );
  const avgRatings = totalRating / reviewCount;

  return (
    <div className="card_style  text-center rounded-sm pb-2">
      <Link to={`/product/${id}`}>
        <div className=" h-80 flex items-center bg-[#edecec]  image-zoomer">
          <img className=" mx-auto " src={image} alt="" />
        </div>
        <div className="space-y-2 mt-1 text-left mb-8 px-4">
          <h2 className="text-[#1f1c39]  custom_font_class  text-lg">{name}</h2>
          <div className="flex gap-2 justify-start items-center">
            <Rating
              className=""
              name="half-rating-read"
              value={avgRatings}
              precision={0.1}
              readOnly
            />
            <p>{reviewCount} reviews</p>
          </div>
          <p className="font-medium text-lg text-black ">${price}</p>
        </div>
    </Link>
      <button className="button_class normal w-10/12">Add To Cart</button>
    </div>
  );
};

export default Product;
