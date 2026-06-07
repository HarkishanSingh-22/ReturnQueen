
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

import Home from "./Pages/Home";
import Businesses from "./Pages/Businesses";
import Sell from "./Pages/Sell";
import Return from "./Pages/Return";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import Partners from "./Pages/Partners";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Common Layout */}
        <Route element={<Layout />}>

          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Other Pages */}
          <Route path="/Businesses" element={<Businesses />} />
          <Route path="/Sell" element={<Sell />} />
          <Route path="/Return" element={<Return />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Partners" element={<Partners />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;