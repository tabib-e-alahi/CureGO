import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

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

  return (
    <div className="bg-white  w-9/12 mx-auto grid grid-cols-2 gap-2 lato_font">
      {loading ? (
        <div className="loader my-44 mx-auto"></div>
      ) : (
        <>
          <div>
            <img className="" src={product_image} alt="" />
            <div className="my-10 px-4">
              <Accordion className="border-y-2 border-gray-600">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="text-xl"
                >
                  The Main Ingredients
                </AccordionSummary>
                <AccordionDetails>
                  {Object.entries(key_ingredients_description).map(
                    ([key, value]) => (
                      <div key={key}>
                        <strong>{key}:</strong> {value}
                      </div>
                    )
                  )}
                </AccordionDetails>
              </Accordion>
              <Accordion className="">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  className="text-xl"
                >
                  Accordion 2
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion className="border-y-2 border-gray-600">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                  className="text-xl"
                >
                  Accordion Actions
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
                <AccordionActions>
                  <Button>Cancel</Button>
                  <Button>Agree</Button>
                </AccordionActions>
              </Accordion>
            </div>
          </div>

          <div className="pt-6 px-2">
            <h1 className="text-2xl font-bold">{brand_name}</h1>
            <h1 className="text-4xl text-black light_font">{product_name}</h1>

            <p>Price: ${product_price}</p>
            <p>Available Quantity: {product_stock_count}</p>
            <p>{product_subtitle}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
