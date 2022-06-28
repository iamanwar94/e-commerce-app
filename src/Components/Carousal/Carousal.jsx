import React from "react";
import "./Carousal.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import carousal1 from "./assets/carousal-1.jpg";
// import carousal2 from "./assets/carousal-2.jpg";
// import carousal3 from "./assets/carousal-3.jpg";
// import carousal4 from "./assets/carousal-4.jpg";
// import carousal5 from "./assets/carousal-5.jpg";

const Carousal = () => {
//   const images = [
//     { image: carousal1 },
//     { image: carousal2 },
//     { image: carousal3 },
//     { image: carousal4 },
//     { image: carousal5 },
//   ];
  return (
    <div className="carousal_wrapper w-100 bg-danger">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src={carousal1} alt="0.13" width={1400} height={400  } /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Carousal;
