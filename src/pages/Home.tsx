import React, { useEffect, useState } from 'react';
import { getNews } from '../services/api';
import { News } from '../types';
import SearchBar from '../components/SearchBar';
import NewsFilter from '../components/NewsFilter';
import UpdateNewsButton from '../components/UpdateNewsButton';
import NewsList from '../components/NewsList';

const Home: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        setNews(newsData);
      } catch (error) {
        console.error('Error al obtener las noticias:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-right">
        {/* Contenedor de SearchBar y NewsFilter en columna */}
        <div className="d-flex flex-column flex-grow-1">
          <SearchBar />
          <NewsFilter />
        </div>

        {/* UpdateNewsButton centrado verticalmente */}
        <div className="update-news-button ms-3">
          <UpdateNewsButton />
        </div>
      </div>

      <div className="news-container mt-4 p-3 rounded shadow">
        <NewsList news={news} />
      </div>
    </div>
  );
};

export default Home;