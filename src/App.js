import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Carousel/>
        <Hero/>
        <Footer/>
    </div>
  );
}

export default App;
