import { useState } from "react";
import FilmsList from "./components/filmsList";
import "./App.css";


function App (props) {
 const [list, setList] = useState(["ready", "set", "GO"]);
 const [text, setText] = useState("");
  //Make sure that the method is bound to this class
  //Aka, keep Texas from leaving the Union!

  function handleChange(event) {
    setText(event.target.value);
  }


 function onSubmit(event) {
    event.preventDefault();
    setList({
      list: [...list, text],
    });
  }
  
    return (
      <div className="App">
        <h1>React is "okay"..</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="listInput"
            id="listInput"
            value={text}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          {list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    );
  
}

export default App;

