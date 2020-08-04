import React from 'react';
import '../App.css';
import Tables from './Tables/Tables';
import TableForm from './Tables/TableForm';
import Home from './Home';
import Header from './Header';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
const App  = () =>
  (
    <div className="App ui container">
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/tables" component = {Tables}/>
          <Route exact path="/tables/:id"/>
          <Route exact path="/tables/add" component = {TableForm}/>
        </div>
      </BrowserRouter>
    </div>
  );


export default App;
