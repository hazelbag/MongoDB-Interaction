import React from 'react';
// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
// Import all components being used
import Navbar from "./components/navbar.component"
import CarsList from "./components/cars-list.component";
import EditCar from "./components/edit-cars.component";
import CreateCar from "./components/create-cars.component";

function App() {
  return (
    // Router for the path to each, home screen, edit list and add new item
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={CarsList} />
      <Route path="/edit/:id" component={EditCar} />
      <Route path="/create" component={CreateCar} />
      </div>
    </Router>
  );
}

export default App;
