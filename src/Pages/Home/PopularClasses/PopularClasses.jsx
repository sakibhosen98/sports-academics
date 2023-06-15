import { Swiper, SwiperSlide } from "swiper/react";
import  { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch image data from the API
    axios.get('https://sports-academies-server-eta.vercel.app/classes')
      .then(response => {
        // Update the state with the fetched classes
        setClasses(response.data.slice(0,6));
      })
      .catch(error => {
        console.error('Error fetching classes:', error);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"Popular Classes"}
        heading={"From Our Classes"}
      ></SectionTitle>
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {
        classes.map((data,index) => (
          <SwiperSlide key={index}>
            <img src={data.classImg} className="w-full lg:h-[600px] mx-auto rounded-lg" alt="" />
          </SwiperSlide>
        ))
      }
    </Swiper>
  </section>
  );
};

export default PopularClasses;

