
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Contactenos from "./pages/Contactenos";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contactenos" element={<Contactenos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
