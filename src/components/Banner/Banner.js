import React, {useEffect, useState} from 'react';
import {Content, Wrapper} from "./BannerStyles";
import {imageBaseUrl, imageSize} from "../../api/tmdb";
import axios from "axios";

const Banner = ({fetchUrl}) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
        return response;
      } catch (err) {
        console.log("[ Banner ]: fetchMovie Error = ", err);
      }
    }
    fetchData().then();
  }, [fetchUrl]);

  return (
    <Wrapper image={movie ? `${imageBaseUrl}${imageSize.backdrop}${movie.backdrop_path}` : "images/banner.jpg"}>
      <Content>
        <h1 className={"banner-title"}>{movie && (movie.name ? movie.name : movie.title)}</h1>
        {/*<div className="banner-buttons">
          <button className={"banner-button"}>Play</button>
          <button className={"banner-button"}>My List</button>
        </div>*/}
        <p className={"banner-description"}>{movie && movie.overview}
        </p>
      </Content>
    </Wrapper>
  );
}

export default Banner;