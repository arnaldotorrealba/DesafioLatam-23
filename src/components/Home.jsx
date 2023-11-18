import { Container } from 'react-bootstrap'
import image from '/PikachuIMG.png'

export const Home = () => {
  return (
    <Container>
      <h1 className='text-center my-2'>Bienvenido Maestro Pokemón</h1>
      <img
        className='w-25 mx-auto d-block'
        src={image}
        alt='Pikachu Saludando'
      />
    </Container>
  )
}
