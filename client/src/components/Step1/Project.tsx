import React, { Dispatch } from "react";
import { useHistory } from "react-router-dom";
import { IProject } from "../../App";
import { ProjectCard, ProjectName, ProjectLocation } from "./styled";

interface IProps {
  project: IProject;
  setSelectedProject: Dispatch<IProject>;
}

const Project: React.FC<IProps> = ({ project, setSelectedProject }) => {
  let history = useHistory();
  const { name, location } = project;

  const onClick = () => {
    setSelectedProject(project);
    history.push("/step2");
  };
  return (
    <ProjectCard onClick={onClick}>
      <ProjectName>{name}</ProjectName>
      <ProjectLocation>{location}</ProjectLocation>
    </ProjectCard>
  );
};

export default Project;
