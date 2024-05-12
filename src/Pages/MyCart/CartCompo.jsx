import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const CartCompo = ({cart,refetch}) => {
    const axiosSecure = useAxiosSecure()
    const {
        productId,
        product_name,
        product_image,
        brand_name,
        product_price,
        product_quantity,
        product_stock_count,
        product_subtitle
      } = cart

const handleCardItemDelete = () =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/productCarts/${productId}`).then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              refetch();
            }
          });
        }
      });
}



    return (
        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t bg-[] border-gray-50">
            <div className="md:w-4/12 2xl:w-1/4 w-full">
              <img
                src={product_image}
                alt="Black Leather Purse"
                className="h-48 mx-auto object-center object-cover md:block hidden"
              />
              
            </div>
            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
              <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                {brand_name}
              </p>
              <div className="flex items-center justify-between w-full">
                <p className="text-base font-black leading-none text-gray-800">
                  {product_name}
                </p>
                <p>Qty:1</p>
              </div>
              <p className="text-xs leading-3 text-gray-600 pt-2">
                Size: {product_quantity}
              </p>
              <p className="text-xs leading-3 text-gray-600 py-4">
                {product_subtitle}
              </p>
              <p className="w-96 text-xs leading-3 text-gray-600">
                Only {product_stock_count} item(s) in stock
              </p>
              <div className="flex items-center justify-between pt-5">
                <div className="flex itemms-center">
                  <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                    Add to favorites
                  </p>
                  <button onClick={handleCardItemDelete} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                    Remove
                  </button>
                </div>
                <p className="text-base font-black leading-none text-gray-800">
                  ${product_price}
                </p>
              </div>
            </div>
          </div> 
    );
};

export default CartCompo;