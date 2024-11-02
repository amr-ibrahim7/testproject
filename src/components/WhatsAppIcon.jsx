import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppIcon() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSectionHeight = 600;

      if (scrollPosition > heroSectionHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <a
        href="https://wa.me/201029696632"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 z-100"
      >
        <FaWhatsapp size={32} />
      </a>
    )
  );
}

export default WhatsAppIcon;
