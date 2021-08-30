import React from "react";
import './Barra.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Historial from './../Historial/historial';
import Home from './../Inicio/home';


const Barra = () => {

     return (
        <Router>
      <div>
        <div>
         <Link to="/inicio">Inicio</Link>
         <Link to="/historial">Historial</Link>
        </div>
        <hr />
<Switch>
  <Route path="/" exact>
 
  </Route>
  <Route path="/historial">
    <Historial />
  </Route>
  <Route path="/inicio">
    <Home />
  </Route>
</Switch>
      </div>
  </Router>
    );
    }

export default Barra;