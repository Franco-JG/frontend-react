import React from 'react';
import { NewsListProps } from '../types';
import NewsCard from './NewsCard';

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  //! Eliminar este console.log
  // news.forEach(item => {
  //   (item.categories) ? console.log(typeof item.categories) : null;
  // });

  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
};

export default NewsList;