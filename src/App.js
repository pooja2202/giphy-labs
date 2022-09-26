import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
// import APIService from "./utils/APIService";
import axios from "axios";
import Card from "./Components/Card";

const App = () => {
  const [dataResponse, setDataResponse] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loadingTxt, updateLoadingTxt] = useState("");

  const getGiphyData = (queryParam) => {
    updateLoadingTxt("Loading Gifs");
    axios
      .get(
        "https://api.giphy.com/v1/gifs/search?api_key=5pz3ijoel9TP8PVJPb0SDND5kdXihPyc&q=" +
          queryParam
      )
      .then((response) => {
        setDataResponse(response.data.data);
        updateLoadingTxt("");
      })
      .catch((error) => {});
  };

  const handleChange = (inputValue) => {
    setSearchInput(inputValue);
  };

  const handleSubmit = () => {
    getGiphyData(searchInput);
  };

  const navigatePage = () => {};

  useEffect(() => {}, []);

  return (
    <div className="App">
      <label>Giphy</label>
      <div>
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="search giphy"
        />
        <button onClick={() => handleSubmit()}>Search</button>
        <button onClick={() => navigatePage()}>What's Trending ?</button>
      </div>
      <div>
        {loadingTxt.length !== 0 ? (
          <label>{loadingTxt}</label>
        ) : (
          <label></label>
        )}
      </div>
      <div>
        {dataResponse.length !== 0 ? (
          <Card DataResponse={dataResponse} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default App;
