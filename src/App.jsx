import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Pricing from './components/Pricing/Pricing'
import Products from './components/Products/Products'
import Stats from './components/Stats/Stats'
import Steps from './components/Steps/Steps'

const getProducts = async ()=>{
  const res = await fetch("/public/products.json")
  return res.json()
}
const productsPromise = getProducts()

function App() {

  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <Stats></Stats>
    <Products productsPromise={productsPromise}></Products>
    <Steps></Steps>
    <Pricing></Pricing>
    <Footer></Footer>
    </>
  )
}

export default App
