import styled from "styled-components/macro";


export const Content = styled.div`
  padding: 0 50px;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
  max-height: 900px;

  &.close {
    height: 900px;
    transition: max-height 0.4s ease-out;
    max-height: 0;
  }


  .details-header {
    animation: fade-in 2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;

    h2 {
      font-size: 1.5rem;
    }

    .close-icon {
      margin-right: 20px;
      font-size: 2rem;
      cursor: pointer;
      color: #999;
      transition: color 0.25s ease-in-out;

      &:hover {
        color: white;
      }
    }
  }

  .overview {
    animation: fade-in 2s;
    font-weight: 300;
    font-size: 0.975rem;
  }


  .details-main {
    animation: fade-in 2s;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    img {
      height: 1rem;
      margin: 10px 30px 0 0;
      cursor: pointer;
    }

    p {
      margin: 10px 30px 0 0;
      font-size: .8rem;

      .name {
        font-size: 1rem;
        font-weight: bold;
        text-decoration: underline;
        margin-right: 4px;
      }

      .rating {
        background-color: hsl(${props => props.ratingHue}, 50%, 50%);
        color: black;
        padding: 0 10px;
        border-radius: 10px;
      }

      .votes {
        background-color: hsl(${props => props.votesHue}, 50%, 50%);
        color: black;
        padding: 0 10px;
        border-radius: 10px;
      }
    }
  }
`;