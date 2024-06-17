import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContext(ContextGlobal)

  const {data: dentista, theme} = state

  return (
    <main className={`home ${theme}`} >
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