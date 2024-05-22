import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const prams = useParams();
  console.log('path parameter => ', prams);

  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
};

export default Detail;
