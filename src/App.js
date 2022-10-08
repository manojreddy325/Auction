import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import AuctionTypes from './components/AuctionTypes';
import About from './components/About';
import Contact from './components/Contact';
import Help from './components/Help';
import BankAuctions from './components/BankAuctions';
import PoliceAuctions from './components/PoliceAuctions';
import PaintingAuctions from './components/PaintingAuctions';
import CarRentalAuctions from './components/CarRentalAuctions';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auctiontypes" component={AuctionTypes} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/bankauctions" component={BankAuctions} />
        <Route exact path="/policeauctions" component={PoliceAuctions} />
        <Route exact path="/paintingauctions" component={PaintingAuctions} />
        <Route exact path="/rentalauctions" component={CarRentalAuctions} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
