/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const WRAPPER_SIZES = {
  small: {
    height: "8px",
    borderRadius: "4px",
  },
  medium: {
    height: "12px",
    borderRadius: "4px",
  },
  large: {
    height: "24px",
    borderRadius: "8px",
    padding: "4px",
  },
};

const INDICATOR_SIZES = {
  small: {
    height: "8px",
  },
  medium: {
    height: "12px",
  },
  large: {
    height: "16px",
  },
};

const BarWrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  /* trim off corners when progress bar is near full */
  overflow: hidden;
`;

const BaseProgressIndicator = styled.div`
  background: ${COLORS.primary};

  width: ${(props) => `${props.value}%`};
  height: 12px;
`;

/**
 * This allows the width calculation mindful of padding to only apply for the large size ProgressBar
 */
const LargeProgressIndicator = styled(BaseProgressIndicator)`
  /* width: ${(props) =>
    `${
      (props.value * 370) / 100 - 8 < 0
        ? props.value
        : (props.value * 370) / 100 - 8
    }px`}; */
`;

const ProgressBar = ({ value, size = "medium" }) => {
  const wrapperSizeStyles = WRAPPER_SIZES[size];
  const indicatorSizeStyles = INDICATOR_SIZES[size];

  let StyledIndicator = BaseProgressIndicator;
  if (size === "large") {
    StyledIndicator = LargeProgressIndicator;
  }

  return (
    <BarWrapper
      style={{ ...wrapperSizeStyles }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <StyledIndicator style={{ ...indicatorSizeStyles }} value={value} />
    </BarWrapper>
  );
};

export default ProgressBar;
