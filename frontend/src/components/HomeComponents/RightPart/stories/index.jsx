import React from "react";
import { StoriesData } from "./storiesData";
import { Swiper, SwiperSlide } from "swiper/react";

const Stories = () => {
  return (
    <>
      <div className="mb-5">
        <h4 className="font-noto font-bold text-lg text-black">Stories</h4>
      </div>

      <div className="w-[330px]">
        <Swiper spaceBetween={10} slidesPerView={3}>

        {StoriesData.map((data, index) => (
          <SwiperSlide
            key={index}
            style={{
              background: `url(${data.bgPicture})`,
            }}
            className="bg-cover bg-no-repeat bg-center h-[200px] rounded-md"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden object-cover mt-2 ml-2 border-2 border-primary_bg">
              <img src={data.picture} alt="" />
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>

      {/* <div className="flex items-center justify-between gap-x-2">
        {StoriesData.slice(0, 3).map((data, index) => (
          <div
            key={index}
            style={{
              background: `url(${data.bgPicture})`,
            }}
            className="bg-cover bg-no-repeat bg-center w-[33%] h-[200px] rounded-md"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden object-cover mt-2 ml-2 border-2 border-primary_bg">
              <img src={data.picture} alt="" />
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Stories;
