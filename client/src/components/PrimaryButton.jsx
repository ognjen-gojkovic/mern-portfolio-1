import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ title }) => {
  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
};

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  color: var(--white-color);
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  font-size: inherit;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    transition: all 0.3s ease-in-out;
    left: 0;
    bottom: 0;
    background-color: var(--white-color);
    width: 0;
    height: 0;
  }

  &:hover::after {
    width: 100%;
    height: 10%;
  }
`;

export default PrimaryButton;
