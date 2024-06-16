import React from 'react'
import { routes } from "./utils/routes"
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
      <div className="navbar">
          <nav>
              {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
              {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
              <Link to={routes.home}>
                  <h5>Home</h5>
              </Link>
              <Link to={routes.contacto}>
                  <h5>Contacto</h5>
              </Link>
              <Link to={routes.detalle}>
                  <h5>Detalle del Dentista</h5>
              </Link>
              <Link to={routes.destacados}>
                  <h5>Destacados</h5>
              </Link>

              <button>Change theme</button>
          </nav>
      </div>
  );
}

export default Navbar