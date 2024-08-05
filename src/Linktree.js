import React from 'react';
import backgroundImage from './assets/background.jpg'; // Para importação direta

const Linktree = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain', // Ajuste para 'cover', 'contain' ou valores específicos
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Se você quiser que a imagem fique fixa ao rolar
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
        <a 
          href="https://wa.me/1234567890" // Substitua pelo número de WhatsApp correto
          className="inline-block bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Entre em contato pelo WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Linktree;

