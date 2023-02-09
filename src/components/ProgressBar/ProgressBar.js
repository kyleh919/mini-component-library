/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
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

  width: 100px;
  height: 12px;
`;

const ProgressBar = ({ value, size = "medium" }) => {
  const sizeStyles = SIZES[size];

  return (
    <>
      <Status>{value}</Status>
      <BarWrapper style={{ ...sizeStyles }}>
        <ProgressIndicator></ProgressIndicator>
      </BarWrapper>
    </>
  );
};

export default ProgressBar;
