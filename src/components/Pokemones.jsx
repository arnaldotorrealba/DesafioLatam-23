import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

export const Pokemones = () => {
  const [pokemonsList, setPokemonsList] = useState([])
  const [nameSelected, setNameSelected] = useState('')
  const navigate = useNavigate()

  const url = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setPokemonsList(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleNameSelected = e => {
    setNameSelected(e.target.value)
  }

  return (
    <Container>
      <h1 className='text-center my-2'>Selecciona un Pokemón</h1>
      <select
        className='form-select w-25 mx-auto'
        aria-label='Default select example'
        onChange={handleNameSelected}
        value={nameSelected}
      >
        <option>Selecciona Aquí</option>
        {/* <option value='1'>One</option> */}
        {pokemonsList
          ? pokemonsList.map(item => {
              return (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              )
            })
          : null}
      </select>
      <div className='text-center my-2'>
        <Button
          variant='warning'
          onClick={() => {
            navigate(`/pokemones/${nameSelected}`)
          }}
        >
          Buscar
        </Button>
      </div>
    </Container>
  )
}
