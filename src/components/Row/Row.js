import React, {useEffect, useRef, useState} from 'react';
import {Container, Content, Frame, ScrollX, Thumbnail, Wrapper} from "./RowStyles";
import axios from "axios";
import {imageBaseUrl, imageSize} from "../../api/tmdb";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";
import Details from "../Details/Details";


const Row = ({title, fetchUrl}) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [position, setPosition] = useState(0)
  const rowRef = useRef(null);
  
  
  const scrollRight = () => {
    if (position === 0) {
      setPosition(-rowRef.current.scrollWidth + rowRef.current.clientWidth)
    } else {
      setPosition(Math.min(position + rowRef.current.scrollWidth / movies.length, 0))
    }
  }
  
  const scrollLeft = () => {
    if (position === -rowRef.current.scrollWidth + rowRef.current.clientWidth) {
      setPosition(0)
    } else {
      setPosition(Math.max(-rowRef.current.scrollWidth + rowRef.current.clientWidth, position - 2 * rowRef.current.scrollWidth / movies.length));
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
        return response;
      } catch (err) {
        console.log("[ Row ]: fetch Error = ", err);
      }
    }
    fetchData().then();
  }, [fetchUrl, setPosition]);
  
  const handleClick = (item) => {
    if (movie === null || item.id !== movie.id) {
      setMovie(item);
    } else {
      setMovie(null);
    }
  }
  
  return (
    <Wrapper>
      <Content>
        <h2 className={"title"}>{title}</h2>
        <Container>
          <ChevronLeft className={"chevron"} onClick={scrollRight}/>
          <Frame>
            <ScrollX position={position} ref={rowRef}>
              {movies.map(item => {
                return (
                  item.poster_path &&
                  <div key={item.id} className={"thumbnail-wrapper"}>
                    <Thumbnail
                      onClick={() => handleClick(item)}
                      height={251.92}
                      src={`${imageBaseUrl}${imageSize.thumbnail}${item.poster_path}`}
                      alt={item.name ? item.name : item.title}/>
                  </div>
                )
              })}
            </ScrollX>
          </Frame>
          <ChevronRight className={"chevron"} onClick={scrollLeft}/>
        </Container>
        <Details movie={movie} setMovie={setMovie}/>
      </Content>
    </Wrapper>
  );
}

export default Row;