
import About from './../components/About';
import Banner from './../components/Banner';
import Services from './../components/Services';
import Vision from './../components/Vision';
import Footer  from './../components/Footer';
import Navbar from './../components/Navbar';
import ContactButton from '../components/ContactButton';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Vision />
      <Services />
      <ContactButton />
      <Footer />
    </div>
  );
}

export default App;
