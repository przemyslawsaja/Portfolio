import React from 'react';
import './App.css';
import Background from "./components/background/background";
import StartView from "./Views/StartView/StartView";

function App() {
  return (
    <div className="App">
        <Background />
        <StartView />
    </div>
  );
}

export default App;
