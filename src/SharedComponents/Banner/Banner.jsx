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
      <div className="border-2 p-10  text-center">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-sm"
      >
        <SwiperSlide><img className="h-[500px] w-full rounded-sm" src={b1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[500px] w-full rounded-sm" src={b2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[500px] w-full rounded-sm" src={b3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[500px] w-full rounded-sm" src={b4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[500px] w-full rounded-sm" src={b5} alt="" /></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default Banner;
