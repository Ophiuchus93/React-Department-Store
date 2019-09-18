import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home  from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Departs from "./components/Departs";
import Items from "./components/Items";
import NoMatch from "./components/NoMatch";
import { Container, } from "semantic-ui-react";
 
const App = () => (
  <>
    <Container>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments" component={Departs} />
        <Route exact path="/departments/items" component={Items} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;
