import banner_1 from "../../assets/banner_1.jpg";
import banner_2 from "../../assets/banner_2.jpg";
import banner_3 from "../../assets/banner_3.jpg";
import banner_4 from "../../assets/banner_4.jpg";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";
import b4 from "../../assets/b4.jpg";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SkinConcerns from "../SkinConcerns/SkinConcerns";

const Banner = () => {
  return (
    <>
      <div className="w-11/12 h-[1000px] mx-auto grid grid-cols-5 grid-rows-5 gap-4 mt-10 mb-44">
        <SkinConcerns></SkinConcerns>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[500px]  col-span-4  w-full rounded-3xl "
        >
          <SwiperSlide className="my-auto">
            <img
              className="h-[600px] rounded-3xl  w-full"
              src={banner_1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto">
            <img className="h-[600px] rounded-3xl  w-full" src={b2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="my-auto">
            <img className="h-[600px] rounded-3xl  w-full" src={b3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="my-auto">
            <img
              className="h-[600px] rounded-3xl  w-full"
              src={banner_4}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto">
            <img className="h-[600px] rounded-3xl  w-full" src={b4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="my-auto">
            <img
              className="h-[600px] rounded-3xl  w-full"
              src={banner_2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="my-auto">
            <img
              className="h-[600px] rounded-3xl  w-full"
              src={banner_3}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="col-span-4 col-start-2 row-start-2 rounded-3xl h-[600px] w-full mt-80 ">
          <img className="h-[600px] w-full rounded-3xl" src={b2} alt="" />
        </div>
      </div>


    
    
    </>
  );
};

export default Banner;
