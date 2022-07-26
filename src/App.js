import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import Homepage from "./components/Homepage";
import Aboutus from "./components/Aboutus";
import Insurances from "./components/Insurances";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/Aboutus" element={<Aboutus />} />
        <Route exact path="/Insurances" element={<Insurances />} />
        <Route exact path="/Pricing" element={<Pricing />} />
        <Route exact path="/FAQ" element={<FAQ />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
