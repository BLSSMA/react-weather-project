import Weather from "./Weather";
import './App.css';

export default function App() {
  return (    
  <div className="App">
    <div className="container"><Weather defaultCity="New York"/></div>

<div className="footer">This App Was Coded by Blossom Armstrong and is Open-Sourced on <a href ="https://github.com/BLSSMA/react-weather-project" target="_blank" rel="noreferrer">GitHub</a></div>
    </div>
  );
}

