import './App.css';
import Header from './components/Header';
import Home from './components/Pages/Client/Home';
import Footer from './components/Footer';
import {Route, Routes} from "react-router-dom"
import About from './components/Pages/Client/About';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
