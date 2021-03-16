import solo from '../../../img/solo.jpg';
import duo from '../../../img/duo.png';
import amici from '../../../img/amici.jpg';
import { React } from "react";
import { Button, Card, CardDeck, Container } from "react-bootstrap";

const Menus = () => {
  return (
      <div className="App-Menus" >
        <h2 style={{ fontFamily: "Syne Mono" }}>Les Menus</h2>
        <Container>
            <CardDeck>
                <Card text="dark">
                    <Card.Img variant="top" src={solo} height="160px" width="160px" alt="Menu Solo"/>
                    <Card.Body>
                    <Card.Title style={{ fontFamily: "Syne Mono" }}>Menu Solo</Card.Title>
                    <Card.Text style={{ fontSize: "1rem"}}>
                        Le menu complet pour se faire plaisir.
                        Choissisez 1 Pizzas, 1 petites boissons, et 1 dessert!
                    </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Button variant="outline-danger" size="sm" href="/panier" style={{ fontFamily: "Syne Mono" }}>Commander</Button>
                    </Card.Body>
                </Card>
                <Card text="dark">
                    <Card.Img variant="top" src={duo} height="160px" width="160px" alt="Menu Duo"/>
                    <Card.Body>
                    <Card.Title style={{ fontFamily: "Syne Mono" }}>Menu Duo</Card.Title>
                    <Card.Text style={{ fontSize: "1rem"}}>
                        Le menu idéale pour une soirée à deux.
                        Choissisez 2 Pizzas, 2 petites boissons, et 1 dessert à partager!
                    </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Button variant="outline-danger" size="sm" href="/panier" style={{ fontFamily: "Syne Mono" }}>Commander</Button>
                    </Card.Body>
                </Card>
                <Card text="dark">
                    <Card.Img variant="top" src={amici} height="160px" width="160px" alt="Menu Amici"/>
                    <Card.Body>
                    <Card.Title style={{ fontFamily: "Syne Mono" }}>Menu Amici</Card.Title>
                    <Card.Text style={{ fontSize: "1rem"}}>
                        Le menu parfait pour une soirée entre amis, ou famille.
                        Choissisez 4 Pizzas, 2 grandes boissons, et 2 desserts à partager!
                    </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Button variant="outline-danger" size="sm" href="/panier" style={{ fontFamily: "Syne Mono" }}>Commander</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
      </div>
  );
};
export default Menus;