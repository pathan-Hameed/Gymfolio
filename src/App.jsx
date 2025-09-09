import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Connect />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
