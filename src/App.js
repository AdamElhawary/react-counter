import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Home from "./Home";
import Counter from "./components/counter";
import Products from "./components/products";
import ProductDetails from "./components/ProductDetails";
import Todo from "./components/todo";
import Login from "./components/Forms/Login";
import Registeration from "./components/Forms/Register";
const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/react-iti-portfolio" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/shop" component={Products} />
        <Route path="/product/details/:id" component={ProductDetails} />
        <Route path="/todo" component={Todo} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registeration} />
      </Switch>
    </Router>
  );
};

export default App;
