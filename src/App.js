
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Services from './components/Services';
import Vision from './components/Vision';
import logo from "./images/logo_text.png";

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Vision />
      <Services />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
