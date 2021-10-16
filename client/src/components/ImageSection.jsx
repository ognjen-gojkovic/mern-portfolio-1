import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume-image" />
      </div>
      <div className="right-content">
        <h4>
          I'm <span>Lorem Ipsum</span>
        </h4>

        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          voluptatibus consequuntur repudiandae minima quibusdam, repellat
          corrupti minus eos magnam cupiditate!
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Work</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info-title">
            <p>: Lorem Ipsum</p>
            <p>: 33</p>
            <p>: web developer</p>
            <p>: croatian</p>
            <p>: Croatia</p>
            <p>: freelance</p>
          </div>
        </div>
        <PrimaryButton title="Download CV" />
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  height: 100%;

  .left-content {
    width: 100%;
    height: 80vh;

    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
    }
  }

  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }

    .paragraph {
      padding: 0.5rem 0;
    }

    .about-info {
      display: flex;
      padding-bottom: 1rem;

      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 400;
        }
      }

      .info-title,
      .info {
        p {
          margin-top: 0.7rem;
        }
      }
    }
  }
`;

export default ImageSection;
