import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Message from './components/message/Message'
import Home from './components/home/Home';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Service from './components/service/Service';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Blog />
      <Service />
      <Contact />
      <Message />
      <Footer />
    </>
  )
}

export default App