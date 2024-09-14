import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const { state } = useContextGlobal();
  const isDark = state.theme;

  return (
    <main className={`${!isDark ? 'mainDark' : ''}`} >
      <div className={`${!isDark ? 'divCentralDark' : 'divCentral'}`}>
        <div>
        <h1>Home</h1>
        <div className='card-grid'>
        {state.dentist.map((dentist) => (
          <Card key = {dentist.id} dentist = {dentist}/>
        ))}
        </div>
      </div>
      </div>
    </main>
  )
}

export default Home