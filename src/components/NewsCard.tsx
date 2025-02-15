import React from 'react';
import { NewsCardProps } from '../types';

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const categories: string[] = JSON.parse(news.categories || '[]');
  return (
    <div className="news-card">
      <h2>{news.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: news.description }} />
      <div className="categories">
        {categories.map((category, index) => (
          <span key={index} className="badge bg-secondary">{category}</span>
        ))}
      </div>
      <a href={news.link} target="_blank" rel="noopener noreferrer">Leer más</a>
      <small>Publicado el: {new Date(news.pub_date).toLocaleDateString('es-ES')}</small>
      <small>Creado el: {new Date(news.created_at).toLocaleDateString('es-ES')}</small>
    </div>
  );
};

export default NewsCard;