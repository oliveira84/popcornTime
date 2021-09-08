import styled from "styled-components/macro";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${props => props.color};
  ${props => props.color !== "transparent" ? "box-shadow: 0 3px 20px 0 #000000;" : ""}
  z-index: 99;
  transition: all 0.5s ease-in;
`;

export const Content = styled.div`
  padding: 0 20px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);

  .nav-bar-logo {
    font-size: 2rem;
    color: white;
    cursor: pointer;

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  .nav-bar-buttons {
    button {
      color: #eee;
      cursor: pointer;
      margin-left: 20px;
      padding: 10px 20px;
      background-color: rgba(0, 0, 0, 0.6);
      border: 2px solid #777;
      font-size: 0.8rem;
      font-weight: 600;
      border-radius: 4px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #ddd;
        color: #111;
        border: 2px solid #ddd;
      }

      @media (max-width: 600px) {
        font-size: 0.6rem;
        padding: 6px 13px;
        margin-left: 5px;
      }

    }
  }



`;
