import AdCare from "../../SharedComponents/Advertisement/AdCare";
import Banner from "../../SharedComponents/Banner/Banner";
import NewsLetter from "../../SharedComponents/NewsLetter/NewsLetter";
import Products from "../../SharedComponents/Products/Products";
// import Promotion from "../../SharedComponents/Promotion";

const Home = () => {
    return (
        <div>
            {/* <h1 className="border border-red-400 bg-softGreen">This is home....</h1> */}
            {/* <Promotion></Promotion> */}
            <Banner></Banner>
            <Products></Products>
            <AdCare></AdCare>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;