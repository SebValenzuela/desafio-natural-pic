import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useContext } from 'react'
import Context from '../../context'

export default () => {

    const {characters, setCharacters} = useContext(Context)

    const handleClick = (id) => {
        const character = characters.map(val => {
            if (val.id === id) {
                if (val.favorito === false){
                    return {...val, favorito:true}
                }
                return {...val, favorito:false}
            }
            return val
        })
        character.favorito = true
        setCharacters(character)
    }

    return (
        <>
            <div className="home-class">
                <h1 className='text-center mt-4'>Catalgo de personajes</h1> 
                <Container>
                    <Row className='align-items-center'>
                        {characters ? characters.map(character => 
                        <Col lg={3} md={12} className='my-4'>
                            <Card>
                                <Card.Img variant="top" src={character.image}/>
                                <Card.Body>
                                    <Card.Title>{character.name}</Card.Title>
                                    <Card.Text>
                                        <p>Especie: {character.species}</p>
                                        <p>Tipo de Especie: {character.type}</p>
                                        <p>Estado: {character.status}</p>
                                        <p>Género : {character.gender}</p>
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleClick(character.id)}>Favorito</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        ) : <p>loading...</p>}
                    </Row>
                </Container>
            </div>
        </>
    )
}