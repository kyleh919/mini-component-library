/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 8,
    padding: 0,
  },
  medium: {
    height: 12,
    padding: 0,
  },
  large: {
    height: 16,
    padding: 4,
  },
};

const BarWrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  padding: var(--padding);

  /* trim off corners when progress bar is near full */
  overflow: hidden;
`;

const Indicator = styled.div`
  background: ${COLORS.primary};

  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;

const ProgressBar = ({ value, size = "medium" }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}.`);
  }

  return (
    <BarWrapper
      style={{
        "--padding": styles.padding + "px",
      }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Indicator
        style={{
          "--width": value + "%",
          "--height": styles.height + "px",
        }}
        value={value}
      />
    </BarWrapper>
  );
};

export default ProgressBar;
