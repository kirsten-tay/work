import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import Slider from './components/Slider'
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Slider/>
        <Carousel/>
        <Hero/>
        <Footer/>
    </div>
  );
}

export default App;
