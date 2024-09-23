import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SinglePage from './Pages/SinglePage/SinglePage';
import ContactForm from './Pages/ContactForm/ContactForm';
import NewsPage from './Pages/NewsPage/NewsPage';
import Term from './Pages/Policy/Term';
import Privacy from './Pages/Policy/Privacy';
import Disclaimer from './Pages/Policy/Disclaimer';
import AboutUs from './Pages/Policy/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/single-page" element={<SinglePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/news-page/:id" element={<NewsPage />} />
        <Route path="/term-condition" element={<Term />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
