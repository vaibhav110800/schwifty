
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Services from './components/Services';
import Vision from './components/Vision';
import Footer  from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Vision />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
