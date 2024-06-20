import React, { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { ContextGlobal } from "./Components/utils/global.context";



function App() {
  const {state} = useContext(ContextGlobal)
  return (
      <div className={`App ${state.theme}`}>
        <Router>
            <Navbar/>
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/dentist/:id'} element={<Detail />} />
              <Route path={'/favs'} element={<Favs />} />
              <Route path={'/contacto'} element={<Contact />} />
            </Routes>
            <Footer/>
          </Router>
      </div>
  );
}

export default App;
