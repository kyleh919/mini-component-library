import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const StyledInput = styled.input`
  color: ${COLORS.gray700};
  font-size: ${14 / 16}rem;
  font-weight: 700;

  border: none;
  border-bottom: 2px solid black;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledInput type="text" placeholder={placeholder} />
    </>
  );
};

export default IconInput;
