import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Stars from "./Stars";

const ImageView = ({ data }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg my-96 flex hor overflow-hidden h-[600px] w-[1000px]">
      {/* Swiper for Images */}
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper select-none w-full h-[600px] mb-5"
      >
        {data?.images?.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[600px] border">
              <img
                className="w-full h-full object-contain"
                src={url}
                alt={`Product Image ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Product Details */}
      <div className="mt-0 ml-4">
        <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
        <p className="text-gray-600 mb-2">{data.description}</p>
        <p className="text-lg font-semibold mb-2">Price: ${data.price}</p>
        <p className="text-lg font-semibold mb-2">Brand: {data.brand}</p>
        <p className="text-lg font-semibold mb-2">Category: {data.category}</p>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold">Rating:</span>
          <Stars rating={data.rating}/> 
        </div>
        <ul className="list-disc pl-5 mt-3">
          {data.specifications &&
            data.specifications.map((spec, index) => (
              <li key={index} className="text-gray-700">
                {spec}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageView;
