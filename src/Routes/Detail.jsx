import React from 'react'
import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const Detail = () => {
    const { id } = useParams();
    const [dentista, setDentista] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => setDentista(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!dentista) {
        return <div>Cargando...</div>;
    }


    return (
        <div className='detail'>
            <h1>Detalle del Dentista</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{dentista.name}</td>
                        <td>{dentista.email}</td>
                        <td>{dentista.phone}</td>
                        <td>{dentista.website}</td>
                    </tr>
                </tbody>
            </table>
            <button className="back" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faChevronLeft} style={{color: '#5f9ea0', marginRight: '10px'}} />VOLVER ATRÁS</button>
        </div>
    );
};

export default Detail