import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { ConcernContext } from "../../hooks/ConcernProvider";


const SkinConcerns = () => {

    const {handleConcernClick} = useContext(ConcernContext);

  const axiosPublic = useAxiosPublic();
  // =========== tanstack query ==================
  const { data: products = [], isPending: loading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });

  // Set to store unique skin concerns
  const uniqueSkinConcerns = new Set();

  // Iterate over each product to accumulate unique skin concerns
  products.forEach((product) => {
    product.skin_concerns?.forEach((concern) => {
      uniqueSkinConcerns?.add(concern);
    });
  });

  // Convert the set back to an array to get distinct skin concerns
  const distinctSkinConcerns = [...uniqueSkinConcerns];



  return (
    <div className="row-span-2 rounded-3xl text-white">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <ul className="text-left bg-[#A6776A] text-lg px-4 py-6 shadow-md  rounded-2xl space-y-2 lato_font">
          {distinctSkinConcerns?.map((concern) => (
            <li key={concern} onClick={() => handleConcernClick(concern)}>
              {concern}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkinConcerns;
