import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to our Courses</h1>
      <div className="course-links">
        <Link to="/courses/reactjs">React JS Course</Link>
        <Link to="/courses/nodejs">Node JS Course</Link>
      </div>
    </div>
  );
};

export default Home;
