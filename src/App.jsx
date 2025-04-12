import React ,{ useState } from "react";

function App() {
  const[category, setCategory] = useState('Any');
  const [joke, setJoke] = useState([]);

  async function getJoke() {
    const joke = await fetch(
      `https://v2.jokeapi.dev/joke/${category}`
    );
    const data = await joke.json();
    if(data.type == 'twopart' ){
      setJoke([data.setup, data.delivery]);
    }
    else{
      setJoke([data.joke]);
    }
    
  }

  return (
    <div className="App">
      <h1>Joke App</h1>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="Any">Any</option>
        <option value="Programming">Programming</option>
        <option value="Miscellaneous">Misc</option>
        <option value="Dark">Dark</option>
        <option value="Pun">Pun</option>
        <option value="Spooky">Spooky</option>
        <option value="Christmas">Christmas</option>
      </select>
      <button onClick={getJoke}>Get a Joke</button>
      <div>
        {
          joke.setup ? <div> <h1>{joke.setup}</h1> <h1>{joke.delivery}</h1> </div> : <h1>{joke}</h1>
        }
      </div>
    </div>
  );
}
export default App;
