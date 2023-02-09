/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Status = styled.strong`
  margin-right: 64px;
`;

const BarWrapper = styled.div`
  display: inline-block;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  width: 370px;
  height: 24px;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <>
      <Status>{value}</Status>
      <BarWrapper></BarWrapper>
    </>
  );
};

export default ProgressBar;
