import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    const {state, toggleTheme} = useContext(ContextGlobal)

    return ( 
        <div className=''>
            <nav>
                {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
                {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
                <Link to='/'>
                    <h5>Home</h5>
                </Link>
                <Link to='/contacto'>
                    <h5>Contacto</h5>
                </Link>
                <Link to='/dentist/:id'>
                    <h5>Detalle del Dentista</h5>
                </Link>
                <Link to='/favs'>
                    <h5>Destacados</h5>
                </Link>

                <button onClick={toggleTheme}>Cambiar tema</button>
            </nav>
        </div>
    );
};

export default Navbar