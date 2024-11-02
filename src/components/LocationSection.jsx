import { desVariants, tagVariants, tittleVariants } from "@/utills/animation";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
const LocationSection = () => {
  const location = {
    lat: 24.727414,
    lng: 46.730762,
  };
  // 24.727414, 46.730762
  const handleNavigate = () => {
    window.location.href = "https://www.google.com/maps?q=31.035736,31.361258";
  };
  return (
    <div className="py-8 lg:py-28 ">
      <div className="container grid pb-8 lg:grid-cols-1 md:mr-9">
        <div className="text-right">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tittleVariants}
            className="py-4 text-4xl font-medium lg:text-6xl lg:py0"
          >
            موقعنا
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5"
          >
            تفضل بزيارتنا في مقرنا للحصول على استشارات والتعرف على المزيد من
            تفاصيل العقارات المتاحة.
          </motion.h2>
        </div>
        <div
          className="relative w-full h-[400px] bg-gray-300 cursor-pointer rounded-lg overflow-hidden"
          onClick={handleNavigate}
        >
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${location.lat},${location.lng}`}
            width="100%"
            height="100%"
            loading="lazy"
            title="Company Location"
            style={{ pointerEvents: "none" }}
          ></iframe>
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full shadow-md">
            <span role="img" aria-label="location">
              📍 موقع الشركة
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
