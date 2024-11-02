import { motion } from "framer-motion";
import React from "react";
import { desVariants, tagVariants, tittleVariants } from "../utills/animation";

const AboutComponent = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto] mx-auto">
      <div className="grid lg:grid-cols-2 place-items-center">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tittleVariants}
        >
          <img
            src="/image/aboutfront.png"
            width={600}
            height={300}
            alt="About"
            className="max-md:hidden"
          />
        </motion.div>

        <div className="items-center">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tittleVariants}
            className="px-12 py-12 text-3xl font-extrabold leading-tight lg:text-5xl"
          >
            نحن شركة حائزة على جوائز
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="px-12 tracking-wider text-gray-400 mt-3"
          >
            جائزة عالمية
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4 mt-4"
          >
            شركة أساس الأمل تعمل كوسيط بين المستثمرين والعملاء الراغبين في شراء
            عقارات. تتمثل مهمتها في توفير الحلول التمويلية الملائمة لعملائها،
            وتسهيل عملية الحصول على التمويل اللازم لشراء العقارات. ونتميز
            بخبرتنا الواسعة في مجال التمويل العقاري، ونعتمد على فريق عمل محترف
            وذو خبرة في مجال التمويل والعقارات.
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4 mt-4"
          >
            رؤيتنا: أن نكون الشركة الرائدة في تحقيق أحلام الأفراد في امتلاك
            منازلهم الخاصة، ونسعى لأن نكون الشريك الذي يُسهم في بناء مجتمع
            مُستدام ومُزدهر. أهدافنا: ترتكز أهدافنا على تحقيق التميز في قطاع
            التمويل العقاري، وتلبية احتياجات عملائها بشكل شامل؛ من خلال تقديم
            حلول مالية مُبتكرة تتناسب مع تطلعات العملاء
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
