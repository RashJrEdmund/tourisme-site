import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/nav/Navbar';

import Footer from './components/footer/Footer';
import Home from './home/home';
import About from './about/about';

function App() {
  return (
    <BrowserRouter>
      <div className="navBar__holder">
        <NavBar />
      </div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
