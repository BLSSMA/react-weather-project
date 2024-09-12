import Weather from "./Weather";
import './App.css';

export default function App() {
  return (    
  <div className="App">
    <div className="container"><Weather defaultCity="New York"/></div>

<div className="footer">This App Was Coded by <a href="https://www.shecodes.io/graduates/123692-blossom-armstrong" target="_blank" rel="noreferrer">Blossom Armstrong</a>, is hosted on <a href="https://app.netlify.com/sites/react-weather-project-ba/deploys" target="_blank" rel="noreferrer">Netlify</a> and is Open-Sourced on <a href ="https://github.com/BLSSMA/react-weather-project" target="_blank" rel="noreferrer">GitHub</a></div>
    </div>
  );
}

