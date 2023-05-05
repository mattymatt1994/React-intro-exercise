import { useState, useEffect } from "react";

function FilmsPage(props) {
  const [list, setList] = useState([]);
  function getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setList( data );
      })
      .catch((err) => {
        console.log("Fetch DENIED")
        console.error(err)});
  }

  //An empty dependency array means that the callback function
  //will only get called back once(aka invoked)
  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
    <h1>Studio Ghibli Films</h1>
    <ul>
      {list.map((film) => {
        return <li key={film.id}>{film.title}</li>;
      })}
    </ul>
  </div>
  );
}

export default FilmsPage;
