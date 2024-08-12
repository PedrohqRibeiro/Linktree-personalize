import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importando o ícone do WhatsApp
import backgroundImage from './assets/background.jpg';
const Linktree = () => {
  return (
    <div 
      className="flex items-center justify-center h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'contain', // Ajuste para 'cover', 'contain' ou valores específicos
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', }} // Substitua pelo caminho da sua imagem
    >
      <a 
        href="https://wa.me/991380322" 
        className="flex items-center justify-center px-8 py-4 text-white text-lg font-medium bg-black rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-gray-800"
      >
        <FaWhatsapp className="mr-2 text-2xl" />
        Fale Conosco no WhatsApp
      </a>
    </div>
  );
};

export default Linktree;
