import React from 'react'
import Card from '../Components/Card'
import { useState, useEffect } from 'react';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentista, setDentista] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users"; 

  useEffect(() => {
    axios.get(url)
        .then(response => setDentista(response.data))
        .catch(error => console.error('Error fetching data:', error));
}, []); 
  
  return (
    <main className="home" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentista.map(dentista => (
                <Card key={dentista.id} dentista={dentista} />
            ))}
      </div>
    </main>
  )
}

export default Home