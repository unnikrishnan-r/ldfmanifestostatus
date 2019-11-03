import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import AddMainestoItem from "./pages/addManifestoItem";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/addmainfestoitem" component={AddMainestoItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
