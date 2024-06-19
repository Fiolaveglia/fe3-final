import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const {state, toggleTheme} = useContext(ContextGlobal)

    return ( 
        <div className='navbar'>
            <nav>
                <h2 className='logo'><span>D</span>H Odonto</h2>
                <ul>
                    <li className='nav-link'><Link to='/'>Home</Link></li>
                    <li className='nav-link'><Link to='/contacto'>Contacto</Link></li>
                    <li className='nav-link'><Link to='/dentist/:id'>Detalle del Dentista</Link></li>
                    <li className='nav-link'><Link to='/favs'>Favoritos</Link></li>
                    <li className='nav-link'><button className={`theme ${state.theme}`} onClick={toggleTheme}>{state.theme === "" ? <FontAwesomeIcon icon={faMoon} style={{color: "#FFD43B"}} /> : <FontAwesomeIcon icon={faSun} style={{color: "#FFD43B",}} />}</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar