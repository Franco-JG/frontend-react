import React from 'react';

const NewsFilter: React.FC = () => {
  return (
    <div className="news-filter mb-4 d-flex justify-content-start align-items-center gap-3">
      <button className="btn btn-outline-secondary rounded-pill shadow-sm">Filtro 1</button>
      <button className="btn btn-outline-secondary rounded-pill shadow-sm">Filtro 2</button>
    </div>
  );
};

export default NewsFilter;
