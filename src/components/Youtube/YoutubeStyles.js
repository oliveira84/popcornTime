import styled from "styled-components/macro";

export const Wrapper = styled.div`
  margin: 20px auto 0 auto;
  width: 100%;
`;

export const Content = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;