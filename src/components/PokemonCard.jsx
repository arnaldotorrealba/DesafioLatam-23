import { useNavigate, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import pokeball from '/pokeball-01.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'

export const PokemonCard = () => {
  const { pokemon } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  const [pokemonData, setPokemonData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setPokemonData(res.data)
      })
      .catch(err => {
        console.log(err)
        navigate(`*`)
      })
  }, [])

  return (
    <Container>
      <Card className='mx-auto my-2' style={{ width: '18rem' }}>
        {pokemonData.sprites && (
          <Card.Img
            variant='top'
            src={
              pokemonData.sprites.front_default
                ? pokemonData.sprites.front_default
                : pokeball
            }
          />
        )}
        <Card.Body>
          <Card.Title>{pokemonData.name}</Card.Title>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              Experiencia Base:{' '}
              {pokemonData.base_experience
                ? pokemonData.base_experience
                : 'No definida'}
            </ListGroup.Item>
            <ListGroup.Item>
              Peso (hectogramos):{' '}
              {pokemonData.weight ? pokemonData.weight : 'No definido'}
            </ListGroup.Item>
            <ListGroup.Item>
              Altura (decimetros):{' '}
              {pokemonData.height ? pokemonData.height : 'No definida'}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <div className='text-center my-2'>
        <Button
          variant='warning'
          onClick={() => {
            navigate(`/pokemones`)
          }}
        >
          Regresar
        </Button>
      </div>
    </Container>
  )
}
