import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CourseStructure from './components/CourseStructure';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/yt-player" element={<Home />} />
          <Route path="/courses/:coursename" element={<CourseStructure />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
