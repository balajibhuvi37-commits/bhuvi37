import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Help from "./pages/Help";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
};

export default App;