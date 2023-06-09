import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import pic1 from '../../../assets/images/gellary/pic1.jpg'
import pic2 from '../../../assets/images/gellary/pic2.jpg'
import pic3 from '../../../assets/images/gellary/pic3.jpg'
import pic4 from '../../../assets/images/gellary/pic4.jpg'
import pic5 from '../../../assets/images/gellary/pic5.jpg'
import pic6 from '../../../assets/images/gellary/pic6.jpg'

const OurGellary = () => {
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Join Our Team"}
        heading={"Our Gallery"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic1} alt="" /><p className="text-center -mt-10 text-white">Football</p></SwiperSlide>
        <SwiperSlide><img src={pic2} alt="" /><p className="text-center -mt-10 text-white">BatMinton</p></SwiperSlide>
        <SwiperSlide><img src={pic3} alt="" /><p className="text-center -mt-10 text-white">Bolyball</p></SwiperSlide>
        <SwiperSlide><img src={pic4} alt="" /><p className="text-center -mt-10 text-white">Bolyball Girls</p></SwiperSlide>
        <SwiperSlide><img src={pic5} alt="" /><p className="text-center -mt-10 text-white">Bolyball Boys</p></SwiperSlide>
        <SwiperSlide><img src={pic6} alt="" /><p className="text-center -mt-10 text-white">hello</p></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OurGellary;