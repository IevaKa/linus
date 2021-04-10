import React, { Dispatch } from "react";
import styled from "styled-components";
import Project from "./Project";
import { IProject } from "../App";

const CenteredDiv = styled.div`
  max-width: 515px;
  margin: 0 auto;
  margin-top: 50px;
  h2:nth-child(2) {
    margin-bottom: 35px;
  }
`;

const StyledHeading = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 15px;
  text-align: center;
`;

interface IProps {
  projects: IProject[];
  setSelectedProject: Dispatch<IProject>;
}

const Step1: React.FC<IProps> = ({ projects, setSelectedProject }) => {
  return (
    <CenteredDiv>
      <StyledHeading>Step 1</StyledHeading>
      <StyledHeading>Select the project you want to invest in</StyledHeading>
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            project={project}
            setSelectedProject={setSelectedProject}
          />
        );
      })}
    </CenteredDiv>
  );
};

export default Step1;
