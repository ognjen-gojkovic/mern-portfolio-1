import React from "react";
import styled from "styled-components";
import Particle from "../components/Particles";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";

const Homepage = () => {
  return (
    <HomepageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi I'm <span>Lorem Ipsum</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          officia aut praesentium enim magnam eveniet aliquam, incidunt culpa
          quasi minus!
        </p>
        <div className="icons">
          <div className="icon i-facebook">
            <FacebookIcon />
          </div>
          <div className="icon i-github">
            <GithubIcon />
          </div>
          <div className="icon i-youtube">
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </HomepageStyled>
  );
};

const HomepageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .particle-con {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--border-color);
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default Homepage;
