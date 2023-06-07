import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import banner1 from '../../../assets/images/banner/banner1.jpg'
import banner2 from '../../../assets/images/banner/banner2.jpg'
import banner3 from '../../../assets/images/banner/banner3.jpg'

import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="h-full">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;