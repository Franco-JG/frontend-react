import React from 'react';
import { NewsListProps } from '../types';
import NewsCard from './NewsCard';

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <div className="news-list d-flex flex-wrap gap-4">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
};

export default NewsList;
