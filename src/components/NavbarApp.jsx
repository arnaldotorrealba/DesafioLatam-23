import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { CgPokemon } from 'react-icons/cg'

export const NavbarApp = () => {
  const setActiveClass = ({ isActive }) =>
    isActive
      ? 'text-warning mx-2 text-decoration-none'
      : 'text-white mx-2 text-decoration-none'

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand className='fs-3 text-warning' href='/'>
            <CgPokemon className='mb-1 fs-2' /> Pokemones
          </Navbar.Brand>
          <div>
            <NavLink to='/' className={setActiveClass}>
              Home
            </NavLink>
            <NavLink to='/pokemones' className={setActiveClass}>
              Pokemones
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </>
  )
}
