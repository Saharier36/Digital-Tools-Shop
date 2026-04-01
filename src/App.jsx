import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Pricing from "./components/Pricing/Pricing";
import Products from "./components/Products/Products";
import Stats from "./components/Stats/Stats";
import Steps from "./components/Steps/Steps";
import { ToastContainer } from "react-toastify";

const getProducts = async () => {
  const res = await fetch("products.json");
  return res.json();
};
const productsPromise = getProducts();

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart((cart) => cart.filter((item) => item.id !== productToRemove.id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Nav cart={cart}></Nav>
      <Banner></Banner>
      <Stats></Stats>
      <Products
        productsPromise={productsPromise}
        cart={cart}
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}
        clearCart={handleClearCart}
      ></Products>
      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
