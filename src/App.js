import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SolidFertiliser from "./pages/SolidFertiliser";
import LiquidFertiliser from "./pages/LiquidFertiliser";
import BioCng from "./pages/BioCng";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/bio-cng" element={<BioCng />} />
        <Route path="/" element={<Home />} />
        <Route path="/solid-fertiliser" element={<SolidFertiliser />} />
        <Route path="/liquid-fertiliser" element={<LiquidFertiliser />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
