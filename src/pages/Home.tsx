import React, { useEffect, useState } from 'react';
import { getNews, searchNews } from '../services/api';
import { News } from '../types';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';

const Home: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const newsData = await getNews();
      setNews(newsData);
    } catch (error) {
      console.error('Error al obtener las noticias:', error);
    }
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    try {
      const searchResults = await searchNews(query);
      Array.isArray(searchResults) ? setNews(searchResults) : alert(`${searchResults} para ${searchQuery}`);
    } catch (error) {
      console.error('Error al buscar noticias:', error);
    }
  };

  return (
    <div className="container">
      <div className="d-flex align-items-right mb-1">
        <div className="d-flex flex-column flex-grow-1">
          <SearchBar  onSearch={handleSearch}/>
        </div>
      </div>
      <div className="news-container mt-0 m-4 p-4 rounded shadow">
        <NewsList news={news} />
      </div>
    </div>
  );
};

export default Home;