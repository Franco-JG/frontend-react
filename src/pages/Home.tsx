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
    <div>
      <SearchBar />
      <NewsFilter />
      <UpdateNewsButton />
      <NewsList news={news} />
    </div>
  );
};

export default Home;