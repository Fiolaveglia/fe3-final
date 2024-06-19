import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const { favoritos } = state;

  return (
    <div className='favoritos'>
      <h1>Dentistas Favoritos</h1>
      <div className= 'card-grid'>
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
