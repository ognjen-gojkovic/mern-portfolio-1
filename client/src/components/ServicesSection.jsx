import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title="Services" span="services" />
        <div className="services">
          <ServiceCard
            title="Web Design"
            image={design}
            paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        In, nam iure ducimus reiciendis sapiente maiores soluta dolorem laborum eveniet sed?"
          />
          <div className="mid-card">
            <ServiceCard
              title="Artificial Intelligence"
              image={intelligence}
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        In, nam iure ducimus reiciendis sapiente maiores soluta dolorem laborum eveniet sed?"
            />
          </div>

          <ServiceCard
            title="Game Development"
            image={gamedev}
            paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        In, nam iure ducimus reiciendis sapiente maiores soluta dolorem laborum eveniet sed?"
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;

    .mid-card {
      margin: 0 1rem;
    }
  }
`;

export default ServicesSection;
