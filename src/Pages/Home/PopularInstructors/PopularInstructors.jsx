import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Fetch image data from the API
    axios.get('https://sports-academies-server-eta.vercel.app/users')
      .then(response => {
        // Update the state with the fetched instructors
        setInstructors(response.data.slice(0,6));
      })
      .catch(error => {
        console.error('Error fetching instructors:', error);
      });
  }, []);
  // console.log(instructors)
  return (
    <section>
            <SectionTitle
            subHeading={"Popular Instructor"}
            heading={"From our Popular instructors"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
              {
        instructors.map((data,index) => (
          <SwiperSlide key={index}>
            <img src={data.photoURL} className="w-full lg:h-[600px] mx-auto rounded-lg" alt="" />
          </SwiperSlide>
        ))
      }
            </Swiper>
        </section>
  );
};

export default PopularInstructors;