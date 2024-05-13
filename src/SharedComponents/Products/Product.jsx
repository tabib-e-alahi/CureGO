import { Rating } from "@mui/material";
import "./Product.css";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { getReviews } from "../../Uitils/getRatings";


const Product = ({ product }) => {
  // console.log(product);
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    _id,
    product_name,
    product_image,
    brand_name,
    reviews,
    product_price,
    product_stock_count,
    product_subtitle,
    product_quantity,
  } = product;
  // console.log(reviews.length);
  const { avgRatings, reviewCount } = getReviews(reviews);
  console.log(reviews)

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        productId: _id,
        email: user.email,
        product_name,
        product_image,
        brand_name,
        product_price,
        product_quantity,
        product_stock_count,
        product_subtitle,
      };

      axiosSecure.post("/productCarts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.message === "Item added to cart successfully.") {
          //show a swal
          Swal.fire({
            title: `${product_name} Added To Cart.`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
        //refetch the cart to get the update carts count
        refetch();
      });
    } else {
      Swal.fire({
        title: "You are no logged in",
        text: "You have to logged in to add this product to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card_style  text-center rounded-sm pb-2">
      <Link to={`/products/${_id}`}>
        <div className=" h-80 flex items-center bg-[#edecec]  image-zoomer">
          <img className="w-60 h-60 mx-auto " src={product_image} alt="" />
        </div>
        <div className="space-y-2 mt-1 text-left mb-8 px-4">
          <h2 className="text-[#1f1c39]  custom_font_class  text-lg">
            {product_name}
          </h2>
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
          <p className="font-medium text-lg text-black ">${product_price}</p>
        </div>
      </Link>
      <button onClick={handleAddToCart} className="button_class normal w-10/12">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
