import quatroFromages from '../../../img/pizza4Fromages.jpg';
import { React } from "react";
import { Button, Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";

const Menus = () => {
  return (
      <div className="App-Menus" >
        <h2 style={{ fontFamily: "Syne Mono" }}>Les Pizzas</h2>
        <Container>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={quatroFromages} height="180px" width="180px" alt="Pizza avec une base tomate aux 4 fromages"/>
                <Card.Body>
                    <Card.Title style={{ color: '#dc3545' }}>4 Fromaggi</Card.Title>
                    <Card.Text style={{ color: 'black' }}>Pizza avec une base tomate aux 4 fromages</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" style={{ color: 'black' }} size="sm">
                    <ListGroupItem>Chèvre</ListGroupItem>
                    <ListGroupItem>Mozzarella</ListGroupItem>
                    <ListGroupItem>Bleu d'Auvergne</ListGroupItem>
                    <ListGroupItem>Raclette</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="danger" size="sm" href="/panier" style={{ fontFamily: "Syne Mono" }}>Choisir</Button>
                </Card.Body>
            </Card>
        </Container>
      </div>
  );
};
export default Menus;