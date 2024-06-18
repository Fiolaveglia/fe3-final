import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Card = ({ dentista }) => {
    const { id, name, username } = dentista;
    const {state, dispatch} = useContext(ContextGlobal)



    const addFav = () => {
        dispatch({ type: 'ADD_FAV', payload: dentista });
    };

    return (
        <div className={`card ${state.theme}`}>
            {/* En cada card deberan mostrar en name - username y el id */}
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
            <img className='dentist-img'src={`${process.env.PUBLIC_URL}/images/doctor.jpg`} alt="Dentista"></img>
            <h3 className="dentist-name">{name}</h3>
            <p>{username}</p>
            <div className="dentist-links">
                <Link to={`/dentist/${id}`}><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#5f9ea0",}} /></Link>
                <button onClick={addFav} className="favButton">
                <FontAwesomeIcon icon={faHeart} style={{color: '#e60f0f', fontSize: '18px'}} />
                </button>
            </div>
        </div>
    );
};

export default Card;
