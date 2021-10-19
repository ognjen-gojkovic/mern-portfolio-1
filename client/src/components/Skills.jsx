import React from "react";
import styled from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import ProgressBar from "./ProgressBar";
import Title from "./Title";

const Skills = () => {
  return (
    <SkillsStyled>
      <Title title="My Skills" span="My Skills" />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title="HTML5" width="70%" text="70%" />
          <ProgressBar title="CSS3" width="80%" text="80%" />
          <ProgressBar title="JAVASCRIPT" width="80%" text="80%" />
          <ProgressBar title="React JS" width="80%" text="80%" />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
};

const SkillsStyled = styled.section``;

export default Skills;
