import Banner from "../Banner/Banner";
import OurGellary from "../OurGellary/OurGellary";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        <OurGellary></OurGellary>
    </div>
  );
};

export default Home;