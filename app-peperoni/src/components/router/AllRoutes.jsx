import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../container/Home/Home';
import Menus from '../container/Menus/Menus';
import Pizzas from '../container/Menus/Pizzas';
// import Desserts from '../container/Menus/Desserts';
// import Boissons from '../container/Menus/Boissons';
// import Panier from '../container/Menus/Panier';


const AllRoutes = (props) => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/menus" component={Menus} />
        <Route exact path="/pizzas" component={Pizzas} />
        {/*<Route exact path="/desserts" component={Desserts} />
        <Route exact path="/boissons" component={Boissons} />
        <Route exact path="/panier" component={Panier} /> */}
    </Switch>
  );
};
export default AllRoutes;
