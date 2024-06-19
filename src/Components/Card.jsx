import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Card = ({ dentista }) => {
    const { id, name, username } = dentista;
    const { dispatch} = useContext(ContextGlobal)



    const addFav = () => {
        dispatch({ type: 'ADD_FAV', payload: dentista });
        alert(`Se agregó ${name} a favoritos`)
    };

    return (
        <div className='card'>
            <img className='dentist-img'src='/images/doctor.jpg' alt="Dentista"></img>
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
