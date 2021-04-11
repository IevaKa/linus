import styled from "styled-components";
import { LIGHT_GREY } from "../../styles/colors";

export const ProjectContainer = styled.div`
  margin-top: 35px;
`;

export const ProjectCard = styled.div`
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

export const ProjectName = styled.h4`
  font-size: 15px;
  font-weight: 700;
  line-height: 23px;
  margin-bottom: 5px;
`;

export const ProjectLocation = styled.h5`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;
