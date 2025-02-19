import banner_1 from "../../assets/banner_1.jpg";
import banner_2 from "../../assets/banner_2.jpg";
import banner_3 from "../../assets/banner_3.jpg";
import banner_4 from "../../assets/banner_4.jpg";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";
import b4 from "../../assets/b4.jpg";
import "./Banner.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <div className="text-center w-11/12 mx-auto mt-10 rounded-xl">
        <Swiper
        spaceBetween={30}
        
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide><img className="h-[500px] rounded-xl w-full" src={banner_1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[500px] rounded-xl w-full" src={b2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[500px] rounded-xl w-full" src={b3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[500px] rounded-xl w-full" src={banner_4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[500px] rounded-xl w-full" src={b4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[500px] rounded-xl w-full" src={banner_2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[500px] rounded-xl w-full" src={banner_3} alt="" /></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default Banner;
