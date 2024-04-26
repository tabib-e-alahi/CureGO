import { Rating } from "@mui/material";

const Product = ({ product }) => {
  console.log(product);
  const {
    image,
    name,
    brand,
    category,
    description,
    ingredients,
    skinConcerns,
    price,
    reviews
  } = product;
  console.log(reviews.length)
  const reviewCount = reviews.length;
  const totalRating = reviews.reduce((total, item) => total + item['rating'], 0);
  const avgRatings = totalRating/reviewCount;
 

  return (
    <div className="shadow-inner shadow-slate-200 p-8 text-center rounded-sm">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <Rating name="half-rating-read" value={avgRatings} precision={0.1} readOnly />
      <p>{reviewCount} reviews</p>
      <p>price: ${price}</p>
    </div>
  );
};

export default Product;
