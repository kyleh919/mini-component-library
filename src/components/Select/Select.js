import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: fit-content;

  &:hover {
    color: ${COLORS.black};
  }

  & > * {
    padding: 12px 16px;
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
`;

const ValueDisplay = styled.div`
  /* background-color: blue; */
  display: inline-block;
  margin-right: 24px;
`;

const PresentationalSelect = styled.div`
  /* background-color: red; */
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        <ValueDisplay>{displayedValue}</ValueDisplay>
        <Icon id="chevron-down" style={{ display: "inline-block" }} />
      </PresentationalSelect>
    </Wrapper>
  );
};

export default Select;
