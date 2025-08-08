import './App.css'
import Banner from './components/banner/Banner'
import Feature from './components/feature/Feature'
import Navbar from './components/navbar/Navbar'

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
    </>
  )
}

export default App
