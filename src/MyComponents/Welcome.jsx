import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WelcomeComponent() {
  return (
	 <Container><h1 style={{color:'red',textAlign:'center'}}> Your personal book shop</h1>
    <Card style={{ width: '50rem' ,height:'45rem',textAlign:'center',margin:'auto',padding:'30px' }}>
	<Card.Img variant="top" src="immagini-e-tabelle-html-00.jpeg" />
      <Card.Body>
        <Card.Title>WELCOME!</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Let's start</Button>
      </Card.Body>
    </Card>
	</Container> 
  );//
}

export default WelcomeComponent;