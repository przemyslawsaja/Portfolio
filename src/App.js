import React from 'react';
import './App.css';
import Background from "./components/background/background";
import StartView from "./Views/StartView";
import Navigation from "./components/navbar/navigation";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
            <Router>
                <Navigation />
                    <Switch>
                        <Route path="/about"></Route>
                        <Route path="/users"></Route>
                        <Route path="/" > <StartView /> </Route>
                    </Switch>
            </Router>
        <Background />
    </div>
  );
}

export default App;
