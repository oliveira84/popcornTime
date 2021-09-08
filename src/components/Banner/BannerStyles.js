import styled from "styled-components/macro";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 600px;
  background: linear-gradient(0deg, rgba(34, 34, 34, 1) 0%,
  rgba(34, 34, 34, 0.35) 100%),
  url(${props => props.image}), #222;
  background-size: 100%, cover;
  background-position: center;
  margin-bottom: 20px;
  animation: fade-in 1s;
`;

export const Content = styled.div`
  max-width: var(--max-width);
  padding: 80px 20px 0;
  margin: 0 auto;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  .banner-title {
    font-weight: 700;
    padding-bottom: 1rem;
    font-size: 3rem;
  }

  .banner-description {
    /*width: 45rem;*/
    line-height: 1.3;
    padding-top: 0.5rem;
    font-size: 1rem;
    max-width: 600px;
    height: 80px;
  }

  /*.banner-buttons {
    .banner-button {
      margin-right: 20px;
      cursor: pointer;
      color: white;
      outline: none;
      border: none;
      font-weight: 700;
      border-radius: 3px;
      padding: 0.7rem 3rem;
      background-color: #333;

      :hover {
        color: black;
        background-color: #eee;
        transition: all 0.3s ease-out;
      }
    }
  }*/
`;
