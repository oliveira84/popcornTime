import React from 'react';
import {Content, Wrapper} from "./YoutubeStyles";

export const Youtube = ({embedId}) => {
  return (
    <Wrapper>
      <Content>
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
      </Content>
    </Wrapper>
  );
}

export default Youtube;