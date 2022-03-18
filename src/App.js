import { Route, Routes } from 'react-router-dom'
import NavbarVersion from './components/NavbarVersion'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Releases from './pages/Releases'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <NavbarVersion />
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/releases' element={<Releases />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
