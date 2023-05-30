import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import News from './News';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="container d-flex flex-column align-items-center">
          <h1 className="heading m-2">United States News</h1>
          <Routes>
            <Route path="/" element={<News key="general" category="general"/>} />
            <Route path="/business" element={<News key="business" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
            <Route path="/health" element={<News key="health" category="health" />} />
            <Route path="/science" element={<News key="science" category="science" />} />
            <Route path="/sports" element={<News key="sports" category="sports" />} />
            <Route path="/technology" element={<News key="technology" category="technology" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
