import React from "react";
import Home from "./pages/main"
import About from "./pages/about"
import Contact from "./pages/contact"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <><BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/a-propos" element={<About />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
      </Routes>
    </BrowserRouter>
    </>

    
    
  );
}

export default App;
