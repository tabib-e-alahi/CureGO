import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import AccordionCompo from "./ProductComo/AccordionCompo";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";
import { Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import Review from "../../SharedComponents/Review/Review";
import getReviews, { formatDate } from "../../Uitils/getRatings";
import { useState } from "react";


const ProductDetails = () => {
  const [rating, setRating] = useState(0);
  const [reviewAdd, setReviewAdded] = useState(false);
  const { user } = useAuth();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data: product = {}, isLoading: loading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      return res?.data;
    },
  });

  const [, refetch] = useCart();

  const {
    _id,
    product_name,
    product_image,
    brand_name,
    product_usage,
    product_price,
    product_stock_count,
    product_subtitle,
    ingredients,
    product_quantity,
    return_policy,
  } = product;

  // ======================= retrieving reviews from database ===================
 
  const { data: reviews, refetch:review_refetch} = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/${_id}`);
      return res.data;
    },
  });

  const { avgRatings, reviewCount } = getReviews(reviews);

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
        if (res.data.message === "Item added to cart successfully.") {
          //show a swal
          Swal.fire({
            title: "Product Added To Cart.",
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


  // ============================== for reviews =========================

  console.log(user);
  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  // =============== review upload function ======================
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review_title = form.review_title.value;
    const comment = form.comment.value;

    console.log(review_title, comment);
    const date = new Date();
    const dateMDY = formatDate(date);

    const reviewDetails = {
      review_title,
      reviewer_email:user?.email,
      reviewer: user?.displayName,
      reviewer_image: user?.photoURL,
      comment,
      reviewing_time: dateMDY,
      rating,
      productId: _id,
    };

    axiosSecure.post("/reviews", reviewDetails).then((res) => {
      if (res.data.insertedId) {
        setReviewAdded(true);
        review_refetch()
      }
    });
  };

  return (
    <div className=" w-4/5  mx-auto mt-10 lato_font">
      {loading ? (
        <ProductDetailsSkeleton></ProductDetailsSkeleton>
      ) : (
        <div className="flex flex-col gap-y-10">
          <div className="flex justify-center bg-base-100 shadow px-10 py-4">
            <div className="w-full ">
              <img
                className="mx-auto w-fit h-[600px]"
                src={product_image}
                alt=""
              />
              <AccordionCompo product={product}></AccordionCompo>
            </div>

            <div className="pt-6 px-4 w-9/12">
              <h1 className="text-3xl text-[#161a1a] font-bold">
                {brand_name}
              </h1>
              <h1 className="text-4xl text-[#2E3337] light_font mt-3 mb-2">
                {product_name}
              </h1>
              <p className="text-[#383d41] text-xl font-light lato_font mb-8">
                {product_subtitle}
              </p>
              <div className="flex flex-col gap-2 mb-3 justify-start">
                <div className="flex gap-1 items-center">
                  <Rating
                    className="w-40 "
                    size="large"
                    name="half-rating-read"
                    value={reviews.length > 0 ? avgRatings : '0'}
                    precision={0.1}
                    readOnly
                  />{" "}
                  <p className="font-semibold text-xl ml-1">
                    ({reviews.length > 0 ? avgRatings.toFixed(1) : '0'}/5)
                  </p>
                </div>
                <p className="text-[#333333] text-sm">
                  <span className=" hover:underline hover:font-bold">
                    {reviewCount} reviews
                  </span>{" "}
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                    className="ml-4 hover:underline hover:font-bold"
                  >
                    Write Reviews
                  </button>
                </p>
              </div>
              <p className="mt-14 text-[#23282d] text-4xl  lato_font ">
                Price: ${product_price}
              </p>
              <p className=" text-gray-700 font-medium">
                In stock: {product_stock_count}
              </p>
              <hr className="bg-gray-800 h-[1.8px] my-10" />
              <div>
                <p className="mb-1 font-medium text-gray-600">Size:</p>
                <p className="border border-gray-400 hover:border-2 hover:border-gray-700 rounded-sm py-3 px-4  w-fit">
                  {product_quantity}
                </p>
              </div>

              <div className="w-11/12 mx-auto mt-10">
                <button
                  onClick={handleAddToCart}
                  className="w-full lato_font  bg-[#2E3337] text-white py-3 hover:bg-[#a6776a] uppercase text-xl font-light"
                >
                  Add To Cart
                </button>
                <button className="hover:bg-gray-400 hover:px-3 hover:py-2 w-fit   font-semibold  lato_font mt-6 ml-2">
                  <FavoriteBorderIcon className="mr-1" /> Save To WishList
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-base-100 shadow py-6 px-8">
            <h1 className="text-2xl font-bold lato_font mb-2">
              Product Description:
            </h1>
            <hr className="bg-gray-800 h-0.5 w-[600px] mb-8" />
            <div className="space-y-4  w-[950px]">
              <p className="text-lg">
                <span className="text-xl font-semibold  mr-1">Brand:</span>{" "}
                {brand_name}
              </p>
              <p className="text-lg">
                <span className="text-xl font-semibold  mr-1">Usage:</span>{" "}
                {product_usage}
              </p>
              <p className=" lato_font text-justify">
                <span className="text-xl lato_font font-semibold mr-1">
                  Ingredients:
                </span>{" "}
                {ingredients?.map((ing, idx) => (
                  <span className="mr-2 lato_font text-lg" key={idx}>
                    {ing},
                  </span>
                ))}{" "}
              </p>
              <p className="text-lg">
                <span className="text-xl font-semibold  mr-1">Size:</span>{" "}
                {product_quantity}
              </p>
              <p className="text-lg">
                <span className="text-xl font-semibold  mr-1">
                  Return Policy:
                </span>{" "}
                {return_policy}
              </p>
            </div>
          </div>

          <Review productId={_id}></Review>
        </div>
      )}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box rounded-sm">
          <form onSubmit={handleAddReview}>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className=" bg-[#cbcac8] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                  <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                    Write Review
                  </h2>
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Review Subject
                    </label>
                    <input
                      type="text"
                      name="review_title"
                      className="w-full bg-white rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Review Description
                    </label>
                    <textarea
                      type="text"
                      name="comment"
                      className="w-full bg-white rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div className="flex gap-2 items-center mb-2"><Rating
                    size="large"
                    name="simple-controlled"
                    precision={0.1}
                    value={rating}
                    onChange={handleRatingChange}
                  /> <p className="text-lg font-semibold lato_font border border-base-300 py-1 px-2 w-fit">{rating}</p></div>

                  <button
                    type="submit"
                    className="text-white bg-[#A6776A] border-0 py-2 px-8 focus:outline-none  rounded text-lg"
                  >
                    Submit
                  </button>
                  <p className="text-xs font-semibold text-gray-500 mt-3">
                    Good or bad, your feedback matters.
                  </p>
                  {reviewAdd ? (
                    <p className="text-lg font-semibold text-gray-500 mt-3">
                      Thanks for the feedback
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </section>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setReviewAdded(false)}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ProductDetails;
