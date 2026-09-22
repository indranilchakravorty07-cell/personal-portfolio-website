import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Heritage from './pages/Heritage';
import Wildlife from './pages/Wildlife';
import TravelBlog from './pages/TravelBlog';
import WildlifeTravelBlog from './pages/WildlifeTravelBlog';
import UnescoDetail from './pages/UnescoDetail';
import WildlifeBlog from './pages/WildlifeBlog';
import IucnDetail from './pages/IucnDetail';
import { HashRouter } from 'react-router-dom';
import './index.css';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/"                 element={<Home />} />
        <Route path="/heritage"         element={<Heritage />} />
        <Route path="/wildlife"         element={<Wildlife />} />
        <Route path="/travel/:blogId"   element={<TravelBlog />} />
        <Route path="/wildlife-travel/:blogId" element={<WildlifeTravelBlog />} />
        <Route path="/unesco/:blogId"   element={<UnescoDetail />} />
        <Route path="/wildlife/:blogId" element={<WildlifeBlog />} />
        <Route path="/iucn/:blogId"     element={<IucnDetail />} />
      </Routes>
    </HashRouter>
  );
}