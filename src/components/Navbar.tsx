import {Container,Nav,Navbar as Navbarbs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
export function Navbar(){
    return (
        <Navbarbs className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav>
            <Nav.Link to = '/'> as ={NavLink}</Nav.Link>
            </Nav>
        </Container>
        </Navbarbs>

    )
 
}