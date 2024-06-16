import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const { id } = useParams();
    const [dentista, setDentista] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => setDentista(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!dentista) {
        return <div>Cargando...</div>;
    }
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

    return (
        <>
            <h1>Detalle del Dentista</h1>
            <p>Nombre: {dentista.name}</p>
            <p>Email: {dentista.email}</p>
            <p>Teléfono: {dentista.phone}</p>
            <p>Sitio Web: {dentista.website}</p>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        </>
    );
};

export default Detail