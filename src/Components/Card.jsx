import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ dentista, dispatch }) => {
    const { id, name, username } = dentista;
    const {state} = useContext(ContextGlobal)



    const addFav = () => {
        // Aqui iria la logica para agregar la Card en el localStorage

        dispatch({ type: 'ADD_FAV', payload: dentista });
    };

    return (
        <div className="card">
            {/* En cada card deberan mostrar en name - username y el id */}
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
            
            <h2>{name}</h2>
            <p>{username}</p>
            <p>ID: {id}</p>
            <Link to={`/dentist/${id}`}>Ver detalles</Link>
            <button onClick={addFav} className="favButton">
                Guardar favorito
            </button>
        </div>
    );
};

export default Card;
