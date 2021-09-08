import styled from "styled-components/macro";


export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  color: white;
`;

export const Content = styled.div`
  max-width: var(--max-width);
  margin: 0 auto 40px auto;
  padding: 0 20px;

  .title {
    color: #eee;
    margin-bottom: 15px;
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const Container = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  .chevron {
    width: 40px;
    font-size: 2.5rem;
    cursor: pointer;
    color: #777;
    transition: color 0.25s ease-in-out;

    &:hover {
      color: white;
    }
  }
`;

export const Frame = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const ScrollX = styled.div`
  transform: translateX(${props => props.position}px);
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;

  .title {
    color: white;
    margin: 0;
    width: 100%;
    font-weight: bold;
    font-size: 0.8rem;
    @media (max-width: 600px) {
      font-size: 0.6rem;
    }
  }

`;

export const Thumbnail = styled.img`
  cursor: pointer;
  padding: 2px;
  background: linear-gradient(-20deg, #222 0%, #aaa 100%);
  margin: ${props => props.height * 0.02}px 5px;
  height: ${props => props.height}px;
  animation: fade-in 0.5s;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.15s ease-in-out;

  @media (max-width: 600px) {
    height: ${props => props.height / 1.8}px;
    margin: 0 2px;
  }

  &:hover {
    transform: scale(1.04);
    @media (max-width: 600px) {
      transform: scale(0.97);
    }
  }
`;
