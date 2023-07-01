
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || '[]')
const cartWisFromLocalStorage = JSON.parse(localStorage.getItem("cartWis") || '[]')

function App() {



  const [state, setState] = useState()
  const [showItem, setShowItem] = useState(false);
  const [cart, setCart] = useState(cartFromLocalStorage)
  const [cartWis, setCartWis] = useState(cartWisFromLocalStorage)
  const [showCart, setShowCart] = useState(false)
  const [showCartWi, setShowCartWi] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
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
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
