import './App.css'
import Footer from './components/Footer'
import Greet from './components/Greet'
import Greeting from './components/Greeting'
import Header from './components/Header'
import JSXRules from './components/JSXRules'
import MainContent from './components/MainContent'
import ProductInfo from './components/ProductInfo'
import UserInfo from './components/UserInfo'
import WelcomeMessage from './components/WelcomeMessage'

function App() { 

  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <JSXRules />
      <Greeting />
      ---
      <ProductInfo />
      -----
      <UserInfo/>
      <ProductInfo />
      ---
      <Footer />
      <Greet />
    </div>
  )
}

export default App
