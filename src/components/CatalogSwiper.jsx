import { TbArrowLeft } from "react-icons/tb";
import { Button } from "./ui/button";

import { desVariants, tagVariants, tittleVariants } from "@/utills/animation";
import { motion } from "framer-motion";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CatalogSwiperSection() {
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
            منازل حديثه
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5"
          >
            اكتشف مجموعة من المنازل العصرية المصممة بأعلى معايير الجودة والراحة.
          </motion.h2>
        </div>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="grid grid-cols-2 text-gray-500 gap-x-8 "
        >
          <p>
            ضمان على العقار و ضمان على الحياة توفر شركة أساس الأمل إعفاء العميل
            عند الوفاة أو العجز الكلي الدائم -لا سمح الله-، وذلك حسب شروط
            التغطية التأمينية. يتم أيضاً تعويض العميل في حال تعرض المنزل للأضرار
            لا سمح الله وذلك أيضاً حسب الشروط والأحكام
          </p>
          <p>
            الإفراغ العقاري الإلكتروني يتم تخليص كافة الإجراءات البنكية وإصدار
            العقود العقارية وإفراغ العقارات بشكل إلكتروني وبدون أي رسوم للإسراع
            في عملية التملك بشكل احترافي.
          </p>
        </motion.div>

        <a href="/projects">
          <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            خدماتنا
            <TbArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </a>
      </div>

      {/* Swiper Section */}
      <Swiper
        slidersPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img
            src="/image/swiper1.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/swiper2.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/swiper3.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/swiper4.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/swiper5.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
