import React, { Dispatch, useState, useEffect } from "react";
import axios from "axios";
import { StyledHeading, StyledWrapper } from "../../styles/styledElements";
import Project from "./Project";
import { IProject } from "../../App";
import { ProjectContainer } from "./styled";
import { Message } from "../../styles/styledElements";

export interface IProps {
  setSelectedProject: Dispatch<IProject>;
}

const Step1: React.FC<IProps> = ({ setSelectedProject }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://fullstack.linus-capital.com/projects"
        );
        setProjects(response.data.projects);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

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
        {isError ? (
          <Message error={true}>Sorry, could not load the projects.</Message>
        ) : null}
        {isLoading ? <Message error={false}>Loading...</Message> : null}
      </ProjectContainer>
    </StyledWrapper>
  );
};

export default Step1;
