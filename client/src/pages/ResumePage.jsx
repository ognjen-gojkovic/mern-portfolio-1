import React from "react";
import styled from "styled-components";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Title from "../components/Title";
import { InnerLayout, MainLayout } from "../styles/Layouts";

const ResumePage = () => {
  return (
    <MainLayout>
      <ResumePageStyled>
        <Skills />
        <Resume />
      </ResumePageStyled>
    </MainLayout>
  );
};

const ResumePageStyled = styled.div``;

export default ResumePage;
