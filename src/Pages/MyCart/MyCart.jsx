import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import CartCompo from "./CartCompo";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyCart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum,item) => sum + (item.product_price * item.quantity),0)
const shippingCost = totalPrice > 50 ? 15 : 9

const handleCheckOut = () =>{
  Swal.fire({
    title: "Want to Checkout all products?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Checkout!",
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure.delete(`/productCarts`).then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
        }
      });
    }
  });
}


  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className=" w-full  sm:w-3/4  px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart?.length} items</h2>
          </div>
          {cart.length > 0 ? cart?.map((c) => (
            <CartCompo key={c.productId} cart={c} refetch={refetch}></CartCompo>
          ))
        :
        <h1 className="text-xl text-center mt-10 lato_font text-[#a06858]">There is no items in the cart.</h1>}

          <Link
          to="/"
            className="flex font-semibold text-[#a06858] border border-[#a06858] py-2 px-2 w-fit text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-[#a06858] w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>
        <div
          id="summary"
          className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10  shadow-inner h-fit"
        >
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items 3</span>
            <span className="font-semibold text-sm">{totalPrice.toFixed(2)}$</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <p className="border w-fit px-4 border-gray-300">Standard shipping - ${shippingCost}</p>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${(totalPrice+shippingCost).toFixed(2)}</span>
            </div>
            <button onClick={handleCheckOut} className="bg-[#A6776A] font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
