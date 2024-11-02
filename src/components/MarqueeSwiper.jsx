import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeSwiper() {
  const row1 = [
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/23D2YCWA.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/24IG9EKV.png",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/23SEF5I6.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/233NE86Z.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/230VFGEX.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/23JD9F6Q.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/23ALGMRS.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/23D2YCWA.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/233NE86Z.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/230VFGEX.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/23D2BJNN.svg",
  ];
  return (
    <div className="container py-12 xl:py-24 h-[auto] mx-auto">
      <Marquee
        pauseOnHover={false}
        speed={40}
        loop={0}
        gradient={false}
        className="w-full marquee-container my-10 p-4 bg-[hsl(0,0%,95%)] dark:bg-accent clip-path-custom"
        style={{
          clipPath: "polygon(0px 0px, 90% 0%, 100% 100%, 10% 100%)",
        }}
      >
        {row1.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`partner-${index}`}
            className="w-32 h-32 mx-10 object-contain dark:bg-[hsl(0,0%,96%)] dark:rounded-lg dark:filter dark:brightness-80 dark:shadow-md dark:shadow-black transition-transform duration-300 hover:scale-110 hover:rotate-3"
          />
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeSwiper;
