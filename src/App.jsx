import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './components/banner/Banner'
import Feature from './components/feature/Feature'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>
        <Feature></Feature>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </>
  )
}

export default App
