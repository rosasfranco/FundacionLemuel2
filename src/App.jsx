import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Activities from './pages/Activities';
import About from './pages/About';
import Error404 from './pages/Error404';
import Header from './components/Header';
import Body from './components/Body';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Body />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error404/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
