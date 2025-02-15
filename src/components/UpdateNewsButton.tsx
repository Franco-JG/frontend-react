import React from 'react';
import { updateNews } from '../services/api';

const UpdateNewsButton: React.FC = () => {
  const handleUpdateNews = async () => {
    await updateNews();
    alert('Noticias actualizadas');
  };

  return (
    <button onClick={handleUpdateNews}>Actualizar Noticias</button>
  );
};

export default UpdateNewsButton;