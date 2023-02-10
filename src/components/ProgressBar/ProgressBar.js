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

const Status = styled.strong`
  margin-right: 64px;
`;

const BarWrapper = styled.div`
  display: inline-block;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  width: 370px;
`;

const ProgressIndicator = styled.div`
  background: ${COLORS.primary};

  width: ${(props) => `${(props.value * 370) / 100}px`};
  height: 12px;
`;

const ProgressBar = ({ value, size = "medium" }) => {
  const wrapperSizeStyles = WRAPPER_SIZES[size];
  const indicatorSizeStyles = INDICATOR_SIZES[size];

  return (
    <>
      <Status>{value}</Status>
      <BarWrapper style={{ ...wrapperSizeStyles }}>
        <ProgressIndicator
          style={{ ...indicatorSizeStyles }}
          value={value}
        ></ProgressIndicator>
      </BarWrapper>
    </>
  );
};

export default ProgressBar;
