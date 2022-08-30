import { Component } from 'react'
import { Container, Row, Col, Carousel, } from 'react-bootstrap'
import fantasy from '../books/fantasy.json'

// per fare in modo che la lista rispecchi in ogni momento le recensioni
// dell'ultima pasta selezionata (cliccata), ho bisogno di inserire nel
// componente Home uno STATE
// lo STATE è una specie di "memoria" del componente
// lo STATE esiste solamente nei componenti CLASSE

class LatestReleaseComponent extends Component {
 

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className="text-center my-3">
              <h1>Benvenuti!</h1>
              
            </div>
            <Carousel>
              {/* React genera dinamicamente elementi utilizzando .map() */}
              {fantasy.map((film, i) => (
                <Carousel.Item
                  key={film.id}
                  
                    
                  
                >
                  <img
                    className="d-block w-100"
                    src={film.img}
                    alt="First slide"
					
                  />
                  <Carousel.Caption>
                    <h3>{film.title}</h3>
                    <p>{film.category}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6} className="text-center">
           
              
           
          </Col>
        </Row>
      </Container>
    )
  }
}

export default LatestReleaseComponent