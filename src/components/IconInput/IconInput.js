import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2px;
  color: ${COLORS.gray700};
`;

const StyledInput = styled.input`
  color: ${COLORS.gray700};
  font-size: ${14 / 16}rem;
  font-weight: 700;

  border: none;
  border-bottom: 2px solid black;

  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;

    padding-left: 24px;
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={16} strokeWidth={size === "small" ? 1 : 2} />
      </IconWrapper>
      <StyledInput
        type="text"
        placeholder={placeholder}
        style={{ "--width": width + "px" }}
      />
    </Wrapper>
  );
};

export default IconInput;
