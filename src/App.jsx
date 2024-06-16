
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Components/utils/routes";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";



function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contacto} element={<Contact />} />
          <Route path={routes.detalle} element={<Detail />} />
          <Route path={routes.destacados} element={<Favs />} />
          <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
