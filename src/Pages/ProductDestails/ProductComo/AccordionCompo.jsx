import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionCompo = ({ product }) => {
  console.log(product);
  const { key_ingredients_description, skin_concerns, product_overview } =
    product;

  console.log(key_ingredients_description);

  return (
    <div className="my-10 px-4">
      <Accordion className="border-y-2 border-gray-300  py-1 no_border_class">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="no_padding_class"
        >
          <p className="text-xl lato_font uppercase text-[#2E3337]">
            The Main Ingredients
          </p>
        </AccordionSummary>
        <AccordionDetails>
          {Object.entries(key_ingredients_description).map(([key, value]) => (
            <div className="flex gap-1" key={key}>
              <p className="font-semibold text-sm">{key}:</p>{" "}
              <span className="text-sm font-light lato_font text-black">
                {value}
              </span>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion className="no_border_class py-1">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="no_padding_class"
        >
          <p className="text-xl lato_font uppercase text-[#2E3337]">
            Product Overview
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-sm font-light lato_font text-black">
            {product_overview}
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="border-y-2  border-gray-300 no_border_class py-1">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          className="no_padding_class"
        >
          <p className="text-xl lato_font uppercase text-[#2E3337]">
            Skin Concerns
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-2">
            {skin_concerns?.map((skC, idx) => (
              <p key={idx} className="text-sm font-light lato_font text-black">
                {idx + 1}. {skC}
              </p>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionCompo;
