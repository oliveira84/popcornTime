import React, {useContext, useEffect, useRef, useState} from 'react';
import {Content} from "./DetailsStyles";
import {Cancel} from "@material-ui/icons";
import {GlobalContext} from "../../App";
import axios from "axios";
import {getMovieExternalUrl, getVideosUrl} from "../../api/tmdb";
import Youtube from "../Youtube/Youtube";

export const Details = ({movie, setMovie}) => {
  const {genres, mediaType} = useContext(GlobalContext);
  const [imdbUrl, setImdUrl] = useState("")
  const [youtubeId, setYoutubeId] = useState("");
  const detailsRef = useRef()
  
  // getImdbURL
  useEffect(() => {
    if (!movie) return;
    const fetchGenres = async () => {
      try {
        const response = await axios.get(getMovieExternalUrl(mediaType, movie.id));
        setImdUrl(`https://www.imdb.com/title/${response.data.imdb_id}/`)
      } catch (err) {
        console.log("[ App ]: fetch Error = ", err);
      }
    };
    fetchGenres().then();
  }, [mediaType, movie]);
  
  // getYoutubeId
  useEffect(() => {
    if (!movie) return;
    const fetchGenres = async () => {
      try {
        const response = await axios.get(getVideosUrl(mediaType, movie.id));
        const youtubeList = response.data.results.filter(video => video.site === "YouTube");
        setYoutubeId(youtubeList.length === 0 ? "" : youtubeList[youtubeList.length - 1].key)
      } catch (err) {
        console.log("[ App ]: fetch Error = ", err);
      }
    };
    fetchGenres().then();
  }, [movie, mediaType])
  console.log(detailsRef)
  
  return (
    <Content
      className={movie ? "open" : "close"}
      /*height={movie ? "700px" : 0}*/
      ratingHue={movie ? movie.vote_average * 10 : 0}
      votesHue={movie ? movie.vote_count > 1000 ? 100 : movie.vote_count / 10 : 0}
    >
      {movie && <>
        <div className="details-header">
          <h2>{(movie.name ? movie.name : movie.title)}</h2>
          <Cancel className={"close-icon"} onClick={() => setMovie(null)}/>
        </div>
        <p className={"overview"}>{movie.overview}</p>
        <div className="details-main">
          <p><span className={"name"}>Rating</span> <span className={"rating"}>{movie.vote_average}</span></p>
          <p><span className={"name"}>Votes</span> <span className={"votes"}>{movie.vote_count}</span></p>
          {movie.release_date && <p><span className={"name"}>Release</span> <em>{movie.release_date}</em></p>}
          {movie.first_air_date && <p><span className={"name"}>Release</span> <em>{movie.first_air_date}</em></p>}
          {genres && <p><span className={"name"}>Genre</span> <em>{
            (genres.filter((genre => movie.genre_ids.includes(genre.id)))).map((genre, index) => ` ${index > 0 ? "| " : ""}${genre.name}`)
          }</em></p>}
          <a href={imdbUrl} target="_blank">
            <img src="images/IMDB_Logo.svg" alt="IMDB details"/>
          </a>
        </div>
        {youtubeId && <Youtube embedId={youtubeId}/>}
      </>
      }
    
    </Content>
  );
}

export default Details;