import './App.css';
import Header from './components/Header';
import Home from './components/Pages/Client/Home';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom"
import About from './components/Pages/Client/About';
import Blog from './components/Pages/Client/Blog';
import Error404 from './components/Pages/Client/Error';
import MoreNews from './components/Pages/Client/MoreNews';
import BackToTopButton from './components/BackToTopButton';
import Shop from './components/Pages/Client/Shop';
import ProductDetail from '../src/ProductDetail/index';
import Description from '../src/components/ShopData/Description/index'
import Specification from './components/ShopData/Specification';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/morenews' element={<MoreNews />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/shop/product-details/:id' element={<ProductDetail />}></Route>
        <Route path='/product-details/:id' element={<ProductDetail />}></Route>
        <Route path='/shop/product-details/:id/description' element={<Description/>}></Route>
        <Route path='/shop/product-details/:id/specification' element={<Specification/>}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default App;
