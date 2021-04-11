import styled from "styled-components";
import { VERY_LIGHT_GREY, DARK_GREY } from "../../styles/colors";

export const StyledTableCell = styled.td`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.5px;
  padding-bottom: 5px;

  &.pale {
    color: ${VERY_LIGHT_GREY};
    opacity: 0.5;
  }

  &.padding-right {
    padding-right: 20px;
  }
`;

export const StyledCheckbox = styled.div`
  margin: 30px 0 20px 0;
  color: ${DARK_GREY};

  span {
    font-size: 15px;
  }
  input {
    margin-right: 15px;
    transform: scale(1.5);
  }
`;
