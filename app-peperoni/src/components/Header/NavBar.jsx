import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" style={{ fontFamily: "Syne Mono" }}>
      <Navbar.Brand href="/home">Peperoni</Navbar.Brand>
      <Navbar.Collapse className="justify-content-center">
        <Nav className="">
          <Nav.Link href="/menus">Menus</Nav.Link>
          <Nav.Link href="/pizzas">Pizzas</Nav.Link>
          <Nav.Link href="/desserts">Desserts</Nav.Link>
          <Nav.Link href="/boissons">Boissons</Nav.Link>
          <Nav.Link href="/panier">Panier</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
