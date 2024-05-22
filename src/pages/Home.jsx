import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  return (
    <div>
      <h1>Home</h1>
      {data.map((link) => (
        <Link key={link.id} to={`/detail/${link.id}`}>
          Detail Page
          <br />
        </Link>
      ))}
    </div>
  );
};

export default Home;
