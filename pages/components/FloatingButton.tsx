import { FaPlus, FaWhatsapp } from 'react-icons/fa';

function FloatingButton() {
    const openWhatsApp = () => {
        window.open('https://wa.me/+5493876844976', 'Mensaje desde la web:');
      };
  return (
    <button
      className="fixed bottom-20 right-4 bg-green-500 hover:bg-green-600 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-pulse"
      type="button"
      onClick={openWhatsApp}
    >
      <FaWhatsapp />
    </button>
  );
}

export default FloatingButton;