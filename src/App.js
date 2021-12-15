import "./App.css";
import { useState } from "react";
import Axios from "axios";
function App() {
  const YOUR_APP_ID = "96b4eaad";
  const YOUR_APP_KEY = "751073ab0963f762c788a3516e639d1b";
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegan");
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };
  const onHealthSelected = (e) => {
    setHealthLabel(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault(); // This will prevent page from reloading.
    getRecipeInfo();
  };
  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          className="app__input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <select className="app__healthLabels" onChange={onHealthSelected}>
          <option value="vegan">vegan</option>
          <option value="vegetarian">vegetarian</option>
          <option value="low-sugar">low sugar</option>
          <option value="dairy-free">dairy free</option>
          <option value="immuno-supportive">immuno-supportive</option>
          <option value="wheat-free">wheat-free</option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </form>
    </div>
  );
}

export default App;
