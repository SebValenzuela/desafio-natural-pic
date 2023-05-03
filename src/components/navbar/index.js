import { Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <>
            <Navbar bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand className='text-primary'>ReactRouter</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Link className='text-white ms-3 text-decoration-none' to="/">Home</Link>
                        <Link className='text-white ms-3 text-decoration-none' to="/contact">Form</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}