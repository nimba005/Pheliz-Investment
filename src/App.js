import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        {/* Add a route for the Home component */}
        <Route path="/" exact Component={() => <h1>Welcome to Pheliz Investment!</h1>} />
      </Switch>
    </Router>
  );
}

export default App;