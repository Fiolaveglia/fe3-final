import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import '../index.css'

const Navbar = () => {
    const {state, toggleTheme} = useContext(ContextGlobal)

    return ( 
        <div className={`navbar ${state.theme}`}>
            <nav>
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