import React, { Dispatch } from "react";
import { StyledHeading, StyledWrapper } from "../../styles/styledElements";
import Project from "./Project";
import { IProject } from "../../App";
import { ProjectContainer } from "./styled";

export interface IProps {
  projects: IProject[];
  setSelectedProject: Dispatch<IProject>;
}

const Step1: React.FC<IProps> = ({ projects, setSelectedProject }) => {
  return (
    <StyledWrapper>
      <StyledHeading>Step 1</StyledHeading>
      <StyledHeading>Select the project you want to invest in</StyledHeading>
      <ProjectContainer>
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              project={project}
              setSelectedProject={setSelectedProject}
            />
          );
        })}
      </ProjectContainer>
    </StyledWrapper>
  );
};

export default Step1;