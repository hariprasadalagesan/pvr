import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { ScrollToTop } from './utils/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { SystemsPage } from './pages/SystemsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-accent focus:text-white focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:rounded-md focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
      >
        Skip to main content
      </a>

      <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white">
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/systems" element={<SystemsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
