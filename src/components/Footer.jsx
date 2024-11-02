import { desVariants, tagVariants, tittleVariants } from "@/utills/animation";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { FaInstagram, FaSnapchat, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { TbLetterX } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";

export default function Footer() {
  const links = useMemo(
    () => [
      { path: "/", name: "الرئيسية" },
      { path: "/", name: "معلومات عنا" },
      { path: "/", name: "العروض" },
      { path: "/", name: "خدماتنا" },
    ],
    []
  );

  const aboutLinks = useMemo(
    () => [
      { path: "/", name: "من نحن" },
      { path: "/", name: "الأسئلة الشائعة" },
      { path: "/", name: "احسب تمويلك" },
      { path: "/", name: "سياسة الخصوصية" },
    ],
    []
  );

  const contactLinks = useMemo(
    () => [
      { path: "/", name: "انستجرام", icon: <FaInstagram /> },
      { path: "/", name: "واتساب", icon: <FaWhatsapp /> },
      { path: "/", name: "سناب شات", icon: <FaSnapchat /> },
      { path: "/", name: "تويتر", icon: <TbLetterX /> },
    ],
    []
  );

  return (
    <div className="bg-tertiary">
      <div className="container lg:grid lg:grid-cols-2 py-14 mx-auto">
        <div className="mr-9 grid gap-4 pb-4 text-right lg:pb-0 lg:grid-cols-3">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tittleVariants}
          >
            <h2 className="pb-4 text-xl font-semibold">روابط تهمك</h2>
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="py-1 hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
          >
            <h2 className="pb-4 text-xl font-semibold">عن ثقة</h2>
            <div className="flex flex-col">
              {aboutLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="py-1 hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <h2 className="pb-4 text-xl font-semibold">التواصل</h2>
            <div className="flex flex-col">
              {contactLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="flex items-center py-1 hover:underline gap-2"
                >
                  <span className="mr-2">{link.icon}</span> {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tittleVariants}
          className="mr-9"
        >
          <p className="pb-4 text-xl font-semibold">ابق على اطلاع</p>
          <div className="relative lg:max-w-sm">
            <Input type="email" id="email" placeholder="البريد الالكتروني" />
            <button
              className="absolute bg-black text-white rounded-full h-10 px-3 text-sm top-2 left-2 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary"
              aria-label="إرسال البريد الإلكتروني"
            >
              ارسال
            </button>
          </div>
          <p className="pt-4 text-gray-500">
            من خلال الاشتراك في نشرتنا الإخبارية، فإنك توافق على تلقي رسائل
            البريد الإلكتروني منا. سيتم تخزين بياناتك الشخصية ومعالجتها وفقا
            لسياسة الخصوصية الخاصة بنا ويمكنك إلغاء الاشتراك في أي وقت.
          </p>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        className="py-10 bg-black dark:bg-primary"
      >
        <div className="container text-white text-center lg:flex lg:justify-between">
          <div className="pb-4 lg:pb-0 md:mr-9">
            <p>&copy; جميع الحقوق محفوظة لدى شركة تراست العقارية 2024</p>
          </div>
          <div>
            <Link href="/" className="p-4 hover:underline">
              الشروط
            </Link>
            <Link href="/" className="p-4 hover:underline">
              الخصوصية
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
