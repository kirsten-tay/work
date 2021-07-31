import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carouselcomponent from './components/Carouselcomponent'
import Hero from './components/Hero'

import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        
        <Carouselcomponent/>
        <Hero/>
        <Footer/>
    </div>
  );
}

export default App;
