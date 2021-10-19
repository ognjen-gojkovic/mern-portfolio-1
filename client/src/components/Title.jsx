import React from "react";
import styled from "styled-components";

const Title = ({ title, span }) => {
  return (
    <TitleStyled>
      <h2>
        {title} <span>{span}</span>
      </h2>
    </TitleStyled>
  );
};

const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.8rem;

    @media screen and (max-width: 496px) {
      font-size: 2.5rem;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 8rem;
      height: 0.33rem;
      background-color: var(--background-light-color-2);
      border-radius: 15px;
      left: 0;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 3rem;
      height: 0.33rem;
      background-color: var(--primary-color);
      border-radius: 15px;
      left: 0;
    }

    span {
      position: absolute;
      font-weight: 700;
      color: var(--background-light-color-2);
      font-size: 4rem;
      left: 2%;
      top: 6%;
      opacity: 0.5;
      z-index: -1;
      @media screen and (max-width: 620px) {
        font-size: 4rem;
      }
      @media screen and (max-width: 496px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 370px) {
        font-size: 2rem;
      }
    }
  }
`;

export default Title;
