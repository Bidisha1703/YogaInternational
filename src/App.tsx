import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Classes from "./pages/Classes";
import Details from "./pages/Details";
import Payment from "./pages/Payment";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import Social from "./pages/Social";


export default function App() {
  return (
    <div>
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/detail" element={<Details />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/events" element={<Events />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/social" element={<Social />} />
      </Routes>
      
    </div>
  )
}