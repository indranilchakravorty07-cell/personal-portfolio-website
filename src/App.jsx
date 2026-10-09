import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Heritage from './pages/Heritage';
import Wildlife from './pages/Wildlife';
import TravelBlog from './pages/TravelBlog';
import WildlifeTravelBlog from './pages/WildlifeTravelBlog';
import UnescoDetail from './pages/UnescoDetail';
import WildlifeBlog from './pages/WildlifeBlog';
import IucnDetail from './pages/IucnDetail';
import Seo from './seo/Seo';
import './index.css';

// Opens every new page at the top (React Router doesn't do this by itself).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="not-found">
      <Seo title="Page not found – Framedbyabard" description="This page does not exist." noindex />
      <h1>Page not found</h1>
      <p>The page you were looking for doesn't exist or has moved.</p>
      <Link to="/">Back to Framedbyabard home</Link>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  return (
    <BrowserRouter>
      <a href="#main" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/"                 element={<Home />} />
          <Route path="/heritage"         element={<Heritage />} />
          <Route path="/wildlife"         element={<Wildlife />} />
          <Route path="/travel/:blogId"   element={<TravelBlog />} />
          <Route path="/wildlife-travel/:blogId" element={<WildlifeTravelBlog />} />
          <Route path="/unesco/:blogId"   element={<UnescoDetail />} />
          <Route path="/wildlife/:blogId" element={<WildlifeBlog />} />
          <Route path="/iucn/:blogId"     element={<IucnDetail />} />
          <Route path="*"                 element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
