import './App.css';
import TradeForm from './components/TradeForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import AddTrade from './components/AddTrade';
import UpdateTrade from './components/UpdateTrade';
import SaveOrder from './components/SaveOrder';
import ShowOrders from './components/ShowOrders';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/displayTrade" component={TradeForm} />
          <Route exact path="/addTrade" component={AddTrade} />
          <Route exact path="/updateTrade/:stock_name" component={UpdateTrade} />
          <Route exact path="/saveOrder" component={SaveOrder} />
          <Route exact path="/showOrders"  component={ShowOrders}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
