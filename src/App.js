import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Home from "./Home";
import Counter from "./components/counter";
import Products from "./components/products";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/shop" component={Products} />
        <Route path="/product/details/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
