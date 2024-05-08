import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const AccordionCompo = ({ product }) => {
  const {
    key_ingredients,
    key_ingredients_description,
    product_usage,
    skin_concerns,
  } = product;

  return (
    <div className="my-10 px-4">
      <Accordion className="border-y-2 border-gray-600">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" className="text-xl"
        >
          The Main Ingredients
        </AccordionSummary>
        <AccordionDetails>
        {Object.keys(key_ingredients_description).map(key => (
        <div key={key} className="flex items-center gap-1 text-sm font-light">
          <h1 className="font-medium w-fit ">{key}:</h1> <p>{key_ingredients_description[key]}</p>
        </div>
      ))}
        </AccordionDetails>
      </Accordion>
      <Accordion className="">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header" className="text-xl"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="border-y-2 border-gray-600">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header" className="text-xl"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
};

export default AccordionCompo;
