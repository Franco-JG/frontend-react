import React from 'react';
import { updateNews } from '../services/api';

const UpdateNewsButton: React.FC = () => {
  const handleUpdateNews = async () => {
    await updateNews();
    alert('Noticias actualizadas');
  };

  return (
    <div className="update-news-button mb-4 d-flex justify-content-center">
      <button
        className="btn btn-primary rounded-pill shadow-sm py-3 px-5"
        onClick={handleUpdateNews}
      >
        Actualizar Noticias
      </button>
    </div>
  );
};

export default UpdateNewsButton;
