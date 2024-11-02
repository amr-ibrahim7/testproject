import { FaWhatsapp } from "react-icons/fa";

function WhatsAppIcon() {
  return (
    <a
      href="https://wa.me/201029696632"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 z-100"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default WhatsAppIcon;
