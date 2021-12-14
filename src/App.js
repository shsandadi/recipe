import "./App.css";
import { useState } from "react";
import Axios from 'axios';
function App() {
  const YOUR_APP_ID = "96b4eaad";
  const YOUR_APP_KEY = "751073ab0963f762c788a3516e639d1b";
  const [recipes, setRecipes] = useState([]);
  const url =
    `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;
  const getRecipeInfo = async () => {
    var result=await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };
  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <div className="app__searchForm">
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          className="app__input"
        />
        <select className="app__healthLabels">
          <option value="vegan">vegan</option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </div>
    </div>
  );
}

export default App;
