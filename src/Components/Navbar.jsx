import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const {state, toggleTheme} = useContext(ContextGlobal)

    return ( 
        <div className={`navbar ${state.theme}`}>
            <nav>
                <h2 className='logo'><span>D</span>H Odonto</h2>
                <ul>
                    <li><Link to='/'><h4>Home</h4></Link></li>
                    <li><Link to='/contacto'><h4>Contacto</h4></Link></li>
                    <li><Link to='/dentist/:id'><h4>Detalle del Dentista</h4></Link></li>
                    <li><Link to='/favs'><h4>Destacados</h4></Link></li>
                    <li><button className={`theme ${state.theme}`} onClick={toggleTheme}>{state.theme === "" ? <FontAwesomeIcon icon={faMoon} style={{color: "#FFD43B"}} /> : <FontAwesomeIcon icon={faSun} style={{color: "#FFD43B",}} />}</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar