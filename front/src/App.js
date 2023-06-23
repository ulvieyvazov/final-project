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
import { useEffect, useState } from 'react';
import CartList from './components/Pages/Client/CartList';
import Wishlist from './components/Pages/Client/Wishlist';
import AdminProducts from './components/Pages/Admin/AddProducts';
// import Update from './components/Pages/Admin/Update';
import AddNews from './components/Pages/Admin/AddNews';
import Contact from './components/Pages/Client/Contact';
import Register from './components/Pages/Client/Register';
import Login from './components/Pages/Client/Login';

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || '[]') 
const cartWisFromLocalStorage = JSON.parse(localStorage.getItem("cartWis") || '[]') 

function App() {


  const [cart, setCart] = useState(cartFromLocalStorage)
  const [cartWis, setCartWis] = useState(cartWisFromLocalStorage)
  const [showCart, setShowCart] = useState(false)
  const [showCartWi, setShowCartWi] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(()=>{
    localStorage.setItem("cartWis", JSON.stringify(cartWis))
  }, [cartWis])


  const addToWis = (dataWis) => {
    setCartWis([...cartWis, { ...dataWis, quantity: 1 }])
  }


  const handleShow = (value) => {
    setShowCart(value)
  }
  const handleShowWi = (valueWi) => {
    setShowCartWi(valueWi)
  }


  const removeFromCart = (ca) => {
    setCart(cart.filter((product) => product !== ca))
  }


  const removeFromWis = (ca) => {
    setCartWis(cartWis.filter((product) => product !== ca))
  }

  return (
    <>
      <Header count={cart.length} size={cartWis.length} handleShow={handleShow} handleShowWi={handleShowWi} removeFromCart={removeFromCart} removeFromWis={removeFromWis} />
      <Routes>
        <Route path='/' element={<Home addToWis={addToWis} addToCart={addToCart} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/morenews' element={<MoreNews />}></Route>
        <Route path='/cartlist' element={<CartList cart={cart} removeFromCart={removeFromCart} />}></Route> :
        <Route path='/shop' element={<Shop addToWis={addToWis} addToCart={addToCart} />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/wishlist' element={<Wishlist cartWis={cartWis} addToCart={addToCart} removeFromWis={removeFromWis} />}></Route> :
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        {/* <Route path='/shop' element={<Shop addToCart={addToCart} addToCartWi={addToWis} />}></Route> */}
        {/* <Route path='/wishlist' element={<Wishlist cartWi={cartWis} />}></Route> */}
        {/* <Route path='/cartlist' element={<CartList cart={cart} />}></Route> */}
        {/* <Route path='/addtocart' element={<AddToCartT addToCart={addToCart}/>}></Route> */}
        <Route path='/shop/product-details/:id' element={<ProductDetail addToCart={addToCart} />}></Route>
        <Route path='/product-details/:id' element={<ProductDetail addToWis={addToWis} addToCart={addToCart} />}></Route>
        <Route path='/shop/product-details/:id/description' element={<Description addToCart={addToCart} />}></Route>
        <Route path='/shop/product-details/:id/specification' element={<Specification addToCart={addToCart} />}></Route>
        <Route path='/adminproducts' element={<AdminProducts />}></Route>
        <Route path='/adminnews' element={<AddNews />}></Route>
        {/* <Route path='/update' element={<Update/>}></Route> */}
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default App;
