import React from "react";
import { TbArrowNarrowLeft } from "react-icons/tb";

export default function CatalogueSection() {
  const items = [
    {
      id: "01",
      category: "شقق فاخرة",
      title: "شقة فاخرة في قلب المدينة",
      image: "/image/badroom.jpg",
      description:
        "شقة مكونة من 3 غرف نوم، مطبخ حديث، وحمام واسع، بالقرب من جميع الخدمات.",
    },
    {
      id: "02",
      category: "فيلا وقصور",
      title: "فيلا رائعة مع حديقة خاصة",
      image: "/image/drowing.jpg",
      description:
        "فيلا مكونة من 5 غرف نوم، مسبح خاص، وحديقة كبيرة، مناسبة للعائلات.",
    },
    {
      id: "03",
      category: "عمارة سكنية",
      title: "عمارة سكنية في موقع استراتيجي",
      image: "/image/living.jpg",
      description:
        "عمارة مكونة من 10 شقق، قريبة من المدارس والأسواق، فرصة استثمارية رائعة.",
    },
    {
      id: "04",
      category: "أراضي للبيع",
      title: "أرض في منطقة سكنية هادئة",
      image: "/image/kitchen1.jpg",
      description:
        "أرض بمساحة 500 متر مربع، مناسبة للبناء، قريبة من المرافق الأساسية.",
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x">
      {items.map((item) => (
        <div key={item.id} className="relative overflow-hidden group">
          <div>
            <img
              src={item.image}
              alt={item.title}
              width={380}
              height={100}
              className="w-full object-cover"
            />
          </div>

          <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
            <div className="flex justify-between pb-4">
              <p className="text-sm">{item.category}</p>
              <span className="text-sm">{item.id}</span>
            </div>
            <a className=" block text-xl font-semibold" href="#">
              {item.title}
            </a>
            <p className="py-4">{item.description}</p>
            <a
              className="inline-flex items-center font-medium
            ransition-transform duration-300 group-hover:text-primary
            "
              href=""
            >
              مزيد من التفاصيل{" "}
              <TbArrowNarrowLeft className="ml-2 transition-transform duration-300 group-hover:translate-x-[-8px] group-hover:text-primary" />
            </a>
          </div>

          <div className="inset-0  bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
            <p className="tracking-wider -rotate-90">{item.category}</p>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
