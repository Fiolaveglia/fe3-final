import React, { useReducer } from "react";
import Card from "../Components/Card";
import { useState, useEffect } from "react";
import { initialState, favoritesReducer } from "../reducer/reducer";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [dentista, setDentista] = useState([])
  const [favoritos, dispatch] = useReducer(favoritesReducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setDentista(response.data))
      .catch(error => console.error('Error fetching data:', error));
}, []);

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        
        {favoritos.length > 0 ? (
                favoritos.map(dentista => (
                    <Card key={dentista.id} dentista={dentista} dispatch= {dispatch} />
                ))
            ) : (
                <p>No hay dentistas favoritos.</p>
            )}

      </div>
    </>
  );
};

export default Favs;
