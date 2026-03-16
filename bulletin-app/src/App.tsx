import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BulletinDetail from './pages/BulletinDetail';
import Board from './pages/Board';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bulletin/:id" element={<BulletinDetail />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
