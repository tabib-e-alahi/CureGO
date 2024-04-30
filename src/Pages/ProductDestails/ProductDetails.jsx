import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h1 className="text-4xl mt-20">{id}</h1>
        </div>
    );
};

export default ProductDetails;