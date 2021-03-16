import { React } from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
      <div className="App-Home">
        <h1>Bienvenue chez Peperoni !</h1>
        <Button variant="outline-danger" size="lg" href="/menus">Commander</Button>
      </div>
  );
};
export default Home;