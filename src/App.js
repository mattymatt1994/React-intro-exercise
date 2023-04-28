import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React is kinda cool...eh</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
<h1>Dad Jokes For Tyson</h1>
      <p>
        <ul>
         <li> Why can't you hear a pterodactyl going to the bathroom? Because the
          "p" is silent!</li>
          <li>What do you call an angry carrot? A steamed veggie.</li>
          <li>What did the triangle say to the circle? You're pointless.</li>
        </ul>

        
        
      </p>
    </div>
  );
}

export default App;
