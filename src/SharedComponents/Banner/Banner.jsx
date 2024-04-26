import b1 from "../../assets/b1.jpg";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";
import b4 from "../../assets/b4.jpg";
import b5 from "../../assets/b5.jpg";
import "./Banner.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <div className="  text-center">
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
        className="mySwiper"
      >
        <SwiperSlide><img className="h-[550px] w-full" src={b1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[550px] w-full" src={b2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[550px] w-full" src={b3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[550px] w-full" src={b4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[550px] w-full" src={b5} alt="" /></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default Banner;
