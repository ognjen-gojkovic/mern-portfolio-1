import React from "react";
import styled from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import SmallTitle from "./SmallTitle";
import Title from "./Title";
import BriefcaseIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "./ResumeItem";

const Resume = () => {
  const briefcase = <BriefcaseIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title="Resume" span="Resume" />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title="Working Experince" />
        </div>
        <div className="resume-content">
          <ResumeItem
            year="2015 - 2020"
            title="Computer Science"
            subTitle="Self Tought"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit reprehenderit quisquam harum quos natus."
          />
          <ResumeItem
            year="2015 - 2020"
            title="Computer Science"
            subTitle="Self Tought"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit reprehenderit quisquam harum quos natus."
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title="Working Experince" />
        </div>
        <div className="resume-content">
          <ResumeItem
            year="2015 - 2020"
            title="Computer Science"
            subTitle="Self Tought"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit reprehenderit quisquam harum quos natus."
          />
          <ResumeItem
            year="2015 - 2020"
            title="Computer Science"
            subTitle="Self Tought"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit reprehenderit quisquam harum quos natus."
          />
          <ResumeItem
            year="2015 - 2020"
            title="Computer Science"
            subTitle="Self Tought"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit reprehenderit quisquam harum quos natus."
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
};

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;
