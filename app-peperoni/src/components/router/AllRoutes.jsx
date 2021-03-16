import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../container/Home/Home';
// import Menus from '../user/Menus';
// import Pizzas from '../user/Pizzas';
// import Desserts from '../user/Desserts';
// import Boissons from '../user/Boissons';
// import Panier from '../user/Panier';


const AllRoutes = (props) => {
  return (
    <Switch>
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/menus" component={Menus} />
        <Route exact path="/pizzas" component={Pizzas} />
        <Route exact path="/desserts" component={Desserts} />
        <Route exact path="/boissons" component={Boissons} />
        <Route exact path="/panier" component={Panier} /> */}
    </Switch>
  );
};
export default AllRoutes;
