import './App.css'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import Stats from './components/Stats/Stats'
import Steps from './components/Steps/Steps'

function App() {

  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <Stats></Stats>
    {/* <Products></Products> not complete */}
    <Steps></Steps>
    </>
  )
}

export default App
