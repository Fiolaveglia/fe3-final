import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';
import '../index.css'

const Home = () => {
  const {state} = useContext(ContextGlobal)
  
  const {data: dentista} = state

  return (
    <main className='home'>
      <h1>Odontologos</h1>
      <div className='card-grid'>
        {dentista.map(dentista => (
                <Card key={dentista.id} dentista={dentista} />
            ))}
      </div>
    </main>
  )
}

export default Home