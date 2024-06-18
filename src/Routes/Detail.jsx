import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import axios from 'axios';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const { id } = useParams();
    const [dentista, setDentista] = useState([]);
    const {state} = useContext(ContextGlobal)


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => setDentista(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!dentista) {
        return <div>Cargando...</div>;
    }

    return (
        <div className={`${state.theme}`}>
            <div className='card'>
                <h1>Detalle del Dentista</h1>
                <p>Nombre: {dentista.name}</p>
                <p>Email: {dentista.email}</p>
                <p>Teléfono: {dentista.phone}</p>
                <p>Sitio Web: {dentista.website}</p>
            </div>    
        </div>
    );
};

export default Detail