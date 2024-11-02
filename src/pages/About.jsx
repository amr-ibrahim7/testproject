import TeamMember from "@/components/TeamMember";
import { Button } from "@/components/ui/button";
import { desVariants, tagVariants, tittleVariants } from "@/utills/animation";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { TbArrowUpLeft } from "react-icons/tb";

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          من نحن
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tittleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
            نحن شركة تراست تعمل كوسيط بين المستثمرين والعملاء
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center font-medium pb-10 mt-5"
          >
            شركة تراست تعمل كوسيط بين المستثمرين والعملاء الراغبين في شراء
            عقارات. تتمثل مهمتها في توفير الحلول التمويلية الملائمة لعملائها.
          </motion.p>
        </div>

        <div className="items-center lg:flex gap-x-8 md:mr-9">
          {/* right section */}
          <motion.div style={{ scale }} ref={ref} className="w-full">
            <img src="/image/gallery1123.jpg" width={700} height={700} />
          </motion.div>
          {/* left section */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <p className="pb-8 tracking-wide mt-6">
              شركة أساس الأمل العقارية من نحن: شركة أساس الأمل تعمل كوسيط بين
              المستثمرين والعملاء الراغبين في شراء عقارات. تتمثل مهمتها في توفير
              الحلول التمويلية الملائمة لعملائها، وتسهيل عملية الحصول على
              التمويل اللازم لشراء العقارات. ونتميز بخبرتنا الواسعة في مجال
              التمويل العقاري، ونعتمد على فريق عمل محترف وذو خبرة في مجال
              التمويل والعقارات.
              <br /> <br />
              شركة أساس الأمل العقارية من نحن: شركة أساس الأمل تعمل كوسيط بين
              المستثمرين والعملاء الراغبين في شراء عقارات. تتمثل مهمتها في توفير
              الحلول التمويلية الملائمة لعملائها، وتسهيل عملية الحصول على
              التمويل اللازم لشراء العقارات. ونتميز بخبرتنا الواسعة في مجال
              التمويل العقاري، ونعتمد على فريق عمل محترف وذو خبرة في مجال
              التمويل والعقارات.
              <br /> <br />
              <span className="text-xl font-extrabold tracking-tight">
                رؤيتنا: أن نكون الشركة الرائدة في تحقيق أحلام الأفراد في امتلاك
                منازلهم الخاصة، ونسعى لأن نكون الشريك الذي يُسهم في بناء مجتمع
                مُستدام ومُزدهر.
              </span>
            </p>
            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              اقرا المزيد <TbArrowUpLeft className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* team section */}

        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tittleVariants}
              className="text-4xl font-bold tracking-wider text-center"
            >
              تيم
            </motion.h1>
          </div>

          <div className="grid py-8 gap-20 lg:grid-cols-3 mr-9">
            <TeamMember
              name="عبدالله احمد"
              image="/image/profile2.jpg"
              description="الإبداع هو القدرة على توليد أو إنشاء أو اكتشاف أفكار وحلول وإمكانيات جديدة"
              variants={tittleVariants}
            />
            <TeamMember
              name="محمد علي"
              image="/image/profile1.jpg"
              description="الإبداع هو القدرة على توليد أو إنشاء أو اكتشاف أفكار وحلول وإمكانيات جديدة"
              variants={desVariants}
            />
            <TeamMember
              name="فاطمة الزهراء"
              image="/image/profile3.jpg"
              description="الإبداع هو القدرة على توليد أو إنشاء أو اكتشاف أفكار وحلول وإمكانيات جديدة"
              variants={tagVariants}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
