// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Combonents/Header';
import Footer from './Combonents/footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import DigitalServices from './pages/DigitalServices'; // 1. استيراد الصفحة المفقودة
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* 2. إضافة المسار لصفحة الخدمات الرقمية */}
          <Route path="/services" element={<DigitalServices />} />

          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;