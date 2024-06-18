import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
//import { useState, useEffect } from "react";
//import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const { favoritos, theme } = state;

  return (
    <div className={`${theme}`}>
      <h1>Dentistas Favoritos</h1>
      <div className= 'card-grid'>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        
        {favoritos.length > 0 ? (
                favoritos.map(dentista => (
                    <Card key={dentista.id} dentista={dentista} />
                ))
            ) : (
                <p>No hay dentistas favoritos.</p>
            )}

      </div>
    </div>
  );
};

export default Favs;
