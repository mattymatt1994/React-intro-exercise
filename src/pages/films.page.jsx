import { useState, useEffect } from "react";
import { filerFilmsByDirector, getListOf } from "../helpers/film.helpers";

function FilmsPage(props) {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");
  function getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setList(data);
      })
      .catch((err) => {
        console.log("Fetch DENIED");
        console.error(err);
      });
  }

  //An empty dependency array means that the callback function
  //will only get called back once(aka invoked)
  useEffect(() => {
    getFilms();
  }, []);

  //Derived State
  const filmsByDirector = filerFilmsByDirector(list, searchDirector);
  const directors = getListOf(list, "director" )

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <div>
        <label htmlFor="directorSelect">Pick A Director</label>
        <select
          name="directorSelector"
          id="directorSelector"
          value={searchDirector}
          onChange={(ev)=>{setSearchDirector(ev.target.value)}}
        >
          <option value="">All Directors</option>
          {directors.map((director) => {
            return <option value={director}>{director}</option>
          })}
        </select>
      </div>
      <ul>
        {list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
