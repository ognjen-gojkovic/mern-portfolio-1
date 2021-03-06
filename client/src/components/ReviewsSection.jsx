import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ReviewItem from "./ReviewItem";
import Title from "./Title";

const ReviewsSection = () => {
  return (
    <ReviewSectionStyled>
      <Title title="Reviews" span="Reviews" />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quam incidunt explicabo libero quis. Cupiditate." />
          <ReviewItem text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quam incidunt explicabo libero quis. Cupiditate." />
        </div>
      </InnerLayout>
    </ReviewSectionStyled>
  );
};

const ReviewSectionStyled = styled.div`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    width: 100%;
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ReviewsSection;
