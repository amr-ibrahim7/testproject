import { motion } from "framer-motion";
import React from "react";
import { TbArrowUpLeft } from "react-icons/tb";
import { desVariants, tagVariants, tittleVariants } from "../utills/animation";
import { Button } from "./ui/button";

const HeroSection = React.memo(() => {
  return (
    <div
      className="relative flex items-center justify-center h-[500px] lg:h-[700px] text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/image/hero1.jpg')" }}
    >
      {/* Overlay*/}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text content */}
      <div className="relative z-10 p-4 lg:w-1/2 text-white">
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={tittleVariants}
          className="tracking-widest"
        >
          اعثر علي عقار آحلامك
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          variants={desVariants}
          className="text-3xl lg:text-5xl font-bold"
        >
          اصنع منزلك <br /> قطعة من الفن
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          className="mt-4 text-base lg:text-lg"
        >
          اكتشف المنازل والعقارات المثالية لاحتياجاتك مع خيارات واسعة وأسعار
          تنافسية. ابدأ رحلتك الآن واتخذ خطوة نحو منزل أحلامك.
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          className="mt-6"
        >
          <Button
            className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
            aria-label="اطلب تمويلك"
          >
            اطلب تمويلك <TbArrowUpLeft className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
});

export default HeroSection;
