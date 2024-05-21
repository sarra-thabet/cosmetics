import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Advice } from "./components/advice/Advice";
import { Footer } from "./global/footer/Footer";
import { Products } from "./components/products/Products";
import { SkinCare } from "./components/skincare/SkinCare";
import { BodyCare } from "./components/bodycare/BodyCare";
import { Perfume } from "./components/perfume/Perfume";
import { MakeUp } from "./components/makeup/MakeUp";
import { Login } from "./components/login/Login";
import { AdminRoutes } from "./components/adminspace/Dashboard";
function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/advice" element={<Advice/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/skincare" element={<SkinCare/>}/>
            <Route path="/bodycare" element={<BodyCare/>}/>
            <Route path="/perfume" element={<Perfume/>}/>
            <Route path="/makeup" element={<MakeUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Dashboard/*" element={<AdminRoutes/>}/>
            </Routes>
        </Router>
      </>
      <Footer/>
    </div>
  );
}

export default App;
