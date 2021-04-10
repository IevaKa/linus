import React, { Dispatch } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { LIGHT_GREY } from "../styles/colors";
import { IProject } from "../App";

const ProjectCard = styled.div`
  padding: 10px 20px;
  background-color: ${LIGHT_GREY};
  margin-bottom: 16px;
  position: relative;
  top: 0;
  transition: top ease 0.2s;

  &:hover {
    top: -2px;
    cursor: pointer;
  }
`;

const ProjectName = styled.h4`
  font-size: 15px;
  font-weight: 700;
  line-height: 23px;
  margin-bottom: 5px;
`;

const ProjectLocation = styled.h5`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

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
