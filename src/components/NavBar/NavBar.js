import React, {useEffect, useState} from 'react';
import {Content, Wrapper} from "./NavBarStyles";

const NavBar = ({setMediaType, mediaType}) => {
  const [color, setColor] = useState("transparent");
  
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setColor("#000")
    } else {
      setColor("transparent")
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])
  
  return (
    <Wrapper color={color}>
      <Content>
        <h1 onClick={() => window.scrollTo(0, 0)} className={"nav-bar-logo"}>popcornTime</h1>
        <div className="nav-bar-buttons">
          <button onClick={() => setMediaType("tv")}>{mediaType === "tv" ? <u>TV</u> : "TV"}</button>
          <button onClick={() => setMediaType("movie")}>{mediaType === "movie" ? <u>MOVIES</u> : "MOVIES"}</button>
        </div>
      </Content>
    </Wrapper>
  );
}

export default NavBar;