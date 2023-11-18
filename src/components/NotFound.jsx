import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import image from '/pokeball-01.png'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <h1 className='text-center my-2'>Pokemón No encontrado</h1>
      <img
        className='w-25 mx-auto d-block'
        src={image}
        alt='Pikachu Saludando'
      />
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
