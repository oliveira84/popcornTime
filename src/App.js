import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import {getTrendingUrl, getGenreUrl, getGenresUrl, getTopRatedUrl} from "./api/tmdb";
import React, {createContext, useEffect, useState} from "react";
import {GlobalStyle} from "./GlobalStyles";
import axios from "axios";

export const GlobalContext = createContext({});


function App() {
  const [genres, setGenres] = useState([]);
  const [mediaType, setMediaType] = useState("tv");
  
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(getGenresUrl(mediaType));
        setGenres(response.data.genres);
      } catch (err) {
        console.log("[ App ]: fetch Error = ", err);
      }
    };
    fetchGenres().then();
  }, [mediaType]);
  
  return (
    <div className="App">
      <NavBar setMediaType={setMediaType} mediaType={mediaType}/>
      <Banner fetchUrl={getTrendingUrl(mediaType)}/>
      <GlobalContext.Provider value={{genres: genres, mediaType: mediaType}}>
        <Row title={"Trending Now"} fetchUrl={getTrendingUrl(mediaType)}/>
        {genres.map(genre => <Row key={genre.id} title={genre.name} fetchUrl={getGenreUrl(mediaType, genre.id)}/>)}
      </GlobalContext.Provider>
      <GlobalStyle/>
    </div>
  );
}

export default App;
