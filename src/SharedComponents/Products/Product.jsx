import { Rating } from "@mui/material";
import './Product.css'


const Product = ({ product }) => {
  console.log(product);
  const {
    image,
    name,
    // brand,
    // category,
    // description,
    // ingredients,
    // skinConcerns,
    price,
    reviews
  } = product;
  console.log(reviews.length)
  const reviewCount = reviews.length;
  const totalRating = reviews.reduce((total, item) => total + item['rating'], 0);
  const avgRatings = totalRating/reviewCount;
 

  return (
    <div className="card_style  text-center rounded-sm py-4">
      <div className="">
      <img className="w-60 h-48 mx-auto image-zoomer" src={image} alt="" />
      </div>
      <div className="space-y-4 mt-4">
      <h2 className="text-[#363062] font-medium text-lg">{name}</h2>
      <div className="flex gap-2 justify-center items-center">
      <Rating name="half-rating-read" value={avgRatings} precision={0.1} readOnly />
      <p>{reviewCount} reviews</p>
      </div>
      <p className="font-bold text-lg text-[#e2557b] ">${price}</p>
      </div>
    </div>
  );
};

export default Product;
