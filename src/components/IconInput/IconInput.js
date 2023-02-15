import { colors } from "@storybook/node-logger";
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.label`
  color: ${COLORS.gray700};

  display: block;
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--height);
`;

const StyledInput = styled.input`
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  line-height: var(--line-height);

  border: none;
  border-bottom: 2px solid black;

  width: var(--width);
  height: var(--height);
  padding-left: var(--height);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const SIZES = {
  small: {
    iconStrokeWidth: 1,
    iconSize: 16,
    fontSize: `${14 / 16}rem`,
    lineHeight: `${16 / 16}rem`,
    inputPadding: 24 + "px",
    height: `${24 / 16}rem`,
  },
  large: {
    iconStrokeWidth: 2,
    iconSize: 24,
    fontSize: `${18 / 16}rem`,
    lineHeight: `${21 / 16}rem`,
    inputPadding: 32 + "px",
    height: `${36 / 16}rem`,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--height": styles.iconSize + "px" }}>
        <Icon
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.iconStrokeWidth}
        />
      </IconWrapper>
      <StyledInput
        type="text"
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--height": styles.height,
          "--line-height": styles.lineHeight,
          "--font-size": styles.fontSize,
          "--padding-left": styles.inputPadding,
        }}
      />
    </Wrapper>
  );
};

export default IconInput;
