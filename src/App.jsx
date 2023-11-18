import { Route, Routes } from 'react-router-dom'
import { NavbarApp } from './components/NavbarApp'
import { Home } from './components/Home'
import { Pokemones } from './components/Pokemones'
import { PokemonCard } from './components/pokemonCard'
import { NotFound } from './components/NotFound'

import './App.css'

function App () {
  return (
    <>
      <NavbarApp />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemones' element={<Pokemones />} />
        <Route path='/pokemones/:pokemon' element={<PokemonCard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
